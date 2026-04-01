import OpenAI from 'openai';
import * as fs from 'fs';
import * as path from 'path';

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// ─── Types ────────────────────────────────────────────────────────────────────

interface PlaywrightResult {
  suites: Suite[];
  stats: { expected: number; unexpected: number; duration: number };
}

interface Suite {
  title: string;
  file: string;
  specs: Spec[];
  suites?: Suite[];
}

interface Spec {
  title: string;
  ok: boolean;
  tests: TestResult[];
}

interface TestResult {
  status: string;
  duration: number;
  errors?: { message: string }[];
}

interface TestAnalysis {
  failedTests: { title: string; file: string; error: string; duration: number }[];
  slowTests: { title: string; file: string; duration: number }[];
}

interface ImprovementResponse {
  summary: string;
  files: { path: string; content: string; changes: string[] }[];
  newFiles: { path: string; content: string; rationale: string }[];
}

// ─── Parse test results ───────────────────────────────────────────────────────

function parseResults(resultsPath: string): TestAnalysis {
  const analysis: TestAnalysis = { failedTests: [], slowTests: [] };

  if (!fs.existsSync(resultsPath)) {
    console.log('No test results found — using empty analysis (Claude will suggest new tests)');
    return analysis;
  }

  const raw = fs.readFileSync(resultsPath, 'utf-8');

  // The JSON reporter output is wrapped in extra text when using tee — extract it
  const jsonMatch = raw.match(/\{[\s\S]*\}/);
  if (!jsonMatch) {
    console.log('Could not parse results JSON — using empty analysis');
    return analysis;
  }

  const results: PlaywrightResult = JSON.parse(jsonMatch[0]);

  function walkSuites(suites: Suite[], file: string) {
    for (const suite of suites) {
      const filePath = suite.file || file;
      for (const spec of suite.specs || []) {
        for (const test of spec.tests || []) {
          if (test.status !== 'passed' && test.status !== 'expected') {
            analysis.failedTests.push({
              title: spec.title,
              file: filePath,
              error: test.errors?.[0]?.message?.slice(0, 300) ?? 'Unknown error',
              duration: test.duration,
            });
          }
          if (test.duration > 5000) {
            analysis.slowTests.push({
              title: spec.title,
              file: filePath,
              duration: test.duration,
            });
          }
        }
      }
      if (suite.suites) walkSuites(suite.suites, filePath);
    }
  }

  walkSuites(results.suites ?? [], '');
  return analysis;
}

// ─── Read test files ──────────────────────────────────────────────────────────

function readTestFiles(): { path: string; content: string }[] {
  const testsDir = path.join(process.cwd(), 'tests');
  return fs
    .readdirSync(testsDir)
    .filter((f) => f.endsWith('.spec.ts'))
    .map((f) => ({
      path: `tests/${f}`,
      content: fs.readFileSync(path.join(testsDir, f), 'utf-8'),
    }));
}

// ─── Build prompt ─────────────────────────────────────────────────────────────

function buildPrompt(analysis: TestAnalysis, testFiles: { path: string; content: string }[]): string {
  const failedSection =
    analysis.failedTests.length > 0
      ? analysis.failedTests
          .map((t) => `- "${t.title}" in ${t.file} (${t.duration}ms)\n  Error: ${t.error}`)
          .join('\n')
      : '- None (all tests passed)';

  const slowSection =
    analysis.slowTests.length > 0
      ? analysis.slowTests.map((t) => `- "${t.title}" in ${t.file} — ${t.duration}ms`).join('\n')
      : '- None';

  const filesSection = testFiles
    .map((f) => `### ${f.path}\n\`\`\`typescript\n${f.content}\n\`\`\``)
    .join('\n\n');

  return `You are a senior QA automation engineer reviewing a Playwright test suite.

## Today's Test Results

**Failed tests:**
${failedSection}

**Slow tests (>5s):**
${slowSection}

## Current Test Files

${filesSection}

## Your Task

Analyze these tests and generate improvements. Focus on:
1. Replace \`waitForTimeout\` with proper \`waitForSelector\` / \`waitForLoadState\` / \`waitForResponse\`
2. Add \`test.describe.configure({ retries: 2 })\` for tests that are network-dependent or timing-sensitive
3. Strengthen weak assertions (e.g., \`toContain('/')\` → actually verify the right page loaded)
4. Add \`beforeEach\` isolation where tests share implicit state
5. Add 1–2 new test cases for obvious gaps mentioned in comments (e.g., "// GAP:")

**Rules:**
- Preserve all existing passing test logic — only improve the implementation
- Maximum 2 new test cases per file
- Keep the same target URL (playwright.dev)
- Add a comment at the top of each modified file: \`// Improved by GPT-4o on ${new Date().toISOString().split('T')[0]}\`

**Response format — return ONLY valid JSON, no markdown fences, no explanation outside the object:**

{
  "summary": "2-3 sentences describing what you improved and why it makes the suite more reliable",
  "files": [
    {
      "path": "tests/login.spec.ts",
      "content": "// full improved file content as a string",
      "changes": ["replaced waitForTimeout with waitForSelector on line 12", "added retry config"]
    }
  ],
  "newFiles": [
    {
      "path": "tests/new-feature.spec.ts",
      "content": "// full new test file content",
      "rationale": "No tests existed for X scenario"
    }
  ]
}

If a file needs no changes, omit it from "files". If no new files are needed, use an empty array for "newFiles".`;
}

// ─── Call OpenAI ─────────────────────────────────────────────────────────────

async function callClaude(prompt: string): Promise<ImprovementResponse> {
  console.log('Sending test suite to OpenAI for analysis...');

  const response = await client.chat.completions.create({
    model: 'gpt-4o',
    max_tokens: 8096,
    temperature: 0.2,
    response_format: { type: 'json_object' },
    messages: [
      {
        role: 'system',
        content:
          'You are a senior QA automation engineer. You analyze Playwright test suites and generate improved versions. You always respond with valid JSON only — no markdown, no explanation outside the JSON object.',
      },
      { role: 'user', content: prompt },
    ],
  });

  const rawContent = response.choices[0].message.content ?? '';

  return JSON.parse(rawContent) as ImprovementResponse;
}

// ─── Apply improvements ───────────────────────────────────────────────────────

function applyImprovements(response: ImprovementResponse): string[] {
  const changedFiles: string[] = [];

  for (const file of (response.files ?? [])) {
    if (!file.path || !file.content) continue;
    fs.writeFileSync(path.join(process.cwd(), file.path), file.content, 'utf-8');
    console.log(`  Updated: ${file.path}`);
    console.log(`  Changes: ${(file.changes ?? []).join(', ')}`);
    changedFiles.push(file.path);
  }

  for (const file of (response.newFiles ?? [])) {
    if (!file.path || !file.content) continue;
    const fullPath = path.join(process.cwd(), file.path);
    fs.mkdirSync(path.dirname(fullPath), { recursive: true });
    fs.writeFileSync(fullPath, file.content, 'utf-8');
    console.log(`  Created: ${file.path} — ${file.rationale ?? ''}`);
    changedFiles.push(file.path);
  }

  return changedFiles;
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  console.log('\n=== AI Test Improvement Pipeline ===\n');

  const resultsPath = path.join(process.cwd(), 'test-results', 'results.json');
  const analysis = parseResults(resultsPath);

  console.log(
    `Test analysis: ${analysis.failedTests.length} failed, ${analysis.slowTests.length} slow\n`
  );

  const testFiles = readTestFiles();
  console.log(`Read ${testFiles.length} test files\n`);

  const prompt = buildPrompt(analysis, testFiles);
  const improvements = await callClaude(prompt);

  console.log('\nOpenAI summary:');
  console.log(improvements.summary);
  console.log();

  const changedFiles = applyImprovements(improvements);

  if (changedFiles.length === 0) {
    console.log('No improvements needed — test suite is already optimal.');
    return;
  }

  // Write manifest for create-pr.sh
  fs.writeFileSync(
    path.join(process.cwd(), '.improvement-manifest.json'),
    JSON.stringify({ files: changedFiles }, null, 2)
  );

  // Write PR body
  const prBody = `## AI-Generated Test Improvements

${improvements.summary}

### Changes Made

${[...(improvements.files ?? []), ...(improvements.newFiles ?? [])]
  .map((f) => {
    if ('changes' in f) {
      return `**\`${f.path}\`**\n${(f.changes ?? []).map((c) => `- ${c}`).join('\n')}`;
    } else {
      return `**\`${f.path}\`** *(new file)*\n- ${f.rationale}`;
    }
  })
  .join('\n\n')}

---
*Generated by GPT-4o on ${new Date().toISOString().split('T')[0]}*
*The QA engineer's role: review this PR, not write it.*`;

  fs.writeFileSync(path.join(process.cwd(), 'test-results', 'improvement-summary.md'), prBody);

  console.log(`\nManifest written. ${changedFiles.length} file(s) ready for PR.`);
}

main().catch((err) => {
  console.error('Error:', err);
  process.exit(1);
});

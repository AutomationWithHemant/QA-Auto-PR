#!/usr/bin/env bash
set -e

MANIFEST=".improvement-manifest.json"
BRANCH="ai-improvements-$(date +%Y%m%d-%H%M%S)"
PR_BODY_FILE="test-results/improvement-summary.md"

# ─── Check if there are improvements to commit ───────────────────────────────
if [ ! -f "$MANIFEST" ]; then
  echo "No improvement manifest found — nothing to commit."
  exit 0
fi

FILE_COUNT=$(node -e "const m = require('./$MANIFEST'); console.log(m.files.length);")
if [ "$FILE_COUNT" -eq 0 ]; then
  echo "Manifest is empty — no improvements generated."
  exit 0
fi

echo "Creating PR with $FILE_COUNT improved file(s)..."

# ─── Configure git identity for the bot ──────────────────────────────────────
git config user.email "ai-bot@noreply.github.com"
git config user.name "AI Bot"

# ─── Create branch and stage only the improved test files ────────────────────
git checkout -b "$BRANCH"

node -e "
  const manifest = require('./$MANIFEST');
  const { execSync } = require('child_process');
  manifest.files.forEach(f => {
    execSync('git add ' + f, { stdio: 'inherit' });
    console.log('Staged: ' + f);
  });
"

# ─── Commit ───────────────────────────────────────────────────────────────────
git commit -m "test: AI-generated improvements — $(date +%Y-%m-%d)"

# ─── Push ─────────────────────────────────────────────────────────────────────
git push origin "$BRANCH"

# ─── Create PR ────────────────────────────────────────────────────────────────
PR_BODY=""
if [ -f "$PR_BODY_FILE" ]; then
  PR_BODY=$(cat "$PR_BODY_FILE")
else
  PR_BODY="AI-generated test improvements. See commit diff for details."
fi

gh pr create \
  --title "AI Test Improvements — $(date +%Y-%m-%d)" \
  --body "$PR_BODY" \
  --base main \
  --head "$BRANCH"

echo ""
echo "PR created successfully!"

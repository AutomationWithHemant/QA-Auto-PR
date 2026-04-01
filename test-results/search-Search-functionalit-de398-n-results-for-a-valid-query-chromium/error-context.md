# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: search.spec.ts >> Search functionality >> should return results for a valid query
- Location: tests/search.spec.ts:24:7

# Error details

```
Error: expect(received).toBeGreaterThan(expected)

Expected: > 0
Received:   0
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - region "Skip to main content":
    - link "Skip to main content" [ref=e3] [cursor=pointer]:
      - /url: "#__docusaurus_skipToContent_fallback"
  - navigation "Main" [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e6]:
        - link "Playwright logo Playwright" [ref=e7] [cursor=pointer]:
          - /url: /
          - img "Playwright logo" [ref=e9]
          - generic [ref=e10]: Playwright
        - link "Docs" [ref=e11] [cursor=pointer]:
          - /url: /docs/intro
        - link "API" [ref=e12] [cursor=pointer]:
          - /url: /docs/api/class-playwright
        - button "Node.js" [ref=e14] [cursor=pointer]
        - link "Community" [ref=e15] [cursor=pointer]:
          - /url: /community/welcome
      - generic [ref=e16]:
        - link "GitHub repository" [ref=e17] [cursor=pointer]:
          - /url: https://github.com/microsoft/playwright
        - link "Discord server" [ref=e18] [cursor=pointer]:
          - /url: https://aka.ms/playwright/discord
        - button "Switch between dark and light mode (currently system mode)" [ref=e20] [cursor=pointer]:
          - img [ref=e21]
        - button "Search (Ctrl+K)" [ref=e24] [cursor=pointer]:
          - generic [ref=e25]:
            - img [ref=e26]
            - generic [ref=e28]: Search
          - generic [ref=e29]:
            - img [ref=e31]
            - generic [ref=e33]: K
  - generic [ref=e34]:
    - banner [ref=e35]:
      - generic [ref=e36]:
        - heading "Playwright enables reliable end-to-end testing for modern web apps." [level=1] [ref=e37]
        - generic [ref=e38]:
          - link "Get started" [ref=e39] [cursor=pointer]:
            - /url: /docs/intro
          - generic [ref=e40]:
            - link "Star microsoft/playwright on GitHub" [ref=e41] [cursor=pointer]:
              - /url: https://github.com/microsoft/playwright
              - text: Star
            - link "85k+ stargazers on GitHub" [ref=e43] [cursor=pointer]:
              - /url: https://github.com/microsoft/playwright/stargazers
              - text: 85k+
    - main [ref=e44]:
      - img "Browsers (Chromium, Firefox, WebKit)" [ref=e46]
      - generic [ref=e49]:
        - generic [ref=e50]:
          - heading "Any browser • Any platform • One API" [level=3] [ref=e51]
          - generic [ref=e52]:
            - paragraph [ref=e53]: Cross-browser. Playwright supports all modern rendering engines including Chromium, WebKit, and Firefox.
            - paragraph [ref=e54]: Cross-platform. Test on Windows, Linux, and macOS, locally or on CI, headless or headed.
            - paragraph [ref=e55]:
              - text: Cross-language. Use the Playwright API in
              - link "TypeScript" [ref=e56] [cursor=pointer]:
                - /url: https://playwright.dev/docs/intro
              - text: ","
              - link "JavaScript" [ref=e57] [cursor=pointer]:
                - /url: https://playwright.dev/docs/intro
              - text: ","
              - link "Python" [ref=e58] [cursor=pointer]:
                - /url: https://playwright.dev/python/docs/intro
              - text: ","
              - link ".NET" [ref=e59] [cursor=pointer]:
                - /url: https://playwright.dev/dotnet/docs/intro
              - text: ","
              - link "Java" [ref=e60] [cursor=pointer]:
                - /url: https://playwright.dev/java/docs/intro
              - text: .
            - paragraph [ref=e61]: Test Mobile Web. Native mobile emulation of Google Chrome for Android and Mobile Safari. The same rendering engine works on your Desktop and in the Cloud.
        - generic [ref=e62]:
          - heading [level=3]
        - generic [ref=e63]:
          - heading [level=3]
        - generic [ref=e64]:
          - heading "Resilient • No flaky tests" [level=3] [ref=e65]
          - generic [ref=e66]:
            - paragraph [ref=e67]: Auto-wait. Playwright waits for elements to be actionable prior to performing actions. It also has a rich set of introspection events. The combination of the two eliminates the need for artificial timeouts - the primary cause of flaky tests.
            - paragraph [ref=e68]: Web-first assertions. Playwright assertions are created specifically for the dynamic web. Checks are automatically retried until the necessary conditions are met.
            - paragraph [ref=e69]: Tracing. Configure test retry strategy, capture execution trace, videos, screenshots to eliminate flakes.
        - generic [ref=e70]:
          - heading "No trade-offs • No limits" [level=3] [ref=e71]
          - generic [ref=e72]:
            - paragraph [ref=e73]: Browsers run web content belonging to different origins in different processes. Playwright is aligned with the modern browsers architecture and runs tests out-of-process. This makes Playwright free of the typical in-process test runner limitations.
            - paragraph [ref=e74]: Multiple everything. Test scenarios that span multiple tabs, multiple origins and multiple users. Create scenarios with different contexts for different users and run them against your server, all in one test.
            - paragraph [ref=e75]: Trusted events. Hover elements, interact with dynamic controls, produce trusted events. Playwright uses real browser input pipeline indistinguishable from the real user.
            - paragraph [ref=e76]: Test frames, pierce Shadow DOM. Playwright selectors pierce shadow DOM and allow entering frames seamlessly.
        - generic [ref=e77]:
          - heading [level=3]
        - generic [ref=e78]:
          - heading [level=3]
        - generic [ref=e79]:
          - heading "Full isolation • Fast execution" [level=3] [ref=e80]
          - generic [ref=e81]:
            - paragraph [ref=e82]: Browser contexts. Playwright creates a browser context for each test. Browser context is equivalent to a brand new browser profile. This delivers full test isolation with zero overhead. Creating a new browser context only takes a handful of milliseconds.
            - paragraph [ref=e83]: Log in once. Save the authentication state of the context and reuse it in all the tests. This bypasses repetitive log-in operations in each test, yet delivers full isolation of independent tests.
        - generic [ref=e84]:
          - heading "Powerful Tooling" [level=3] [ref=e85]
          - generic [ref=e86]:
            - paragraph [ref=e87]:
              - link "Codegen." [ref=e89] [cursor=pointer]:
                - /url: docs/codegen
              - text: Generate tests by recording your actions. Save them into any language.
            - paragraph [ref=e90]:
              - link "Playwright inspector." [ref=e92] [cursor=pointer]:
                - /url: docs/debug#playwright-inspector
              - text: Inspect page, generate selectors, step through the test execution, see click points, explore execution logs.
            - paragraph [ref=e93]:
              - link "Trace Viewer." [ref=e95] [cursor=pointer]:
                - /url: docs/trace-viewer-intro
              - text: Capture all the information to investigate the test failure. Playwright trace contains test execution screencast, live DOM snapshots, action explorer, test source, and many more.
      - generic [ref=e99]:
        - heading "Chosen by companies and open source projects" [level=2] [ref=e100]
        - list [ref=e101]:
          - listitem [ref=e102]:
            - link "VS Code" [ref=e103] [cursor=pointer]:
              - /url: https://code.visualstudio.com
              - img "VS Code" [ref=e104]
          - listitem [ref=e105]:
            - link "Bing" [ref=e106] [cursor=pointer]:
              - /url: https://bing.com
              - img "Bing" [ref=e107]
          - listitem [ref=e108]:
            - link "Outlook" [ref=e109] [cursor=pointer]:
              - /url: https://outlook.com
              - img "Outlook" [ref=e110]
          - listitem [ref=e111]:
            - link "Disney+ Hotstar" [ref=e112] [cursor=pointer]:
              - /url: https://www.hotstar.com/
              - img "Disney+ Hotstar" [ref=e113]
          - listitem [ref=e114]:
            - link "Material UI" [ref=e115] [cursor=pointer]:
              - /url: https://github.com/mui-org/material-ui
              - img "Material UI" [ref=e116]
          - listitem [ref=e117]:
            - link "ING" [ref=e118] [cursor=pointer]:
              - /url: https://github.com/ing-bank/lion
              - img "ING" [ref=e119]
          - listitem [ref=e120]:
            - link "Adobe" [ref=e121] [cursor=pointer]:
              - /url: https://github.com/adobe/spectrum-web-components
              - img "Adobe" [ref=e122]
          - listitem [ref=e123]:
            - link "React Navigation" [ref=e124] [cursor=pointer]:
              - /url: https://github.com/react-navigation/react-navigation
              - img "React Navigation" [ref=e125]
          - listitem [ref=e126]:
            - link "Accessibility Insights" [ref=e127] [cursor=pointer]:
              - /url: https://accessibilityinsights.io/
              - img "Accessibility Insights" [ref=e128]
  - contentinfo [ref=e129]:
    - generic [ref=e130]:
      - generic [ref=e131]:
        - generic [ref=e132]:
          - generic [ref=e133]: Learn
          - list [ref=e134]:
            - listitem [ref=e135]:
              - link "Getting started" [ref=e136] [cursor=pointer]:
                - /url: /docs/intro
            - listitem [ref=e137]:
              - link "Playwright Training" [ref=e138] [cursor=pointer]:
                - /url: https://learn.microsoft.com/en-us/training/modules/build-with-playwright/
                - text: Playwright Training
                - img [ref=e139]
            - listitem [ref=e141]:
              - link "Learn Videos" [ref=e142] [cursor=pointer]:
                - /url: /community/learn-videos
            - listitem [ref=e143]:
              - link "Feature Videos" [ref=e144] [cursor=pointer]:
                - /url: /community/feature-videos
        - generic [ref=e145]:
          - generic [ref=e146]: Community
          - list [ref=e147]:
            - listitem [ref=e148]:
              - link "Stack Overflow" [ref=e149] [cursor=pointer]:
                - /url: https://stackoverflow.com/questions/tagged/playwright
                - text: Stack Overflow
                - img [ref=e150]
            - listitem [ref=e152]:
              - link "Discord" [ref=e153] [cursor=pointer]:
                - /url: https://aka.ms/playwright/discord
                - text: Discord
                - img [ref=e154]
            - listitem [ref=e156]:
              - link "Twitter" [ref=e157] [cursor=pointer]:
                - /url: https://twitter.com/playwrightweb
                - text: Twitter
                - img [ref=e158]
            - listitem [ref=e160]:
              - link "LinkedIn" [ref=e161] [cursor=pointer]:
                - /url: https://www.linkedin.com/company/playwrightweb
                - text: LinkedIn
                - img [ref=e162]
        - generic [ref=e164]:
          - generic [ref=e165]: More
          - list [ref=e166]:
            - listitem [ref=e167]:
              - link "GitHub" [ref=e168] [cursor=pointer]:
                - /url: https://github.com/microsoft/playwright
                - text: GitHub
                - img [ref=e169]
            - listitem [ref=e171]:
              - link "YouTube" [ref=e172] [cursor=pointer]:
                - /url: https://www.youtube.com/channel/UC46Zj8pDH5tDosqm1gd7WTg
                - text: YouTube
                - img [ref=e173]
            - listitem [ref=e175]:
              - link "Blog" [ref=e176] [cursor=pointer]:
                - /url: https://dev.to/playwright
                - text: Blog
                - img [ref=e177]
            - listitem [ref=e179]:
              - link "Ambassadors" [ref=e180] [cursor=pointer]:
                - /url: /community/ambassadors
            - listitem [ref=e181]:
              - link "Microsoft Privacy Statement" [ref=e182] [cursor=pointer]:
                - /url: https://go.microsoft.com/fwlink/?LinkId=521839
                - text: Microsoft Privacy Statement
                - img [ref=e183]
      - generic [ref=e186]: Copyright © 2026 Microsoft
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | // ---------------------------------------------------------------
  4  | // SEARCH TESTS
  5  | // Status: Passing — but missing edge cases and uses bad waits
  6  | // ---------------------------------------------------------------
  7  | 
  8  | test.describe('Search functionality', () => {
  9  |   test('should open search dialog', async ({ page }) => {
  10 |     await page.goto('/');
  11 | 
  12 |     await page.waitForTimeout(2000);
  13 | 
  14 |     // Keyboard shortcut to open search
  15 |     await page.keyboard.press('Control+K');
  16 | 
  17 |     await page.waitForTimeout(1000);
  18 | 
  19 |     // Missing: no test that the dialog actually opened
  20 |     const dialog = page.locator('[role="dialog"]');
  21 |     await expect(dialog).toBeVisible();
  22 |   });
  23 | 
  24 |   test('should return results for a valid query', async ({ page }) => {
  25 |     await page.goto('/');
  26 |     await page.keyboard.press('Control+K');
  27 | 
  28 |     await page.waitForTimeout(1000);
  29 | 
  30 |     await page.keyboard.type('locator');
  31 | 
  32 |     // Bad: sleep instead of waiting for results to render
  33 |     await page.waitForTimeout(2000);
  34 | 
  35 |     const results = page.locator('[cmdk-item]');
  36 | 
  37 |     // Weak: just checks count > 0, not that results are relevant
  38 |     const count = await results.count();
> 39 |     expect(count).toBeGreaterThan(0);
     |                   ^ Error: expect(received).toBeGreaterThan(expected)
  40 |   });
  41 | 
  42 |   // GAP: no test for empty/nonsense search query
  43 |   // GAP: no test for search with special characters
  44 |   // GAP: no test that pressing Escape closes the dialog
  45 | });
  46 | 
```
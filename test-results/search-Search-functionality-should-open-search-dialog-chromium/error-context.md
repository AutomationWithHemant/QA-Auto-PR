# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: search.spec.ts >> Search functionality >> should open search dialog
- Location: tests/search.spec.ts:9:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('[role="dialog"]')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('[role="dialog"]')

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - button "Search" [expanded] [ref=e2]:
    - generic [ref=e3]:
      - banner [ref=e4]:
        - generic [ref=e5]:
          - generic [ref=e6]:
            - img [ref=e7]
            - generic [ref=e9]: Search
          - searchbox "Search" [active] [ref=e10]
      - paragraph [ref=e13]: No recent searches
      - contentinfo [ref=e14]:
        - link "Search by Algolia" [ref=e16] [cursor=pointer]:
          - /url: https://www.algolia.com/ref/docsearch/?utm_source=playwright.dev&utm_medium=referral&utm_content=powered_by&utm_campaign=docsearch
          - generic [ref=e17]: Search by
          - img "Algolia" [ref=e18]
        - list [ref=e28]:
          - listitem [ref=e29]:
            - img "Enter key" [ref=e31]
            - generic [ref=e34]: to select
          - listitem [ref=e35]:
            - img "Arrow down" [ref=e37]
            - img "Arrow up" [ref=e41]
            - generic [ref=e44]: to navigate
          - listitem [ref=e45]:
            - img "Escape key" [ref=e47]
            - generic [ref=e50]: to close
  - generic [ref=e51]:
    - region "Skip to main content":
      - link "Skip to main content" [ref=e52] [cursor=pointer]:
        - /url: "#__docusaurus_skipToContent_fallback"
    - navigation "Main" [ref=e53]:
      - generic [ref=e54]:
        - generic [ref=e55]:
          - link "Playwright logo Playwright" [ref=e56] [cursor=pointer]:
            - /url: /
            - img "Playwright logo" [ref=e58]
            - generic [ref=e59]: Playwright
          - link "Docs" [ref=e60] [cursor=pointer]:
            - /url: /docs/intro
          - link "API" [ref=e61] [cursor=pointer]:
            - /url: /docs/api/class-playwright
          - button "Node.js" [ref=e63] [cursor=pointer]
          - link "Community" [ref=e64] [cursor=pointer]:
            - /url: /community/welcome
        - generic [ref=e65]:
          - link "GitHub repository" [ref=e66] [cursor=pointer]:
            - /url: https://github.com/microsoft/playwright
          - link "Discord server" [ref=e67] [cursor=pointer]:
            - /url: https://aka.ms/playwright/discord
          - button "Switch between dark and light mode (currently system mode)" [ref=e69] [cursor=pointer]:
            - img [ref=e70]
          - button "Search (Ctrl+K)" [ref=e73] [cursor=pointer]:
            - generic [ref=e74]:
              - img [ref=e75]
              - generic [ref=e77]: Search
            - generic [ref=e78]:
              - img [ref=e80]
              - generic [ref=e82]: K
    - generic [ref=e83]:
      - banner [ref=e84]:
        - generic [ref=e85]:
          - heading "Playwright enables reliable end-to-end testing for modern web apps." [level=1] [ref=e86]
          - generic [ref=e87]:
            - link "Get started" [ref=e88] [cursor=pointer]:
              - /url: /docs/intro
            - generic [ref=e89]:
              - link "Star microsoft/playwright on GitHub" [ref=e90] [cursor=pointer]:
                - /url: https://github.com/microsoft/playwright
                - text: Star
              - link "85k+ stargazers on GitHub" [ref=e92] [cursor=pointer]:
                - /url: https://github.com/microsoft/playwright/stargazers
                - text: 85k+
      - main [ref=e93]:
        - img "Browsers (Chromium, Firefox, WebKit)" [ref=e95]
        - generic [ref=e98]:
          - generic [ref=e99]:
            - heading "Any browser • Any platform • One API" [level=3] [ref=e100]
            - generic [ref=e101]:
              - paragraph [ref=e102]: Cross-browser. Playwright supports all modern rendering engines including Chromium, WebKit, and Firefox.
              - paragraph [ref=e103]: Cross-platform. Test on Windows, Linux, and macOS, locally or on CI, headless or headed.
              - paragraph [ref=e104]:
                - text: Cross-language. Use the Playwright API in
                - link "TypeScript" [ref=e105] [cursor=pointer]:
                  - /url: https://playwright.dev/docs/intro
                - text: ","
                - link "JavaScript" [ref=e106] [cursor=pointer]:
                  - /url: https://playwright.dev/docs/intro
                - text: ","
                - link "Python" [ref=e107] [cursor=pointer]:
                  - /url: https://playwright.dev/python/docs/intro
                - text: ","
                - link ".NET" [ref=e108] [cursor=pointer]:
                  - /url: https://playwright.dev/dotnet/docs/intro
                - text: ","
                - link "Java" [ref=e109] [cursor=pointer]:
                  - /url: https://playwright.dev/java/docs/intro
                - text: .
              - paragraph [ref=e110]: Test Mobile Web. Native mobile emulation of Google Chrome for Android and Mobile Safari. The same rendering engine works on your Desktop and in the Cloud.
          - generic [ref=e111]:
            - heading [level=3]
          - generic [ref=e112]:
            - heading [level=3]
          - generic [ref=e113]:
            - heading "Resilient • No flaky tests" [level=3] [ref=e114]
            - generic [ref=e115]:
              - paragraph [ref=e116]: Auto-wait. Playwright waits for elements to be actionable prior to performing actions. It also has a rich set of introspection events. The combination of the two eliminates the need for artificial timeouts - the primary cause of flaky tests.
              - paragraph [ref=e117]: Web-first assertions. Playwright assertions are created specifically for the dynamic web. Checks are automatically retried until the necessary conditions are met.
              - paragraph [ref=e118]: Tracing. Configure test retry strategy, capture execution trace, videos, screenshots to eliminate flakes.
          - generic [ref=e119]:
            - heading "No trade-offs • No limits" [level=3] [ref=e120]
            - generic [ref=e121]:
              - paragraph [ref=e122]: Browsers run web content belonging to different origins in different processes. Playwright is aligned with the modern browsers architecture and runs tests out-of-process. This makes Playwright free of the typical in-process test runner limitations.
              - paragraph [ref=e123]: Multiple everything. Test scenarios that span multiple tabs, multiple origins and multiple users. Create scenarios with different contexts for different users and run them against your server, all in one test.
              - paragraph [ref=e124]: Trusted events. Hover elements, interact with dynamic controls, produce trusted events. Playwright uses real browser input pipeline indistinguishable from the real user.
              - paragraph [ref=e125]: Test frames, pierce Shadow DOM. Playwright selectors pierce shadow DOM and allow entering frames seamlessly.
          - generic [ref=e126]:
            - heading [level=3]
          - generic [ref=e127]:
            - heading [level=3]
          - generic [ref=e128]:
            - heading "Full isolation • Fast execution" [level=3] [ref=e129]
            - generic [ref=e130]:
              - paragraph [ref=e131]: Browser contexts. Playwright creates a browser context for each test. Browser context is equivalent to a brand new browser profile. This delivers full test isolation with zero overhead. Creating a new browser context only takes a handful of milliseconds.
              - paragraph [ref=e132]: Log in once. Save the authentication state of the context and reuse it in all the tests. This bypasses repetitive log-in operations in each test, yet delivers full isolation of independent tests.
          - generic [ref=e133]:
            - heading "Powerful Tooling" [level=3] [ref=e134]
            - generic [ref=e135]:
              - paragraph [ref=e136]:
                - link "Codegen." [ref=e138] [cursor=pointer]:
                  - /url: docs/codegen
                - text: Generate tests by recording your actions. Save them into any language.
              - paragraph [ref=e139]:
                - link "Playwright inspector." [ref=e141] [cursor=pointer]:
                  - /url: docs/debug#playwright-inspector
                - text: Inspect page, generate selectors, step through the test execution, see click points, explore execution logs.
              - paragraph [ref=e142]:
                - link "Trace Viewer." [ref=e144] [cursor=pointer]:
                  - /url: docs/trace-viewer-intro
                - text: Capture all the information to investigate the test failure. Playwright trace contains test execution screencast, live DOM snapshots, action explorer, test source, and many more.
        - generic [ref=e148]:
          - heading "Chosen by companies and open source projects" [level=2] [ref=e149]
          - list [ref=e150]:
            - listitem [ref=e151]:
              - link "VS Code" [ref=e152] [cursor=pointer]:
                - /url: https://code.visualstudio.com
                - img "VS Code" [ref=e153]
            - listitem [ref=e154]:
              - link "Bing" [ref=e155] [cursor=pointer]:
                - /url: https://bing.com
                - img "Bing" [ref=e156]
            - listitem [ref=e157]:
              - link "Outlook" [ref=e158] [cursor=pointer]:
                - /url: https://outlook.com
                - img "Outlook" [ref=e159]
            - listitem [ref=e160]:
              - link "Disney+ Hotstar" [ref=e161] [cursor=pointer]:
                - /url: https://www.hotstar.com/
                - img "Disney+ Hotstar" [ref=e162]
            - listitem [ref=e163]:
              - link "Material UI" [ref=e164] [cursor=pointer]:
                - /url: https://github.com/mui-org/material-ui
                - img "Material UI" [ref=e165]
            - listitem [ref=e166]:
              - link "ING" [ref=e167] [cursor=pointer]:
                - /url: https://github.com/ing-bank/lion
                - img "ING" [ref=e168]
            - listitem [ref=e169]:
              - link "Adobe" [ref=e170] [cursor=pointer]:
                - /url: https://github.com/adobe/spectrum-web-components
                - img "Adobe" [ref=e171]
            - listitem [ref=e172]:
              - link "React Navigation" [ref=e173] [cursor=pointer]:
                - /url: https://github.com/react-navigation/react-navigation
                - img "React Navigation" [ref=e174]
            - listitem [ref=e175]:
              - link "Accessibility Insights" [ref=e176] [cursor=pointer]:
                - /url: https://accessibilityinsights.io/
                - img "Accessibility Insights" [ref=e177]
    - contentinfo [ref=e178]:
      - generic [ref=e179]:
        - generic [ref=e180]:
          - generic [ref=e181]:
            - generic [ref=e182]: Learn
            - list [ref=e183]:
              - listitem [ref=e184]:
                - link "Getting started" [ref=e185] [cursor=pointer]:
                  - /url: /docs/intro
              - listitem [ref=e186]:
                - link "Playwright Training" [ref=e187] [cursor=pointer]:
                  - /url: https://learn.microsoft.com/en-us/training/modules/build-with-playwright/
                  - text: Playwright Training
                  - img [ref=e188]
              - listitem [ref=e190]:
                - link "Learn Videos" [ref=e191] [cursor=pointer]:
                  - /url: /community/learn-videos
              - listitem [ref=e192]:
                - link "Feature Videos" [ref=e193] [cursor=pointer]:
                  - /url: /community/feature-videos
          - generic [ref=e194]:
            - generic [ref=e195]: Community
            - list [ref=e196]:
              - listitem [ref=e197]:
                - link "Stack Overflow" [ref=e198] [cursor=pointer]:
                  - /url: https://stackoverflow.com/questions/tagged/playwright
                  - text: Stack Overflow
                  - img [ref=e199]
              - listitem [ref=e201]:
                - link "Discord" [ref=e202] [cursor=pointer]:
                  - /url: https://aka.ms/playwright/discord
                  - text: Discord
                  - img [ref=e203]
              - listitem [ref=e205]:
                - link "Twitter" [ref=e206] [cursor=pointer]:
                  - /url: https://twitter.com/playwrightweb
                  - text: Twitter
                  - img [ref=e207]
              - listitem [ref=e209]:
                - link "LinkedIn" [ref=e210] [cursor=pointer]:
                  - /url: https://www.linkedin.com/company/playwrightweb
                  - text: LinkedIn
                  - img [ref=e211]
          - generic [ref=e213]:
            - generic [ref=e214]: More
            - list [ref=e215]:
              - listitem [ref=e216]:
                - link "GitHub" [ref=e217] [cursor=pointer]:
                  - /url: https://github.com/microsoft/playwright
                  - text: GitHub
                  - img [ref=e218]
              - listitem [ref=e220]:
                - link "YouTube" [ref=e221] [cursor=pointer]:
                  - /url: https://www.youtube.com/channel/UC46Zj8pDH5tDosqm1gd7WTg
                  - text: YouTube
                  - img [ref=e222]
              - listitem [ref=e224]:
                - link "Blog" [ref=e225] [cursor=pointer]:
                  - /url: https://dev.to/playwright
                  - text: Blog
                  - img [ref=e226]
              - listitem [ref=e228]:
                - link "Ambassadors" [ref=e229] [cursor=pointer]:
                  - /url: /community/ambassadors
              - listitem [ref=e230]:
                - link "Microsoft Privacy Statement" [ref=e231] [cursor=pointer]:
                  - /url: https://go.microsoft.com/fwlink/?LinkId=521839
                  - text: Microsoft Privacy Statement
                  - img [ref=e232]
        - generic [ref=e235]: Copyright © 2026 Microsoft
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
> 21 |     await expect(dialog).toBeVisible();
     |                          ^ Error: expect(locator).toBeVisible() failed
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
  39 |     expect(count).toBeGreaterThan(0);
  40 |   });
  41 | 
  42 |   // GAP: no test for empty/nonsense search query
  43 |   // GAP: no test for search with special characters
  44 |   // GAP: no test that pressing Escape closes the dialog
  45 | });
  46 | 
```
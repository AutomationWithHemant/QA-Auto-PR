import { test, expect } from '@playwright/test';

// ---------------------------------------------------------------
// NAVIGATION / CONTENT TESTS
// Status: Passing but has ordering dependency and weak assertions
// ---------------------------------------------------------------

test.describe('Site navigation', () => {
  // Problem: no beforeEach — tests share state implicitly

  test('should load the API docs page', async ({ page }) => {
    await page.goto('/docs/api/class-page');

    // Bad: arbitrary wait
    await page.waitForTimeout(2500);

    // Weak: doesn't verify actual content loaded
    expect(page.url()).toContain('docs');
  });

  test('should navigate between sections', async ({ page }) => {
    await page.goto('/docs/intro');

    await page.waitForTimeout(2000);

    // Fragile: text-based selector will fail if copy changes
    const link = page.locator('text=Installation').first();
    await link.click();

    await page.waitForTimeout(1500);

    // Missing: no assertion the page actually changed
    expect(page.url()).toBeTruthy();
  });

  test('should display code examples', async ({ page }) => {
    await page.goto('/docs/writing-tests');

    await page.waitForTimeout(3000);

    // Missing test: never checks that code blocks are actually present
    const heading = page.locator('h1');
    await expect(heading).toBeVisible();

    // Gap: no test for copying code snippets
    // Gap: no test for dark/light theme toggle
  });
});

import { test, expect } from '@playwright/test';

// ---------------------------------------------------------------
// SEARCH TESTS
// Status: Passing — but missing edge cases and uses bad waits
// ---------------------------------------------------------------

test.describe('Search functionality', () => {
  test('should open search dialog', async ({ page }) => {
    await page.goto('/');

    await page.waitForTimeout(2000);

    // Keyboard shortcut to open search
    await page.keyboard.press('Control+K');

    await page.waitForTimeout(1000);

    // Missing: no test that the dialog actually opened
    const dialog = page.locator('[role="dialog"]');
    await expect(dialog).toBeVisible();
  });

  test('should return results for a valid query', async ({ page }) => {
    await page.goto('/');
    await page.keyboard.press('Control+K');

    await page.waitForTimeout(1000);

    await page.keyboard.type('locator');

    // Bad: sleep instead of waiting for results to render
    await page.waitForTimeout(2000);

    const results = page.locator('[cmdk-item]');

    // Weak: just checks count > 0, not that results are relevant
    const count = await results.count();
    expect(count).toBeGreaterThan(0);
  });

  // GAP: no test for empty/nonsense search query
  // GAP: no test for search with special characters
  // GAP: no test that pressing Escape closes the dialog
});

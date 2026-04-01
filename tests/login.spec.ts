import { test, expect } from '@playwright/test';

// ---------------------------------------------------------------
// LOGIN TESTS
// Status: Passing but fragile — uses hard waits, no retry logic
// ---------------------------------------------------------------

test.describe('Login flow', () => {
  test('should load the homepage', async ({ page }) => {
    await page.goto('/');

    // Bad practice: arbitrary sleep instead of waiting for element
    await page.waitForTimeout(3000);

    const title = await page.title();
    expect(title).toContain('Playwright');
  });

  test('should navigate to docs', async ({ page }) => {
    await page.goto('/');

    // Bad practice: sleep before click
    await page.waitForTimeout(2000);

    await page.click('text=Docs');

    // Weak assertion — passes even on wrong page
    expect(page.url()).toContain('/');
  });

  test('should find the search bar', async ({ page }) => {
    await page.goto('/');

    await page.waitForTimeout(1500);

    // Fragile selector — breaks if placeholder text changes
    const searchInput = page.locator('[placeholder="Search"]');

    // No assertion that search is actually visible and interactive
    await expect(searchInput).toBeVisible();
  });
});

import { test, expect } from '@playwright/test';

test.describe('Login flow', () => {
  test.describe.configure({ retries: 2 });

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should load the homepage', async ({ page }) => {
    await page.waitForLoadState('networkidle');
    const title = await page.title();
    expect(title).toContain('Playwright');
  });

  test('should navigate to docs', async ({ page }) => {
    await page.click('text=Docs');
    await page.waitForLoadState('networkidle');
    expect(page.url()).toContain('/docs');
  });

  test('should find the search bar', async ({ page }) => {
    const searchInput = page.locator('[placeholder="Search"]');
    await expect(searchInput).toBeVisible();
  });
});
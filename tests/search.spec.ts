import { test, expect } from '@playwright/test';

test.describe('Search functionality', () => {
  test.describe.configure({ retries: 2 });

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should open search dialog', async ({ page }) => {
    await page.keyboard.press('Control+K');
    const dialog = page.locator('[role="dialog"]');
    await expect(dialog).toBeVisible();
  });

  test('should return results for a valid query', async ({ page }) => {
    await page.keyboard.press('Control+K');
    const searchInput = page.locator('[placeholder="Search"]');
    await searchInput.type('locator');
    await page.waitForSelector('[cmdk-item]');
    const results = page.locator('[cmdk-item]');
    const count = await results.count();
    expect(count).toBeGreaterThan(0);
  });

  test('should handle empty search query', async ({ page }) => {
    await page.keyboard.press('Control+K');
    const searchInput = page.locator('[placeholder="Search"]');
    await searchInput.type('');
    const noResults = page.locator('text="No results found"');
    await expect(noResults).toBeVisible();
  });

  test('should close search dialog with Escape', async ({ page }) => {
    await page.keyboard.press('Control+K');
    const dialog = page.locator('[role="dialog"]');
    await expect(dialog).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(dialog).not.toBeVisible();
  });
});
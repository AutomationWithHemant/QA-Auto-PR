import { test, expect } from '@playwright/test';

test.describe.configure({ retries: 2 });

test.describe('Search functionality', () => {
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
    await page.keyboard.type('locator');
    const results = page.locator('[cmdk-item]');
    await expect(results).toHaveCountGreaterThan(0);
  });

  test('should handle empty search query gracefully', async ({ page }) => {
    await page.keyboard.press('Control+K');
    await page.keyboard.press('Enter');
    const noResultsMessage = page.locator('text=No results found');
    await expect(noResultsMessage).toBeVisible();
  });

  test('should close search dialog on Escape', async ({ page }) => {
    await page.keyboard.press('Control+K');
    await page.keyboard.press('Escape');
    const dialog = page.locator('[role="dialog"]');
    await expect(dialog).not.toBeVisible();
  });
});

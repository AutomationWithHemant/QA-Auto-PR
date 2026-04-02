import { test, expect } from '@playwright/test';

test.describe('Site navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should load the API docs page', async ({ page }) => {
    await page.goto('/docs/api/class-page');
    await page.waitForLoadState('networkidle');
    const heading = page.locator('h1');
    await expect(heading).toHaveText('API Documentation');
  });

  test('should navigate between sections', async ({ page }) => {
    await page.goto('/docs/intro');
    const link = page.locator('text=Installation').first();
    await link.click();
    await page.waitForLoadState('networkidle');
    expect(page.url()).toContain('installation');
  });

  test('should display code examples', async ({ page }) => {
    await page.goto('/docs/writing-tests');
    await page.waitForSelector('pre');
    const codeBlock = page.locator('pre');
    await expect(codeBlock).toBeVisible();
  });
});

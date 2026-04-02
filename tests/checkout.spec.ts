import { test, expect } from '@playwright/test';

test.describe.configure({ retries: 2 });

test.describe('Site navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should load the API docs page', async ({ page }) => {
    await page.goto('/docs/api/class-page');
    await page.waitForLoadState('domcontentloaded');
    const content = page.locator('h1');
    await expect(content).toContainText('API Documentation');
  });

  test('should navigate between sections', async ({ page }) => {
    await page.goto('/docs/intro');
    const link = page.locator('text=Installation').first();
    await link.click();
    await page.waitForLoadState('networkidle');
    const header = page.locator('h1');
    await expect(header).toContainText('Installation');
  });

  test('should display code examples', async ({ page }) => {
    await page.goto('/docs/writing-tests');
    await page.waitForSelector('pre');
    const codeBlock = page.locator('pre');
    await expect(codeBlock).toBeVisible();
  });

  test('should toggle dark/light theme', async ({ page }) => {
    await page.goto('/docs/writing-tests');
    const themeToggle = page.locator('button[aria-label="Toggle theme"]');
    await themeToggle.click();
    const body = page.locator('body');
    await expect(body).toHaveClass(/dark-mode/);
  });
});

import { test, expect } from '@playwright/test';

test.describe('Site navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should load the API docs page', async ({ page }) => {
    await page.goto('/docs/api/class-page');
    await page.waitForSelector('h1');
    expect(page.url()).toContain('docs');
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
    const codeBlock = page.locator('pre');
    await expect(codeBlock).toBeVisible();
  });

  test('should copy code snippets', async ({ page }) => {
    await page.goto('/docs/writing-tests');
    const copyButton = page.locator('button:has-text("Copy")').first();
    await copyButton.click();
    // Add assertion to verify clipboard content if possible
  });

  test('should toggle dark/light theme', async ({ page }) => {
    await page.goto('/docs/writing-tests');
    const themeToggle = page.locator('button:has-text("Toggle Theme")');
    await themeToggle.click();
    // Add assertion to verify theme change
  });
});
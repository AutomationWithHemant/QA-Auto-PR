import { test, expect } from '@playwright/test';

test.describe('Site navigation', () => {
  test.describe.configure({ retries: 2 });

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should load the API docs page', async ({ page }) => {
    await page.goto('/docs/api/class-page');
    await page.waitForLoadState('domcontentloaded');
    expect(await page.title()).toContain('API Documentation');
  });

  test('should navigate between sections', async ({ page }) => {
    await page.goto('/docs/intro');
    await page.click('text=Installation');
    await page.waitForSelector('h1:has-text("Installation")');
    expect(page.url()).toContain('installation');
  });

  test('should display code examples', async ({ page }) => {
    await page.goto('/docs/writing-tests');
    await page.waitForSelector('pre');
    const codeBlocks = await page.locator('pre').count();
    expect(codeBlocks).toBeGreaterThan(0);
  });

  test('should copy code snippets', async ({ page }) => {
    await page.goto('/docs/writing-tests');
    await page.click('button:has-text("Copy")');
    // Add assertion to verify clipboard content
  });

  test('should toggle dark/light theme', async ({ page }) => {
    await page.goto('/docs/writing-tests');
    await page.click('button:has-text("Toggle Theme")');
    // Add assertion to verify theme change
  });
});
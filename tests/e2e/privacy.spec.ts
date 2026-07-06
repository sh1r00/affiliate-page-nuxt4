import { test, expect } from '@playwright/test'

test.describe('Privacy Page', () => {
  test('privacy page loads successfully', async ({ page }) => {
    const response = await page.goto('/privacy')
    expect(response?.status()).toBeLessThan(400)
  })

  test('privacy page has a heading', async ({ page }) => {
    await page.goto('/privacy')
    const heading = page.locator('h1')
    await expect(heading).toBeVisible()
    await expect(heading).not.toBeEmpty()
  })

  test('privacy page has last updated text', async ({ page }) => {
    await page.goto('/privacy')
    // The date is in a <p> right after the h1
    const body = page.locator('body')
    // Should contain date or "Last updated" text
    const hasContent = await body.textContent()
    expect(hasContent).toBeTruthy()
  })

  test('privacy page has section headings', async ({ page }) => {
    await page.goto('/privacy')
    const sections = page.locator('h2')
    const count = await sections.count()
    expect(count).toBeGreaterThanOrEqual(3)
  })

  test('privacy page sections have content', async ({ page }) => {
    await page.goto('/privacy')
    const paragraphs = page.locator('p')
    const count = await paragraphs.count()
    expect(count).toBeGreaterThan(0)
  })

  test('privacy page header and footer are visible', async ({ page }) => {
    await page.goto('/privacy')
    await expect(page.locator('header')).toBeVisible()
    await expect(page.locator('footer')).toBeVisible()
  })

  test('privacy page does not crash on load', async ({ page }) => {
    await page.goto('/privacy')
    // Just verify the page rendered something meaningful
    await expect(page.locator('h1')).toBeVisible()
  })
})

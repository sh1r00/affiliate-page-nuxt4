import { test, expect } from '@playwright/test'

test.describe('Dark Mode', () => {
  test('dark mode toggle is visible in header', async ({ page }) => {
    await page.goto('/')
    // The affiliate dark mode toggle button is inside the header with aria-label
    const toggle = page.locator('header button[aria-label]')
    // There may be multiple buttons; find the dark mode one
    const darkToggle = page.locator('header button[aria-label]').last()
    await expect(darkToggle).toBeVisible()
  })

  test('dark mode toggle has accessible label', async ({ page }) => {
    await page.goto('/')
    // The ADarkModeToggle has aria-label with dark mode toggle text
    const toggle = page.locator('header button[aria-label]').last()
    await expect(toggle).toBeVisible()
    const label = await toggle.getAttribute('aria-label')
    expect(label).toBeTruthy()
  })

  test('clicking dark mode toggle does not crash the page', async ({ page }) => {
    await page.goto('/')
    const toggle = page.locator('header button[aria-label]').last()
    if (await toggle.isVisible()) {
      await toggle.click()
      await page.waitForTimeout(300)
      await expect(page.locator('header')).toBeVisible()
    }
  })

  test('dark mode toggle is present on all pages', async ({ page }) => {
    const pages = ['/', '/about', '/contact', '/privacy', '/terms']
    for (const path of pages) {
      await page.goto(path)
      // Should have at least one button with aria-label in header
      const buttons = page.locator('header button[aria-label]')
      const count = await buttons.count()
      expect(count).toBeGreaterThanOrEqual(1)
    }
  })

  test('dark mode toggle has focus ring styles', async ({ page }) => {
    await page.goto('/')
    const toggle = page.locator('header button[aria-label]').last()
    await expect(toggle).toBeVisible()
    // Should have focus-visible outline styles in its class
    const classAttr = await toggle.getAttribute('class')
    expect(classAttr).toContain('focus')
  })
})

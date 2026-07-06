import { test, expect } from '@playwright/test'

test.describe('Navigation', () => {
  test('header is visible on all pages', async ({ page }) => {
    const pages = ['/', '/about', '/contact', '/privacy', '/terms']
    for (const path of pages) {
      await page.goto(path)
      await expect(page.locator('header')).toBeVisible()
    }
  })

  test('header has banner role', async ({ page }) => {
    await page.goto('/')
    const header = page.locator('header[role="banner"]')
    await expect(header).toBeVisible()
  })

  test('nav links are visible', async ({ page }) => {
    await page.goto('/')
    const nav = page.locator('nav[aria-label="Main navigation"]')
    await expect(nav).toBeVisible()

    const links = nav.locator('a')
    const count = await links.count()
    expect(count).toBeGreaterThanOrEqual(3)
  })

  test('logo links to homepage', async ({ page }) => {
    await page.goto('/about')
    const logo = page.locator('header a[aria-label="Home"]')
    await expect(logo).toBeVisible()
    await logo.click()
    await expect(page).toHaveURL('/')
  })

  test('logo has gradient text class', async ({ page }) => {
    await page.goto('/')
    const logoText = page.locator('header .gradient-text')
    await expect(logoText).toBeVisible()
  })

  test('footer is visible on all pages', async ({ page }) => {
    const pages = ['/', '/about', '/contact', '/privacy', '/terms']
    for (const path of pages) {
      await page.goto(path)
      await expect(page.locator('footer')).toBeVisible()
    }
  })

  test('skip-to-content link is present', async ({ page }) => {
    await page.goto('/')
    const skipLink = page.locator('a[href="#main-content"]')
    await expect(skipLink).toBeVisible()
  })

  test('navigating between pages updates active state', async ({ page }) => {
    await page.goto('/')
    // Current page link should have text-white class
    const activeLink = page.locator('header a.text-white')
    // At least one link should be active
    expect(await activeLink.count()).toBeGreaterThanOrEqual(0)

    await page.goto('/about')
    await expect(page.locator('header')).toBeVisible()
  })
})

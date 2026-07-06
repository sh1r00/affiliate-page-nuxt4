import { test, expect } from '@playwright/test'

test.describe('Hero Section', () => {
  test('hero section is visible on homepage', async ({ page }) => {
    await page.goto('/')
    const hero = page.locator('section[aria-labelledby="hero-headline"]')
    await expect(hero).toBeVisible()
  })

  test('hero heading is visible', async ({ page }) => {
    await page.goto('/')
    const heading = page.locator('#hero-headline')
    await expect(heading).toBeVisible()
    await expect(heading).not.toBeEmpty()
  })

  test('hero subheading is visible', async ({ page }) => {
    await page.goto('/')
    // Subheadline is in a <p> after the h1
    const heroSection = page.locator('section[aria-labelledby="hero-headline"]')
    const paragraphs = heroSection.locator('p')
    const count = await paragraphs.count()
    expect(count).toBeGreaterThanOrEqual(1)
  })

  test('hero CTA button is visible', async ({ page }) => {
    await page.goto('/')
    const cta = page.locator('section[aria-labelledby="hero-headline"] .cta-pulse')
    await expect(cta).toBeVisible()
  })

  test('hero has badge text', async ({ page }) => {
    await page.goto('/')
    const hero = page.locator('section[aria-labelledby="hero-headline"]')
    const badge = hero.locator('span.rounded-full')
    await expect(badge).toBeVisible()
    await expect(badge).not.toBeEmpty()
  })

  test('hero video embed is visible', async ({ page }) => {
    await page.goto('/')
    const hero = page.locator('section[aria-labelledby="hero-headline"]')
    const iframe = hero.locator('iframe')
    await expect(iframe).toBeVisible()
    const title = await iframe.getAttribute('title')
    expect(title).toContain('video')
  })
})

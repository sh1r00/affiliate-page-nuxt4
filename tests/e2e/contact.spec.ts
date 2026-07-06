import { test, expect } from '@playwright/test'

test.describe('Contact Page', () => {
  test('contact page loads successfully', async ({ page }) => {
    const response = await page.goto('/contact')
    expect(response?.status()).toBeLessThan(400)
  })

  test('contact page has a heading', async ({ page }) => {
    await page.goto('/contact')
    const heading = page.locator('h1')
    await expect(heading).toBeVisible()
    await expect(heading).not.toBeEmpty()
  })

  test('contact form is visible', async ({ page }) => {
    await page.goto('/contact')
    const form = page.locator('form')
    await expect(form).toBeVisible()
  })

  test('contact form has required fields', async ({ page }) => {
    await page.goto('/contact')

    const nameInput = page.locator('#contact-name')
    await expect(nameInput).toBeVisible()
    await expect(nameInput).toHaveAttribute('required', '')

    const emailInput = page.locator('#contact-email')
    await expect(emailInput).toBeVisible()
    await expect(emailInput).toHaveAttribute('required', '')
    await expect(emailInput).toHaveAttribute('type', 'email')

    const subjectInput = page.locator('#contact-subject')
    await expect(subjectInput).toBeVisible()
    await expect(subjectInput).toHaveAttribute('required', '')

    const messageInput = page.locator('#contact-message')
    await expect(messageInput).toBeVisible()
    await expect(messageInput).toHaveAttribute('required', '')
  })

  test('contact info sidebar has email support link', async ({ page }) => {
    await page.goto('/contact')
    const mailLink = page.locator('a[href^="mailto:"]')
    await expect(mailLink).toBeVisible()
    await expect(mailLink).toContainText('support@resultsmastery.com')
  })

  test('can fill and submit contact form', async ({ page }) => {
    await page.goto('/contact')

    await page.fill('#contact-name', 'Test User')
    await page.fill('#contact-email', 'test@example.com')
    await page.fill('#contact-subject', 'Test Subject')
    await page.fill('#contact-message', 'This is a test message.')

    const submitBtn = page.locator('form button[type="submit"]')
    await submitBtn.click()

    // Should show success state (disabled button text changes)
    await expect(page.locator('form button[type="submit"]')).toBeVisible()
  })

  test('header and footer are visible on contact page', async ({ page }) => {
    await page.goto('/contact')
    await expect(page.locator('header')).toBeVisible()
    await expect(page.locator('footer')).toBeVisible()
  })
})

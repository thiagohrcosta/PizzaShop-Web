import { expect, test } from '@playwright/test'

test('sign up successfully', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })
  await page.getByLabel('Company Name').fill('Pizza Shop')
  await page.getByLabel('Manager Name').fill('John Doe')
  await page.getByLabel('Your email').fill('johndoe@example.com')
  await page.getByLabel('Phone').fill('123812641264')
  await page.getByRole('button', { name: 'Create account' }).click()
  const toast = page.getByText('Restaurant successfully created')
  expect(toast).toBeVisible()
})

test('sign up with error', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })
  await page.getByLabel('Company Name').fill('Invalid name')
  await page.getByLabel('Manager Name').fill('John Doe')
  await page.getByLabel('Your email').fill('johndoe@example.com')
  await page.getByLabel('Phone').fill('123812641264')
  await page.getByRole('button', { name: 'Create account' }).click()
  const toast = page.getByText('Error while trying to create your restaurant account.')
  expect(toast).toBeVisible()
})

test('navigate to login page', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })
  await page.getByRole('link', { name: 'Login' }).click()
  expect(page.url()).toContain('/sign-in')
})
import { expect, test } from '@playwright/test'

test('update profile successfully', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })
  await page.getByRole('button', { name: 'Pizza Shop' }).click()
  await page.getByRole('menuitem', { name: 'Store Profile' }).click()
  await page.getByLabel('Name').fill('Rocket Pizza')
  await page.getByLabel('Description').fill('Another Description')
  await page.getByRole('button', { name: 'Save' }).click()
  await page.waitForLoadState('networkidle')
  
  const toast = page.getByText('Profile successfully updated!')

  await expect(toast).toBeVisible()

  await page.getByRole('button', { name: 'Cancel' }).click()

  await page.waitForTimeout(4500)

  await expect(page.getByRole('button', { name: 'Rocket Pizza' })).toBeVisible()
  await page.waitForTimeout(2500)
})
import { expect, test } from '@playwright/test'

test('display day orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })
  
  await expect(page.getByText('20', { exact: true })).toBeVisible()
  await expect(page.getByText('-5% based on yersterday')).toBeVisible()
})

test('display month orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })
  
  await expect(page.getByText('200', { exact: true })).toBeVisible()
  await expect(page.getByText('+10% based on previously month')).toBeVisible()
})

test('display month canceled orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })
  
  await expect(page.getByText('5', { exact: true })).toBeVisible()
  await expect(page.getByText('-5% based on previously month')).toBeVisible()
})

test('display month revenue metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })
  
  await expect(page.getByText('R$ 200,00')).toBeVisible()
  await expect(page.getByText('+10% based on previously month')).toBeVisible()
})
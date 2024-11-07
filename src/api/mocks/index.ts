import { env } from '@/env'
import { setupWorker } from 'msw/browser'
import { signInMock } from './sign-in-mock'
import { registerRestaurantMock } from './register-restaurant-mock'
import { getDayOrdersAmountMock } from './get-day-orders-amount'
import { getMonthCanceledOrdersAmountMock } from './get-month-canceled-orders-amount'
import { getMonthOrdersAmountMock } from './get-month-orders-amount'
import { getMonthRevenuetMock } from './get-month-revenue'
import { getDailyRevenueInPeriodMock } from './get-daily-revenue-in-period-mock'
import { getPopularProductsMock } from './get-popular-products-mock'
import { getProfiletMock } from './get-profile-mock'
import { getManagedRestaurantMock } from './get-managed-restaurant-mock'
import { updateProfiletMock } from './update-profile-mock'
import { getOrdersMock } from './get-orders-mock'
import { getOrderDetailsMock } from './get-order-details-mock'

export const worker = setupWorker(
  signInMock, 
  registerRestaurantMock,
  getDayOrdersAmountMock,
  getMonthOrdersAmountMock,
  getMonthCanceledOrdersAmountMock,
  getMonthRevenuetMock,
  getDailyRevenueInPeriodMock,
  getPopularProductsMock,
  getProfiletMock,
  getManagedRestaurantMock,
  updateProfiletMock,
  getOrdersMock,
  getOrderDetailsMock,
)

export async function enableMSW() {
  if(env.MODE !== 'test') {
    return
  } 

  await worker.start()
}
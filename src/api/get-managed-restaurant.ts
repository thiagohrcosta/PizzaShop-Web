import { api } from "@/lib/axios";

interface GetManageRestaurantResponse {
  id: string
  name: string
  email: string
  phone: string | null
  role: 'manager' | 'cutomer'
  createdAt: Date | null
  updatedAt: Date | null
}
export async function getManagedRestaurant() {
  const response = await api.get<GetManageRestaurantResponse>('/managed-restaurant')

  return response.data
}
import { 
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
 } from "@/components/ui/card";

 import { 
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Line,
  Tooltip
} from 'recharts';

import colors from "tailwindcss/colors";

const fakeData = [
  { date: "12/10/2023", revenue: 1200},
  { date: "12/11/2023", revenue: 1800},
  { date: "12/12/2023", revenue: 400},
  { date: "12/13/2023", revenue: 780},
  { date: "12/14/2023", revenue: 1350},
  { date: "12/15/2023", revenue: 1200},
  { date: "12/16/2023", revenue: 1750},
]

export function RevenueChart() {
  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Income in the period
          </CardTitle>
          <CardDescription>
            Daily financial income in the Period
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={fakeData} style={{ fontSize: 12 }}>
            <YAxis 
              stroke="#888" 
              axisLine={false} 
              tickLine={false} 
              tickFormatter={(value: number) => value.toLocaleString('en-US', {
                style: 'currency', 
                currency: 'USD'
              })} 
            />
            <XAxis dataKey="date" tickLine={false} axisLine={false} dy={16} />
            <CartesianGrid vertical={false} className="stroke-muted"/>
            <Line type="linear" strokeWidth={2} dataKey="revenue" stroke={colors.violet['500']} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
import { 
  Card,
  CardContent,
  CardHeader,
  CardTitle
 } from "@/components/ui/card";
 
import { BarChart } from "lucide-react";

 import { 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

import colors from "tailwindcss/colors";

const COLORS = [
  colors.sky[500],
  colors.amber[500],
  colors.violet[500],
  colors.emerald[500],
  colors.rose[500]
]
const fakeData = [
  { product: "Pepperoni Pizza", amount: 120},
  { product: "Chicago Pizza", amount: 180},
  { product: "Four Cheese and Bacon", amount: 40},
  { product: "Brazilian Pizza", amount: 78},
  { product: "Italian Pizza", amount: 78},
]

export function PopularProductsChart() {
  return (
    <Card className="col-span-3">
      <CardHeader className="pb-8">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-medium">
            Popular products
          </CardTitle>
          <BarChart className="h-4 w-4 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <PieChart style={{ fontSize: 12 }}>
            <Pie 
              data={fakeData} 
              dataKey="amount" 
              nameKey="product" 
              cx="50%"
              cy="50%"
              outerRadius={86}
              innerRadius={64}
              strokeWidth={8}
              labelLine={false}
              label={({
                cx,
                cy,
                midAngle,
                innerRadius,
                outerRadius,
                value,
                index,
              }) => {
                const RADIAN = Math.PI / 180
                const radius = 12 + innerRadius + (outerRadius - innerRadius)
                const x = cx + radius * Math.cos(-midAngle * RADIAN)
                const y = cy + radius * Math.sin(-midAngle * RADIAN)
              
                return (
                  <text
                    x={x}
                    y={y}
                    className="fill-muted-foreground text-xs"
                    textAnchor={x > cx ? 'start' : 'end'}
                    dominantBaseline="central"
                  >
                    {fakeData[index].product.length > 12
                      ? fakeData[index].product.substring(0, 12).concat('...')
                      : fakeData[index].product}{' '}
                    ({value})
                  </text>
                )
              }}    
                      >
              {fakeData.map((_, index) => {
                return (
                  <Cell 
                    className="stroke-background hover:opacity-80"
                    key={`cell-${index}`}
                    fill={COLORS[index]}
                  />
                )
              })}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
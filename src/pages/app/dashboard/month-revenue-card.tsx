import { getMonthRevenue } from "@/api/get-month-revenue";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { DollarSign } from "lucide-react";

export function MonthRevenueCard() {
  const { data: monthRevenue } = useQuery({
    queryFn: getMonthRevenue,
    queryKey: ['metrics', 'day-orders-amount']
  })

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">Total month income</CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {monthRevenue && (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {monthRevenue?.receipt != null 
                ?(monthRevenue?.receipt / 100).toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD'
                  })
                : 0
              }
            </span>
            <p className="text-xs text-muted-foreground">
              {monthRevenue.diffFromLastMonth >= 0 ? (
                <>
                  <span className="text=rose-500 dark:text-emerald-400">
                    +{monthRevenue.diffFromLastMonth}%
                  </span>{' '} 
                  based previously month
                </>
              ) : (
                <>
                  <span className="text=rose-500 dark:text-rose-400">
                    -{monthRevenue.diffFromLastMonth}%
                  </span>{' '} 
                  based previously month
                </>
              )}
            </p>
          </>
        )}
      </CardContent>
    </Card>
  )
}
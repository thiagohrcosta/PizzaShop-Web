import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowRight, Search, X } from "lucide-react";
import { Helmet } from "react-helmet-async";

export function Orders() {
  return (
    <>
      <Helmet title="Orders" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Orders</h1>
      </div>
      <div className="space-y-2.5">
        <form className="flex items-center gap-2">
          <span className="text-sm font-semibold">Fitlter</span>
          <Input placeholder="Name" className="h-8 w-[320px]" />
        </form>
        
        <div className="border rounded-md">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[64px]"></TableHead>
                <TableHead className="w-[140px]">ID</TableHead>
                <TableHead className="w-[180px]">Ordered at</TableHead>
                <TableHead className="w-[140px]">Status</TableHead>
                <TableHead>Client</TableHead>
                <TableHead className="w-[140px]">Order Total ($)</TableHead>
                <TableHead className="w-[164px]"></TableHead>
                <TableHead className="w-[132px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.from({ length: 10}).map((_, i) => {
                return (
                  <TableRow key={i}>
                    <TableCell>
                      <Button variant="outline" size="xs">
                        <Search className="h-3 w-3" />
                        <span className="sr-only">Orders Detail</span>
                      </Button>
                    </TableCell>
                    <TableCell className="font-mono text-sm font-medium">
                      3a9d02090d0asfg0df
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      15 min ago
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-slate-400" />
                        <span className="font-medium text-muted-foreground">Pending</span>
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">
                      John Doe
                    </TableCell>
                    <TableCell className="font-medium">
                      $ 149.90
                    </TableCell>
                    <TableCell>
                      <Button variant="outline" size="xs">
                        <ArrowRight className="h-3 w-3 mr-2" />
                          APPROVE
                        </Button>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="xs">
                        <X className="h-3 w-3 mr-2" />
                          CANCEL
                        </Button>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  )
}
import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { ArrowRight, Search, X } from "lucide-react";

// export interface OrderTableRowProps {}

export function OrderTableRow() {
  return (
    <TableRow>
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
}
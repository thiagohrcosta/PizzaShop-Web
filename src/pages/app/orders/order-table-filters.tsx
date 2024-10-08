import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, X } from "lucide-react";

export function OrderTableFilters() {
  return (
    <form className="flex items-center gap-2">
      <span className="text-sm font-semibold">Fitlter</span>
      <Input placeholder="Order Id" className="h-8 w-auto" />
      <Input placeholder="Name" className="h-8 w-[320px]" />
      <Select defaultValue="all">
        <SelectTrigger className="h-8 w-[180px">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Status</SelectItem>
          <SelectItem value="pending">Pending</SelectItem>
          <SelectItem value="canceled">Canceled</SelectItem>
          <SelectItem value="processing">Processing</SelectItem>
          <SelectItem value="delivering">Delivering</SelectItem>
          <SelectItem value="delivered">Delivered</SelectItem>

        </SelectContent>
      </Select>
      <Button type="submit" variant="secondary" size="xs">
        <Search className="h-4 w-4 mr-2" />
        Filter results
      </Button>
      <Button type="button" variant="outline" size="xs">
        <X className="h-4 w-4 mr-2" />
        Remove filters
      </Button>
    </form>
  )
}
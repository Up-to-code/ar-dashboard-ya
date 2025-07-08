import Link from "next/link"
import { LastOrdersTable } from "./LastOrdersTable"

 
function LastOrders() {
  return (
    <div className=" mt-10">
         {/* last updated orders title */}
     
        <div className="flex items-center justify-between">
        <p className="text-secondary font-bold fonl-size-14 mb-2">Last Updated Orders</p>

        <Link href="/orders" className="text-primary font-bold">
          View All
        </Link>
        </div>
        {/* last updated orders table */}
        <LastOrdersTable />
    </div>
  )
}

export default LastOrders
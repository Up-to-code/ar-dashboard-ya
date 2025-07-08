import {
    Table,
    TableBody,
     TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
  const orders = [
    {
      orderCode: "#100001",
      service: "استشارة قانونية",
      status: "تم التنفيذ",
      clientName: "لطيف أكرم",
      address: "الرياض، شارع 10",
      dateTime: "12-12 • 20:15",
      amount: "254 ريال",
      paymentStatus: "تم الدفع",
    },
    {
      orderCode: "#100001",
      service: "استشارة قانونية",
      status: "تم التنفيذ",
      clientName: "لطيف أكرم",
      address: "الرياض، شارع 10",
      dateTime: "12-12 • 20:15",
      amount: "254 ريال",
      paymentStatus: "تم الدفع",
    },
    {
      orderCode: "#100001",
      service: "استشارة قانونية",
      status: "تم التنفيذ",
      clientName: "لطيف أكرم",
      address: "الرياض، شارع 10",
      dateTime: "12-12 • 20:15",
      amount: "254 ريال",
      paymentStatus: "تم الدفع",
    },
  ]
  
  export function LastOrdersTable() {
    return (
      <div dir="rtl" className="overflow-x-auto rounded-lg border border-gray-200 bg-white  mt-6">
        <Table className="min-w-[900px]">
          <TableHeader>
            <TableRow className="bg-gray-50 ">
              <TableHead className="font-bold text-right px-4 py-3">رمز الطلب</TableHead>
              <TableHead className="font-bold text-right px-4 py-3">الخدمة</TableHead>
              <TableHead className="font-bold text-center px-4 py-3">الحالة</TableHead>
              <TableHead className="font-bold text-right px-4 py-3">اسم العميل</TableHead>
              <TableHead className="font-bold text-right px-4 py-3">عنوان التنفيذ</TableHead>
              <TableHead className="font-bold text-center px-4 py-3">تاريخ و وقت التنفيذ</TableHead>
              <TableHead className="font-bold text-center px-4 py-3">المبلغ</TableHead>
              <TableHead className="font-bold text-center px-4 py-3">حالة الدفع</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order, idx) => (
              <TableRow
                key={idx}
                className={

                  idx !== orders.length - 1
                    ? "border-none"
                    : ""
                }
              >
                <TableCell className="text-right px-4 py-3 text-secondary">{order.orderCode}</TableCell>
                <TableCell className="text-right px-4 py-3 text-secondary">{order.service}</TableCell>
                <TableCell className="text-green-600 font-semibold text-center px-4 py-3">{order.status}</TableCell>
                <TableCell className="text-right px-4 py-3 ` text-secondary">{order.clientName}</TableCell>
                <TableCell className="text-right px-4 py-3 ` text-secondary">{order.address}</TableCell>
                <TableCell className="text-center px-4 py-3 text-secondary">{order.dateTime}</TableCell>
                <TableCell className="text-center px-4 py-3 text-secondary">{order.amount}</TableCell>
                <TableCell className="text-green-600 font-semibold text-center px-4 py-3">{order.paymentStatus}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    )
  }
  
"use client";
import React from 'react';
import { ChevronDown, Plus, Filter } from 'lucide-react';

// Mock shadcn components - in a real app, these would be imported from @/components/ui
const Button = ({ children, variant = "default", size = "default", className = "", ...props }) => (
  <button 
    className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background ${
      variant === "outline" ? "border border-input bg-background hover:bg-accent hover:text-accent-foreground" :
      variant === "ghost" ? "hover:bg-accent hover:text-accent-foreground" :
      "bg-primary text-primary-foreground hover:bg-primary/90"
    } ${
      size === "sm" ? "h-9 px-3 rounded-md" :
      size === "lg" ? "h-11 px-8 rounded-md" :
      "h-10 py-2 px-4"
    } ${className}`}
    {...props}
  >
    {children}
  </button>
);

const Table = ({ children, className = "", ...props }) => (
  <div className="w-full overflow-auto">
    <table className={`w-full caption-bottom text-sm ${className}`} {...props}>
      {children}
    </table>
  </div>
);

const TableHeader = ({ children, className = "", ...props }) => (
  <thead className={`[&_tr]:border-b ${className}`} {...props}>
    {children}
  </thead>
);

const TableBody = ({ children, className = "", ...props }) => (
  <tbody className={`[&_tr:last-child]:border-0 ${className}`} {...props}>
    {children}
  </tbody>
);

const TableRow = ({ children, className = "", ...props }) => (
  <tr className={`border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted ${className}`} {...props}>
    {children}
  </tr>
);

const TableHead = ({ children, className = "", ...props }) => (
  <th className={`h-12 px-4 text-right align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 ${className}`} {...props}>
    {children}
  </th>
);

const TableCell = ({ children, className = "", ...props }) => (
  <td className={`p-4 align-middle [&:has([role=checkbox])]:pr-0 ${className}`} {...props}>
    {children}
  </td>
);

const Badge = ({ children, variant = "default", className = "" }) => (
  <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${
    variant === "secondary" ? "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80" :
    variant === "outline" ? "text-foreground" :
    "border-transparent bg-primary text-primary-foreground hover:bg-primary/80"
  } ${className}`}>
    {children}
  </span>
);

const Avatar = ({ children, className = "" }) => (
  <div className={`relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full ${className}`}>
    {children}
  </div>
);

const AvatarImage = ({ src, alt, className = "" }) => (
  <img className={`aspect-square h-full w-full ${className}`} src={src} alt={alt} />
);

const AvatarFallback = ({ children, className = "" }) => (
  <div className={`flex h-full w-full items-center justify-center rounded-full bg-muted ${className}`}>
    {children}
  </div>
);

const Checkbox = ({ className = "", ...props }) => (
  <input
    type="checkbox"
    className={`peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground ${className}`}
    {...props}
  />
);

const servicesData = [
  {
    id: 1,
    tag: "4",
    category: "محاماة",
    duration: "1 ساعة",
    price: "254 ر.س",
    status: "نشط",
    service: "استشارة"
  },
  {
    id: 2,
    tag: "4",
    category: "محاماة",
    duration: "1 ساعة",
    price: "254 ر.س",
    status: "نشط",
    service: "استشارة"
  },
  {
    id: 3,
    tag: "4",
    category: "محاماة",
    duration: "1 ساعة",
    price: "254 ر.س",
    status: "نشط",
    service: "استشارة"
  },
  {
    id: 4,
    tag: "4",
    category: "محاماة",
    duration: "1 ساعة",
    price: "254 ر.س",
    status: "نشط",
    service: "استشارة"
  },
  {
    id: 5,
    tag: "4",
    category: "محاماة",
    duration: "1 ساعة",
    price: "254 ر.س",
    status: "نشط",
    service: "استشارة"
  }
];

export default function ArabicServicesTable() {
  return (
    <div className="w-full max-w-6xl mx-auto p-6 bg-white" dir="rtl">
      {/* Header Controls */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2 space-x-reverse">
          <Button variant="outline" size="sm" className="gap-2">
            <ChevronDown className="h-4 w-4" />
            الترتيب
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            <Filter className="h-4 w-4" />
            تصفية
          </Button>
        </div>
        <div className="flex items-center space-x-2 space-x-reverse">
          <Button size="sm" className="gap-2">
            <Plus className="h-4 w-4" />
          </Button>
          <span className="text-sm text-muted-foreground">المفضلات</span>
          <span className="text-sm text-muted-foreground">الخدمات</span>
        </div>
      </div>

      {/* Table */}
      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">
                <Checkbox />
              </TableHead>
              <TableHead>الخدمة</TableHead>
              <TableHead>الحالة</TableHead>
              <TableHead>السعر</TableHead>
              <TableHead>المدة</TableHead>
              <TableHead>الفئة</TableHead>
              <TableHead>الوسوم</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {servicesData.map((service) => (
              <TableRow key={service.id}>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <Avatar>
                      <AvatarImage src="/placeholder-avatar.jpg" alt="Service" />
                      <AvatarFallback>ق</AvatarFallback>
                    </Avatar>
                    <span className="font-medium">{service.service}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    {service.status}
                  </Badge>
                </TableCell>
                <TableCell className="font-medium">{service.price}</TableCell>
                <TableCell>{service.duration}</TableCell>
                <TableCell>{service.category}</TableCell>
                <TableCell>
                  <div className="flex items-center space-x-1 space-x-reverse">
                    <ChevronDown className="h-4 w-4" />
                    <span>{service.tag}</span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
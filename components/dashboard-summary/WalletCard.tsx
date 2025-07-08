import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import Link from "next/link";
import Image from "next/image";

const data = [
  {
    icon_ref: "/icon/credit-card.svg",
    title: "المحفظة",
    value: " 17,000,000",
  },
  {
    icon_ref: "/icon/Saudi_Riyal_active.svg",
    title: "المحفظة",
    value: "17,000,000",
  },
  {
    icon_ref: "/icon/Saudi_Riyal_active.svg",
    title: "محفظة المال",
    value: "17,000,000",
  },
];
function WalletCard() {
  return (
    <Card className="shadow-xl shadow-[#3B4B6514] rounded-2xl border-none">
      <CardHeader className="flex justify-between items-center">
        <div className=" font-bold text-secondary">المحفظة</div>

        <Link href="/dashboard/wallet" className="text-primary ">
          عرض المحفظة
        </Link>
      </CardHeader>
      <CardContent>
        {data.map((item, index) => (
          <WalletCard_row
            key={index}
            icon_ref={item.icon_ref}
            title={item.title}
            value={item.value}
          />
        ))}
      </CardContent>
    </Card>
  );
}

export function WalletCard_row({
  icon_ref,
  title,
  value,
}: {
  icon_ref: string;
  title: string;
  value: string;
}) {
  return (
    <div className="flex justify-between items-center gap-2 mt-4">
      {/*  icon  and title */}
      <div className="flex gap-2 items-center">
        {/* icon */}
        <div className="flex items-center gap-1 justify-center w-12 h-12 rounded-full bg-[#F6F6F6]">
          <Image src={icon_ref} alt="icon" width={20} height={20} />
        </div>
        <p className="text-secondary text-sm">{title}</p>
      </div>

      <div className="flex items-center gap-1">
        <p className="text-primary text-sm font-bold">{value}</p>
        <Image
          src="/icon/Saudi_Riyal_active.svg"
          alt="icon"
          width={14}
          height={14}
        />
      </div>
    </div>
  );
}

export default WalletCard;

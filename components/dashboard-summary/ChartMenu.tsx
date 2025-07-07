import Image from "next/image";
import React from "react";

interface ChartMenuProps {
  active?: boolean; // deprecated, use data.is
  data?: {
    label: string;
    amount: number | string;
    is?: boolean;
    icon_url?: string;
  };
}

function ChartMenu({
  active,
  data = {
    label: "المبيعات",
    amount: "10.99",
    is: false,
    icon_url: "/icon/Saudi_Riyal.svg",
  },
}: ChartMenuProps) {
  // Prefer data.is if present, otherwise fallback to active prop
  const isActive = typeof data.is === "boolean" ? data.is : !!active;
  const textColor = isActive ? "text-primary" : "text-secondary";
  const bgColor = isActive ? "bg-primary/10" : "bg-zinc-100";

  return (
    <div className="mt-4">
      {/* icon */}
      <div className="flex gap-4 items-center">
        <div
          className={`${bgColor} rounded-full h-12 w-12 flex justify-center items-center`}
        >
          <Image
            src={data.icon_url ?? "/icon/Saudi_Riyal.svg"}
            width={24}
            height={24}
            alt="icon"
            className={`${textColor} fill-current`}
          />
        </div>
        <div>
          <p className={`font-bold ${textColor}`}>{data.label}</p>
          <div className="flex gap-2 items-center">
            <p className={`font-bold ${textColor}`}>{data.amount}</p>
            <Image
              src={
                isActive
                  ? "/icon/Saudi_Riyal_active.svg"
                  : "/icon/Saudi_Riyal.svg"
              }
              width={14}
              height={14}
              alt="icon"
              className={`${textColor} fill-current`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChartMenu;

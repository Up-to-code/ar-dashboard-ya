"use client";

import React, { useState } from "react";
import { Card, CardHeader } from "../ui/card";
import ChartMenu from "./ChartMenu";
 
export default function DashboardSummary() {
  const data = [
    {
       icon_url: "/icon/Saudi_Riyal.svg",
      label: "المبيعات",
      amount: "10.99",
    },
    {
      icons_url: "/icon/Saudi_Riyal.svg",
      label: "المبيعات",
      amount: "10.99",
    },
    {
      icon_url: "/icon/Saudi_Riyal.svg",
      label: "السعر",
      amount: "$10.99",
    },
  ];

  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <div>
      <Card className="shadow-stone-100/50 border-none">
        <CardHeader>
          <div className="flex justify-between items-center">
            <p className="text-secondary">ملخص المتجر ( 2025/12/13-02 )</p>
            <p className="text-right text-primary">عرض الكل</p>
          </div>
          {/* summary items */}
          <div className="g flex gap-4">
            {data.map((item, idx) => (
              <div key={item.label} onClick={() => setActiveIdx(idx)} style={{ cursor: 'pointer' }}>
                <ChartMenu
                  data={{
                    label: item.label,
                    amount: item.amount,
                    icon_url: item.icon_url,
                    is: idx === activeIdx,
                  }}
                />
              </div>
            ))}
          </div>
        </CardHeader>
      </Card>
    </div>
  );
}

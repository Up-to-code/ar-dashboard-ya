/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { JSX } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  ReferenceLine,
  Tooltip,
} from "recharts";

interface ChartDataPoint {
  month: string;
  value: number;
}

interface TooltipProps {
  active?: boolean;
  payload?: Array<{
    value: number;
    payload: ChartDataPoint;
  }>;
  label?: string;
}

interface DotProps {
  cx?: number;
  cy?: number;
  payload?: ChartDataPoint;
}

const chartData: ChartDataPoint[] = [
  { month: "الأحد", value: 58 },
  { month: "الإثنين", value: 32 },
  { month: "الثلاثاء", value: 35 },
  { month: "الأربعاء", value: 5 },
  { month: "الخميس", value: 42 },
  { month: "الجمعة", value: 47 },
  { month: "السبت", value: 18 },
];

// Custom tooltip component
const CustomTooltip: React.FC<TooltipProps> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-800 text-white px-3 py-2 rounded-lg shadow-lg border border-slate-600">
        <p className="font-semibold text-sm">{label}</p>
        <p className="text-red-400 text-lg font-bold">{payload[0].value}</p>
      </div>
    );
  }
  return null;
};

// Custom dot for the peak point


export default function ChartDashboard(): JSX.Element {
  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={chartData}
          margin={{
            top: 40,
            right: 30,
            left: 20,
            bottom: 20,
          }}
        >
          {/* Grid lines - horizontal only */}
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#E5E7EB"
            horizontal={true}
            vertical={false}
          />

          {/* X Axis */}
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{
              fontSize: 12,
              fill: "#6B7280",
              fontFamily: "system-ui",
            }}
            dy={8}
          />

          {/* Y Axis */}
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{
              fontSize: 12,
              fill: "#6B7280",
            }}
            domain={[0, 60]}
            ticks={[0, 10, 20, 30, 40, 50, 60]}
          />

          {/* Tooltip */}
          <Tooltip
            content={<CustomTooltip />}
            cursor={{
              stroke: "#D1D5DB",
              strokeWidth: 1,
              strokeDasharray: "3 3",
            }}
            animationDuration={150}
          />

          {/* Reference line at 50 */}
          <ReferenceLine
            y={50}
            stroke="#D1D5DB"
            strokeDasharray="3 3"
            strokeWidth={1}
          />

          {/* Vertical reference line at peak */}
          <ReferenceLine
            x="الجمعة"
            stroke="#D1D5DB"
            strokeDasharray="3 3"
            strokeWidth={1}
          />

          {/* Main line - red color matching the image */}
          <Line
            type="monotone"
            dataKey="value"
            stroke="#E97F72"
            strokeWidth={3}
            dot={false}
            activeDot={{
              r: 5,
              fill: "#09244BB2",
              stroke: "#09244B",
              strokeWidth: 2,
            }}
          />

          {/* Peak point with custom label */}
          <Line
            type="monotone"
            dataKey="value"
            stroke="transparent"
            strokeWidth={0}
            // dot={(props: any) => {
            //   if (props.payload?.month === "الجمعة") {
            //     return <CustomPeakDot {...props} />;
            //   }
            //   // Return a hidden SVG element instead of null to satisfy type
            //   return <g style={{ display: 'none' }} />;
            // }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

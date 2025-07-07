"use client"

import React from "react"
import { CartesianGrid, Line, LineChart, XAxis, Tooltip, ResponsiveContainer } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ChartConfig, ChartContainer } from "@/components/ui/chart"

export const description = ""

const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--color-primary)",
  },
} satisfies ChartConfig

function CustomDot(props: { cx: number; cy: number }) {
  const { cx, cy } = props
  return (
    <g>
      <circle cx={cx} cy={cy} r={6} stroke="#5A6A85" strokeWidth={2} fill="#fff" />
    </g>
  )
}

function CustomTooltip({ active, payload, coordinate }: { active?: boolean; payload?: { value: number }[]; coordinate?: { x: number; y: number } }) {
  if (active && payload && payload.length && coordinate) {
    const style = {
      left: coordinate.x,
      top: coordinate.y - 40,
      position: 'absolute',
      transform: 'translate(-50%, 0)',
      pointerEvents: 'none',
      zIndex: 10,
    } as React.CSSProperties
    return (
      <div style={style} className="flex flex-col items-center">
        <div className="bg-[#5A6A85] text-white rounded-md px-3 py-1 text-xs font-bold text-center shadow-lg min-w-[60px]">
          {payload[0].value} طلب
        </div>
        <div className="w-2 h-2 bg-[#5A6A85] rotate-45 -mt-1" style={{ borderRadius: 2 }} />
      </div>
    )
  }
  return null
}

export function ChartLineDefault() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Line Chart</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <div style={{ position: 'relative', width: '100%', height: 240 }}>
            <ResponsiveContainer width="100%" height={240}>
              <LineChart
                data={chartData}
                margin={{ left: 12, right: 12 }}
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <Tooltip
                  cursor={false}
                  content={<CustomTooltip />}
                  wrapperStyle={{ position: 'absolute', zIndex: 10, pointerEvents: 'none' }}
                />
                <Line
                  dataKey="desktop"
                  type="natural"
                  stroke="var(--color-primary)"
                  strokeWidth={2}
                  dot={<CustomDot />}
                  activeDot={{ r: 8, fill: '#5A6A85', stroke: '#fff', strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

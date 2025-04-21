"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { mockGDPData } from "@/lib/mock-data"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts"

export function GDPAnalysis() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-medium">GDP Growth Analysis</CardTitle>
        <CardDescription>Quarterly GDP trends and recession indicators</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={mockGDPData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis domain={[22, 25]} tickFormatter={(value) => `$${value}T`} />
              <Tooltip
                formatter={(value: number) => [`$${value.toFixed(1)} trillion`, "GDP"]}
                labelFormatter={(label) => `Quarter: ${label}`}
              />
              <ReferenceLine y={23.5} stroke="#ff7300" strokeDasharray="3 3" label="Trend" />
              <Line type="monotone" dataKey="value" name="GDP" stroke="#8884d8" activeDot={{ r: 8 }} strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="text-sm text-muted-foreground mt-4">
          <h4 className="font-medium text-foreground mb-1">GDP Growth Insights:</h4>
          <p>
            GDP growth has been positive but shows signs of slowing in recent quarters. The current growth rate is below
            the long-term trend line (orange), which can be an early warning sign. Historically, GDP growth falling
            below trend for multiple quarters has preceded economic downturns. The current pattern suggests caution but
            not immediate alarm.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

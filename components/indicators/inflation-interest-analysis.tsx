"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { mockInflationData, mockInterestRateData } from "@/lib/mock-data"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"

export function InflationInterestAnalysis() {
  // Combine inflation and interest rate data
  const combinedData = mockInflationData
    .map((inflationPoint) => {
      const matchingInterestPoint = mockInterestRateData.find(
        (interestPoint) => interestPoint.date === inflationPoint.date,
      )

      return {
        date: inflationPoint.date,
        inflation: inflationPoint.value,
        interestRate: matchingInterestPoint ? matchingInterestPoint.value : null,
      }
    })
    .filter((point) => point.interestRate !== null)

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-medium">Inflation & Interest Rates</CardTitle>
        <CardDescription>Relationship between inflation and monetary policy</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={combinedData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="date"
                tickFormatter={(value) => {
                  const [year, month] = value.split("-")
                  return `${month}/${year.slice(2)}`
                }}
              />
              <YAxis />
              <Tooltip
                formatter={(value: number) => [`${value}%`, ""]}
                labelFormatter={(label) => {
                  const [year, month] = label.split("-")
                  const date = new Date(Number.parseInt(year), Number.parseInt(month) - 1)
                  return `${date.toLocaleString("default", { month: "long" })} ${year}`
                }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="inflation"
                name="Inflation Rate"
                stroke="#ff7300"
                activeDot={{ r: 8 }}
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="interestRate"
                name="Interest Rate"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="text-sm text-muted-foreground mt-4">
          <h4 className="font-medium text-foreground mb-1">Analysis:</h4>
          <p>
            The chart shows the relationship between inflation (orange) and interest rates (purple). Central banks
            typically raise interest rates to combat high inflation, which is evident in the data. The recent decline in
            inflation suggests monetary policy is having the desired effect, though interest rates remain elevated. The
            gap between these rates (real interest rate) is a critical indicator for financial stability.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

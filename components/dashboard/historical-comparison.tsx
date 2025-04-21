"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { mockHistoricalCrises } from "@/lib/mock-data"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

export function HistoricalComparison() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-medium">Historical Financial Crises</CardTitle>
        <CardDescription>Severity comparison of major financial crises</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={mockHistoricalCrises} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip
                formatter={(value: number) => [`${value}/100`, "Severity"]}
                labelFormatter={(label) => {
                  const crisis = mockHistoricalCrises.find((c) => c.year === label)
                  return crisis ? `${crisis.year}: ${crisis.name}` : label
                }}
              />
              <Bar dataKey="severity" name="Crisis Severity" fill="#FFD700" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="text-sm text-muted-foreground mt-4">
          <p>
            The 2008 Global Financial Crisis and the 1929 Great Depression stand as the most severe financial crises in
            modern history. India experienced a significant economic crisis in 1991, which led to major economic
            reforms. Current indicators suggest moderate risk levels that are below historical crisis thresholds, but
            vigilance is warranted given global economic uncertainties.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

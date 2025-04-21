"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react"

export function KeyIndicators() {
  const indicators = [
    {
      name: "GDP Growth",
      value: "6.5%",
      change: 0.3,
      trend: "up",
      description: "Year-over-year growth rate",
    },
    {
      name: "Inflation",
      value: "4.4%",
      change: -0.2,
      trend: "down",
      description: "Year-over-year change in CPI",
    },
    {
      name: "Repo Rate",
      value: "6.5%",
      change: 0,
      trend: "stable",
      description: "RBI policy rate",
    },
    {
      name: "Forex Reserves",
      value: "$648B",
      change: 1.2,
      trend: "up",
      description: "Foreign exchange reserves in USD",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-medium">Key Indian Economic Indicators</CardTitle>
        <CardDescription>Latest values and trends</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {indicators.map((indicator) => (
            <div key={indicator.name} className="flex items-center justify-between">
              <div>
                <div className="font-medium">{indicator.name}</div>
                <div className="text-xs text-muted-foreground">{indicator.description}</div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="text-xl font-bold">{indicator.value}</div>
                {indicator.trend !== "stable" ? (
                  <div
                    className={`flex items-center text-xs ${
                      indicator.trend === "up"
                        ? indicator.name === "GDP Growth" || indicator.name === "Forex Reserves"
                          ? "text-green-500"
                          : "text-red-500"
                        : indicator.name === "GDP Growth" || indicator.name === "Forex Reserves"
                          ? "text-red-500"
                          : "text-green-500"
                    }`}
                  >
                    {indicator.trend === "up" ? (
                      <ArrowUpIcon className="h-3 w-3 mr-1" />
                    ) : (
                      <ArrowDownIcon className="h-3 w-3 mr-1" />
                    )}
                    {Math.abs(indicator.change)}%
                  </div>
                ) : (
                  <div className="text-xs text-muted-foreground">Unchanged</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

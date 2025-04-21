"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { mockFeatureImportance } from "@/lib/mock-data"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts"

export function FeatureImportance() {
  // Sort features by importance
  const sortedFeatures = [...mockFeatureImportance].sort((a, b) => b.importance - a.importance)

  // Generate colors based on importance
  const getBarColor = (importance: number) => {
    if (importance > 0.25) return "#ef4444" // red-500
    if (importance > 0.15) return "#f97316" // orange-500
    if (importance > 0.1) return "#eab308" // yellow-500
    return "#22c55e" // green-500
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-medium">Feature Importance</CardTitle>
        <CardDescription>Key factors in crisis prediction model</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={sortedFeatures} layout="vertical" margin={{ top: 5, right: 30, left: 100, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
              <XAxis type="number" domain={[0, 0.3]} tickFormatter={(value) => `${(value * 100).toFixed(0)}%`} />
              <YAxis type="category" dataKey="feature" />
              <Tooltip formatter={(value: number) => [`${(value * 100).toFixed(1)}%`, "Importance"]} />
              <Bar dataKey="importance" name="Feature Importance" radius={[0, 4, 4, 0]}>
                {sortedFeatures.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={getBarColor(entry.importance)} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="text-sm text-muted-foreground mt-4">
          <p>
            Debt to GDP ratio and inflation rate are the most significant predictors of financial crises in our model.
            These factors have historically shown strong correlation with financial instability. Interest rates and
            unemployment also play important roles in the prediction algorithm.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

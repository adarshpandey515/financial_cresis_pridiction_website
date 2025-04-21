"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { mockModelAccuracy } from "@/lib/mock-data"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

export function ModelComparison() {
  const modelData = [
    { name: "Random Forest", accuracy: mockModelAccuracy.randomForest },
    { name: "XGBoost", accuracy: mockModelAccuracy.xgBoost },
    { name: "Ensemble", accuracy: mockModelAccuracy.ensemble },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-medium">Model Comparison</CardTitle>
        <CardDescription>Accuracy comparison of prediction models</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={modelData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis domain={[0.7, 1]} tickFormatter={(value) => `${(value * 100).toFixed(0)}%`} />
              <Tooltip formatter={(value: number) => [`${(value * 100).toFixed(1)}%`, "Accuracy"]} />
              <Bar dataKey="accuracy" name="Model Accuracy" fill="#8884d8" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="text-sm text-muted-foreground mt-4">
          <p>
            The ensemble model combines the strengths of Random Forest and XGBoost algorithms, achieving higher accuracy
            than either individual model. This approach reduces overfitting and improves prediction reliability across
            diverse economic conditions.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

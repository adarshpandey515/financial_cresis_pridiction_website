"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { mockIndicatorCorrelation } from "@/lib/mock-data"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function CorrelationHeatmap() {
  const indiaCorrelations = mockIndicatorCorrelation.filter((item) => item.country === "india")
  const usCorrelations = mockIndicatorCorrelation.filter((item) => item.country === "us")

  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle className="text-lg font-medium">Indicator Correlation Analysis</CardTitle>
        <CardDescription>Relationships between key economic indicators</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="india">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="india">India</TabsTrigger>
            <TabsTrigger value="us">United States</TabsTrigger>
          </TabsList>

          <TabsContent value="india">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {indiaCorrelations.map((item, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg border flex flex-col"
                  style={{
                    background: `linear-gradient(to right, ${
                      item.correlation > 0 ? "rgba(255, 215, 0, 0.1)" : "rgba(255, 0, 0, 0.1)"
                    }, ${item.correlation > 0 ? "rgba(255, 215, 0, 0.3)" : "rgba(255, 0, 0, 0.3)"})`,
                  }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{item.indicator1}</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-background">
                      {item.correlation > 0 ? "Positive" : "Negative"}
                    </span>
                  </div>
                  <div className="text-sm mb-2">
                    <span className="text-muted-foreground">Correlation with</span> {item.indicator2}
                  </div>
                  <div className="mt-auto flex items-center">
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${item.correlation > 0 ? "bg-primary" : "bg-destructive"}`}
                        style={{ width: `${Math.abs(item.correlation) * 100}%` }}
                      ></div>
                    </div>
                    <span className="ml-2 font-bold">{Math.abs(item.correlation).toFixed(2)}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-sm text-muted-foreground mt-4">
              <p>
                This correlation analysis reveals important relationships between Indian economic indicators. Strong
                positive correlations exist between GDP Growth and Stock Market performance, while the relationship
                between Repo Rate and Inflation shows the effectiveness of monetary policy. The correlation between
                Forex Reserves and Currency Strength highlights the importance of reserves in maintaining economic
                stability.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="us">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {usCorrelations.map((item, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg border flex flex-col"
                  style={{
                    background: `linear-gradient(to right, ${
                      item.correlation > 0 ? "rgba(255, 0, 0, 0.1)" : "rgba(255, 0, 0, 0.3)"
                    }, ${item.correlation > 0 ? "rgba(255, 0, 0, 0.3)" : "rgba(255, 0, 0, 0.5)"})`,
                  }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{item.indicator1}</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-background">
                      {item.correlation > 0 ? "Positive" : "Negative"}
                    </span>
                  </div>
                  <div className="text-sm mb-2">
                    <span className="text-muted-foreground">Correlation with</span> {item.indicator2}
                  </div>
                  <div className="mt-auto flex items-center">
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${item.correlation > 0 ? "bg-destructive" : "bg-destructive/50"}`}
                        style={{ width: `${Math.abs(item.correlation) * 100}%` }}
                      ></div>
                    </div>
                    <span className="ml-2 font-bold">{Math.abs(item.correlation).toFixed(2)}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-sm text-muted-foreground mt-4">
              <p>
                This correlation analysis reveals important relationships between US economic indicators. Strong
                positive correlations exist between GDP Growth and Stock Market performance, while negative correlations
                are observed between Unemployment and GDP Growth. The strongest correlation is between Debt to GDP ratio
                and Crisis Risk, highlighting the importance of debt levels in predicting financial instability.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

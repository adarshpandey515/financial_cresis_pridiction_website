"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { mockCrisisRiskScore } from "@/lib/mock-data"
import { Progress } from "@/components/ui/progress"
import { AlertTriangle, ShieldAlert, ShieldCheck } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function RiskGauge() {
  const getRiskLevel = (score: number) => {
    if (score < 30) return { level: "Low", color: "bg-green-500", icon: ShieldCheck }
    if (score < 60) return { level: "Moderate", color: "bg-yellow-500", icon: AlertTriangle }
    return { level: "High", color: "bg-red-500", icon: ShieldAlert }
  }

  const indiaRisk = mockCrisisRiskScore.india
  const usRisk = mockCrisisRiskScore.us

  const indiaRiskInfo = getRiskLevel(indiaRisk)
  const usRiskInfo = getRiskLevel(usRisk)

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Financial Crisis Risk</CardTitle>
        <CardDescription>Current risk assessment based on AI model</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="india">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="india">India</TabsTrigger>
            <TabsTrigger value="us">United States</TabsTrigger>
          </TabsList>

          <TabsContent value="india">
            <div className="flex flex-col items-center justify-center space-y-2">
              <div className="flex items-center justify-center w-24 h-24 rounded-full border-8 border-muted">
                <indiaRiskInfo.icon
                  className={`w-12 h-12 ${
                    indiaRiskInfo.level === "Low"
                      ? "text-green-500"
                      : indiaRiskInfo.level === "Moderate"
                        ? "text-yellow-500"
                        : "text-red-500"
                  }`}
                />
              </div>
              <div className="text-2xl font-bold">{indiaRiskInfo.level}</div>
              <div className="text-sm text-muted-foreground">Risk Score: {indiaRisk}/100</div>
              <Progress value={indiaRisk} className="w-full h-2 mt-2" />
              <div className="w-full flex justify-between text-xs text-muted-foreground mt-1">
                <span>Low Risk</span>
                <span>Moderate</span>
                <span>High Risk</span>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="us">
            <div className="flex flex-col items-center justify-center space-y-2">
              <div className="flex items-center justify-center w-24 h-24 rounded-full border-8 border-muted">
                <usRiskInfo.icon
                  className={`w-12 h-12 ${
                    usRiskInfo.level === "Low"
                      ? "text-green-500"
                      : usRiskInfo.level === "Moderate"
                        ? "text-yellow-500"
                        : "text-red-500"
                  }`}
                />
              </div>
              <div className="text-2xl font-bold">{usRiskInfo.level}</div>
              <div className="text-sm text-muted-foreground">Risk Score: {usRisk}/100</div>
              <Progress value={usRisk} className="w-full h-2 mt-2" />
              <div className="w-full flex justify-between text-xs text-muted-foreground mt-1">
                <span>Low Risk</span>
                <span>Moderate</span>
                <span>High Risk</span>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

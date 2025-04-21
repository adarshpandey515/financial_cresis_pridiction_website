"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { mockPredictionResults } from "@/lib/mock-data"
import { Progress } from "@/components/ui/progress"
import { AlertTriangle, ArrowUpRight, Clock, ShieldAlert, ShieldCheck } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function PredictionSummary() {
  const indiaPrediction = mockPredictionResults.india
  const usPrediction = mockPredictionResults.us

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "Low":
        return "text-green-500"
      case "Moderate":
        return "text-yellow-500"
      case "High":
        return "text-red-500"
      case "Severe":
        return "text-red-700"
      default:
        return "text-muted-foreground"
    }
  }

  const getRiskIcon = (risk: string) => {
    switch (risk) {
      case "Low":
        return <ShieldCheck className="h-8 w-8 text-green-500" />
      case "Moderate":
        return <AlertTriangle className="h-8 w-8 text-yellow-500" />
      case "High":
      case "Severe":
        return <ShieldAlert className="h-8 w-8 text-red-500" />
      default:
        return null
    }
  }

  const renderPredictionContent = (prediction: typeof indiaPrediction) => (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="flex flex-col space-y-4">
        <div className="flex items-center space-x-4">
          {getRiskIcon(prediction.currentRisk)}
          <div>
            <div className="text-sm text-muted-foreground">Current Risk Level</div>
            <div className={`text-3xl font-bold ${getRiskColor(prediction.currentRisk)}`}>{prediction.currentRisk}</div>
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm">Risk Score</span>
            <span className="text-sm font-medium">{prediction.riskScore}/100</span>
          </div>
          <Progress value={prediction.riskScore} className="h-2" />
          <div className="w-full flex justify-between text-xs text-muted-foreground mt-1">
            <span>Low</span>
            <span>Moderate</span>
            <span>High</span>
            <span>Severe</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground">Risk Trend</span>
            <div className="flex items-center">
              {prediction.riskTrend === "Increasing" ? (
                <ArrowUpRight className="h-4 w-4 mr-1 text-red-500" />
              ) : (
                <Clock className="h-4 w-4 mr-1 text-yellow-500" />
              )}
              <span className="font-medium">{prediction.riskTrend}</span>
            </div>
          </div>

          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground">Time Horizon</span>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
              <span className="font-medium">{prediction.timeHorizon}</span>
            </div>
          </div>

          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground">Confidence</span>
            <span className="font-medium">{(prediction.confidenceLevel * 100).toFixed(0)}%</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-medium mb-2">Key Risk Factors</h3>
        <div className="space-y-2">
          {prediction.keyFactors.map((factor, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-primary" />
              <span>{factor}</span>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <h3 className="font-medium mb-2">Prediction Interpretation</h3>
          <p className="text-sm text-muted-foreground">
            Our ensemble AI model indicates a {prediction.currentRisk.toLowerCase()} risk of financial crisis in the
            next {prediction.timeHorizon}. The model has identified several key risk factors, with{" "}
            {prediction.keyFactors[0].toLowerCase()} and {prediction.keyFactors[1].toLowerCase()} being the most
            significant contributors. The {prediction.riskTrend.toLowerCase()} trend suggests{" "}
            {prediction.riskTrend === "Increasing"
              ? "heightened vigilance is necessary"
              : prediction.riskTrend === "Stable"
                ? "continued monitoring is essential"
                : "some relief may be on the horizon"}
            .
          </p>
        </div>
      </div>
    </div>
  )

  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>AI Prediction Summary</CardTitle>
        <CardDescription>Financial crisis risk assessment based on ensemble model</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="india">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="india">India</TabsTrigger>
            <TabsTrigger value="us">United States</TabsTrigger>
          </TabsList>

          <TabsContent value="india">{renderPredictionContent(indiaPrediction)}</TabsContent>

          <TabsContent value="us">{renderPredictionContent(usPrediction)}</TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

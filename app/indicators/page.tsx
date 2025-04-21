import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CorrelationHeatmap } from "@/components/indicators/correlation-heatmap"
import { GDPAnalysis } from "@/components/indicators/gdp-analysis"
import { InflationInterestAnalysis } from "@/components/indicators/inflation-interest-analysis"

export default function IndicatorsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Economic Indicators</h1>
        <p className="text-muted-foreground">Detailed analysis of key economic indicators and their relationships</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <CorrelationHeatmap />
        <GDPAnalysis />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <InflationInterestAnalysis />

        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Understanding Economic Indicators</CardTitle>
            <CardDescription>How to interpret key indicators for crisis prediction</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Economic indicators provide crucial insights into the health of an economy and can signal potential
              financial crises before they occur. Understanding these indicators and their relationships is essential
              for effective risk assessment.
            </p>

            <div className="grid gap-4 md:grid-cols-2 mt-4">
              <div className="space-y-2">
                <h3 className="font-medium">GDP Growth</h3>
                <p className="text-sm text-muted-foreground">
                  Measures the total economic output of a country. Slowing or negative GDP growth can signal economic
                  weakness. Two consecutive quarters of negative growth technically defines a recession. Pre-crisis
                  indicators often include GDP growth falling below long-term trend.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium">Inflation</h3>
                <p className="text-sm text-muted-foreground">
                  Measures the rate at which prices increase over time. Both high inflation and deflation can signal
                  economic problems. Rapid changes in inflation rates often precede financial instability. Central banks
                  target moderate inflation (typically around 2%) to maintain economic stability.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium">Interest Rates</h3>
                <p className="text-sm text-muted-foreground">
                  Set by central banks to influence economic activity. Rising rates increase borrowing costs and can
                  slow economic growth. Inverted yield curves (short-term rates higher than long-term) have historically
                  preceded recessions. Rapid rate changes can stress financial systems.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium">Debt-to-GDP Ratio</h3>
                <p className="text-sm text-muted-foreground">
                  Measures a country's debt relative to its economic output. High and rising debt-to-GDP ratios can
                  indicate unsustainable borrowing. Research suggests ratios above 90% may impede economic growth. This
                  indicator has shown strong correlation with financial crisis risk.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium">Unemployment Rate</h3>
                <p className="text-sm text-muted-foreground">
                  Measures the percentage of the labor force without jobs. Rising unemployment can indicate economic
                  weakness and reduce consumer spending. Unemployment typically lags other indicators, rising after a
                  crisis has begun. However, sudden increases can accelerate economic decline.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium">Credit Growth</h3>
                <p className="text-sm text-muted-foreground">
                  Measures the expansion of lending in an economy. Rapid credit growth often precedes financial crises.
                  When credit grows significantly faster than GDP, it may indicate a credit bubble. Monitoring private
                  sector credit is particularly important for crisis prediction.
                </p>
              </div>
            </div>

            <p className="mt-4">
              While individual indicators provide valuable insights, it's their relationships and combined signals that
              offer the most powerful predictive capability. Our AI models analyze these complex relationships to
              identify patterns associated with financial instability, providing early warning of potential crises.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

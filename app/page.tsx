import { HistoricalComparison } from "@/components/dashboard/historical-comparison"
import { KeyIndicators } from "@/components/dashboard/key-indicators"
import { MarketOverview } from "@/components/dashboard/market-overview"
import { NewsSentiment } from "@/components/dashboard/news-sentiment"
import { RiskGauge } from "@/components/dashboard/risk-gauge"

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Financial market overview and crisis risk assessment for India and US</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <MarketOverview />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <RiskGauge />
        <KeyIndicators />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <NewsSentiment />
        <HistoricalComparison />
      </div>
    </div>
  )
}

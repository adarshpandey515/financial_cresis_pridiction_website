"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  mockUSStockData,
  mockUSGDPData,
  mockUSInflationData,
  mockUSInterestRateData,
  mockIndiaStockData,
  mockIndiaGDPData,
  mockIndiaInflationData,
  mockIndiaInterestRateData,
} from "@/lib/mock-data"
import { formatNumber } from "@/lib/utils"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"

export function MarketOverview() {
  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Market Overview</CardTitle>
        <CardDescription>Key economic indicators for India and US</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="india">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="india">India</TabsTrigger>
            <TabsTrigger value="us">United States</TabsTrigger>
          </TabsList>

          <TabsContent value="india">
            <Tabs defaultValue="stock">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="stock">Nifty 50</TabsTrigger>
                <TabsTrigger value="gdp">GDP Growth</TabsTrigger>
                <TabsTrigger value="inflation">Inflation</TabsTrigger>
                <TabsTrigger value="interest">Repo Rate</TabsTrigger>
              </TabsList>
              <TabsContent value="stock" className="space-y-4">
                <div className="h-[300px] mt-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={mockIndiaStockData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis
                        dataKey="date"
                        tickFormatter={(value) => {
                          const date = new Date(value)
                          return `${date.getMonth() + 1}/${date.getFullYear().toString().slice(2)}`
                        }}
                      />
                      <YAxis domain={["auto", "auto"]} />
                      <Tooltip
                        formatter={(value: number) => [`${formatNumber(value)}`, "Index Value"]}
                        labelFormatter={(label) => `Date: ${label}`}
                      />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="value"
                        name="Nifty 50"
                        stroke="#FFD700"
                        activeDot={{ r: 8 }}
                        strokeWidth={2}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="text-sm text-muted-foreground mt-2">
                  <h4 className="font-medium text-foreground mb-1">Chart Analysis:</h4>
                  <p>
                    The Nifty 50 index has shown a steady upward trend over the past year, reflecting strong market
                    confidence in the Indian economy. The index has gained approximately 15% over this period,
                    outperforming many global indices. This growth has been supported by robust corporate earnings,
                    foreign institutional investments, and positive economic indicators.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="gdp" className="space-y-4">
                <div className="h-[300px] mt-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={mockIndiaGDPData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis domain={["auto", "auto"]} />
                      <Tooltip
                        formatter={(value: number) => [`${formatNumber(value)} trillion`, "GDP"]}
                        labelFormatter={(label) => `Quarter: ${label}`}
                      />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="value"
                        name="GDP (Trillion USD)"
                        stroke="#FFD700"
                        strokeWidth={2}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="text-sm text-muted-foreground mt-2">
                  <h4 className="font-medium text-foreground mb-1">Chart Analysis:</h4>
                  <p>
                    India's GDP has been growing steadily, making it one of the fastest-growing major economies in the
                    world. The current growth rate of approximately 6.5% year-over-year is above the global average.
                    This growth is driven by services sector expansion, increased infrastructure spending, and rising
                    domestic consumption. However, challenges remain in terms of job creation and income inequality.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="inflation" className="space-y-4">
                <div className="h-[300px] mt-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={mockIndiaInflationData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis
                        dataKey="date"
                        tickFormatter={(value) => {
                          const [year, month] = value.split("-")
                          return `${month}/${year.slice(2)}`
                        }}
                      />
                      <YAxis domain={["auto", "auto"]} />
                      <Tooltip
                        formatter={(value: number) => [`${value}%`, "Inflation Rate"]}
                        labelFormatter={(label) => {
                          const [year, month] = label.split("-")
                          const date = new Date(Number.parseInt(year), Number.parseInt(month) - 1)
                          return `${date.toLocaleString("default", { month: "long" })} ${year}`
                        }}
                      />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="value"
                        name="Inflation Rate (%)"
                        stroke="#FF0000"
                        strokeWidth={2}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="text-sm text-muted-foreground mt-2">
                  <h4 className="font-medium text-foreground mb-1">Chart Analysis:</h4>
                  <p>
                    Inflation in India has been gradually decreasing from its peak in early 2023, suggesting that
                    monetary policy measures by the Reserve Bank of India are having an effect. However, at 4.4%, it
                    remains within the RBI's target band of 2-6%. Food inflation continues to be volatile, affected by
                    seasonal factors and supply chain disruptions. Core inflation has been more stable, indicating
                    underlying price stability.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="interest" className="space-y-4">
                <div className="h-[300px] mt-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={mockIndiaInterestRateData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis
                        dataKey="date"
                        tickFormatter={(value) => {
                          const [year, month] = value.split("-")
                          return `${month}/${year.slice(2)}`
                        }}
                      />
                      <YAxis domain={["auto", "auto"]} />
                      <Tooltip
                        formatter={(value: number) => [`${value}%`, "Repo Rate"]}
                        labelFormatter={(label) => {
                          const [year, month] = label.split("-")
                          const date = new Date(Number.parseInt(year), Number.parseInt(month) - 1)
                          return `${date.toLocaleString("default", { month: "long" })} ${year}`
                        }}
                      />
                      <Legend />
                      <Line type="monotone" dataKey="value" name="RBI Repo Rate (%)" stroke="#FFD700" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="text-sm text-muted-foreground mt-2">
                  <h4 className="font-medium text-foreground mb-1">Chart Analysis:</h4>
                  <p>
                    The Reserve Bank of India has maintained the repo rate at 6.5% for seven consecutive policy
                    meetings, indicating a pause in the monetary tightening cycle. This stability in interest rates aims
                    to balance inflation control with economic growth support. The RBI's stance remains "withdrawal of
                    accommodation," suggesting a cautious approach to future rate changes based on inflation trends and
                    economic indicators.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </TabsContent>

          <TabsContent value="us">
            <Tabs defaultValue="stock">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="stock">S&P 500</TabsTrigger>
                <TabsTrigger value="gdp">GDP Growth</TabsTrigger>
                <TabsTrigger value="inflation">Inflation</TabsTrigger>
                <TabsTrigger value="interest">Interest Rates</TabsTrigger>
              </TabsList>
              <TabsContent value="stock" className="space-y-4">
                <div className="h-[300px] mt-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={mockUSStockData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis
                        dataKey="date"
                        tickFormatter={(value) => {
                          const date = new Date(value)
                          return `${date.getMonth() + 1}/${date.getFullYear().toString().slice(2)}`
                        }}
                      />
                      <YAxis domain={["auto", "auto"]} />
                      <Tooltip
                        formatter={(value: number) => [`${formatNumber(value)}`, "Index Value"]}
                        labelFormatter={(label) => `Date: ${label}`}
                      />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="value"
                        name="S&P 500"
                        stroke="#FF0000"
                        activeDot={{ r: 8 }}
                        strokeWidth={2}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="text-sm text-muted-foreground mt-2">
                  <h4 className="font-medium text-foreground mb-1">Chart Analysis:</h4>
                  <p>
                    The S&P 500 index has shown a steady upward trend over the past year, with a notable acceleration in
                    the first quarter of 2024. This suggests strong market confidence despite economic uncertainties.
                    However, historical data indicates that extended bull markets without corrections can signal
                    potential overvaluation, and current price-to-earnings ratios are above historical averages.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="gdp" className="space-y-4">
                <div className="h-[300px] mt-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={mockUSGDPData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis domain={["auto", "auto"]} />
                      <Tooltip
                        formatter={(value: number) => [`${formatNumber(value)} trillion`, "GDP"]}
                        labelFormatter={(label) => `Quarter: ${label}`}
                      />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="value"
                        name="GDP (Trillion USD)"
                        stroke="#FF0000"
                        strokeWidth={2}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="text-sm text-muted-foreground mt-2">
                  <h4 className="font-medium text-foreground mb-1">Chart Analysis:</h4>
                  <p>
                    US GDP growth has been positive but slowing in recent quarters. The current growth rate of
                    approximately 2.1% year-over-year is below the long-term average of 2.5%, which could indicate
                    economic headwinds. Consumer spending remains resilient, but manufacturing activity has shown signs
                    of weakness. The labor market continues to be strong, though job growth has moderated from its
                    post-pandemic recovery pace.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="inflation" className="space-y-4">
                <div className="h-[300px] mt-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={mockUSInflationData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis
                        dataKey="date"
                        tickFormatter={(value) => {
                          const [year, month] = value.split("-")
                          return `${month}/${year.slice(2)}`
                        }}
                      />
                      <YAxis domain={["auto", "auto"]} />
                      <Tooltip
                        formatter={(value: number) => [`${value}%`, "Inflation Rate"]}
                        labelFormatter={(label) => {
                          const [year, month] = label.split("-")
                          const date = new Date(Number.parseInt(year), Number.parseInt(month) - 1)
                          return `${date.toLocaleString("default", { month: "long" })} ${year}`
                        }}
                      />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="value"
                        name="Inflation Rate (%)"
                        stroke="#FF0000"
                        strokeWidth={2}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="text-sm text-muted-foreground mt-2">
                  <h4 className="font-medium text-foreground mb-1">Chart Analysis:</h4>
                  <p>
                    Inflation has been trending downward from its peak in early 2023, suggesting that monetary policy
                    measures are having an effect. However, at 3.2%, it remains above the Federal Reserve's target of
                    2%. Core inflation, which excludes volatile food and energy prices, has been more persistent,
                    indicating underlying price pressures in services and housing. The Fed's focus remains on bringing
                    inflation sustainably back to target.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="interest" className="space-y-4">
                <div className="h-[300px] mt-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={mockUSInterestRateData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis
                        dataKey="date"
                        tickFormatter={(value) => {
                          const [year, month] = value.split("-")
                          return `${month}/${year.slice(2)}`
                        }}
                      />
                      <YAxis domain={["auto", "auto"]} />
                      <Tooltip
                        formatter={(value: number) => [`${value}%`, "Interest Rate"]}
                        labelFormatter={(label) => {
                          const [year, month] = label.split("-")
                          const date = new Date(Number.parseInt(year), Number.parseInt(month) - 1)
                          return `${date.toLocaleString("default", { month: "long" })} ${year}`
                        }}
                      />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="value"
                        name="Federal Funds Rate (%)"
                        stroke="#FF0000"
                        strokeWidth={2}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="text-sm text-muted-foreground mt-2">
                  <h4 className="font-medium text-foreground mb-1">Chart Analysis:</h4>
                  <p>
                    Interest rates have plateaued after a period of rapid increases and have recently begun to decrease.
                    The current rate of 5.0% represents a restrictive monetary policy stance. The Federal Reserve has
                    signaled potential rate cuts later in 2024, contingent on continued progress in inflation reduction.
                    Markets are currently pricing in 2-3 rate cuts this year, though the timing remains uncertain.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

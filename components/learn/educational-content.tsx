import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function EducationalContent() {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Understanding Financial Crises</CardTitle>
        <CardDescription>Educational resources on financial crisis mechanics and history</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="what">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="what">What Are Financial Crises?</TabsTrigger>
            <TabsTrigger value="causes">Common Causes</TabsTrigger>
            <TabsTrigger value="history">Historical Perspective</TabsTrigger>
          </TabsList>

          <TabsContent value="what" className="space-y-4 mt-4">
            <h3 className="text-lg font-medium">What Are Financial Crises?</h3>
            <p>
              Financial crises are significant disruptions to financial markets characterized by sharp declines in asset
              prices and the failure of businesses, especially financial institutions. They typically involve a loss of
              paper wealth but can also impact the real economy, leading to economic recessions or depressions.
            </p>

            <h4 className="font-medium mt-4">Key Characteristics:</h4>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                <span className="font-medium text-foreground">Systemic Risk:</span> Threats to the entire financial
                system rather than isolated failures.
              </li>
              <li>
                <span className="font-medium text-foreground">Contagion:</span> Problems spreading from one sector or
                region to others.
              </li>
              <li>
                <span className="font-medium text-foreground">Liquidity Shortages:</span> Difficulty converting assets
                to cash without significant loss.
              </li>
              <li>
                <span className="font-medium text-foreground">Credit Crunches:</span> Sudden reduction in the
                availability of loans and credit.
              </li>
              <li>
                <span className="font-medium text-foreground">Market Volatility:</span> Extreme price fluctuations in
                financial markets.
              </li>
            </ul>

            <p className="mt-4">
              Financial crises can take various forms, including banking crises, currency crises, sovereign debt crises,
              and asset price bubbles. They often involve complex interactions between financial markets, institutions,
              and the broader economy.
            </p>
          </TabsContent>

          <TabsContent value="causes" className="space-y-4 mt-4">
            <h3 className="text-lg font-medium">Common Causes of Financial Crises</h3>
            <p>
              Financial crises rarely have a single cause. Instead, they typically result from a combination of factors
              that create vulnerabilities in the financial system and economy.
            </p>

            <div className="grid gap-4 md:grid-cols-2 mt-4">
              <div className="space-y-2">
                <h4 className="font-medium">Asset Bubbles</h4>
                <p className="text-sm text-muted-foreground">
                  Rapid increases in asset prices disconnected from fundamental values. When bubbles burst, they can
                  trigger widespread financial distress. Examples include the housing bubble preceding the 2008 crisis
                  and the dot-com bubble of the late 1990s.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">Excessive Debt</h4>
                <p className="text-sm text-muted-foreground">
                  High leverage in households, corporations, or governments. When economic conditions change, heavily
                  indebted entities may struggle to meet obligations. Debt-fueled booms often precede major financial
                  crises.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">Financial Innovation & Complexity</h4>
                <p className="text-sm text-muted-foreground">
                  New financial instruments that outpace regulatory frameworks. Complex products can obscure risks and
                  create interconnections in the financial system. The proliferation of mortgage-backed securities and
                  derivatives played a key role in the 2008 crisis.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">Regulatory Failures</h4>
                <p className="text-sm text-muted-foreground">
                  Inadequate oversight of financial institutions and markets. Regulatory gaps or lax enforcement can
                  allow risks to accumulate. Deregulation without appropriate safeguards has contributed to multiple
                  crises.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">Macroeconomic Imbalances</h4>
                <p className="text-sm text-muted-foreground">
                  Persistent economic distortions such as large current account deficits or surpluses. These imbalances
                  can create vulnerabilities to external shocks. Global imbalances contributed to the conditions
                  preceding the 2008 crisis.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">Psychological Factors</h4>
                <p className="text-sm text-muted-foreground">
                  Behavioral biases like herding, overconfidence, and short-term thinking. These psychological factors
                  can amplify market movements and contribute to bubbles and panics. Market sentiment can shift rapidly
                  from greed to fear.
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="history" className="space-y-4 mt-4">
            <h3 className="text-lg font-medium">Historical Perspective on Financial Crises</h3>
            <p>
              Financial crises have occurred throughout history, with remarkable similarities despite different economic
              and technological contexts. Understanding past crises provides valuable insights for predicting and
              mitigating future ones.
            </p>

            <div className="space-y-4 mt-4">
              <div className="space-y-2">
                <h4 className="font-medium">The Great Depression (1929-1939)</h4>
                <p className="text-sm text-muted-foreground">
                  Following the stock market crash of 1929, a severe worldwide economic depression took hold. Bank
                  failures, monetary contraction, and policy mistakes deepened the crisis. The Great Depression led to
                  fundamental changes in financial regulation, including the creation of the SEC and FDIC in the United
                  States.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">Latin American Debt Crisis (1980s)</h4>
                <p className="text-sm text-muted-foreground">
                  Multiple Latin American countries faced sovereign debt crises after borrowing heavily in the 1970s.
                  Rising global interest rates and falling commodity prices made debt servicing impossible. This crisis
                  highlighted the risks of foreign currency-denominated debt and led to the "lost decade" for Latin
                  American development.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">Asian Financial Crisis (1997-1998)</h4>
                <p className="text-sm text-muted-foreground">
                  Beginning with Thailand's currency collapse, the crisis spread throughout Southeast Asia. Fixed
                  exchange rates, short-term foreign borrowing, and weak financial systems contributed to the crisis.
                  The Asian crisis led many emerging economies to build large foreign exchange reserves as a buffer
                  against future crises.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">Global Financial Crisis (2007-2009)</h4>
                <p className="text-sm text-muted-foreground">
                  Triggered by the U.S. subprime mortgage market collapse, this crisis spread globally through
                  interconnected financial markets. Complex securitization, excessive leverage, and regulatory failures
                  amplified the crisis. It led to the most significant regulatory overhaul since the Great Depression,
                  including the Dodd-Frank Act and Basel III standards.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">COVID-19 Economic Crisis (2020)</h4>
                <p className="text-sm text-muted-foreground">
                  Unlike previous crises, this was triggered by a global pandemic rather than financial system
                  weaknesses. Massive fiscal and monetary interventions prevented a financial collapse despite severe
                  economic contraction. The crisis highlighted the importance of policy flexibility and the potential
                  for non-financial shocks to threaten financial stability.
                </p>
              </div>
            </div>

            <p className="mt-4">
              Despite their differences, these crises share common patterns: periods of excessive optimism and
              risk-taking followed by sudden shifts in confidence, liquidity problems, and contagion effects. These
              recurring patterns form the basis for our crisis prediction models.
            </p>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

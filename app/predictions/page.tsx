import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CountryRiskRanking } from "@/components/predictions/country-risk-ranking"
import { FeatureImportance } from "@/components/predictions/feature-importance"
import { ModelComparison } from "@/components/predictions/model-comparison"
import { PredictionSummary } from "@/components/predictions/prediction-summary"

export default function PredictionsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">AI Predictions</h1>
        <p className="text-muted-foreground">Financial crisis prediction models and analysis</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <PredictionSummary />
        <ModelComparison />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <FeatureImportance />
        <CountryRiskRanking />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Model Methodology</CardTitle>
          <CardDescription>How our AI prediction system works</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Our financial crisis prediction system uses an ensemble of machine learning models trained on historical
            economic data spanning multiple decades and countries. The system analyzes patterns that preceded previous
            financial crises to identify early warning signals in current economic conditions.
          </p>

          <h3 className="text-lg font-medium mt-4">Key Components:</h3>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <h4 className="font-medium">1. Data Collection</h4>
              <p className="text-sm text-muted-foreground">
                We aggregate data from multiple sources including central banks, statistical agencies, and financial
                institutions. Key indicators include GDP growth, inflation rates, interest rates, debt levels, and
                market indices.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium">2. Feature Engineering</h4>
              <p className="text-sm text-muted-foreground">
                Raw economic data is transformed into meaningful features that capture economic relationships and
                trends. We calculate ratios, growth rates, and volatility measures that have proven predictive power.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium">3. Model Training</h4>
              <p className="text-sm text-muted-foreground">
                Multiple machine learning algorithms (Random Forest, XGBoost) are trained on historical data with known
                crisis outcomes. Models are optimized using cross-validation to prevent overfitting.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium">4. Ensemble Prediction</h4>
              <p className="text-sm text-muted-foreground">
                Individual model predictions are combined using a weighted ensemble approach that leverages the
                strengths of each algorithm. This improves accuracy and reduces false positives/negatives.
              </p>
            </div>
          </div>

          <p className="mt-4">
            The system is continuously updated with new economic data and periodically retrained to incorporate the
            latest economic relationships. While no prediction system is perfect, our approach has demonstrated strong
            performance in identifying periods of elevated financial risk.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

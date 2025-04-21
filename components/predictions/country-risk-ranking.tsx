"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { mockCountryRiskRanking } from "@/lib/mock-data"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"

export function CountryRiskRanking() {
  // Sort countries by risk score (highest first)
  const sortedCountries = [...mockCountryRiskRanking].sort((a, b) => b.riskScore - a.riskScore)

  const getRiskColor = (score: number) => {
    if (score < 40) return "bg-green-500"
    if (score < 50) return "bg-yellow-500"
    if (score < 60) return "bg-orange-500"
    return "bg-red-500"
  }

  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle className="text-lg font-medium">Country Risk Ranking</CardTitle>
        <CardDescription>Financial crisis risk assessment by country</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Rank</TableHead>
              <TableHead>Country</TableHead>
              <TableHead>Risk Score</TableHead>
              <TableHead className="w-[40%]">Risk Level</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedCountries.map((country, index) => (
              <TableRow key={country.country}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>{country.country}</TableCell>
                <TableCell>{country.riskScore}/100</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Progress value={country.riskScore} className={`h-2 ${getRiskColor(country.riskScore)}`} />
                    <span className="text-xs w-12">
                      {country.riskScore < 40
                        ? "Low"
                        : country.riskScore < 50
                          ? "Moderate"
                          : country.riskScore < 60
                            ? "High"
                            : "Severe"}
                    </span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="text-sm text-muted-foreground mt-4">
          <p>
            This ranking is based on our ensemble model applied to each country's economic indicators. Italy and India
            show the highest risk scores, while Canada and the United States demonstrate relatively lower risk profiles.
            These assessments consider debt levels, inflation, interest rates, and other key economic factors.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

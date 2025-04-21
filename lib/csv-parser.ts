export type IndianFinancialData = {
  date: string
  forwardPremiaDollar1Month: number
  forwardPremiaDollar3Month: number
  forwardPremiaDollar6Month: number
  reverseRepoRate: number
  marginalStandingFacilityRate: number
  bankRate: number
  baseRate: number
  treasuryBill91DayYield: number
  treasuryBill182DayYield: number
  treasuryBill364DayYield: number
  gSec10YearYield: number
  cashReserveRatio: number
  statutoryLiquidityRatio: number
  policyRepoRate: number
  standingDepositFacilityRate: number
  forexReservesUSDMillion: number
  gdpBillionUSD: number
  perCapitaUSD: number
  percentageGrowth: number
  inflationAnnualPercentChange: number
  niftyOpen: number
  niftyHigh: number
  niftyLow: number
  niftyClose: number
  sensexOpen: number
  sensexHigh: number
  sensexLow: number
  sensexClose: number
  usGdpBillionUSD: number
  usPerCapitaUSD: number
  usGdpAnnualPercentChange: number
  usInflationAnnualPercentChange: number
  crisisLabel: number
}

export async function fetchIndianFinancialData(): Promise<IndianFinancialData[]> {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/adarshpandey515/financial_crises_predictor/main/merged_data_with_labels.csv",
    )
    const csvText = await response.text()
    return parseIndianCSV(csvText)
  } catch (error) {
    console.error("Error fetching Indian financial data:", error)
    return []
  }
}

function parseIndianCSV(csvText: string): IndianFinancialData[] {
  const lines = csvText.split("\n")
  const headers = lines[0].split(",")

  return lines
    .slice(1) // Skip header row
    .filter((line) => line.trim() !== "") // Skip empty lines
    .map((line) => {
      const values = line.split(",")

      // Handle potential missing values
      const getValue = (index: number): number => {
        const val = values[index]?.trim()
        return val && val !== "" ? Number(val) : 0
      }

      return {
        date: values[0] || "",
        forwardPremiaDollar1Month: getValue(1),
        forwardPremiaDollar3Month: getValue(2),
        forwardPremiaDollar6Month: getValue(3),
        reverseRepoRate: getValue(4),
        marginalStandingFacilityRate: getValue(5),
        bankRate: getValue(6),
        baseRate: getValue(7),
        treasuryBill91DayYield: getValue(8),
        treasuryBill182DayYield: getValue(9),
        treasuryBill364DayYield: getValue(10),
        gSec10YearYield: getValue(11),
        cashReserveRatio: getValue(12),
        statutoryLiquidityRatio: getValue(13),
        policyRepoRate: getValue(14),
        standingDepositFacilityRate: getValue(15),
        forexReservesUSDMillion: getValue(16),
        gdpBillionUSD: getValue(17),
        perCapitaUSD: getValue(18),
        percentageGrowth: getValue(19),
        inflationAnnualPercentChange: getValue(20),
        niftyOpen: getValue(21),
        niftyHigh: getValue(22),
        niftyLow: getValue(23),
        niftyClose: getValue(24),
        sensexOpen: getValue(26),
        sensexHigh: getValue(27),
        sensexLow: getValue(28),
        sensexClose: getValue(29),
        usGdpBillionUSD: getValue(30),
        usPerCapitaUSD: getValue(31),
        usGdpAnnualPercentChange: getValue(32),
        usInflationAnnualPercentChange: getValue(35),
        crisisLabel: getValue(42),
      }
    })
}

export function getLatestIndianData(data: IndianFinancialData[]): IndianFinancialData | null {
  if (data.length === 0) return null
  return data[data.length - 1]
}

export function getCrisisYears(data: IndianFinancialData[]): string[] {
  return data
    .filter((point) => point.crisisLabel === 1)
    .map((point) => point.date.split("-")[0])
    .filter((year, index, self) => self.indexOf(year) === index) // Unique years
}

export function calculateAverages(data: IndianFinancialData[]): Record<string, number> {
  if (data.length === 0) return {}

  const sum: Record<string, number> = {}
  const keys = Object.keys(data[0]).filter(
    (key) => key !== "date" && key !== "crisisLabel" && typeof data[0][key as keyof IndianFinancialData] === "number",
  )

  data.forEach((point) => {
    keys.forEach((key) => {
      const value = point[key as keyof IndianFinancialData] as number
      sum[key] = (sum[key] || 0) + value
    })
  })

  const result: Record<string, number> = {}
  keys.forEach((key) => {
    result[key] = sum[key] / data.length
  })

  return result
}

export function getIndianDataByYear(data: IndianFinancialData[], year: string): IndianFinancialData[] {
  return data.filter((point) => point.date.startsWith(year))
}

export function getIndianDataByDateRange(
  data: IndianFinancialData[],
  startYear: number,
  endYear: number,
): IndianFinancialData[] {
  return data.filter((point) => {
    const year = Number.parseInt(point.date.split("-")[0])
    return year >= startYear && year <= endYear
  })
}

export function getKeyIndicators(
  data: IndianFinancialData | null,
): { name: string; value: string; change: number; trend: string; description: string }[] {
  if (!data) return []

  // Hardcoded changes for demonstration
  return [
    {
      name: "GDP Growth",
      value: `${data.percentageGrowth.toFixed(1)}%`,
      change: 0.3,
      trend: "up",
      description: "Year-over-year growth rate",
    },
    {
      name: "Inflation",
      value: `${data.inflationAnnualPercentChange.toFixed(1)}%`,
      change: -0.2,
      trend: "down",
      description: "Year-over-year change in CPI",
    },
    {
      name: "Repo Rate",
      value: `${data.policyRepoRate.toFixed(2)}%`,
      change: 0.25,
      trend: "up",
      description: "RBI policy rate",
    },
    {
      name: "Forex Reserves",
      value: `$${(data.forexReservesUSDMillion / 1000).toFixed(1)}B`,
      change: 1.2,
      trend: "up",
      description: "Foreign exchange reserves in USD",
    },
  ]
}

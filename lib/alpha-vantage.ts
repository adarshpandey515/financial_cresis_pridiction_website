const API_KEY = "MTIT4H40NUTD2BT9"
const BASE_URL = "https://www.alphavantage.co/query"

export type TimeSeriesData = {
  date: string
  open: number
  high: number
  low: number
  close: number
  volume: number
}

export type EconomicIndicator = {
  date: string
  value: number
}

// US Stock Market Data (S&P 500)
export async function fetchUSStockData(): Promise<TimeSeriesData[]> {
  try {
    const response = await fetch(`${BASE_URL}?function=TIME_SERIES_DAILY&symbol=SPY&apikey=${API_KEY}`)
    const data = await response.json()

    if (data["Error Message"]) {
      throw new Error(data["Error Message"])
    }

    const timeSeriesData = data["Time Series (Daily)"]
    if (!timeSeriesData) {
      console.error("No time series data found")
      return []
    }

    return Object.entries(timeSeriesData)
      .map(([date, values]: [string, any]) => ({
        date,
        open: Number.parseFloat(values["1. open"]),
        high: Number.parseFloat(values["2. high"]),
        low: Number.parseFloat(values["3. low"]),
        close: Number.parseFloat(values["4. close"]),
        volume: Number.parseFloat(values["5. volume"]),
      }))
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      .slice(-30) // Last 30 days
  } catch (error) {
    console.error("Error fetching US stock data:", error)
    return []
  }
}

// US GDP Data
export async function fetchUSGDP(): Promise<EconomicIndicator[]> {
  try {
    const response = await fetch(`${BASE_URL}?function=REAL_GDP&interval=quarterly&apikey=${API_KEY}`)
    const data = await response.json()

    if (data["Error Message"]) {
      throw new Error(data["Error Message"])
    }

    if (!data.data) {
      console.error("No GDP data found")
      return []
    }

    return data.data
      .map((item: any) => ({
        date: item.date,
        value: Number.parseFloat(item.value),
      }))
      .sort((a: any, b: any) => new Date(a.date).getTime() - new Date(b.date).getTime())
      .slice(-20) // Last 20 quarters
  } catch (error) {
    console.error("Error fetching US GDP data:", error)
    return []
  }
}

// US Inflation Data
export async function fetchUSInflation(): Promise<EconomicIndicator[]> {
  try {
    const response = await fetch(`${BASE_URL}?function=INFLATION&apikey=${API_KEY}`)
    const data = await response.json()

    if (data["Error Message"]) {
      throw new Error(data["Error Message"])
    }

    if (!data.data) {
      console.error("No inflation data found")
      return []
    }

    return data.data
      .map((item: any) => ({
        date: item.date,
        value: Number.parseFloat(item.value),
      }))
      .sort((a: any, b: any) => new Date(a.date).getTime() - new Date(b.date).getTime())
      .slice(-20) // Last 20 months
  } catch (error) {
    console.error("Error fetching US inflation data:", error)
    return []
  }
}

// US Interest Rate Data
export async function fetchUSInterestRate(): Promise<EconomicIndicator[]> {
  try {
    const response = await fetch(`${BASE_URL}?function=FEDERAL_FUNDS_RATE&interval=monthly&apikey=${API_KEY}`)
    const data = await response.json()

    if (data["Error Message"]) {
      throw new Error(data["Error Message"])
    }

    if (!data.data) {
      console.error("No interest rate data found")
      return []
    }

    return data.data
      .map((item: any) => ({
        date: item.date,
        value: Number.parseFloat(item.value),
      }))
      .sort((a: any, b: any) => new Date(a.date).getTime() - new Date(b.date).getTime())
      .slice(-20) // Last 20 months
  } catch (error) {
    console.error("Error fetching US interest rate data:", error)
    return []
  }
}

// US Unemployment Rate
export async function fetchUSUnemployment(): Promise<EconomicIndicator[]> {
  try {
    const response = await fetch(`${BASE_URL}?function=UNEMPLOYMENT&apikey=${API_KEY}`)
    const data = await response.json()

    if (data["Error Message"]) {
      throw new Error(data["Error Message"])
    }

    if (!data.data) {
      console.error("No unemployment data found")
      return []
    }

    return data.data
      .map((item: any) => ({
        date: item.date,
        value: Number.parseFloat(item.value),
      }))
      .sort((a: any, b: any) => new Date(a.date).getTime() - new Date(b.date).getTime())
      .slice(-20) // Last 20 months
  } catch (error) {
    console.error("Error fetching US unemployment data:", error)
    return []
  }
}

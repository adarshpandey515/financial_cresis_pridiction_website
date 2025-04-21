import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Financial Crisis Predictor - India & US",
  description: "AI-driven financial crisis prediction and analysis for Indian and US economies",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <div className="min-h-screen bg-background">
            <Navbar />
            <main className="container mx-auto py-6 px-4">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

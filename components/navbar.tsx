"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ModeToggle } from "@/components/mode-toggle"
import { BarChart3, Brain, Home, TrendingUp } from "lucide-react"

const navItems = [
  {
    name: "Dashboard",
    href: "/",
    icon: Home,
  },
  {
    name: "AI Predictions",
    href: "/predictions",
    icon: Brain,
  },
  {
    name: "Indicators",
    href: "/indicators",
    icon: TrendingUp,
  },
  {
    name: "Learn & News",
    href: "/learn",
    icon: BarChart3,
  },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">Financial Crisis Predictor</span>
          <span className="text-sm font-medium text-muted-foreground ml-2">India & US</span>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary",
                  isActive ? "text-primary" : "text-muted-foreground",
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.name}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-4">
          <ModeToggle />
        </div>
      </div>

      <div className="md:hidden container overflow-auto pb-2">
        <nav className="flex items-center space-x-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
                  isActive ? "bg-muted text-primary" : "text-muted-foreground",
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.name}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}

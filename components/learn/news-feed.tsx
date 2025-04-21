"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { mockNewsItems } from "@/lib/mock-data"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function NewsFeed() {
  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case "positive":
        return "bg-green-500"
      case "negative":
        return "bg-red-500"
      case "neutral":
        return "bg-blue-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-medium">Financial News</CardTitle>
        <CardDescription>Latest financial news with sentiment analysis</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="all">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="positive">Positive</TabsTrigger>
            <TabsTrigger value="negative">Negative</TabsTrigger>
            <TabsTrigger value="neutral">Neutral</TabsTrigger>
          </TabsList>

          {["all", "positive", "negative", "neutral"].map((filter) => (
            <TabsContent key={filter} value={filter} className="space-y-4 mt-4">
              {mockNewsItems
                .filter((item) => filter === "all" || item.sentiment === filter)
                .map((item) => (
                  <div key={item.id} className="flex items-start space-x-2 pb-3 border-b last:border-0">
                    <div className={`w-2 h-2 rounded-full mt-2 ${getSentimentColor(item.sentiment)}`} />
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium">{item.title}</h3>
                        <Badge
                          variant={
                            item.sentiment === "positive"
                              ? "success"
                              : item.sentiment === "negative"
                                ? "destructive"
                                : "outline"
                          }
                          className="ml-2"
                        >
                          {item.sentiment}
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center text-sm text-muted-foreground mt-1">
                        <div>
                          {item.source} • {item.date}
                        </div>
                        <a href={item.url} className="flex items-center hover:underline">
                          Read more <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  )
}

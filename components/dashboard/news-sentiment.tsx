"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { mockNewsItems } from "@/lib/mock-data"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function NewsSentiment() {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle className="text-lg font-medium">Financial News & Sentiment</CardTitle>
        <CardDescription>Recent financial news with AI sentiment analysis</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="all">
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="india">India</TabsTrigger>
            <TabsTrigger value="us">US</TabsTrigger>
          </TabsList>

          {["all", "india", "us"].map((filter) => (
            <TabsContent key={filter} value={filter} className="space-y-4">
              {mockNewsItems
                .filter((item) => filter === "all" || item.country === filter)
                .map((item) => (
                  <div key={item.id} className="flex flex-col space-y-1 pb-3 border-b last:border-0">
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
                    <div className="flex justify-between items-center text-sm text-muted-foreground">
                      <div>
                        {item.source} • {item.date}
                      </div>
                      <a href={item.url} className="flex items-center hover:underline">
                        Read more <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
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

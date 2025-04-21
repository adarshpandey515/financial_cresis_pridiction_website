import { EducationalContent } from "@/components/learn/educational-content"
import { NewsFeed } from "@/components/learn/news-feed"

export default function LearnPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Learn & News</h1>
        <p className="text-muted-foreground">Educational resources and latest financial news</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <EducationalContent />
        <NewsFeed />
      </div>
    </div>
  )
}

import { DashboardShell } from "@/components/dashboard-shell"
import { NewsCategories } from "@/components/news-categories"
import { NewsFeed } from "@/components/news-feed"
import { GlobalNews } from "@/components/global-news"
import { PremiumFeatures } from "@/components/premium-features"

export default function Dashboard() {
  return (
    <DashboardShell>
      <div className="grid gap-8">
        <NewsCategories />
        <NewsFeed />
        <div className="grid gap-8 md:grid-cols-2">
          <GlobalNews title="Global Trending" />
          <GlobalNews title="Editor's Picks" />
        </div>
        <PremiumFeatures />
      </div>
    </DashboardShell>
  )
}

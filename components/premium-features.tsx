"use client"

import { ZapIcon, SparklesIcon, BookOpenIcon, BrainIcon, RssIcon, ArrowRightIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

export function PremiumFeatures() {
  const features = [
    {
      icon: SparklesIcon,
      title: "Personalized AI Recommendations",
      description: "Get news tailored to your interests with our advanced AI algorithm.",
    },
    {
      icon: BookOpenIcon,
      title: "Unlimited Article Summaries",
      description: "Summarize any article with our AI to save time and get key insights.",
    },
    {
      icon: BrainIcon,
      title: "Advanced Analysis",
      description: "Receive in-depth analysis and context for complex news stories.",
    },
    {
      icon: RssIcon,
      title: "Custom News Feeds",
      description: "Create unlimited custom feeds from your favorite sources.",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <Card className="border-none shadow-md overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600" />

      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-100 text-yellow-700 dark:bg-yellow-900/50 dark:text-yellow-400">
            <ZapIcon className="h-5 w-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <CardTitle>Premium AI Features</CardTitle>
              <Badge className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white">Pro</Badge>
            </div>
            <CardDescription>
              Upgrade to unlock advanced AI-powered features and get more from your news.
            </CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <motion.div
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full border-yellow-100 hover:border-yellow-300 dark:border-yellow-900/50 dark:hover:border-yellow-800 transition-colors group">
                <CardContent className="p-4">
                  <feature.icon className="mb-3 h-8 w-8 text-yellow-500 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors" />
                  <h3 className="mb-1 font-medium group-hover:text-yellow-700 dark:group-hover:text-yellow-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-6 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Upgrade now</span> and get 20% off your first 3 months!
          </div>
          <Button className="w-full sm:w-auto bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white shadow-md hover:shadow-lg transition-shadow">
            <ZapIcon className="mr-2 h-5 w-5" />
            Upgrade to Pro
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"

export function NewsCategories() {
  const [activeCategory, setActiveCategory] = useState("technology")
  const [isClient, setIsClient] = useState(false)

  // Prevent hydration mismatch
  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null
  }

  return (
    <Card className="overflow-hidden border-none shadow-md">
      <CardContent className="p-0">
        <Tabs defaultValue="technology" value={activeCategory} onValueChange={setActiveCategory} className="w-full">
          <div className="flex items-center justify-between border-b px-4">
            <TabsList className="h-16 bg-transparent">
              <TabsTrigger
                value="technology"
                className="relative h-full data-[state=active]:text-yellow-600 dark:data-[state=active]:text-yellow-400"
              >
                Technology
                {activeCategory === "technology" && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-500"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </TabsTrigger>
              <TabsTrigger
                value="business"
                className="relative h-full data-[state=active]:text-yellow-600 dark:data-[state=active]:text-yellow-400"
              >
                Business
                {activeCategory === "business" && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-500"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </TabsTrigger>
              <TabsTrigger
                value="science"
                className="relative h-full data-[state=active]:text-yellow-600 dark:data-[state=active]:text-yellow-400"
              >
                Science
                {activeCategory === "science" && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-500"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </TabsTrigger>
              <TabsTrigger
                value="health"
                className="relative h-full data-[state=active]:text-yellow-600 dark:data-[state=active]:text-yellow-400"
              >
                Health
                {activeCategory === "health" && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-500"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </TabsTrigger>
            </TabsList>
            <Button
              variant="outline"
              size="sm"
              className="mr-2 border-yellow-200 text-yellow-700 hover:bg-yellow-50 hover:text-yellow-800 dark:border-yellow-900 dark:text-yellow-400 dark:hover:bg-yellow-900/30"
            >
              View All
            </Button>
          </div>
        </Tabs>
      </CardContent>
    </Card>
  )
}

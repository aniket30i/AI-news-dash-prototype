"use client"

import { useState } from "react"
import { X, Plus, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { motion } from "framer-motion"

const availableCategories = [
  { id: "technology", name: "Technology", color: "bg-blue-500" },
  { id: "business", name: "Business", color: "bg-green-500" },
  { id: "science", name: "Science", color: "bg-purple-500" },
  { id: "health", name: "Health", color: "bg-red-500" },
  { id: "entertainment", name: "Entertainment", color: "bg-pink-500" },
  { id: "sports", name: "Sports", color: "bg-orange-500" },
  { id: "politics", name: "Politics", color: "bg-indigo-500" },
  { id: "environment", name: "Environment", color: "bg-emerald-500" },
  { id: "education", name: "Education", color: "bg-cyan-500" },
  { id: "travel", name: "Travel", color: "bg-amber-500" },
  { id: "food", name: "Food", color: "bg-lime-500" },
  { id: "fashion", name: "Fashion", color: "bg-rose-500" },
]

export function CategoryManagement({ onClose }: { onClose: () => void }) {
  const [selectedCategories, setSelectedCategories] = useState([
    { id: "technology", name: "Technology", color: "bg-blue-500" },
    { id: "business", name: "Business", color: "bg-green-500" },
    { id: "science", name: "Science", color: "bg-purple-500" },
    { id: "health", name: "Health", color: "bg-red-500" },
  ])

  const [newCategory, setNewCategory] = useState("")

  const handleAddCategory = () => {
    if (newCategory && !selectedCategories.some((c) => c.id === newCategory) && selectedCategories.length < 4) {
      const categoryToAdd = availableCategories.find((c) => c.id === newCategory)
      if (categoryToAdd) {
        setSelectedCategories([...selectedCategories, categoryToAdd])
        setNewCategory("")
      }
    }
  }

  const handleRemoveCategory = (categoryId: string) => {
    setSelectedCategories(selectedCategories.filter((c) => c.id !== categoryId))
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Category Settings</h2>
        <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full hover:bg-yellow-500/10">
          <X className="h-5 w-5" />
        </Button>
      </div>

      <p className="text-sm text-muted-foreground">
        Select up to 4 categories to display on your dashboard. These will be used to personalize your news feed.
      </p>

      <div className="space-y-6">
        <div className="space-y-3">
          <Label htmlFor="categories" className="text-base">
            Your Categories
          </Label>
          <motion.div className="flex flex-wrap gap-2" variants={container} initial="hidden" animate="show">
            {selectedCategories.map((category) => (
              <motion.div
                key={category.id}
                variants={item}
                className="group flex items-center rounded-full bg-yellow-100 px-3 py-1.5 text-sm dark:bg-yellow-900/40"
              >
                <div className={`mr-1.5 h-2.5 w-2.5 rounded-full ${category.color}`} />
                <span className="mr-1">{category.name}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-5 w-5 rounded-full p-0 opacity-60 transition-opacity hover:bg-yellow-200 hover:opacity-100 dark:hover:bg-yellow-800"
                  onClick={() => handleRemoveCategory(category.id)}
                >
                  <X className="h-3 w-3" />
                  <span className="sr-only">Remove {category.name}</span>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="flex gap-2">
          <div className="flex-1">
            <Select value={newCategory} onValueChange={setNewCategory} disabled={selectedCategories.length >= 4}>
              <SelectTrigger className="h-10">
                <SelectValue placeholder="Add category" />
              </SelectTrigger>
              <SelectContent>
                {availableCategories
                  .filter((c) => !selectedCategories.some((sc) => sc.id === c.id))
                  .map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      <div className="flex items-center">
                        <div className={`mr-2 h-2.5 w-2.5 rounded-full ${category.color}`} />
                        {category.name}
                      </div>
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>
          </div>
          <Button
            onClick={handleAddCategory}
            disabled={
              !newCategory || selectedCategories.some((c) => c.id === newCategory) || selectedCategories.length >= 4
            }
            className="h-10 bg-yellow-500 hover:bg-yellow-600 text-white"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="pt-4">
        <Button className="w-full h-11 bg-yellow-500 hover:bg-yellow-600 text-white" onClick={onClose}>
          <Check className="mr-2 h-4 w-4" />
          Save Changes
        </Button>
      </div>
    </div>
  )
}

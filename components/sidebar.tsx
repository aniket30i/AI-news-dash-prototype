"use client"

import { useState, useRef, useEffect } from "react"
import {
  NewspaperIcon,
  StarIcon,
  TrendingUpIcon,
  BookmarkIcon,
  ZapIcon,
  LayoutDashboardIcon,
  ChevronRightIcon,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { CategoryManagement } from "@/components/category-management"
import { motion, AnimatePresence } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Sidebar({
  open,
  setOpen,
}: {
  open: boolean
  setOpen: (open: boolean) => void
}) {
  const [showSettings, setShowSettings] = useState(false)
  const [activeItem, setActiveItem] = useState("dashboard")
  const sidebarRef = useRef<HTMLDivElement>(null)

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node) && window.innerWidth < 1024) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [setOpen])

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboardIcon },
    { id: "trending", label: "Trending Now", icon: TrendingUpIcon },
    { id: "favorites", label: "Favorites", icon: StarIcon },
    { id: "bookmarks", label: "Saved Articles", icon: BookmarkIcon },
    { id: "categories", label: "Categories", icon: NewspaperIcon, onClick: () => setShowSettings(true) },
  ]

  const userCategories = [
    { id: "tech", label: "Technology", color: "bg-blue-500" },
    { id: "business", label: "Business", color: "bg-green-500" },
    { id: "science", label: "Science", color: "bg-purple-500" },
    { id: "health", label: "Health", color: "bg-red-500" },
  ]

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-20 bg-background/80 backdrop-blur-sm lg:hidden"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      <motion.div
        ref={sidebarRef}
        initial={false}
        animate={{
          x: open ? 0 : -320,
          width: 280,
          transition: {
            type: "spring",
            stiffness: 400,
            damping: 40,
          },
        }}
        className="fixed inset-y-0 left-0 z-30 flex flex-col border-r bg-background/95 backdrop-blur-sm lg:static"
      >
        <div className="flex h-16 items-center border-b px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-yellow-500 text-white">
              <ZapIcon className="h-5 w-5" />
            </div>
            <span className="text-lg font-bold">NewsAI</span>
          </div>
        </div>

        <ScrollArea className="flex-1 px-3 py-4">
          <div className="space-y-1 pb-4">
            {menuItems.map((item) => (
              <Button
                key={item.id}
                variant={activeItem === item.id ? "secondary" : "ghost"}
                className={`w-full justify-start ${
                  activeItem === item.id
                    ? "bg-yellow-500/10 text-yellow-700 hover:bg-yellow-500/20 dark:text-yellow-300"
                    : ""
                }`}
                onClick={() => {
                  setActiveItem(item.id)
                  if (item.onClick) item.onClick()
                }}
              >
                <item.icon className={`mr-2 h-5 w-5 ${activeItem === item.id ? "text-yellow-500" : ""}`} />
                {item.label}
                {item.id === "categories" && <ChevronRightIcon className="ml-auto h-4 w-4" />}
              </Button>
            ))}
          </div>

          <div className="py-4">
            <h3 className="px-4 text-sm font-medium text-muted-foreground">Your Categories</h3>
            <div className="mt-2 space-y-1">
              {userCategories.map((category) => (
                <Button key={category.id} variant="ghost" className="w-full justify-start">
                  <div className={`mr-2 h-3 w-3 rounded-full ${category.color}`} />
                  {category.label}
                </Button>
              ))}
            </div>
          </div>
        </ScrollArea>

        <div className="border-t p-4">
          <div className="mb-4 flex items-center gap-3 px-2">
            <Avatar className="h-9 w-9 border-2 border-yellow-500/20">
              <AvatarImage src="/placeholder.svg?height=36&width=36" alt="User" />
              <AvatarFallback className="bg-yellow-500/10 text-yellow-700 dark:text-yellow-300">JD</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-sm font-medium">John Doe</span>
              <span className="text-xs text-muted-foreground">Pro Member</span>
            </div>
          </div>

          <Button className="w-full bg-yellow-500 text-white hover:bg-yellow-600">
            <ZapIcon className="mr-2 h-5 w-5" />
            Upgrade Plan
          </Button>
        </div>
      </motion.div>

      <AnimatePresence>
        {showSettings && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", duration: 0.3 }}
              className="w-full max-w-md rounded-xl border bg-card p-6 shadow-lg"
            >
              <CategoryManagement onClose={() => setShowSettings(false)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

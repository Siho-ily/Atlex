"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

function TabsList({ className, ...props }) {
  return (
    <div
      className={cn(
        "inline-flex items-center justify-start gap-1 rounded-lg bg-transparent p-1 text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

function TabsTrigger({ className, isActive, ...props }) {
  return (
    <button
      type="button"
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        isActive
          ? "bg-muted/30 font-bold text-foreground shadow-sm"
          : "text-muted-foreground/60 hover:bg-muted/50 hover:text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

export { TabsList, TabsTrigger }

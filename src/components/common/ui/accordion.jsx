"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

function Accordion({ className, ...props }) {
  return <div className={cn("space-y-4", className)} {...props} />
}

function AccordionItem({ className, isOpen, ...props }) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-card transition-all duration-300",
        isOpen ? "shadow-sm" : "",
        className
      )}
      {...props}
    />
  )
}

function AccordionTrigger({ className, isOpen, children, ...props }) {
  return (
    <div
      className={cn(
        "flex w-full items-center justify-between p-4 font-medium transition-all",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown
        className={cn(
          "h-4 w-4 shrink-0 transition-transform duration-300",
          isOpen ? "rotate-180" : ""
        )}
      />
    </div>
  )
}

function AccordionContent({ className, isOpen, children, ...props }) {
  return (
    <div
      className={cn(
        "overflow-hidden transition-all duration-300",
        isOpen ? "max-h-[1000px] opacity-100 pb-4 px-4" : "max-h-0 opacity-0",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }

"use client"

import { ToggleGroup } from "@base-ui/react/toggle-group"
import { Toggle } from "@base-ui/react/toggle"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/common/ui/button"

function OptionGroup({ className, ...props }) {
  return (
    <ToggleGroup
      toggleMultiple={false}
      data-slot="option-group"
      className={cn("group/option-group inline-flex items-center gap-1", className)}
      {...props}
    />
  )
}

function OptionGroupItem({ className, variant = "ghost", size = "default", ...props }) {
  return (
    <Toggle
      data-slot="option-group-item"
      className={cn(
        buttonVariants({ variant, size }),
        "aria-pressed:bg-primary aria-pressed:text-primary-foreground",
        "group-has-[[aria-pressed=true]]/option-group:aria-[pressed=false]:opacity-40 transition-opacity",
        className
      )}
      {...props}
    />
  )
}

export { OptionGroup, OptionGroupItem }

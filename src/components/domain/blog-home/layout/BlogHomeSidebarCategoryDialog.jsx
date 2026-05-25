"use client";

import { FolderOpen } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/common/ui/dialog";
import { Textfield } from "@/components/common/ui/textfield";

const defaultTitle = "\uCE74\uD14C\uACE0\uB9AC";
const defaultDescription =
  "\uCE74\uD14C\uACE0\uB9AC \uBAA8\uB2EC\uC740 \uC77C\uB2E8 \uD45C\uC2DC\uB9CC \uD574\uB450\uACE0, \uB0B4\uBD80 \uCF58\uD150\uCE20\uB294 \uCD94\uD6C4 \uCD94\uAC00\uD560 \uC608\uC815\uC785\uB2C8\uB2E4.";
const defaultBody =
  "\uACF5\uD1B5 Dialog \uC5F0\uACB0\uC740 \uC644\uB8CC\uB41C \uC0C1\uD0DC\uC785\uB2C8\uB2E4.";

const dialogIconMap = {
  category: FolderOpen,
};

export default function BlogHomeSidebarCategoryDialog({
  actionId = "category",
  ariaLabel,
  label,
  title = defaultTitle,
  description = defaultDescription,
}) {
  const Icon = dialogIconMap[actionId];

  return (
    <Dialog>
      <DialogTrigger
        aria-label={ariaLabel ?? label}
        className="inline-flex size-9 items-center justify-center rounded-full border border-border bg-card p-0 font-semibold text-foreground shadow-none transition-colors hover:bg-card"
      >
        {Icon ? <Icon className="size-4" /> : null}
        <span className="sr-only">{label}</span>
      </DialogTrigger>

      <DialogContent
        size="md"
        className="max-h-[70vh] gap-5 overflow-y-auto rounded-3xl p-5 sm:p-6"
      >
        <DialogHeader className="pr-8">
          <DialogTitle className="text-lg font-bold tracking-tight">
            {title}
          </DialogTitle>
          <DialogDescription className="leading-6">
            {description}
          </DialogDescription>
        </DialogHeader>

        <Textfield variant="muted" size="sm">
          {defaultBody}
        </Textfield>
      </DialogContent>
    </Dialog>
  );
}

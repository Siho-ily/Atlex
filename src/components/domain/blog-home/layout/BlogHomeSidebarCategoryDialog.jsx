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
import BlogHomePillButton from "@/components/domain/blog-home/ui/BlogHomePillButton";

const defaultTitle = "카테고리";
const defaultDescription =
  "카테고리 모달은 일단 표시만 하고, 세부 내용은 추후 추가할 예정이다.";
const defaultBody = "공통 Dialog 연결은 완료된 상태이다.";

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
        render={
          <BlogHomePillButton
            ariaLabel={ariaLabel ?? label}
            icon={Icon}
            iconOnly
            label={label}
            tone="neutral"
            size="md"
          />
        }
      />

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

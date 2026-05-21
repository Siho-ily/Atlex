"use client";

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
import BlogHomeTagChip from "@/components/domain/blog-home/ui/BlogHomeTagChip";

const defaultTitle = "\uCE74\uD14C\uACE0\uB9AC";
const defaultDescription =
  "\uD604\uC7AC \uBE14\uB85C\uADF8 \uD648\uC5D0\uC11C \uC0AC\uC6A9 \uC911\uC778 \uD0DC\uADF8 \uBAA9\uB85D\uC744 \uD55C \uBC88\uC5D0 \uD655\uC778\uD560 \uC218 \uC788\uB2E4.";
const emptyText = "\uD45C\uC2DC\uD560 \uCE74\uD14C\uACE0\uB9AC\uAC00 \uC5C6\uB2E4.";

export default function BlogHomeSidebarCategoryDialog({
  ariaLabel,
  icon,
  items = [],
  label,
  title = defaultTitle,
  description = defaultDescription,
}) {
  return (
    <Dialog>
      <DialogTrigger
        render={
          <BlogHomePillButton
            ariaLabel={ariaLabel ?? label}
            icon={icon}
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

        {items.length > 0 ? (
          <div className="flex flex-col gap-3">
            {items.map((item) => (
              <BlogHomeTagChip
                key={item.id}
                active={item.active}
                count={item.count}
                fullWidth
                label={item.label}
              />
            ))}
          </div>
        ) : (
          <Textfield variant="muted" size="sm">
            {emptyText}
          </Textfield>
        )}
      </DialogContent>
    </Dialog>
  );
}

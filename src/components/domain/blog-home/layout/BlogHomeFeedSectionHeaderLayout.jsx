import { ChevronDown, EllipsisVertical } from "lucide-react";

import { Button } from "@/components/common/ui/button";
import { Textfield } from "@/components/common/ui/textfield";

const defaultEyebrowLabel = "Archive";
const defaultTitle = "전체 글";

export default function BlogHomeFeedSectionHeaderLayout({
  eyebrowLabel = defaultEyebrowLabel,
  filterLabel,
  title = defaultTitle,
  totalCount,
}) {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
      <div className="space-y-2">
        <Textfield className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
          {eyebrowLabel}
        </Textfield>
        <h2 className="text-3xl font-bold tracking-tight text-foreground">
          {title} <span className="text-primary">{totalCount}</span>
        </h2>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <Button
          type="button"
          variant="secondary"
          className="h-11 gap-2 rounded-lg border border-border/10 bg-sidebar-primary px-4 text-sm font-semibold text-sidebar-primary-foreground hover:bg-sidebar-primary hover:text-sidebar-primary-foreground"
        >
          <span>{filterLabel}</span>
          <ChevronDown className="size-4 text-muted-foreground" />
        </Button>

        <Button
          type="button"
          variant="secondary"
          aria-label="Feed options"
          className="h-11 w-11 rounded-lg border border-border/10 bg-sidebar-primary text-muted-foreground hover:bg-sidebar-primary hover:text-muted-foreground"
        >
          <EllipsisVertical className="size-4" />
        </Button>
      </div>
    </div>
  );
}

import { BarChart3, FolderOpen, UserPlus } from "lucide-react";

import { Textfield } from "@/components/common/ui/textfield";
import BlogHomeSidebarCategoryDialog from "@/components/domain/blog-home/layout/BlogHomeSidebarCategoryDialog";
import BlogHomePillButton from "@/components/domain/blog-home/ui/BlogHomePillButton";

const actionIconMap = {
  follow: UserPlus,
  category: FolderOpen,
  graph: BarChart3,
};

const defaultTitle = "Quick Actions";

export default function BlogHomeSidebarQuickActionsLayout({
  actions,
  categoryItems = [],
  title = defaultTitle,
}) {
  return (
    <div className="mt-5 space-y-2">
      <Textfield className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
        {title}
      </Textfield>

      {/* 액션은 데이터로 관리하고 카테고리만 모달 트리거로 분기한다. */}
      <div className="flex flex-wrap items-center gap-3">
        {actions.map(({ id, label }) => {
          const Icon = actionIconMap[id];

          if (id === "category") {
            return (
              <BlogHomeSidebarCategoryDialog
                key={id}
                ariaLabel={label}
                icon={Icon}
                items={categoryItems}
                label={label}
              />
            );
          }

          return (
            <BlogHomePillButton
              key={id}
              ariaLabel={label}
              icon={Icon}
              iconOnly
              label={label}
              tone="neutral"
              size="md"
            />
          );
        })}
      </div>
    </div>
  );
}

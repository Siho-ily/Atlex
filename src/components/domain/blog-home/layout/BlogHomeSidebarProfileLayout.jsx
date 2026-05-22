import { AtSign, BadgeCheck } from "lucide-react";

import { Capsule } from "@/components/common/ui/capsule";
import { Textfield } from "@/components/common/ui/textfield";
import BlogHomeSidebarCard from "@/components/domain/blog-home/layout/BlogHomeSidebarCard";
import BlogHomeSidebarQuickActionsLayout from "@/components/domain/blog-home/layout/BlogHomeSidebarQuickActionsLayout";
import BlogHomeSidebarStatsLayout from "@/components/domain/blog-home/layout/BlogHomeSidebarStatsLayout";
import BlogHomeProfileAvatar from "@/components/domain/blog-home/ui/BlogHomeProfileAvatar";

export default function BlogHomeSidebarProfileLayout({ profile }) {
  const summaryStats = profile.stats.filter((stat) => stat.id !== "posts");

  return (
    <BlogHomeSidebarCard>
      <div className="flex flex-col gap-4">
        <BlogHomeProfileAvatar
          className="h-24 w-24 self-center text-xs leading-4 xl:self-start"
          size="lg"
        />

        <div className="space-y-3">
          <Capsule className="gap-2 rounded-full border-border bg-background px-3 py-1 text-xs font-semibold text-muted-foreground hover:bg-background">
            <AtSign className="size-3.5" />
            {profile.userId}
          </Capsule>

          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              {profile.nickname}
            </h2>
            <BadgeCheck className="size-5 text-primary" />
          </div>

          <Textfield variant="muted" size="sm" className="leading-6">
            {profile.bio}
          </Textfield>
        </div>
      </div>

      <BlogHomeSidebarStatsLayout stats={summaryStats} />
      <BlogHomeSidebarQuickActionsLayout actions={profile.quickActions} />
    </BlogHomeSidebarCard>
  );
}

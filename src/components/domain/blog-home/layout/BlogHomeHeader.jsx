// 상단 헤더
import { Bell, Search } from "lucide-react";

import BlogHomePillButton from "@/components/domain/blog-home/ui/BlogHomePillButton";
import BlogHomeProfileAvatar from "@/components/domain/blog-home/ui/BlogHomeProfileAvatar";

const toolbarIconMap = {
  search: Search,
  alert: Bell,
};

export default function BlogHomeHeader({
  logoLabel,
  blogTitle,
  searchPlaceholder,
  toolbarButtons,
  profileLabel,
}) {
  return (
    <header className="border-b border-border pb-6">
      <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
        <div className="flex flex-wrap items-center gap-4">
          <span className="text-4xl font-black tracking-tight text-foreground">
            {logoLabel}
          </span>
          <span className="hidden h-6 w-px bg-border md:block" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
              User Blog
            </p>
            <h1 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {blogTitle}
            </h1>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-end gap-2">
          {/* 툴바 버튼 렌더링 */}
          {toolbarButtons.map(({ id, label, tone }) => {
            const Icon = toolbarIconMap[id];

            return (
              <BlogHomePillButton
                key={id}
                icon={Icon}
                label={label}
                tone={tone}
              />
            );
          })}

          {/* 프로필 플레이스홀더 버튼 */}
          <button type="button" aria-label={profileLabel} className="rounded-full">
            <BlogHomeProfileAvatar alt={profileLabel} size="sm" />
          </button>
        </div>
      </div>
    </header>
  );
}

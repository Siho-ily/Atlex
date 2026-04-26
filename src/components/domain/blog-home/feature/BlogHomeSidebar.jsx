// 프로필 요약 사이드바
import { AtSign, BadgeCheck, BarChart3, FolderOpen, UserPlus } from "lucide-react";

import BlogHomePillButton from "@/components/domain/blog-home/ui/BlogHomePillButton";
import BlogHomeProfileAvatar from "@/components/domain/blog-home/ui/BlogHomeProfileAvatar";
import BlogHomeTagChip from "@/components/domain/blog-home/ui/BlogHomeTagChip";

const actionIconMap = {
  follow: UserPlus,
  category: FolderOpen,
  graph: BarChart3,
};

export default function BlogHomeSidebar({ profile, tags }) {
  return (
    <aside className="space-y-4">
      <section className="rounded-3xl border border-border bg-card p-5">
        <div className="flex flex-col gap-4">
          <BlogHomeProfileAvatar
            className="h-24 w-24 self-center text-xs leading-4 xl:self-start"
            size="lg"
          />

          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold text-muted-foreground">
              <AtSign className="size-3.5" />
              {profile.userId}
            </div>

            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-bold tracking-tight text-foreground">
                {profile.nickname}
              </h2>
              <BadgeCheck className="size-5 text-primary" />
            </div>

            <p className="text-sm leading-6 text-muted-foreground">{profile.bio}</p>
          </div>
        </div>

        {/* 통계 카드 */}
        <dl className="mt-5 grid grid-cols-3 gap-2">
          {profile.stats.map((stat) => (
            <div
              key={stat.id}
              className="rounded-2xl border border-border bg-background px-3 py-3"
            >
              <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {stat.label}
              </dt>
              <dd className="mt-2 text-xl font-bold text-foreground">{stat.value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-5 space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
            Quick Actions
          </p>

          {/* 액션 자리 표시 */}
          {profile.quickActions.map(({ id, label, tone }) => {
            const Icon = actionIconMap[id];

            return (
              <BlogHomePillButton
                key={id}
                className="w-full justify-start"
                icon={Icon}
                label={label}
                tone={tone}
                size="md"
              />
            );
          })}
        </div>
      </section>

      <section className="rounded-3xl border border-border bg-card p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="text-lg font-bold text-foreground">태그</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              글 목록에서 쓰는 태그들을 한 번에 훑어볼 수 있게 둔 영역이다.
            </p>
          </div>
        </div>

        {/* 첫 태그 active 상태 예시 */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <BlogHomeTagChip
              key={tag.id}
              active={tag.active}
              count={tag.count}
              label={tag.label}
            />
          ))}
        </div>
      </section>
    </aside>
  );
}

// 메인 피드 영역
import {
  Bookmark,
  ChevronDown,
  EllipsisVertical,
  Heart,
  ImageIcon,
  Lock,
  MessageSquare,
} from "lucide-react";

import BlogHomePagination from "@/components/domain/blog-home/ui/BlogHomePagination";
import { cn } from "@/lib/utils";

const titleClampStyle = {
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 2,
  overflow: "hidden",
};

const excerptClampStyle = {
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 3,
  overflow: "hidden",
};

function ReactionBadge({ active = false, icon: Icon, value }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 text-xs font-semibold",
        active ? "text-destructive" : "text-muted-foreground"
      )}
    >
      <Icon className="size-3.5" />
      {value}
    </span>
  );
}

export default function BlogHomeFeed({ feed }) {
  // JSX 가독성용 구조 분해
  const { filterLabel, pagination, posts, totalCount } = feed;

  return (
    <section className="space-y-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
            Archive
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            전체 글 <span className="text-primary">{totalCount}</span>
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            className="inline-flex h-11 items-center gap-2 rounded-lg border border-border/10 bg-sidebar-primary px-4 text-sm font-semibold text-sidebar-primary-foreground"
          >
            <span>{filterLabel}</span>
            <ChevronDown className="size-4 text-muted-foreground" />
          </button>

          <button
            type="button"
            aria-label="피드 옵션"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border/10 bg-sidebar-primary text-muted-foreground"
          >
            <EllipsisVertical className="size-4" />
          </button>
        </div>
      </div>

      {/* 게시물 map 렌더링 */}
      <div className="overflow-hidden rounded-3xl border border-border bg-card/40">
        {posts.map((post, index) => {
          // 썸네일 유무 체크
          const hasThumbnail = Boolean(post.thumbnail);

          return (
            <article
              key={post.id}
              className={cn(
                "px-5 py-6 md:px-6 md:py-7",
                // 마지막 아이템 제외 구분선
                index !== posts.length - 1 ? "border-b border-border" : "",
                post.isPrivate ? "opacity-[0.85]" : ""
              )}
            >
              <div
                className={cn(
                  "flex flex-col gap-5",
                  hasThumbnail
                    ? "lg:grid lg:grid-cols-[240px_minmax(0,1fr)] lg:items-start lg:gap-6"
                    : ""
                )}
              >
                {hasThumbnail ? (
                  <div
                    className={cn(
                      "overflow-hidden rounded-2xl border border-border bg-muted/40",
                      post.thumbnail.className
                    )}
                  >
                    <div className="flex aspect-[16/10] items-center justify-center text-muted-foreground">
                      <div className="flex flex-col items-center gap-3 text-center">
                        <ImageIcon className="size-8 text-primary" />
                        <span className="text-base font-semibold text-foreground">
                          {post.thumbnail.label}
                        </span>
                      </div>
                    </div>
                  </div>
                ) : null}

                <div className="min-w-0 flex flex-1 flex-col">
                  <div className="mb-4 flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    <span
                      className={cn(
                        "inline-flex items-center gap-1 rounded-full px-2.5 py-1",
                        // 비공개 상태 톤 다운
                        post.isPrivate
                          ? "bg-muted text-muted-foreground"
                          : "bg-primary/10 text-foreground"
                      )}
                    >
                      {post.isPrivate ? <Lock className="size-3.5" /> : null}
                      {post.category}
                    </span>
                    <span>Static Feed</span>
                  </div>

                  <h3
                    className="text-xl font-bold leading-snug tracking-tight text-foreground md:text-2xl"
                    style={titleClampStyle}
                  >
                    {post.title}
                  </h3>

                  <p
                    className="mt-3 text-sm leading-6 text-muted-foreground"
                    style={excerptClampStyle}
                  >
                    {post.excerpt}
                  </p>

                  {/* 줄바꿈 허용 태그 목록 */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
                    <span className="text-xs font-semibold text-muted-foreground">
                      {post.date}
                    </span>

                    {/* 반응 수 배지 묶음 */}
                    <div className="flex flex-wrap items-center gap-4">
                      <ReactionBadge
                        active={post.isLiked}
                        icon={Heart}
                        value={post.likes}
                      />
                      <ReactionBadge
                        icon={MessageSquare}
                        value={post.comments}
                      />
                      <ReactionBadge icon={Bookmark} value={post.bookmarks} />
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* 하단 페이지네이션 */}
      <BlogHomePagination items={pagination} />
    </section>
  );
}

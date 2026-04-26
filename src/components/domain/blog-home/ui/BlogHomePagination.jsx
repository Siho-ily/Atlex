// 페이지네이션 UI
import { cn } from "@/lib/utils";

export default function BlogHomePagination({ items }) {
  return (
    <nav
      aria-label="블로그 글 페이지네이션"
      className="flex flex-wrap items-center justify-center gap-2 pt-2"
    >
      {items.map((item) => {
        // 생략부호
        if (item.kind === "ellipsis") {
          return (
            <span
              key={item.id}
              className="inline-flex h-10 min-w-10 items-center justify-center px-2 text-sm font-semibold text-muted-foreground"
            >
              {item.label}
            </span>
          );
        }

        return (
          <button
            key={item.id}
            type="button"
            aria-current={item.current ? "page" : undefined}
            className={cn(
              "inline-flex h-10 min-w-10 items-center justify-center rounded-lg border px-3 text-sm font-semibold transition-colors",
              // 현재 페이지 강조
              item.current
                ? "border-foreground bg-foreground text-background"
                : "border-border bg-card text-muted-foreground"
            )}
          >
            {item.label}
          </button>
        );
      })}
    </nav>
  );
}

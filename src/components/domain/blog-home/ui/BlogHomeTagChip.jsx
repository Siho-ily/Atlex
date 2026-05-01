// 태그 칩
import { cn } from "@/lib/utils";

export default function BlogHomeTagChip({
  active = false,
  count,
  fullWidth = false,
  label,
}) {
  return (
    <button
      type="button"
      className={cn(
        "inline-flex items-center gap-3 rounded-full border px-4 py-2 text-sm font-semibold transition-colors",
        fullWidth ? "w-full justify-between" : "",
        // 선택 상태 강조 스타일
        active
          ? "border-foreground bg-foreground text-background"
          : "border-border bg-card text-muted-foreground"
      )}
    >
      <span>{label}</span>
      {typeof count === "number" ? (
        <span
          className={cn(
            "rounded-full px-2.5 py-0.5 text-xs font-bold",
            active
              ? "bg-background/15 text-background"
              : "bg-muted text-muted-foreground"
          )}
        >
          {count}
        </span>
      ) : null}
    </button>
  );
}

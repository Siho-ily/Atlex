import { EllipsisVertical } from "lucide-react";

export default function BlogMainToolbar({
  activeFilterId,
  activePeriodId,
  filters,
  periods,
}) {
  return (
    <section className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
      <div className="min-w-0">
        <p className="mb-2 text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
          Browse View
        </p>

        {/* 작은 화면에서는 가로 스크롤로 처리해 칩이 어수선하게 줄바꿈되지 않게 합니다. */}
        <div className="flex min-w-0 gap-2 overflow-x-auto rounded-[1.15rem] border border-border bg-muted/50 p-1">
          {filters.map((filter) => {
            const isActive = filter.id === activeFilterId;

            return (
              <button
                key={filter.id}
                type="button"
                aria-pressed={isActive}
                className={[
                  "shrink-0 cursor-default rounded-[0.95rem] px-4 py-2.5 text-[0.86rem] font-semibold transition",
                  isActive
                    ? "bg-card text-foreground shadow-sm"
                    : "text-muted-foreground",
                ].join(" ")}
              >
                <span>{filter.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-end gap-2">
        {periods.map((period) => {
          // 선택 상태는 부모가 내려줘서 툴바는 표현만 담당하도록 둡니다.
          const isActive = period.id === activePeriodId;

          return (
            <button
              key={period.id}
              type="button"
              aria-pressed={isActive}
              className={[
                "cursor-default rounded-[1rem] px-4 py-2.5 text-sm font-semibold",
                isActive
                  ? "bg-foreground text-background"
                  : "border border-border bg-card text-muted-foreground",
              ].join(" ")}
            >
              {period.label}
            </button>
          );
        })}

        <button
          type="button"
          aria-label="더 보기"
          className="inline-flex h-11 w-11 cursor-default items-center justify-center rounded-[1rem] border border-border bg-card text-foreground"
        >
          <EllipsisVertical className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}

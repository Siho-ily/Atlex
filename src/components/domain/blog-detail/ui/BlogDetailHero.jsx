function MetaItem({ children }) {
  return <span className="text-[0.95rem] text-muted-foreground">{children}</span>;
}

export default function BlogDetailHero({
  adminActions,
  category,
  excerpt,
  publishedAt,
  readTime,
  title,
  updatedAt,
  visibilityLabel,
}) {
  return (
    <section className="space-y-8 border-b border-border pb-10">
      <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
        {/* 제목, 요약, 메타 정보를 한 덩어리로 읽히게 묶어 둡니다. */}
        <div className="max-w-[46rem] space-y-5">
          <span className="inline-flex rounded-full border border-border bg-card px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
            {category}
          </span>

          <h1 className="text-[clamp(2.5rem,5vw,4.4rem)] font-bold leading-[1] tracking-[-0.11em] text-foreground">
            {title}
          </h1>

          <p className="max-w-[40rem] text-[1rem] leading-8 text-foreground/76 sm:text-[1.06rem]">
            {excerpt}
          </p>

          <div className="flex flex-wrap items-center gap-2.5">
            <MetaItem>{publishedAt}</MetaItem>
            <span className="text-muted-foreground">/</span>
            <MetaItem>{updatedAt}</MetaItem>
            <span className="text-muted-foreground">/</span>
            <MetaItem>{readTime}</MetaItem>
            <span className="inline-flex items-center rounded-md border border-border bg-card px-2.5 py-1 text-[0.76rem] font-semibold text-muted-foreground">
              {visibilityLabel}
            </span>
          </div>
        </div>

        {/* 넓은 화면에서는 관리자 액션이 본문 읽기 흐름과 분리되어 보이도록 둡니다. */}
        <div className="flex justify-start xl:justify-end">
          <div className="inline-flex flex-nowrap items-center gap-1 rounded-full border border-border bg-card p-1">
            {adminActions.map((action) => (
              <button
                key={action}
                type="button"
                className="cursor-default whitespace-nowrap rounded-full px-4 py-2 text-sm text-muted-foreground transition hover:bg-background hover:text-foreground"
              >
                {action}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

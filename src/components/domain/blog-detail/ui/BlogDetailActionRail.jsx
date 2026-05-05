function RailCard({ label, value }) {
  const isTextValue = typeof value === "string";

  return (
    <button
      type="button"
      aria-label={label}
      className="group flex h-[154px] w-[62px] cursor-default flex-col items-center justify-between rounded-[1.7rem] border border-border bg-card/96 px-2 py-5 text-center transition hover:border-foreground/20"
    >
      <span className="h-9 w-px bg-border" aria-hidden="true" />

      <span className="text-[0.58rem] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
        {label}
      </span>

      <span
        className={[
          "leading-none tracking-[-0.06em] text-foreground",
          isTextValue ? "text-[1.28rem] font-bold" : "text-[1.6rem] font-black",
        ].join(" ")}
      >
        {value}
      </span>
    </button>
  );
}

export default function BlogDetailActionRail({ bookmarks = 7, likes = 18 }) {
  return (
    /* 레일에는 숫자형 액션과 텍스트 CTA가 섞여 있어 카드마다 값 스타일을 다르게 둡니다. */
    <div className="inline-flex items-end gap-4">
      <RailCard label="LIKE" value={likes} />
      <RailCard label="SAVE" value={bookmarks} />
      <RailCard label="SHARE" value="SEND" />
    </div>
  );
}

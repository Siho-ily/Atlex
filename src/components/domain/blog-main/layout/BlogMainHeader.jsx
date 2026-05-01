import { Bell, Search } from "lucide-react";

// 검색, 알림, 프로필 동작을 붙이기 전이라 헤더 액션은 현재 레이아웃 확인용입니다.
function HeaderActionButton({ children, label }) {
  return (
    <button
      type="button"
      aria-label={label}
      className="inline-flex cursor-default items-center gap-2 rounded-full border border-border bg-card px-4 py-3 text-sm font-semibold text-card-foreground"
    >
      {children}
      <span>{label}</span>
    </button>
  );
}

export default function BlogMainHeader() {
  return (
    <header className="mb-7 flex flex-col gap-6 border-b border-border pb-8 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <span className="text-[3rem] font-bold tracking-[-0.14em] text-foreground">
          LOGO
        </span>
      </div>

      <div className="flex flex-wrap items-center gap-3 lg:justify-end">
        <HeaderActionButton label="검색">
          <Search className="h-[18px] w-[18px]" strokeWidth={2.1} />
        </HeaderActionButton>

        <HeaderActionButton label="알림">
          <Bell className="h-[18px] w-[18px]" strokeWidth={2.1} />
        </HeaderActionButton>

        <button
          type="button"
          aria-label="프로필"
          className="inline-flex h-14 w-14 cursor-default items-center justify-center rounded-full border-[3px] border-primary/40 bg-card text-center text-[0.62rem] font-semibold leading-4 text-muted-foreground"
        >
          프로필
          <br />
          사진
        </button>
      </div>
    </header>
  );
}

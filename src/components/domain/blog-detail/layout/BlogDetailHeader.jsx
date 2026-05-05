import Link from "next/link";
import { Bell, Search } from "lucide-react";

function HeaderPillButton({ children, label }) {
  return (
    <button
      type="button"
      aria-label={label}
      className="inline-flex cursor-default items-center gap-2 rounded-full border border-border bg-card/90 px-4 py-3 text-sm font-semibold text-card-foreground"
    >
      {children}
      <span>{label}</span>
    </button>
  );
}

export default function BlogDetailHeader() {
  return (
    <header className="mb-12 flex flex-col gap-6 border-b border-border pb-8 lg:flex-row lg:items-center lg:justify-between">
      <Link href="/main" className="inline-flex">
        <span className="text-[3rem] font-bold tracking-[-0.14em] text-foreground">
          LOGO
        </span>
      </Link>

      <div className="flex flex-wrap items-center gap-3 lg:justify-end">
        <HeaderPillButton label="검색">
          <Search className="h-[18px] w-[18px]" strokeWidth={2.1} />
        </HeaderPillButton>

        <HeaderPillButton label="알림">
          <Bell className="h-[18px] w-[18px]" strokeWidth={2.1} />
        </HeaderPillButton>

        <button
          type="button"
          aria-label="프로필 사진"
          className="inline-flex h-14 w-14 cursor-default items-center justify-center rounded-full border-[3px] border-primary/35 bg-card text-center text-[0.62rem] font-semibold leading-4 text-muted-foreground"
        >
          프로필
          <br />
          사진
        </button>
      </div>
    </header>
  );
}

import { Bell, Search } from "lucide-react";
import BlogMainHeaderAction from "../ui/BlogMainHeaderAction";
import BlogMainProfileAvatar from "../ui/BlogMainProfileAvatar";

export default function BlogMainHeader() {
  return (
    <header className="mb-7 flex flex-col gap-6 border-b border-border pb-8 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <span className="text-[3rem] font-bold tracking-[-0.14em] text-foreground">
          LOGO
        </span>
      </div>

      <div className="flex flex-wrap items-center gap-3 lg:justify-end">
        <BlogMainHeaderAction label="검색">
          <Search className="h-[18px] w-[18px]" strokeWidth={2.1} />
        </BlogMainHeaderAction>

        <BlogMainHeaderAction label="알림">
          <Bell className="h-[18px] w-[18px]" strokeWidth={2.1} />
        </BlogMainHeaderAction>

        <BlogMainProfileAvatar />
      </div>
    </header>
  );
}

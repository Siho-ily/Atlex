import Link from 'next/link';
import { Bell, Search } from 'lucide-react';
import { Button } from '@/components/common/ui/button';

export default function Header({ logoHref, onSearch, onNotification }) {
  const logoText = (
    <span className="text-[3rem] font-bold tracking-[-0.14em] text-foreground">LOGO</span>
  );

  return (
    <header className="mb-7 flex items-center justify-between border-b border-border pb-8">
      <div>
        {logoHref ? (
          <Link href={logoHref} className="inline-flex">
            {logoText}
          </Link>
        ) : (
          logoText
        )}
      </div>

      <div className="flex items-center gap-3">
        {onSearch && (
          <Button
            variant="outline"
            aria-label="검색"
            className="h-auto cursor-pointer gap-2 rounded-full bg-card px-4 py-3 font-semibold text-card-foreground"
            onClick={onSearch}>
            <Search className="h-[18px] w-[18px]" strokeWidth={2.1} />
            <span>검색</span>
          </Button>
        )}

        {onNotification && (
          <Button
            variant="outline"
            aria-label="알림"
            className="h-auto cursor-pointer gap-2 rounded-full bg-card px-4 py-3 font-semibold text-card-foreground"
            onClick={onNotification}>
            <Bell className="h-[18px] w-[18px]" strokeWidth={2.1} />
            <span>알림</span>
          </Button>
        )}

        <button
          type="button"
          aria-label="프로필"
          className="inline-flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border-[3px] border-primary/40 bg-card text-center text-[0.62rem] font-semibold leading-4 text-muted-foreground">
          프로필
          <br />
          사진
        </button>
      </div>
    </header>
  );
}

import Link from 'next/link';
import { Bell, Search } from 'lucide-react';
import { Button } from '@/components/common/ui/button';
import ProfileMenu from '@/components/common/layout/ProfileMenu';

export default function Header({ logoHref = "/", onSearch, onNotification }) {
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
        <Button
          variant="outline"
          aria-label="검색"
          className="h-auto cursor-default gap-2 rounded-full bg-card px-4 py-3 font-semibold text-card-foreground"
          onClick={onSearch}>
          <Search className="h-[18px] w-[18px]" strokeWidth={2.1} />
          <span>검색</span>
        </Button>

        <Button
          variant="outline"
          aria-label="알림"
          className="h-auto cursor-default gap-2 rounded-full bg-card px-4 py-3 font-semibold text-card-foreground"
          onClick={onNotification}>
          <Bell className="h-[18px] w-[18px]" strokeWidth={2.1} />
          <span>알림</span>
        </Button>

        <ProfileMenu />
      </div>
    </header>
  );
}

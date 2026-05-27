'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Bell, Search, ImageIcon } from 'lucide-react';
import { Capsule } from '@/components/common/ui/capsule';
import ProfileMenu from '@/components/common/layout/ProfileMenu';

export default function Header({ logoSrc = '', logoHref = '/', onSearch, onNotification }) {
  const [showLogoImage, setShowLogoImage] = useState(Boolean(logoSrc));

  const logoImage = (
    <div className="flex h-10 w-20 items-center">
      {showLogoImage ? (
        <img
          src={logoSrc}
          alt="Logo"
          className="max-h-full max-w-full object-contain"
          onError={() => setShowLogoImage(false)}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center rounded bg-muted/30">
          <ImageIcon className="size-5 text-muted-foreground" />
        </div>
      )}
    </div>
  );

  return (
    <header className="flex items-center justify-between border-b border-border px-5 pb-6 pt-5 sm:px-8 sm:pt-6 lg:px-10">
      <div>
        {logoHref ? (
          <Link href={logoHref} className="inline-flex">
            {logoImage}
          </Link>
        ) : (
          logoImage
        )}
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <div className="flex items-center gap-1.5 sm:gap-3">
          <Capsule
            variant="outline"
            size="lg"
            className="h-10 cursor-pointer gap-2 px-3 text-muted-foreground transition-all hover:bg-accent hover:text-accent-foreground sm:px-4"
            onClick={onSearch}
          >
            <Search className="size-4" strokeWidth={2.5} />
            <span className="hidden text-sm font-bold sm:inline">검색</span>
          </Capsule>

          <Capsule
            variant="outline"
            size="lg"
            className="h-10 cursor-pointer gap-2 px-3 text-muted-foreground transition-all hover:bg-accent hover:text-accent-foreground sm:px-4"
            onClick={onNotification}
          >
            <Bell className="size-4" strokeWidth={2.5} />
            <span className="hidden text-sm font-bold sm:inline">알림</span>
          </Capsule>
        </div>

        <div className="mx-1 hidden h-6 w-px bg-border/60 md:block" />

        <ProfileMenu />
      </div>
    </header>
  );
}

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Bell, Search, ImageIcon } from 'lucide-react';
import { Capsule } from '@/components/common/ui/capsule';
import ProfileMenu from '@/components/common/layout/ProfileMenu';

export default function Header({
  logoSrc = '',
  logoHref = '/',
  blogUserId,
  onSearch,
  onNotification,
}) {
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
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center justify-between px-5 pb-6 pt-5 sm:px-8 sm:pt-6 lg:px-10">
        <div className="flex items-center gap-4">
          {logoHref ? (
            <Link href={logoHref} className="inline-flex">
              {logoImage}
            </Link>
          ) : (
            logoImage
          )}

          {blogUserId && (
            <>
              <span className="hidden h-6 w-px bg-border/60 md:block" />
              <Link href={`/@${blogUserId}`} className="flex flex-col">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground/80">
                  USER BLOG
                </span>
                <h1 className="text-lg font-black tracking-tight text-foreground sm:text-xl">
                  {blogUserId}&apos;s blog
                </h1>
              </Link>
            </>
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
      </div>
    </header>
  );
}

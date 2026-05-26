"use client";

import React from "react";
import { Search, Bell } from "lucide-react";

import { Capsule } from "@/components/common/ui/capsule";
import { Image } from "@/components/common/ui/image";

export default function Header({
  logoSrc = "/default-logo.png",
  userId = "User",
  onSearch,
  onNotification,
  onProfileClick,
}) {
  const [showLogoImage, setShowLogoImage] = React.useState(Boolean(logoSrc));
  const [showProfileImage, setShowProfileImage] = React.useState(true);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-4">
          <Image
            shape="sharp"
            icon={
              showLogoImage ? (
                <img
                  src={logoSrc}
                  alt="Logo"
                  className="h-full w-full object-contain p-1"
                  onError={() => {
                    setShowLogoImage(false);
                  }}
                />
              ) : null
            }
            className="h-10 w-20 overflow-hidden rounded border-solid border-border bg-muted/30 transition-colors hover:bg-muted/50"
          />

          <span className="hidden h-6 w-px bg-border/60 md:block" />

          <div className="flex flex-col">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground/80">
              USER BLOG
            </span>
            <h1 className="text-lg font-black tracking-tight text-foreground sm:text-xl">
              {userId}&apos;s blog
            </h1>
          </div>
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

          <button
            type="button"
            className="group relative ml-1 flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-full border-2 border-primary/20 bg-muted transition-all hover:border-primary/40 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            onClick={onProfileClick}
            aria-label="Profile"
          >
            <Image
              shape="circle"
              icon={
                showProfileImage ? (
                  <img
                    src="/images/profile-sample.png"
                    className="h-full w-full object-cover transition-transform group-hover:scale-110"
                    alt="profile"
                    onError={() => {
                      setShowProfileImage(false);
                    }}
                  />
                ) : null
              }
              className="h-full w-full overflow-hidden border-0 bg-transparent"
            />
          </button>
        </div>
      </div>
    </header>
  );
}

"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/common/ui/popover';
import { useAuthStore } from '@/store/authStore';
import { logoutApi } from '@/lib/api/auth';

export default function ProfileMenu() {
  const router = useRouter();
  const { isLoggedIn, user, accessToken, logout } = useAuthStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  async function handleLogout() {
    try {
      await logoutApi(accessToken);
    } catch {
      // 서버 에러여도 클라이언트 상태는 초기화
    }
    logout();
    router.push('/');
  }

  return (
    <Popover>
      <PopoverTrigger
        aria-label="프로필"
        className="inline-flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border-[3px] border-primary/40 bg-card text-center text-[0.62rem] font-semibold leading-4 text-muted-foreground transition-colors hover:border-primary/70"
      >
        프로필
        <br />
        사진
      </PopoverTrigger>

      <PopoverContent side="bottom" align="end" sideOffset={8} className="w-40 p-1">
        {mounted && isLoggedIn ? (
          <>
            <Link
              href={`/${user?.userId}`}
              className="flex w-full items-center rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-accent"
            >
              내 블로그
            </Link>
            <Link
              href="/option"
              className="flex w-full items-center rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-accent"
            >
              설정
            </Link>
            <hr className="my-1 border-border" />
            <button
              type="button"
              onClick={handleLogout}
              className="flex w-full items-center rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-accent"
            >
              로그아웃
            </button>
          </>
        ) : (
          <Link
            href="/account"
            className="flex w-full items-center rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-accent"
          >
            로그인 / 회원가입
          </Link>
        )}
      </PopoverContent>
    </Popover>
  );
}

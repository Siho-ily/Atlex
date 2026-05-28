// 로그아웃 mutation.
// 서버 응답과 무관하게 store 는 항상 비운다 — 네트워크 실패로 사용자가 로그인 상태에 갇히지 않도록.
// 라우팅은 호출부 책임.

'use client';

import { useCallback } from 'react';
import { useMutation } from '@/hooks/queries/internal/useMutation';
import { logoutApi } from '@/lib/api/auth';
import { useAuthStore } from '@/store/authStore';

export function useLogout(options) {
  const clearAuth = useAuthStore((s) => s.logout);

  const mutationFn = useCallback(async () => {
    try {
      await logoutApi();
    } catch {
      // intentionally swallowed — UX 일관성 위해 store 는 항상 비운다.
    }
    clearAuth();
  }, [clearAuth]);

  return useMutation(mutationFn, options);
}

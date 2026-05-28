// 로그인 mutation.
// loginApi → fetchUserByIdentifier → authStore.login 의 3단계를 한 묶음으로 처리한다.
//   1) /auth/login 으로 accessToken 발급
//   2) /users/{userId} 로 user 프로필 조회
//   3) zustand 에 isLoggedIn / user / accessToken 저장
// 라우팅(예: router.push("/")) 은 호출부 책임으로 남겨, 어디서 호출되든 재사용 가능하도록 한다.

'use client';

import { useCallback } from 'react';
import { useMutation } from '@/hooks/queries/internal/useMutation';
import { loginApi } from '@/lib/api/auth';
import { fetchUserByIdentifier } from '@/lib/api/users';
import { useAuthStore } from '@/store/authStore';

export function useLogin(options) {
  const setLoggedIn = useAuthStore((s) => s.login);

  const mutationFn = useCallback(
    async ({ userId, password }) => {
      const { accessToken } = await loginApi({ userId, password });
      const user = await fetchUserByIdentifier(userId);
      setLoggedIn({ user, accessToken });
      return { user, accessToken };
    },
    [setLoggedIn],
  );

  return useMutation(mutationFn, options);
}

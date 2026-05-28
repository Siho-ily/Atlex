// 회원가입 mutation.
// 성공 시 store 갱신은 하지 않는다 (호출부에서 로그인 모드로 전환하거나 별도 후처리).
// 페이로드 shape 은 백엔드 /auth/signup 명세를 그대로 따른다.

'use client';

import { useMutation } from '@/hooks/queries/internal/useMutation';
import { signupApi } from '@/lib/api/auth';

// mutate({ userId, password, name, email, ...rest })
export function useSignup(options) {
  return useMutation(signupApi, options);
}

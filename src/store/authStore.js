// 인증 상태 store.
// localStorage(`auth-storage`) 에 토큰을 영속화하고,
// 모듈 로드 시점에 axios client 의 토큰 getter 를 주입한다.

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { setAccessTokenGetter } from '@/lib/api/client';

const useAuthStore = create(
  persist(
    (set) => ({
      isLoggedIn: false,
      user: null,
      accessToken: null,
      login: ({ user, accessToken }) => set({ isLoggedIn: true, user, accessToken }),
      logout: () => set({ isLoggedIn: false, user: null, accessToken: null }),
    }),
    { name: 'auth-storage' }
  )
);

// module-level side-effect 로 1회 주입한다.
// 이 store 가 로드되는 시점은 항상 client (zustand 자체가 client-only) 이므로 RSC 영향 없음.
// 컴포넌트가 store 를 import 하는 모든 경로에서 자동으로 axios 의 인증 헤더가 채워진다.
setAccessTokenGetter(() => useAuthStore.getState().accessToken);

export { useAuthStore };

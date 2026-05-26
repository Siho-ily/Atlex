import { create } from 'zustand';
import { persist } from 'zustand/middleware';

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

export { useAuthStore };

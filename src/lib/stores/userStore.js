import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

// 브라우저 localStorage에서 사용할 key 이름은 .env에서 관리한다.
const USER_STORAGE_KEY = process.env.NEXT_PUBLIC_USER_STORAGE || "user";

const initialState = {
    user: null,
    isAuthenticated: false,
};

export const useUserStore = create(
    persist(
        (set) => ({
            ...initialState,

            // 로그인 성공 후 사용자 정보를 저장하고 인증 상태를 함께 갱신한다.
            setUser: (user) =>
                set({
                    user,
                    isAuthenticated: Boolean(user),
                }),

            // 로그아웃 또는 인증 만료 시 사용자 저장 상태를 초기화한다.
            clearUser: () => set(initialState),
        }),
        {
            name: USER_STORAGE_KEY,
            storage: createJSONStorage(() => localStorage),
            // localStorage에는 인증 유지에 필요한 값만 저장한다.
            partialize: ({ user, isAuthenticated }) => ({
                user,
                isAuthenticated,
            }),
        }
    )
);

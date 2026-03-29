"use client";

import { useSignupStore } from "@/lib/stores/signupStore";

/**
 * 기존 useState 묶음을 Zustand store로 교체
 * 외부에서는 이전과 똑같이 state 묶음처럼 사용 가능
 */
export function useSignupFormState() {
    return useSignupStore();
}
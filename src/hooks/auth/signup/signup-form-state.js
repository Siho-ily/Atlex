"use client";

import { useSignupStore } from "@/lib/stores/signupStore";

/**
 * 회원가입 상태를 가져오는 훅
 * 
 * - 내부적으로 Zustand store를 사용
 * - 기존 useState 묶음을 대체
 * - 외부에서는 하나의 state 객체처럼 사용 가능
 */
export function useSignupFormState() {
    // Zustand store 반환 (모든 상태 + setter 포함)
    return useSignupStore();
}
"use client";

/**
 * 상태값을 기반으로 파생값을 계산하는 훅
 */
export function useLoginSelectors({
    userId,
    password,
    loading,
}) {
    // 로그인 버튼 활성화 여부
    const canLogin =
        userId.trim() !== "" &&
        password.trim() !== "" &&
        !loading;

    return {
        canLogin,
    };
}
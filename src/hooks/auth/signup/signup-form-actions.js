"use client";

import { sanitizeUserId } from "./signup-input-utils";

/**
 * 회원가입 과정에서 필요한 부가 동작을 관리한다.
 *
 * 포함 기능:
 * - 아이디 중복확인
 * - 닉네임 중복확인
 * - 약관동의 페이지로 이동
 */
export function useSignupFormActions({
    router,
    userId,
    nickname,
    setIdCheck,
    setNickCheck,
}) {
    async function handleIdCheck() {
        const safeUserId = sanitizeUserId(userId);

        if (!safeUserId.trim()) {
            setIdCheck("아이디를 입력하세요.");
            return;
        }

        try {
            const response = await fetch("/api/v1/auth/check-id", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userId: safeUserId.trim(),
                }),
            });

            const data = await response.json().catch(() => ({}));

            if (!response.ok) {
                setIdCheck(data.message || "아이디 중복 확인에 실패했습니다.");
                return;
            }

            setIdCheck(data.message || "사용 가능한 아이디입니다.");
        } catch (error) {
            setIdCheck("아이디 중복 확인 중 오류가 발생했습니다.");
        }
    }

    async function handleNickCheck() {
        if (!nickname.trim()) {
            setNickCheck("닉네임을 입력하세요.");
            return;
        }

        try {
            const response = await fetch("/api/v1/auth/check-nickname", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    nickname: nickname.trim(),
                }),
            });

            const data = await response.json().catch(() => ({}));

            if (!response.ok) {
                setNickCheck(data.message || "닉네임 중복 확인에 실패했습니다.");
                return;
            }

            setNickCheck(data.message || "사용 가능한 닉네임입니다.");
        } catch (error) {
            setNickCheck("닉네임 중복 확인 중 오류가 발생했습니다.");
        }
    }

    function handlePrev() {
        router.push("/signup-terms");
    }

    return {
        handleIdCheck,
        handleNickCheck,
        handlePrev,
    };
}
"use client";

import { getPasswordChecks } from "@/lib/auth/signup/password";
import { isValidEmailFormat } from "@/lib/auth/signup/validation";

/**
 * 상태값으로부터 파생값 계산
 * - 비밀번호 조건
 * - 비밀번호 일치 여부
 * - 타이머 표시 형식
 * - 회원가입 가능 여부
 */
export function useSignupSelectors({
    userId,
    emailId,
    emailDomain,
    password,
    passwordCheck,
    nickname,
    idCheck,
    nickCheck,
    emailVerified,
    loading,
    emailTimer,
}) {
    const checks = getPasswordChecks(password);

    const isPasswordValid =
        checks.length &&
        checks.lower &&
        checks.upper &&
        checks.number &&
        checks.special;

    const passwordMatch =
        passwordCheck.length > 0 &&
        password === passwordCheck;

    const passwordMismatch =
        passwordCheck.length > 0 &&
        password !== passwordCheck;

    const formattedEmailTime = `${String(Math.floor(emailTimer / 60)).padStart(2, "0")}:${String(emailTimer % 60).padStart(2, "0")}`;

    const canSignup =
        userId &&
        nickname &&
        password &&
        passwordCheck &&
        password === passwordCheck &&
        isPasswordValid &&
        isValidEmailFormat(emailId, emailDomain) &&
        idCheck === "ok" &&
        nickCheck === "ok" &&
        emailVerified &&
        !loading;

    return {
        checks,
        passwordMatch,
        passwordMismatch,
        formattedEmailTime,
        canSignup,
    };
}
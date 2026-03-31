"use client";

import { getPasswordChecks } from "@/lib/auth/signup/password";
import { isValidEmailFormat } from "@/lib/auth/signup/validation";

/**
 * 파생 상태 계산 훅
 * 
 * 역할:
 * - 비밀번호 조건 검사
 * - 비밀번호 일치 여부
 * - 이메일 타이머 포맷
 * - 회원가입 가능 여부 판단
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

    /**
     * 비밀번호 조건 검사
     * (길이, 대소문자, 숫자, 특수문자)
     */
    const checks = getPasswordChecks(password);

    /**
     * 비밀번호 전체 조건 만족 여부
     */
    const isPasswordValid =
        checks.length &&
        checks.lower &&
        checks.upper &&
        checks.number &&
        checks.special;

    /**
     * 비밀번호 일치 여부
     */
    const passwordMatch =
        passwordCheck.length > 0 &&
        password === passwordCheck;

    /**
     * 비밀번호 불일치 여부
     */
    const passwordMismatch =
        passwordCheck.length > 0 &&
        password !== passwordCheck;

    /**
     * 이메일 인증 타이머 표시 (mm:ss 형식)
     */
    const formattedEmailTime =
        `${String(Math.floor(emailTimer / 60)).padStart(2, "0")}:${String(emailTimer % 60).padStart(2, "0")}`;

    /**
     * 회원가입 가능 여부
     * 
     * 모든 조건을 만족해야 true
     */
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
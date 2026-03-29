"use client";

import { getPasswordChecks, getPasswordStrength } from "@/components/domain/auth/signup/shared/password";
import { isValidEmailFormat } from "@/components/domain/auth/signup/shared/validation";

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
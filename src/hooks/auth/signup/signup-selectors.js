"use client";

/**
 * 회원가입 폼에서 사용하는 계산값을 관리한다.
 *
 * 포함 항목:
 * - 비밀번호 조건 검사
 * - 회원가입 가능 여부 계산
 */
export function useSignupSelectors({
    userId,
    nickname,
    emailId,
    emailDomain,
    password,
    passwordCheck,
}) {
    function getPasswordChecks(value) {
        return {
            length: value.length >= 10,
            lower: /[a-z]/.test(value),
            upper: /[A-Z]/.test(value),
            number: /[0-9]/.test(value),
            special: /[!@#$%^&*]/.test(value),
        };
    }

    const passwordChecks = getPasswordChecks(password);

    const isPasswordValid =
        passwordChecks.length &&
        passwordChecks.lower &&
        passwordChecks.upper &&
        passwordChecks.number &&
        passwordChecks.special;

    const canSubmit =
        !!userId.trim() &&
        !!nickname.trim() &&
        !!emailId.trim() &&
        !!emailDomain.trim() &&
        !!password &&
        !!passwordCheck &&
        password === passwordCheck &&
        isPasswordValid;

    return {
        getPasswordChecks,
        passwordChecks,
        canSubmit,
    };
}
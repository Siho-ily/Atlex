"use client";

import {
    sanitizeUserId,
    sanitizePassword,
    sanitizeEmailId,
    sanitizeEmailDomain,
} from "./signup-input-utils";

/**
 * 회원가입 최종 제출 로직을 관리한다.
 *
 * 처리 순서:
 * 1. 필수 입력값 검증
 * 2. 비밀번호 조건 검증
 * 3. 회원가입 API 요청
 * 4. 성공 시 로그인 페이지로 이동
 */
export function useSignupSubmit({
    router,
    userId,
    nickname,
    email,
    password,
    passwordCheck,
    canSubmit,
    setMessage,
    setLoading,
    getPasswordChecks,
    toast,
}) {
    async function handleSignup() {
        setMessage("");

        const safeUserId = sanitizeUserId(userId);
        const safePassword = sanitizePassword(password);
        const safePasswordCheck = sanitizePassword(passwordCheck);

        const [rawEmailId = "", rawEmailDomain = ""] = email.split("@");
        const safeEmailId = sanitizeEmailId(rawEmailId);
        const safeEmailDomain = sanitizeEmailDomain(rawEmailDomain);
        const safeEmail =
            safeEmailId && safeEmailDomain
                ? `${safeEmailId}@${safeEmailDomain}`
                : "";

        if (!safeUserId.trim()) {
            setMessage("아이디를 입력하세요.");
            return;
        }

        if (!nickname.trim()) {
            setMessage("닉네임을 입력하세요.");
            return;
        }

        if (!safeEmail.trim()) {
            setMessage("이메일을 입력하세요.");
            return;
        }

        if (!safePassword) {
            setMessage("비밀번호를 입력하세요.");
            return;
        }

        if (!safePasswordCheck) {
            setMessage("비밀번호 확인을 입력하세요.");
            return;
        }

        if (safePassword !== safePasswordCheck) {
            setMessage("비밀번호 확인이 일치하지 않습니다.");
            return;
        }

        const checks = getPasswordChecks(safePassword);
        const isPasswordValid =
            checks.length &&
            checks.lower &&
            checks.upper &&
            checks.number &&
            checks.special;

        if (!isPasswordValid) {
            setMessage("비밀번호 조건을 다시 확인하세요.");
            return;
        }

        if (!canSubmit) {
            setMessage("입력값을 다시 확인하세요.");
            return;
        }

        try {
            setLoading(true);

            const response = await fetch("/api/v1/auth/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userId: safeUserId.trim(),
                    password: safePassword.trim(),
                    name: nickname.trim(),
                    email: safeEmail.trim(),
                }),
            });

            const data = await response.json().catch(() => ({}));

            if (!response.ok) {
                setMessage(data.message || "회원가입에 실패했습니다.");
                return;
            }

            toast.success(data.message || "회원가입이 완료되었습니다.");
            router.push("/login-page");
        } catch (error) {
            setMessage("회원가입 중 오류가 발생했습니다.");
        } finally {
            setLoading(false);
        }
    }

    return {
        handleSignup,
    };
}
"use client";

import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useSignupStore } from "@/lib/stores/signupStore";
import { useSignupFormHandlers } from "./signup-form-handlers";
import { useSignupFormActions } from "./signup-form-actions";
import { useSignupSubmit } from "./signup-submit";
import { useSignupSelectors } from "./signup-selectors";

/**
 * 회원가입 화면에서 사용하는 메인 훅
 *
 * 역할:
 * - zustand store 상태 조회
 * - 입력 핸들러 연결
 * - 중복확인 / 페이지 이동 기능 연결
 * - 최종 회원가입 제출 기능 연결
 * - 계산값 제공
 */
export function useSignup() {
    const router = useRouter();

    const {
        showPassword,
        showPasswordCheck,

        userId,
        emailId,
        emailDomain,
        password,
        passwordCheck,
        nickname,

        idCheck,
        nickCheck,

        message,
        loading,

        setShowPassword,
        setShowPasswordCheck,

        setUserId,
        setEmailId,
        setEmailDomain,
        setPassword,
        setPasswordCheck,
        setNickname,

        setIdCheck,
        setNickCheck,

        setMessage,
        setLoading,

        setEmailVerified,
        setEmailVerifyMessage,
        setEmailCode,
    } = useSignupStore();

    const email =
        emailId.trim() && emailDomain.trim()
            ? `${emailId.trim()}@${emailDomain.trim()}`
            : "";

    const {
        getPasswordChecks,
        passwordChecks,
        canSubmit,
    } = useSignupSelectors({
        userId,
        nickname,
        emailId,
        emailDomain,
        password,
        passwordCheck,
    });

    const handlers = useSignupFormHandlers({
        setUserId,
        setIdCheck,
        setNickname,
        setNickCheck,
        setPassword,
        setPasswordCheck,
        setEmailId,
        setEmailDomain,
        setEmailVerified,
        setEmailVerifyMessage,
        setEmailCode,
    });

    const actions = useSignupFormActions({
        router,
        userId,
        nickname,
        setIdCheck,
        setNickCheck,
    });

    const { handleSignup } = useSignupSubmit({
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
    });

    return {
        showPassword,
        showPasswordCheck,

        userId,
        emailId,
        emailDomain,
        password,
        passwordCheck,
        nickname,

        idCheck,
        nickCheck,

        message,
        loading,

        setShowPassword,
        setShowPasswordCheck,

        ...handlers,
        ...actions,
        handleSignup,

        passwordChecks,
        canSubmit,
    };
}
"use client";

import { useRouter } from "next/navigation";
import { useSignupFormState } from "@/hooks/auth/signup/signup-form-state";
import { useSignupFormActions } from "@/hooks/auth/signup/signup-form-actions";
import { useEmailVerification } from "@/hooks/auth/signup/email-verification";
import { useSignupSelectors } from "@/hooks/auth/signup/signup-selectors";
import { useSignupSubmit } from "@/hooks/auth/signup/signup-submit";

/**
 * 회원가입 기능 전체를 묶는 최상위 훅
 * - 상태
 * - 액션
 * - 이메일 인증
 * - 파생값 계산
 * - 제출
 */
export default function useSignup() {
    const router = useRouter();
    const state = useSignupFormState();

    const emailVerification = useEmailVerification({
        emailId: state.emailId,
        emailDomain: state.emailDomain,
        setEmailCode: state.setEmailCode,
        setEmailCodeSent: state.setEmailCodeSent,
        setEmailVerified: state.setEmailVerified,
        setEmailVerifyMessage: state.setEmailVerifyMessage,
        setEmailTimer: state.setEmailTimer,
        emailCode: state.emailCode,
        setEmailVerifyLoading: state.setEmailVerifyLoading,
        setEmailSendLoading: state.setEmailSendLoading,
    });

    const actions = useSignupFormActions({
        router,
        userId: state.userId,
        nickname: state.nickname,
        setIdCheck: state.setIdCheck,
        setNickCheck: state.setNickCheck,
        setMessage: state.setMessage,
        setEmailDomain: state.setEmailDomain,
    });

    const selectors = useSignupSelectors({
        userId: state.userId,
        emailId: state.emailId,
        emailDomain: state.emailDomain,
        password: state.password,
        passwordCheck: state.passwordCheck,
        nickname: state.nickname,
        idCheck: state.idCheck,
        nickCheck: state.nickCheck,
        emailVerified: state.emailVerified,
        loading: state.loading,
        emailTimer: state.emailTimer,
    });

    const submit = useSignupSubmit({
        router,
        userId: state.userId,
        emailId: state.emailId,
        emailDomain: state.emailDomain,
        password: state.password,
        nickname: state.nickname,
        canSignup: selectors.canSignup,
        setLoading: state.setLoading,
        setMessage: state.setMessage,
        setIdCheck: state.setIdCheck,
        setNickCheck: state.setNickCheck,
        setEmailVerified: state.setEmailVerified,
        setEmailVerifyMessage: state.setEmailVerifyMessage,
        setEmailCodeSent: state.setEmailCodeSent,
        setEmailTimer: state.setEmailTimer,
        resetSignupState: state.resetSignupState,
    });

    return {
        ...state,
        ...actions,
        ...emailVerification,
        ...selectors,
        onSignup: submit.onSignup,
    };
}
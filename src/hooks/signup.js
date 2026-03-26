"use client";

import { useRouter } from "next/navigation";
import { useSignupFormState } from "@/components/domain/auth/signup/feature/signup-form-state";
import { useSignupFormActions } from "@/components/domain/auth/signup/feature/signup-form-actions";
import { useEmailVerification } from "@/components/domain/auth/signup/feature/email-verification";
import { useSignupSelectors } from "@/components/domain/auth/signup/feature/signup-selectors";
import { useSignupSubmit } from "@/components/domain/auth/signup/feature/signup-submit";

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
        emailDomain: state.emailDomain,
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
    });

    return {
        ...state,
        ...actions,
        ...emailVerification,
        ...selectors,
        onSignup: submit.onSignup,
    };
}
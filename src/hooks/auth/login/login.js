"use client";

import { useRouter } from "next/navigation";
import { useLoginFormState } from "@/hooks/auth/login/login-form-state";
import { useLoginFormActions } from "@/hooks/auth/login/login-form-actions";
import { useLoginSelectors } from "@/hooks/auth/login/login-selectors";
import { useLoginSubmit } from "@/hooks/auth/login/login-submit";

/**
 * 로그인 기능 전체를 묶는 최상위 훅
 * - 상태
 * - 액션
 * - 파생값 계산
 * - 제출
 */
export default function useLogin() {
    const router = useRouter();
    const state = useLoginFormState();

    const actions = useLoginFormActions({
        router,
        setMessage: state.setMessage,
    });

    const selectors = useLoginSelectors({
        userId: state.userId,
        password: state.password,
        loading: state.loading,
    });

    const submit = useLoginSubmit({
        setMessage: state.setMessage,
        canLogin: selectors.canLogin,
    });

    return {
        ...state,
        ...actions,
        ...selectors,
        onLogin: submit.onLogin,
    };
}
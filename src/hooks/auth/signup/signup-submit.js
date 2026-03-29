"use client";

import toast from "react-hot-toast";
import { signupApi } from "@/lib/api/signup";

/**
 * 회원가입 최종 제출 로직
 */
export function useSignupSubmit({
    router,
    userId,
    emailId,
    emailDomain,
    password,
    nickname,
    canSignup,
    setLoading,
    setMessage,
    setIdCheck,
    setNickCheck,
    setEmailVerified,
    setEmailVerifyMessage,
    setEmailCodeSent,
    setEmailTimer,
    resetSignupState,
}) {
    async function onSignup() {
        setMessage("");

        if (!canSignup) {
            setMessage("입력값을 확인하세요.");
            toast.error("입력값을 확인하세요.");
            return;
        }

        try {
            setLoading(true);

            const requestData = {
                userId,
                password,
                name: nickname,
                email: `${emailId}@${emailDomain}`,
            };

            const { res, data } = await signupApi(requestData);

            if (!res.ok) {
                throw new Error(data.message || "회원가입 실패");
            }

            toast.success("회원가입 완료");

            if (resetSignupState) {
                resetSignupState();
            }

            router.push("/");
        } catch (error) {
            const errorMessage = error.message || "오류 발생";

            setMessage(errorMessage);
            toast.error(errorMessage);

            if (errorMessage.includes("아이디")) {
                setIdCheck("duplicate");
            }

            if (errorMessage.includes("닉네임")) {
                setNickCheck("duplicate");
            }

            if (errorMessage.includes("이메일")) {
                setEmailVerified(false);
                setEmailVerifyMessage(errorMessage);
                setEmailCodeSent(false);
                setEmailTimer(0);
            }
        } finally {
            setLoading(false);
        }
    }

    return { onSignup };
}
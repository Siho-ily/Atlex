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
    /**
 * 회원가입 요청 처리
 * - API 호출
 * - 성공 시 홈 이동
 * - 실패 시 상태 롤백
 */
async function onSignup() {

    // 에러 메시지 초기화
    setMessage("");

    // 가입 가능 상태 체크
    if (!canSignup) {
        setMessage("입력값을 확인하세요.");
        toast.error("입력값을 확인하세요.");
        return;
    }

    try {
        setLoading(true);

        // 서버로 보낼 데이터 구성
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

        // 상태 초기화
        if (resetSignupState) {
            resetSignupState();
        }

        // 메인 페이지 이동
        router.push("/");

    } catch (error) {

        const errorMessage = error.message || "오류 발생";

        setMessage(errorMessage);
        toast.error(errorMessage);

        // 에러 종류별 상태 처리
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

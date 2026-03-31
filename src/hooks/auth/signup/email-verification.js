"use client";

import { useEffect } from "react";
import toast from "react-hot-toast";
import { isValidEmailFormat } from "@/lib/auth/signup/validation";
import { requestEmailCodeApi, verifyEmailCodeApi } from "@/lib/api/emailAuth";

/**
 * 이메일 인증 관련 로직을 담당하는 훅
 * - 이메일 형식 검사
 * - 인증번호 전송
 * - 인증번호 검증
 * - 타이머 관리
 */
export function useEmailVerification({
    emailId,
    emailDomain,
    setEmailCode,
    setEmailCodeSent,
    setEmailVerified,
    setEmailVerifyMessage,
    setEmailTimer,
    emailCode,
    setEmailVerifyLoading,
    setEmailSendLoading,
}) {

    // 이메일 전체 문자열 생성
    const fullEmail = `${emailId}@${emailDomain}`;

    // 이메일 형식 검사 함수
    function isValidEmail() {
        return isValidEmailFormat(emailId, emailDomain);
    }

    /**
     * 이메일 입력값 변경 시 인증 상태 초기화
     */
    useEffect(() => {
        setEmailCode("");              // 인증번호 초기화
        setEmailCodeSent(false);       // 전송 상태 초기화
        setEmailVerified(false);       // 인증 완료 상태 초기화
        setEmailVerifyMessage("");     // 메시지 초기화
        setEmailTimer(0);              // 타이머 초기화
    }, [emailId, emailDomain]);

    /**
     * 인증 타이머 감소 처리 (1초마다 감소)
     */
    useEffect(() => {
        let timer;

        setEmailTimer((current) => {
            if (current <= 0) return current;

            timer = setInterval(() => {
                setEmailTimer((prev) => {
                    if (prev <= 1) {
                        clearInterval(timer);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);

            return current;
        });

        return () => clearInterval(timer);
    }, [setEmailTimer]);

    /**
     * 인증번호 전송 함수
     */
    async function handleSendEmailCode() {
        if (!isValidEmail()) {
            setEmailVerifyMessage("올바른 이메일 형식을 입력하세요.");
            return;
        }

        try {
            setEmailSendLoading(true);

            const { res, data } = await requestEmailCodeApi(fullEmail);

            if (!res.ok || data.success === false) {
                throw new Error(data.message || "인증번호 전송 실패");
            }

            setEmailCode("");
            setEmailCodeSent(true);
            setEmailVerified(false);

            // 테스트용 인증번호 표시
            setEmailVerifyMessage(
                data?.code
                    ? `인증번호를 전송했습니다. 테스트용 인증번호는 ${data.code} 입니다.`
                    : "인증번호가 전송되었습니다."
            );

            setEmailTimer(180); // 3분 타이머 시작
            toast.success("인증번호 전송 완료");

        } catch (error) {
            const errorMessage = error.message || "이메일 인증 요청 실패";

            setEmailCodeSent(false);
            setEmailVerified(false);
            setEmailVerifyMessage(errorMessage);
            setEmailTimer(0);

            toast.error(errorMessage);
        } finally {
            setEmailSendLoading(false);
        }
    }

    /**
     * 인증번호 검증 함수
     */
    async function handleVerifyEmailCode() {
        if (!emailCode || emailCode.length !== 6) {
            setEmailVerifyMessage("인증번호 6자리를 입력하세요.");
            return;
        }

        try {
            setEmailVerifyLoading(true);

            const { res, data } = await verifyEmailCodeApi(fullEmail, emailCode);

            if (!res.ok || data.success === false) {
                throw new Error(data.message || "이메일 인증 실패");
            }

            setEmailVerified(true);
            setEmailVerifyMessage("이메일 인증이 완료되었습니다.");
            toast.success("이메일 인증 완료");

        } catch (error) {
            setEmailVerified(false);
            setEmailVerifyMessage(error.message || "이메일 인증 실패");
            toast.error(error.message || "이메일 인증 실패");

        } finally {
            setEmailVerifyLoading(false);
        }
    }

    /**
     * 인증번호 입력 처리 (숫자만 + 6자리 제한)
     */
    function handleEmailCodeChange(e) {
        const onlyNumber = e.target.value.replace(/[^0-9]/g, "").slice(0, 6);
        setEmailCode(onlyNumber);
    }

    return {
        isValidEmail,
        handleSendEmailCode,
        handleVerifyEmailCode,
        handleEmailCodeChange,
    };
}
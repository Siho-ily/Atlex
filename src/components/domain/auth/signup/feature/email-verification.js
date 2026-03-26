"use client";

import { useEffect } from "react";
import toast from "react-hot-toast";
import { isValidEmailFormat } from "@/components/domain/auth/signup/shared/validation";
import { requestEmailCodeApi, verifyEmailCodeApi } from "@/lib/emailAuth";

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
    const fullEmail = `${emailId}@${emailDomain}`;

    function isValidEmail() {
        return isValidEmailFormat(emailId, emailDomain);
    }

    useEffect(() => {
        setEmailCode("");
        setEmailCodeSent(false);
        setEmailVerified(false);
        setEmailVerifyMessage("");
        setEmailTimer(0);
    }, [emailId, emailDomain, setEmailCode, setEmailCodeSent, setEmailVerified, setEmailVerifyMessage, setEmailTimer]);

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

    async function handleSendEmailCode() {
        if (!isValidEmail()) {
            setEmailVerifyMessage("올바른 이메일 형식을 입력하세요.");
            return;
        }

        try {
            setEmailSendLoading(true);

            const { res, data } = await requestEmailCodeApi(fullEmail);

            if (!res.ok) {
                throw new Error(data.message || "인증번호 전송 실패");
            }

            setEmailCode("");
            setEmailCodeSent(true);
            setEmailVerified(false);
            setEmailVerifyMessage(
                data?.code
                    ? `인증번호를 전송했습니다. 테스트용 인증번호는 ${data.code} 입니다.`
                    : data?.message || "인증번호가 전송되었습니다."
            );
            setEmailTimer(180);
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

    async function handleVerifyEmailCode() {
        if (!emailCode || emailCode.length !== 6) {
            setEmailVerifyMessage("인증번호 6자리를 입력하세요.");
            return;
        }

        try {
            setEmailVerifyLoading(true);

            const { res, data } = await verifyEmailCodeApi(fullEmail, emailCode);

            if (!res.ok) {
                throw new Error(data.message || "이메일 인증 실패");
            }

            setEmailVerified(true);
            setEmailVerifyMessage("이메일 인증이 완료되었습니다.");
            toast.success("이메일 인증 완료");
        } catch (error) {
            setEmailVerified(false);
            setEmailVerifyMessage(error.message || "이메일 인증 실패");
            toast.error("이메일 인증 실패");
        } finally {
            setEmailVerifyLoading(false);
        }
    }

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
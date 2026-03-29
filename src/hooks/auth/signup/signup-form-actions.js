"use client";

import toast from "react-hot-toast";
import { normalize } from "@/lib/auth/signup/normalize";
import {
    checkUserIdApi,
    checkNicknameApi,
} from "@/lib/api/signupValidation";

/**
 * 회원가입 폼 액션 처리
 * - 아이디 중복확인
 * - 닉네임 중복확인
 * - 취소 이동
 * - 이메일 도메인 입력/선택
 */
export function useSignupFormActions({
    router,
    userId,
    nickname,
    setIdCheck,
    setNickCheck,
    setMessage,
    setEmailDomain,
}) {
    async function handleIdCheck() {
        const normalizedUserId = normalize(userId);
        setMessage("");

        if (normalizedUserId === "") {
            setIdCheck("empty");
            return;
        }

        try {
            const { res, data } = await checkUserIdApi(normalizedUserId);

            if (!res.ok || data.success === false) {
                if (data.type === "empty") {
                    setIdCheck("empty");
                    return;
                }

                throw new Error(data.message || "아이디 중복확인 실패");
            }

            setIdCheck(data.type);

            if (data.type === "ok") {
                toast.success("사용 가능한 아이디입니다.");
            }

            if (data.type === "duplicate") {
                toast.error("이미 사용중인 아이디입니다.");
            }
        } catch (error) {
            setIdCheck("");
            setMessage(error.message || "아이디 중복확인 중 오류가 발생했습니다.");
            toast.error(error.message || "아이디 중복확인 실패");
        }
    }

    async function handleNicknameCheck() {
        const normalizedNickname = normalize(nickname);
        setMessage("");

        if (normalizedNickname === "") {
            setNickCheck("empty");
            return;
        }

        try {
            const { res, data } = await checkNicknameApi(normalizedNickname);

            if (!res.ok || data.success === false) {
                if (data.type === "empty") {
                    setNickCheck("empty");
                    return;
                }

                throw new Error(data.message || "닉네임 중복확인 실패");
            }

            setNickCheck(data.type);

            if (data.type === "ok") {
                toast.success("사용 가능한 닉네임입니다.");
            }

            if (data.type === "duplicate") {
                toast.error("이미 사용중인 닉네임입니다.");
            }
        } catch (error) {
            setNickCheck("");
            setMessage(error.message || "닉네임 중복확인 중 오류가 발생했습니다.");
            toast.error(error.message || "닉네임 중복확인 실패");
        }
    }

    function handleCancel() {
        router.push("/");
    }

    function handleDomainChange(e) {
        setEmailDomain(e.target.value);
    }

    function handleSelectChange(e) {
        const value = e.target.value;
        setEmailDomain(value === "custom" ? "" : value);
    }

    return {
        handleIdCheck,
        handleNicknameCheck,
        handleCancel,
        handleDomainChange,
        handleSelectChange,
    };
}
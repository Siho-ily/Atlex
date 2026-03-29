"use client";

import { isDuplicateNickname, isDuplicateUserId } from "@/components/domain/auth/signup/shared/validation";
import { normalize } from "@/components/domain/auth/signup/shared/normalize";

export function useSignupFormActions({
    router,
    userId,
    nickname,
    setIdCheck,
    setNickCheck,
    setMessage,
    emailDomain,
    setEmailDomain,
}) {
    function handleIdCheck() {
        const normalizedUserId = normalize(userId);
        setMessage("");

        if (normalizedUserId === "") {
            setIdCheck("empty");
            return;
        }

        setIdCheck(isDuplicateUserId(userId) ? "duplicate" : "ok");
    }

    function handleNicknameCheck() {
        const normalizedNickname = normalize(nickname);
        setMessage("");

        if (normalizedNickname === "") {
            setNickCheck("empty");
            return;
        }

        setNickCheck(isDuplicateNickname(nickname) ? "duplicate" : "ok");
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
        emailDomain,
    };
}
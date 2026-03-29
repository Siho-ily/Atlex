"use client";

import { useState } from "react";

export function useSignupFormState() {
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordCheck, setShowPasswordCheck] = useState(false);

    const [userId, setUserId] = useState("");
    const [emailId, setEmailId] = useState("");
    const [emailDomain, setEmailDomain] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");
    const [nickname, setNickname] = useState("");

    const [idCheck, setIdCheck] = useState("");
    const [nickCheck, setNickCheck] = useState("");

    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const [emailCode, setEmailCode] = useState("");
    const [emailCodeSent, setEmailCodeSent] = useState(false);
    const [emailVerified, setEmailVerified] = useState(false);
    const [emailVerifyMessage, setEmailVerifyMessage] = useState("");
    const [emailSendLoading, setEmailSendLoading] = useState(false);
    const [emailVerifyLoading, setEmailVerifyLoading] = useState(false);
    const [emailTimer, setEmailTimer] = useState(0);

    return {
        showPassword,
        setShowPassword,
        showPasswordCheck,
        setShowPasswordCheck,

        userId,
        setUserId,
        emailId,
        setEmailId,
        emailDomain,
        setEmailDomain,
        password,
        setPassword,
        passwordCheck,
        setPasswordCheck,
        nickname,
        setNickname,

        idCheck,
        setIdCheck,
        nickCheck,
        setNickCheck,

        message,
        setMessage,
        loading,
        setLoading,

        emailCode,
        setEmailCode,
        emailCodeSent,
        setEmailCodeSent,
        emailVerified,
        setEmailVerified,
        emailVerifyMessage,
        setEmailVerifyMessage,
        emailSendLoading,
        setEmailSendLoading,
        emailVerifyLoading,
        setEmailVerifyLoading,
        emailTimer,
        setEmailTimer,
    };
}
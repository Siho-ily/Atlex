"use client";

import { useState } from "react";

/**
 * 로그인 폼의 상태를 관리하는 훅
 */
export function useLoginFormState() {
    // 아이디 입력값
    const [userId, setUserId] = useState("");

    // 비밀번호 입력값
    const [password, setPassword] = useState("");

    // 비밀번호 보기 / 숨기기 상태
    const [showPassword, setShowPassword] = useState(false);

    // 아이디 저장 체크 여부
    const [rememberId, setRememberId] = useState(false);

    // 화면에 보여줄 메시지
    const [message, setMessage] = useState("");

    // 버튼 로딩 상태
    // 현재 목업이라 실제로 사용되진 않지만
    // 회원가입 구조와 맞추기 위해 미리 유지
    const [loading, setLoading] = useState(false);

    return {
        userId,
        setUserId,
        password,
        setPassword,
        showPassword,
        setShowPassword,
        rememberId,
        setRememberId,
        message,
        setMessage,
        loading,
        setLoading,
    };
}
"use client";

import {
    sanitizeUserId,
    sanitizePassword,
    sanitizeEmailId,
    sanitizeEmailDomain,
} from "./signup-input-utils";

/**
 * 회원가입 폼의 입력값 변경 로직을 관리한다.
 *
 * 역할:
 * - 각 입력 필드의 상태 업데이트
 * - 영문/숫자/특수문자만 허용하도록 입력값 정리
 * - 아이디/닉네임 중복확인 상태 초기화
 * - 이메일 변경 시 이메일 인증 상태 초기화
 */
export function useSignupFormHandlers({
    setUserId,
    setIdCheck,
    setNickname,
    setNickCheck,
    setPassword,
    setPasswordCheck,
    setEmailId,
    setEmailDomain,
    setEmailVerified,
    setEmailVerifyMessage,
    setEmailCode,
}) {
    /**
     * 아이디 입력값을 업데이트한다.
     * 영문, 숫자, 특수문자만 허용한다.
     */
    function handleUserIdChange(e) {
        const value = sanitizeUserId(e.target.value);
        setUserId(value);
        setIdCheck("");
    }

    /**
     * 닉네임 입력값을 업데이트한다.
     * 닉네임은 현재 기존 입력 방식을 유지한다.
     */
    function handleNicknameChange(e) {
        setNickname(e.target.value);
        setNickCheck("");
    }

    /**
     * 비밀번호 입력값을 업데이트한다.
     * 영문, 숫자, 특수문자만 허용한다.
     */
    function handlePasswordChange(e) {
        const value = sanitizePassword(e.target.value);
        setPassword(value);
    }

    /**
     * 비밀번호 확인 입력값을 업데이트한다.
     * 영문, 숫자, 특수문자만 허용한다.
     */
    function handlePasswordCheckChange(e) {
        const value = sanitizePassword(e.target.value);
        setPasswordCheck(value);
    }

    /**
     * 이메일 아이디 부분을 업데이트한다.
     * 영문, 숫자, 특수문자만 허용한다.
     * 이메일 값이 변경되면 기존 인증 상태는 초기화된다.
     */
    function handleEmailIdChange(e) {
        const value = sanitizeEmailId(e.target.value);
        setEmailId(value);
        setEmailVerified(false);
        setEmailVerifyMessage("");
    }

    /**
     * 이메일 도메인 부분을 업데이트한다.
     * 영문, 숫자, 특수문자만 허용한다.
     * 이메일 값이 변경되면 기존 인증 상태는 초기화된다.
     */
    function handleEmailDomainChange(e) {
        const value = sanitizeEmailDomain(e.target.value);
        setEmailDomain(value);
        setEmailVerified(false);
        setEmailVerifyMessage("");
    }

    /**
     * 이메일 인증코드 입력값을 업데이트한다.
     * 인증코드에는 공백이 포함되지 않도록 처리한다.
     */
    function handleEmailCodeChange(e) {
        const value = e.target.value.replace(/\s/g, "");
        setEmailCode(value);
    }

    return {
        handleUserIdChange,
        handleNicknameChange,
        handlePasswordChange,
        handlePasswordCheckChange,
        handleEmailIdChange,
        handleEmailDomainChange,
        handleEmailCodeChange,
    };
}
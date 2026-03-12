"use client";

/*
========================================
회원가입 기능 전용 훅 (UI 없음)
----------------------------------------
이 파일은 상태 관리 / 검증 / 버튼 처리 / 회원가입 로직만 담당
UI는 page.js에서 관리한다.
========================================
*/

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function useSignup() {

    // 페이지 이동을 위한 라우터
    const router = useRouter();

    /*
    ============================
    상태 관리 영역
    ============================
    */

    // 비밀번호 표시 여부
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordCheck, setShowPasswordCheck] = useState(false);

    // 입력값 상태
    const [userId, setUserId] = useState("");
    const [emailId, setEmailId] = useState("");
    const [emailDomain, setEmailDomain] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");
    const [nickname, setNickname] = useState("");

    // 중복 확인 상태
    const [idCheck, setIdCheck] = useState("");
    const [nickCheck, setNickCheck] = useState("");

    // 메시지 / 로딩 상태
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);


    /*
    ============================
    아이디 중복 확인
    ============================
    */
    function handleIdCheck() {

        if (userId.trim() === "") {
            setIdCheck("empty");
            return;
        }

        // 테스트용 중복 처리
        if (userId.toLowerCase() === "admin") {
            setIdCheck("duplicate");
        } else {
            setIdCheck("ok");
        }
    }


    /*
    ============================
    닉네임 중복 확인
    ============================
    */
    function handleNicknameCheck() {

        if (nickname.trim() === "") {
            setNickCheck("empty");
            return;
        }

        if (nickname.toLowerCase() === "admin") {
            setNickCheck("duplicate");
        } else {
            setNickCheck("ok");
        }
    }


    /*
    ============================
    취소 버튼 → 홈으로 이동
    ============================
    */
    function handleCancel() {
        router.push("/");
    }


    /*
    ============================
    이메일 도메인 입력 변경
    ============================
    */
    function handleDomainChange(e) {
        setEmailDomain(e.target.value);
    }


    /*
    ============================
    이메일 select 변경
    ============================
    */
    function handleSelectChange(e) {

        const value = e.target.value;

        if (value === "custom") {
            setEmailDomain("");
        } else {
            setEmailDomain(value);
        }
    }


    /*
    ============================
    이메일 형식 검사
    ============================
    */
    function isValidEmail() {

        if (!emailId.trim() || !emailDomain.trim()) return false;

        const email = `${emailId}@${emailDomain}`;

        const regex =
            /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

        return regex.test(email);
    }


    /*
    ============================
    비밀번호 조건 검사
    ============================
    */
    function getPasswordChecks(pw) {

        return {
            length: pw.length >= 10,
            lower: /[a-z]/.test(pw),
            upper: /[A-Z]/.test(pw),
            number: /[0-9]/.test(pw),
            special: /[!@#$%^&*]/.test(pw),
        };
    }


    /*
    ============================
    비밀번호 강도 계산
    ============================
    */
    function getStrength(pw) {

        const checks = getPasswordChecks(pw);

        let score = 0;

        if (checks.length) score++;
        if (checks.lower) score++;
        if (checks.upper) score++;
        if (checks.number) score++;
        if (checks.special) score++;

        if (pw.length === 0) {
            return {
                width: "0%",
                color: "bg-gray-300",
                text: "",
            };
        }

        if (score <= 2) {
            return {
                width: "33%",
                color: "bg-red-400",
                text: "약함",
            };
        }

        if (score <= 4) {
            return {
                width: "66%",
                color: "bg-yellow-400",
                text: "보통",
            };
        }

        return {
            width: "100%",
            color: "bg-green-500",
            text: "강함",
        };
    }


    /*
    ============================
    계산 값
    ============================
    */

    const checks = getPasswordChecks(password);
    const strength = getStrength(password);

    const isPasswordValid =
        checks.length &&
        checks.lower &&
        checks.upper &&
        checks.number &&
        checks.special;

    const passwordMatch =
        passwordCheck.length > 0 &&
        password === passwordCheck;

    const passwordMismatch =
        passwordCheck.length > 0 &&
        password !== passwordCheck;


    /*
    ============================
    회원가입 가능 여부
    ============================
    */
    const canSignup =
        userId &&
        nickname &&
        password &&
        passwordCheck &&
        password === passwordCheck &&
        isPasswordValid &&
        isValidEmail() &&
        idCheck === "ok" &&
        nickCheck === "ok" &&
        !loading;


    /*
    ============================
    회원가입 버튼
    ============================
    */
    async function onSignup() {

    setMessage("");

    if (!canSignup) {
        toast.error("입력값을 확인하세요.");
        return;
    }

    try {

        setLoading(true);

        // 이메일 합치기
        const fullEmail = `${emailId}@${emailDomain}`;

        // 서버로 보낼 데이터
        const requestData = {
            userId: userId,
            password: password,
            name: nickname,
            email: fullEmail,
        };

        console.log("회원가입 요청:", requestData);

        const res = await fetch("/api/v1/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestData),
        });

        const data = await res.json();

        if (!res.ok) {
            throw new Error(data.message || "회원가입 실패");
        }

        toast.success("회원가입 완료");

        // 성공 시 이동
        router.push("/");

    } catch (error) {

        console.error(error);

        toast.error(error.message || "오류 발생");

    } finally {

        setLoading(false);

    }
}


    /*
    ============================
    외부에서 사용할 값 반환
    ============================
    */
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
        loading,

        checks,
        strength,

        passwordMatch,
        passwordMismatch,

        canSignup,

        handleIdCheck,
        handleNicknameCheck,
        handleCancel,
        handleDomainChange,
        handleSelectChange,
        isValidEmail,
        onSignup,
    };
}
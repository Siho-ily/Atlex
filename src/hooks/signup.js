"use client";

/*
========================================
회원가입 기능 전용 훅 (UI 없음)
----------------------------------------
이 파일은 상태 관리 / 검증 / 버튼 처리 / 회원가입 로직만 담당
UI는 page.js에서 관리한다.
========================================
*/

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import mockUsers from "@/components/data/mockusers.json";

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

    // 이메일 인증 상태
    const [emailCode, setEmailCode] = useState("");
    const [emailCodeSent, setEmailCodeSent] = useState(false);
    const [emailVerified, setEmailVerified] = useState(false);
    const [emailVerifyMessage, setEmailVerifyMessage] = useState("");
    const [emailSendLoading, setEmailSendLoading] = useState(false);
    const [emailVerifyLoading, setEmailVerifyLoading] = useState(false);
    const [emailTimer, setEmailTimer] = useState(0);

    /*
    ============================
    공통 정리 함수
    ============================
    */
    function normalize(value) {
        return value?.trim()?.toLowerCase() || "";
    }

    /*
    ============================
    아이디 중복 확인
    ============================
    */
    function handleIdCheck() {
        const normalizedUserId = normalize(userId);

        setMessage("");

        if (normalizedUserId === "") {
            setIdCheck("empty");
            return;
        }

        const isDuplicate = mockUsers.some(
            (user) => normalize(user.user_id) === normalizedUserId
        );

        if (isDuplicate) {
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
        const normalizedNickname = normalize(nickname);

        setMessage("");

        if (normalizedNickname === "") {
            setNickCheck("empty");
            return;
        }

        const isDuplicate = mockUsers.some(
            (user) => normalize(user.name) === normalizedNickname
        );

        if (isDuplicate) {
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
    이메일 변경 시 인증 상태 초기화
    ============================
    */
    useEffect(() => {
        setEmailCode("");
        setEmailCodeSent(false);
        setEmailVerified(false);
        setEmailVerifyMessage("");
        setEmailTimer(0);
    }, [emailId, emailDomain]);

    /*
    ============================
    이메일 인증 타이머
    ============================
    */
    useEffect(() => {
        if (emailTimer <= 0) return;

        const timer = setInterval(() => {
            setEmailTimer((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [emailTimer]);

    /*
    ============================
    이메일 인증번호 전송
    ============================
    */
    async function handleSendEmailCode() {
        setEmailVerifyMessage("");
        setMessage("");

        if (!isValidEmail()) {
            setEmailCode("");
            setEmailCodeSent(false);
            setEmailVerified(false);
            setEmailTimer(0);
            setEmailVerifyMessage("올바른 이메일 형식을 입력하세요.");
            return;
        }

        try {
            setEmailSendLoading(true);

            const fullEmail = `${emailId}@${emailDomain}`;

            const res = await fetch("/api/v1/email/send-code", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: fullEmail,
                }),
            });

            const data = await res.json();

            if (!data.success) {
                setEmailCode("");
                setEmailCodeSent(false);
                setEmailVerified(false);
                setEmailTimer(0);
                setEmailVerifyMessage(data.message || "인증번호 전송 실패");
                toast.error(data.message || "인증번호 전송 실패");
                return;
            }

            setEmailCode("");
            setEmailCodeSent(true);
            setEmailVerified(false);
            setEmailTimer(180);
            setEmailVerifyMessage(
                data.message || "인증번호를 전송했습니다. 테스트용 인증번호는 123456 입니다."
            );

            toast.success("인증번호 전송 완료");

        } catch (error) {
            setEmailCode("");
            setEmailCodeSent(false);
            setEmailVerified(false);
            setEmailTimer(0);
            setEmailVerifyMessage("인증번호 전송 중 오류 발생");
            toast.error("인증번호 전송 실패");
        } finally {
            setEmailSendLoading(false);
        }
    }

    /*
    ============================
    이메일 인증번호 확인
    ============================
    */
    async function handleVerifyEmailCode() {
        setEmailVerifyMessage("");
        setMessage("");

        if (!emailCode.trim()) {
            setEmailVerifyMessage("인증번호를 입력하세요.");
            return;
        }

        if (emailTimer === 0) {
            setEmailVerifyMessage("인증시간이 만료되었습니다. 다시 전송하세요.");
            return;
        }

        try {
            setEmailVerifyLoading(true);

            const fullEmail = `${emailId}@${emailDomain}`;

            const res = await fetch("/api/v1/email/verify-code", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: fullEmail,
                    code: emailCode,
                }),
            });

            const data = await res.json();

            if (!data.success) {
                setEmailVerified(false);
                setEmailVerifyMessage(data.message || "이메일 인증 실패");
                toast.error(data.message || "이메일 인증 실패");
                return;
            }

            setEmailVerified(true);
            setEmailVerifyMessage(data.message || "이메일 인증이 완료되었습니다.");
            toast.success("이메일 인증 완료");

        } catch (error) {
            setEmailVerified(false);
            setEmailVerifyMessage("인증번호가 올바르지 않습니다.");
            toast.error("이메일 인증 실패");
        } finally {
            setEmailVerifyLoading(false);
        }
    }

    /*
    ============================
    인증번호 입력
    ============================
    */
    function handleEmailCodeChange(e) {
        const onlyNumber = e.target.value.replace(/[^0-9]/g, "").slice(0, 6);
        setEmailCode(onlyNumber);
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

    const formattedEmailTime =
        `${String(Math.floor(emailTimer / 60)).padStart(2, "0")}:${String(emailTimer % 60).padStart(2, "0")}`;

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
        emailVerified &&
        !loading;

    /*
    ============================
    회원가입 버튼
    ============================
    */
    async function onSignup() {
        setMessage("");

        if (!canSignup) {
            setMessage("입력값을 확인하세요.");
            toast.error("입력값을 확인하세요.");
            return;
        }

        try {
            setLoading(true);

            const fullEmail = `${emailId}@${emailDomain}`;

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

            setMessage("");
            toast.success("회원가입 완료");
            router.push("/");

        } catch (error) {
            const errorMessage = error.message || "오류 발생";

            console.error(error);
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

        emailCode,
        setEmailCode,

        emailCodeSent,
        emailVerified,
        emailVerifyMessage,

        emailSendLoading,
        emailVerifyLoading,

        emailTimer,
        formattedEmailTime,

        handleSendEmailCode,
        handleVerifyEmailCode,
        handleEmailCodeChange,
    };
}
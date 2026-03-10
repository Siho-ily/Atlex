"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { Eye, EyeOff } from "lucide-react";

// =========================
// 버튼 기능 import
// =========================
import {
    handleIdCheck,
    handleNicknameCheck,
    handleCancel,
} from "../components/buttons/signupButtons"

export default function Test() {
    const router = useRouter();

    // =========================
    // 다크모드 상태
    // =========================
    const [isDark, setIsDark] = useState(false);

    // =========================
    // 비밀번호 보기 상태
    // true면 비밀번호 / 비밀번호 확인 둘 다 보이기
    // false면 둘 다 숨기기
    // =========================
    const [showPassword, setShowPassword] = useState(false);

    // =========================
    // 회원가입 입력값 상태
    // =========================
    const [userId, setUserId] = useState(""); // 아이디
    const [emailId, setEmailId] = useState(""); // 이메일 앞부분
    const [emailDomain, setEmailDomain] = useState(""); // 이메일 도메인
    const [password, setPassword] = useState(""); // 비밀번호
    const [passwordCheck, setPasswordCheck] = useState(""); // 비밀번호 확인
    const [nickname, setNickname] = useState(""); // 닉네임

    // =========================
    // 중복확인 상태
    // =========================
    const [idCheck, setIdCheck] = useState("");
    const [nickCheck, setNickCheck] = useState("");

    // =========================
    // 회원가입 결과 / 로딩 상태
    // =========================
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    // =========================
    // 처음 렌더링 시 현재 다크모드 상태 확인
    // localStorage에 저장된 theme 값 기준으로 적용
    // =========================
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        const html = document.documentElement;

        if (savedTheme === "dark") {
            html.classList.add("dark");
            setIsDark(true);
        } else {
            html.classList.remove("dark");
            setIsDark(false);
        }
    }, []);

    // =========================
    // 다크모드 / 라이트모드 전환 함수
    // html 태그에 dark 클래스를 붙였다 떼는 방식
    // =========================
    function toggleTheme() {
        const html = document.documentElement;
        const nextDark = !html.classList.contains("dark");

        html.classList.toggle("dark", nextDark);
        localStorage.setItem("theme", nextDark ? "dark" : "light");
        setIsDark(nextDark);
    }

    // =========================
    // 이메일 도메인 직접 입력 시 사용
    // =========================
    function handleDomainChange(e) {
        setEmailDomain(e.target.value);
    }

    // =========================
    // 이메일 드롭다운 선택 시 사용
    // 직접입력 선택하면 비우고,
    // 나머지는 선택값을 도메인 input에 넣어줌
    // =========================
    function handleSelectChange(e) {
        const value = e.target.value;

        if (value === "custom") {
            setEmailDomain("");
        } else {
            setEmailDomain(value);
        }
    }

    // =========================
    // 이메일 형식 검사 함수
    // =========================
    function isValidEmail() {
        if (!emailId.trim() || !emailDomain.trim()) return false;

        const email = `${emailId}@${emailDomain}`;
        const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

        return regex.test(email);
    }

    // =========================
    // 비밀번호 조건 체크 함수
    // 각 조건 충족 여부를 true / false로 반환
    // =========================
    function getPasswordChecks(pw) {
        return {
            length: pw.length >= 10,
            lower: /[a-z]/.test(pw),
            upper: /[A-Z]/.test(pw),
            number: /[0-9]/.test(pw),
            special: /[!@#$%^&*]/.test(pw),
        };
    }

    const checks = getPasswordChecks(password);

    // =========================
    // 비밀번호 강도 계산 함수
    // =========================
    function getStrength(pw) {
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

    // =========================
    // 현재 비밀번호 강도 결과
    // =========================
    const strength = getStrength(password);

    // =========================
    // 비밀번호 조건 모두 만족 여부
    // =========================
    const isPasswordValid =
        checks.length &&
        checks.lower &&
        checks.upper &&
        checks.number &&
        checks.special;

    // =========================
    // 비밀번호 확인 일치 여부
    // passwordCheck에 입력이 있을 때만 메시지 표시
    // =========================
    const passwordMatch =
        passwordCheck.length > 0 && password === passwordCheck;

    const passwordMismatch =
        passwordCheck.length > 0 && password !== passwordCheck;

    // =========================
    // 회원가입 버튼 활성화 조건
    // =========================
    const canSignup =
        userId.trim() !== "" &&
        nickname.trim() !== "" &&
        password.trim() !== "" &&
        passwordCheck.trim() !== "" &&
        password === passwordCheck &&
        isPasswordValid &&
        isValidEmail() &&
        idCheck === "ok" &&
        nickCheck === "ok" &&
        !loading;

    // =========================
    // 회원가입 버튼 클릭 시 실행
    // 현재는 성공 시 토스트 메시지 후 메인페이지 이동
    // =========================
    function onSignup() {
        setMessage("");

        if (userId.trim() === "") {
            setMessage("아이디를 입력하세요.");
            toast.error("아이디를 입력하세요.");
            return;
        }

        if (idCheck !== "ok") {
            setMessage("아이디 중복확인을 완료하세요.");
            toast.error("아이디 중복확인을 완료하세요.");
            return;
        }

        if (!isValidEmail()) {
            setMessage("올바른 이메일 형식을 입력하세요.");
            toast.error("올바른 이메일 형식을 입력하세요.");
            return;
        }

        if (!isPasswordValid) {
            setMessage("비밀번호 조건을 모두 만족하세요.");
            toast.error("비밀번호 조건을 모두 만족하세요.");
            return;
        }

        if (password !== passwordCheck) {
            setMessage("비밀번호가 일치하지 않습니다.");
            toast.error("비밀번호가 일치하지 않습니다.");
            return;
        }

        if (nickname.trim() === "") {
            setMessage("닉네임을 입력하세요.");
            toast.error("닉네임을 입력하세요.");
            return;
        }

        if (nickCheck !== "ok") {
            setMessage("닉네임 중복확인을 완료하세요.");
            toast.error("닉네임 중복확인을 완료하세요.");
            return;
        }

        try {
            setLoading(true);
            toast.success("회원가입이 완료되었습니다!");

            setTimeout(() => {
                router.push("/");
            }, 800);
        } catch (error) {
            console.error(error);
            setMessage("회원가입 처리 중 오류가 발생했습니다.");
            toast.error("회원가입 처리 중 오류가 발생했습니다.");
            setLoading(false);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors duration-300 relative px-4">
            {/* 다크모드 전환 버튼 */}
            <button
                onClick={toggleTheme}
                className="absolute top-5 right-5 px-4 py-2 rounded-lg bg-black text-white dark:bg-white dark:text-black"
            >
                {isDark ? "라이트모드" : "다크모드"}
            </button>

            {/* 회원가입 카드 */}
            <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 transition-colors duration-300">
                {/* 제목 */}
                <h2 className="text-2xl font-bold text-center mb-2 text-black dark:text-white">
                    회원가입
                </h2>

                {/* 안내문 */}
                <p className="text-sm text-gray-500 dark:text-gray-300 text-center mb-6">
                    이메일, 비밀번호, 닉네임을 입력해주세요.
                </p>

                <div className="space-y-4">
                    {/* 아이디 입력 영역 */}
                    <div>
                        <label className="text-black dark:text-white text-sm font-medium">
                            아이디
                        </label>

                        <div className="flex gap-2 mt-2">
                            <input
                                type="text"
                                placeholder="아이디 입력"
                                value={userId}
                                onChange={(e) => {
                                    setUserId(e.target.value);
                                    setIdCheck("");
                                }}
                                className="flex-1 border rounded px-3 py-2 text-black dark:text-white bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 outline-none"
                            />

                            <button
                                type="button"
                                onClick={() => handleIdCheck(userId, setIdCheck)}
                                className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
                            >
                                중복확인
                            </button>
                        </div>

                        {idCheck === "ok" && (
                            <p className="text-xs text-green-500 mt-2">
                                사용 가능한 아이디입니다.
                            </p>
                        )}

                        {idCheck === "duplicate" && (
                            <p className="text-xs text-red-500 mt-2">
                                이미 사용중인 아이디입니다.
                            </p>
                        )}

                        {idCheck === "empty" && (
                            <p className="text-xs text-red-500 mt-2">
                                아이디를 입력하세요.
                            </p>
                        )}
                    </div>

                    {/* 이메일 입력 영역 */}
                    <div>
                        <label className="text-black dark:text-white text-sm font-medium">
                            이메일
                        </label>

                        <div className="flex gap-2 mt-2 items-center">
                            <input
                                type="text"
                                placeholder="아이디"
                                value={emailId}
                                onChange={(e) => setEmailId(e.target.value)}
                                className="w-[38%] border rounded px-3 py-2 text-black dark:text-white bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 outline-none"
                            />

                            <span className="text-black dark:text-white font-medium">
                                @
                            </span>

                            <input
                                type="text"
                                placeholder="도메인"
                                value={emailDomain}
                                onChange={handleDomainChange}
                                className="w-[34%] border rounded px-3 py-2 text-black dark:text-white bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 outline-none"
                            />

                            <select
                                onChange={handleSelectChange}
                                defaultValue="custom"
                                className="w-[28%] border rounded px-2 py-2 text-black dark:text-white bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 outline-none"
                            >
                                <option value="custom">직접입력</option>
                                <option value="gmail.com">gmail.com</option>
                                <option value="naver.com">naver.com</option>
                                <option value="daum.net">daum.net</option>
                                <option value="kakao.com">kakao.com</option>
                            </select>
                        </div>

                        {emailId !== "" && emailDomain !== "" && !isValidEmail() && (
                            <p className="text-xs text-red-500 mt-2">
                                올바른 이메일 형식을 입력하세요.
                            </p>
                        )}
                    </div>

                    {/* 비밀번호 입력 영역 */}
                    <div>
                        <label className="text-black dark:text-white text-sm font-medium">
                            비밀번호
                        </label>

                        {/* =========================
                        input과 눈 아이콘 버튼을 반드시 같은 relative 박스 안에 넣어야 함
                        ========================= */}
                        <div className="relative mt-2">
                            <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full border rounded px-3 py-2 pr-12 text-black dark:text-white bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 outline-none"
                            />

                            {/* =========================
                            눈 아이콘 버튼
                            input 안쪽 오른쪽 중앙에 고정
                            반드시 input 바로 아래, 같은 div 안에 있어야 함
                            ========================= */}
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black dark:hover:text-white"
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>

                        {/* 비밀번호 조건 실시간 체크 UI */}
                        <div className="text-xs mt-2 space-y-1">
                            <p className={checks.length ? "text-green-500" : "text-gray-500"}>
                                {checks.length ? "✔" : "✖"} 10자 이상
                            </p>

                            <p className={checks.upper ? "text-green-500" : "text-gray-500"}>
                                {checks.upper ? "✔" : "✖"} 대문자 포함
                            </p>

                            <p className={checks.lower ? "text-green-500" : "text-gray-500"}>
                                {checks.lower ? "✔" : "✖"} 소문자 포함
                            </p>

                            <p className={checks.number ? "text-green-500" : "text-gray-500"}>
                                {checks.number ? "✔" : "✖"} 숫자 포함
                            </p>

                            <p className={checks.special ? "text-green-500" : "text-gray-500"}>
                                {checks.special ? "✔" : "✖"} 특수문자 포함
                            </p>
                        </div>

                        {/* 비밀번호 강도 바 */}
                        <div className="w-full h-2 bg-gray-200 dark:bg-gray-600 mt-2 rounded overflow-hidden">
                            <div
                                className={`h-2 rounded ${strength.color}`}
                                style={{ width: strength.width }}
                            />
                        </div>

                        {/* 비밀번호 강도 텍스트 */}
                        <p className="text-xs text-black dark:text-white mt-2">
                            {strength.text}
                        </p>
                    </div>

                    {/* 비밀번호 확인 영역 */}
                    <div>
                        <label className="text-black dark:text-white text-sm font-medium">
                            비밀번호 확인
                        </label>

                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="비밀번호 확인"
                            value={passwordCheck}
                            onChange={(e) => setPasswordCheck(e.target.value)}
                            className="w-full border rounded px-3 py-2 mt-2 text-black dark:text-white bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 outline-none"
                        />

                        {passwordMatch && (
                            <p className="text-green-500 text-xs mt-2">
                                비밀번호가 일치합니다.
                            </p>
                        )}

                        {passwordMismatch && (
                            <p className="text-red-500 text-xs mt-2">
                                비밀번호가 일치하지 않습니다.
                            </p>
                        )}
                    </div>

                    {/* 닉네임 입력 영역 */}
                    <div>
                        <label className="text-black dark:text-white text-sm font-medium">
                            닉네임
                        </label>

                        <div className="flex gap-2 mt-2">
                            <input
                                type="text"
                                placeholder="닉네임 입력"
                                value={nickname}
                                onChange={(e) => {
                                    setNickname(e.target.value);
                                    setNickCheck("");
                                }}
                                className="flex-1 border rounded px-3 py-2 text-black dark:text-white bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 outline-none"
                            />

                            <button
                                type="button"
                                onClick={() =>
                                    handleNicknameCheck(nickname, setNickCheck)
                                }
                                className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
                            >
                                중복확인
                            </button>
                        </div>

                        {nickCheck === "ok" && (
                            <p className="text-xs text-green-500 mt-2">
                                사용 가능한 닉네임입니다.
                            </p>
                        )}

                        {nickCheck === "duplicate" && (
                            <p className="text-xs text-red-500 mt-2">
                                이미 사용중인 닉네임입니다.
                            </p>
                        )}

                        {nickCheck === "empty" && (
                            <p className="text-xs text-red-500 mt-2">
                                닉네임을 입력하세요.
                            </p>
                        )}
                    </div>
                </div>

                {/* 서버 응답 메시지 */}
                {message && (
                    <p className="text-sm mt-4 text-center text-red-500 dark:text-red-400">
                        {message}
                    </p>
                )}

                {/* 하단 버튼 영역 */}
                <div className="flex gap-3 mt-6">
                    <button
                        onClick={onSignup}
                        disabled={!canSignup}
                        className="w-1/2 bg-blue-400 text-white py-2 rounded-lg hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? "처리중..." : "회원가입"}
                    </button>

                    <button
                        onClick={() => handleCancel(router)}
                        type="button"
                        className="w-1/2 bg-gray-400 text-white py-2 rounded-lg hover:bg-gray-500"
                    >
                        취소
                    </button>
                </div>
            </div>
        </div>
    );
}
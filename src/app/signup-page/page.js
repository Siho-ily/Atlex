"use client";

import { useEffect, useState } from "react";

export default function Test() {
    // =========================
    // 다크모드 상태
    // =========================
    const [isDark, setIsDark] = useState(false);

    // =========================
    // 회원가입 입력값 상태
    // =========================
    const [userId, setUserId] = useState(""); // 아이디
    const [emailId, setEmailId] = useState(""); // 이메일 앞부분
    const [emailDomain, setEmailDomain] = useState(""); // 이메일 도메인
    const [password, setPassword] = useState(""); // 비밀번호
    const [passwordCheck, setPasswordCheck] = useState(""); // 비밀번호 확인
    const [nickname, setNickname] = useState(""); // 닉네임(name으로 전송)

    // =========================
    // 중복확인 메시지 상태
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
    // =========================
    useEffect(() => {
        setIsDark(document.documentElement.classList.contains("dark"));
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
    // 아이디 중복확인 (현재는 테스트용)
    // 실제로는 API 호출로 바꾸면 됨
    // =========================
    function handleIdCheck() {
        if (userId.trim() === "") {
            setIdCheck("empty");
            return;
        }

        if (userId === "admin") {
            setIdCheck("duplicate");
        } else {
            setIdCheck("ok");
        }
    }

    // =========================
    // 닉네임 중복확인 (현재는 테스트용)
    // 실제로는 API 호출로 바꾸면 됨
    // =========================
    function handleNicknameCheck() {
        if (nickname.trim() === "") {
            setNickCheck("empty");
            return;
        }

        if (nickname === "admin") {
            setNickCheck("duplicate");
        } else {
            setNickCheck("ok");
        }
    }

    // =========================
    // 비밀번호 강도 계산 함수
    // 길이, 소문자, 대문자, 숫자 포함 여부로 계산
    // =========================
    function getStrength(pw) {

    let score = 0;

    if (pw.length >= 10) score++;

    if (/[a-z]/.test(pw)) score++;

    if (/[A-Z]/.test(pw)) score++;

    if (/[0-9]/.test(pw)) score++;

    if (/[!@#$%^&*]/.test(pw)) score++; // 특수문자 검사 추가


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
    // 이메일 전체 조합
    // ex) test + gmail.com => test@gmail.com
    // =========================
    const fullEmail = emailId && emailDomain ? `${emailId}@${emailDomain}` : "";

    // =========================
    // 회원가입 버튼 클릭 시 실행
    // 백엔드로 POST 요청 보냄
    // =========================
    async function handleSignup() {
        // 기존 메시지 초기화
        setMessage("");

        // 아이디 입력 검사
        if (userId.trim() === "") {
            setMessage("아이디를 입력하세요.");
            return;
        }

        // 이메일 입력 검사
        if (emailId.trim() === "" || emailDomain.trim() === "") {
            setMessage("이메일을 입력하세요.");
            return;
        }

        // 비밀번호 입력 검사
        if (password.trim() === "") {
            setMessage("비밀번호를 입력하세요.");
            return;
        }

        // 비밀번호 확인 검사
        if (password !== passwordCheck) {
            setMessage("비밀번호가 일치하지 않습니다.");
            return;
        }

        // 닉네임 입력 검사
        if (nickname.trim() === "") {
            setMessage("닉네임을 입력하세요.");
            return;
        }

        // 백엔드에 보낼 데이터 형식
        const requestData = {
            userId: userId,
            email: fullEmail,
            password: password,
            name: nickname,
        };

        try {
            setLoading(true);

            // 회원가입 요청
            const response = await fetch("http://localhost:8080/api/v1/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestData),
            });

            // 응답 본문을 텍스트로 받음
            const resultText = await response.text();

            // 응답 성공 / 실패 처리
            if (response.ok) {
                setMessage(resultText || "회원가입이 완료되었습니다.");
            } else {
                setMessage(resultText || "회원가입에 실패했습니다.");
            }
        } catch (error) {
            setMessage("서버 연결 중 오류가 발생했습니다.");
        } finally {
            setLoading(false);
        }
    }

    // =========================
    // 취소 버튼 클릭 시 입력값 초기화
    // =========================
    function handleCancel() {
        setUserId("");
        setIdCheck("");
        setEmailId("");
        setEmailDomain("");
        setPassword("");
        setPasswordCheck("");
        setNickname("");
        setNickCheck("");
        setMessage("");
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
                                onClick={handleIdCheck}
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

                    </div>

                    {/* 비밀번호 입력 영역 */}
                    <div>
                        <label className="text-black dark:text-white text-sm font-medium">
                            비밀번호
                        </label>

                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full border rounded px-3 py-2 mt-2 text-black dark:text-white bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 outline-none"
                        />

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

                        {/* 비밀번호 안내문 */}
                        <p className="text-xs text-gray-500 dark:text-gray-300">
                            10자 이상, 대문자, 소문자, 숫자, 특수문자를 포함하세요
                        </p>
                    </div>

                    {/* 비밀번호 확인 영역 */}
                    <div>
                        <label className="text-black dark:text-white text-sm font-medium">
                            비밀번호 확인
                        </label>

                        <input
                            type="password"
                            placeholder="비밀번호 확인"
                            value={passwordCheck}
                            onChange={(e) => setPasswordCheck(e.target.value)}
                            className="w-full border rounded px-3 py-2 mt-2 text-black dark:text-white bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 outline-none"
                        />
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
                                onClick={handleNicknameCheck}
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
                        onClick={handleSignup}
                        disabled={loading}
                        className="w-1/2 bg-blue-400 text-white py-2 rounded-lg hover:bg-blue-500 disabled:opacity-60"
                    >
                        {loading ? "처리중..." : "회원가입"}
                    </button>

                    <button
                        onClick={handleCancel}
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
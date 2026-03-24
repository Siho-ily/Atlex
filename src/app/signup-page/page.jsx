"use client";

/*
========================================
회원가입 페이지 UI 전용 파일
----------------------------------------
이 파일은 화면(UI)만 담당한다.
- 배경
- 다크모드 토글
- 입력창 배치
- 버튼 배치
- 안내 문구 출력

실제 회원가입 기능 로직은 signup.jsx(useSignup)에서 관리한다.
========================================
*/

import { useEffect, useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import DarkModeToggle from "@/components/DarkModeToggle";
import Button from "@/components/common/Button";
import InputField from "@/components/common/InputField";
import useSignup from "@/hooks/signup";

export default function Page() {
    /*
    ============================
    다크모드 상태 관리
    ============================
    true  -> 다크모드
    false -> 라이트모드
    */
    const [isDark, setIsDark] = useState(false);

    /*
    ============================
    회원가입 기능 가져오기
    ============================
    signup.jsx에서 관리하는 상태와 함수들을
    여기 page.js에서 받아와서 UI에 연결한다.
    */
    const {
        showPassword,
        setShowPassword,

        showPasswordCheck,
        setShowPasswordCheck,

        userId,
        setUserId,

        emailId,
        setEmailId,

        emailDomain,

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
    } = useSignup();

    /*
    ============================
    최초 렌더링 시 저장된 테마 불러오기
    ============================
    localStorage에 저장된 theme 값을 기준으로
    html 태그에 dark 클래스를 붙이거나 제거한다.
    */
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

    /*
    ============================
    다크모드 / 라이트모드 전환
    ============================
    버튼 클릭 시 html 태그의 dark 클래스를 토글하고
    localStorage에도 저장한다.
    */
    function toggleTheme() {
        const html = document.documentElement;
        const nextDark = !html.classList.contains("dark");

        html.classList.toggle("dark", nextDark);
        localStorage.setItem("theme", nextDark ? "dark" : "light");
        setIsDark(nextDark);
    }

    return (
        <div className="min-h-screen w-full bg-gray-100 dark:bg-gray-900 transition-colors duration-300 relative">

            <DarkModeToggle isDark={isDark} onToggle={toggleTheme} />

            <div className="min-h-screen flex items-center justify-center px-4">

                <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 transition-colors duration-300">

                    <h2 className="text-2xl font-bold text-center mb-2 text-black dark:text-white">
                        회원가입
                    </h2>

                    <p className="text-sm text-gray-500 dark:text-gray-300 text-center mb-6">
                        이메일, 비밀번호, 닉네임을 입력해주세요.
                    </p>

                    <div className="space-y-4">

                        <div>
                            <label className="block text-sm font-medium mb-1 text-black dark:text-white">
                                아이디
                            </label>

                            <div className="flex gap-2">
                                <InputField
                                    type="text"
                                    placeholder="아이디 입력"
                                    value={userId}
                                    onChange={(e) => {
                                        setUserId(e.target.value);
                                        setIdCheck("");
                                    }}
                                    className="flex-1"
                                />

                                <Button
                                    type="button"
                                    onClick={handleIdCheck}
                                    className="px-4 py-2"
                                >
                                    중복확인
                                </Button>
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

                        <div>
                            <label className="block text-sm font-medium mb-1 text-black dark:text-white">
                                이메일
                            </label>

                            <div className="flex gap-2 items-center">
                                <InputField
                                    type="text"
                                    placeholder="이메일 입력"
                                    value={emailId}
                                    onChange={(e) => setEmailId(e.target.value)}
                                    className="w-[38%]"
                                />

                                <span className="text-black dark:text-white font-medium">
                                    @
                                </span>

                                <InputField
                                    type="text"
                                    placeholder="도메인"
                                    value={emailDomain}
                                    onChange={handleDomainChange}
                                    className="w-[34%]"
                                />

                                <select
                                    value={
                                        ["gmail.com", "naver.com", "daum.net", "kakao.com"].includes(emailDomain)
                                            ? emailDomain
                                            : "custom"
                                    }
                                    onChange={handleSelectChange}
                                    className="w-[28%] px-3 py-2 border rounded-lg text-black dark:text-white bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600"
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

                            <div className="mt-3">
                                <Button
                                    type="button"
                                    onClick={handleSendEmailCode}
                                    disabled={!isValidEmail() || emailSendLoading}
                                    className="w-full"
                                >
                                    {emailSendLoading
                                        ? "전송중..."
                                        : emailCodeSent
                                        ? "인증번호 재전송"
                                        : "인증번호 전송"}
                                </Button>
                            </div>

                            {/* 핵심 수정: 인증번호 전송 실패 / 중복 이메일 / 성공 메시지를
                               emailCodeSent 여부와 상관없이 보여준다 */}
                            {emailVerifyMessage && (
                                <p
                                    className={`text-xs mt-2 ${
                                        emailVerified || emailCodeSent
                                            ? "text-green-500"
                                            : "text-red-500"
                                    }`}
                                >
                                    {emailVerifyMessage}
                                </p>
                            )}

                            {emailCodeSent && (
                                <div className="mt-3">
                                    <div className="flex gap-2">
                                        <div className="relative flex-1">
                                            <InputField
                                                type="text"
                                                placeholder="인증번호 6자리 입력"
                                                value={emailCode}
                                                onChange={handleEmailCodeChange}
                                                className="w-full pr-16"
                                            />

                                            {!emailVerified && emailTimer > 0 && (
                                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-red-500">
                                                    {formattedEmailTime}
                                                </span>
                                            )}
                                        </div>

                                        <Button
                                            type="button"
                                            onClick={handleVerifyEmailCode}
                                            disabled={emailVerifyLoading || emailVerified || emailTimer === 0}
                                            className="px-4 py-2 whitespace-nowrap"
                                        >
                                            {emailVerifyLoading ? "확인중..." : "인증확인"}
                                        </Button>
                                    </div>

                                    {emailTimer === 0 && !emailVerified && (
                                        <p className="text-xs text-red-500 mt-2">
                                            인증시간이 만료되었습니다. 인증번호를 다시 전송하세요.
                                        </p>
                                    )}
                                </div>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1 text-black dark:text-white">
                                비밀번호
                            </label>

                            <div className="relative mt-2">
                                <InputField
                                    type={showPassword ? "text" : "password"}
                                    placeholder="비밀번호 입력"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    autoComplete="new-password"
                                    className="w-full pr-12"
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black dark:hover:text-white"
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>

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

                            <div className="w-full h-2 bg-gray-200 dark:bg-gray-600 mt-2 rounded overflow-hidden">
                                <div
                                    className={`h-2 rounded ${strength.color}`}
                                    style={{ width: strength.width }}
                                />
                            </div>

                            <p className="text-xs text-black dark:text-white mt-2">
                                {strength.text}
                            </p>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1 text-black dark:text-white">
                                비밀번호 확인
                            </label>

                            <div className="relative mt-2">
                                <InputField
                                    type={showPasswordCheck ? "text" : "password"}
                                    placeholder="비밀번호 확인"
                                    value={passwordCheck}
                                    onChange={(e) => setPasswordCheck(e.target.value)}
                                    autoComplete="new-password"
                                    className="w-full pr-12"
                                />

                                 <button
                                    type="button"
                                    onClick={() => setShowPasswordCheck(!showPasswordCheck)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black dark:hover:text-white"
                                >
                                    {showPasswordCheck ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>

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

                        <div>
                            <label className="block text-sm font-medium mb-1 text-black dark:text-white">
                                닉네임
                            </label>

                            <div className="flex gap-2">
                                <InputField
                                    type="text"
                                    placeholder="닉네임 입력"
                                    value={nickname}
                                    onChange={(e) => {
                                        setNickname(e.target.value);
                                        setNickCheck("");
                                    }}
                                    className="flex-1"
                                />

                                <Button
                                    type="button"
                                    onClick={handleNicknameCheck}
                                    className="px-4 py-2"
                                >
                                    중복확인
                                </Button>
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

                    {message && (
                        <p className="text-sm mt-4 text-center text-red-500 dark:text-red-400">
                            {message}
                        </p>
                    )}

                    <div className="flex gap-3 mt-6">
                        <Button
                            type="button"
                            onClick={onSignup}
                            disabled={!canSignup}
                            variant="primary"
                            className="w-1/2 bg-blue-400 hover:bg-blue-500 text-white"
                        >
                            {loading ? "처리중..." : "회원가입"}
                        </Button>

                        <Button
                            type="button"
                            onClick={handleCancel}
                            variant="secondary"
                            className="w-1/2"
                        >
                            취소
                        </Button>
                    </div>

                    {!emailVerified && (
                        <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-3">
                            이메일 인증 완료 후 회원가입이 가능합니다.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
"use client";

import { useEffect, useState } from "react";

export default function Test() {
    const [password, setPassword] = useState("");
    const [isDark, setIsDark] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setIsDark(document.documentElement.classList.contains("dark"));
        setMounted(true);
    }, []);

    function toggleTheme() {
        const html = document.documentElement;
        const nextDark = !html.classList.contains("dark");

        html.classList.toggle("dark", nextDark);
        localStorage.setItem("theme", nextDark ? "dark" : "light");
        setIsDark(nextDark);
    }

    function getStrength(pw) {
        let score = 0;

        if (pw.length >= 8) score++;
        if (/[a-z]/.test(pw)) score++;
        if (/[A-Z]/.test(pw)) score++;
        if (/[0-9]/.test(pw)) score++;

        if (pw.length === 0) {
            return {
                width: "0%",
                color: "bg-gray-300",
                text: "",
            };
        }

        if (score <= 2) {
            return {
                width: "33.3%",
                color: "bg-red-400",
                text: "약함",
            };
        }

        if (score === 3) {
            return {
                width: "66.6%",
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

    const strength = getStrength(password);

    if (!mounted) return null;

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors duration-300 relative">
            <button
                onClick={toggleTheme}
                className="absolute top-5 right-5 px-4 py-2 rounded-lg bg-black text-white dark:bg-white dark:text-black"
            >
                {isDark ? "라이트모드" : "다크모드"}
            </button>

            <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 transition-colors duration-300">
                <h2 className="text-2xl font-bold text-center mb-2 text-black dark:text-white">
                    회원가입
                </h2>

                <p className="text-sm text-gray-500 dark:text-gray-300 text-center mb-6">
                    이메일, 비밀번호, 닉네임을 입력해주세요.
                </p>

                <div className="space-y-4">
                    <div>
                        <label className="text-black dark:text-white text-sm">
                            이메일
                        </label>

                        <div className="flex gap-2 mt-1">
                            <input
                                placeholder="이메일 입력"
                                className="flex-1 border rounded px-3 py-2 text-black dark:text-white bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600"
                            />

                            <select className="border rounded px-2 text-black dark:text-white bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600">
                                <option>@gmail.com</option>
                                <option>@naver.com</option>
                                <option>@daum.net</option>
                                <option>@kakao.com</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="text-black dark:text-white text-sm">
                            비밀번호
                        </label>

                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full border rounded px-3 py-2 mt-1 text-black dark:text-white bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600"
                        />

                        <div className="w-full h-2 bg-gray-200 dark:bg-gray-600 mt-2 rounded overflow-hidden">
                            <div
                                className={`h-2 rounded ${strength.color}`}
                                style={{ width: strength.width }}
                            />
                        </div>

                        <p className="text-xs text-black dark:text-white mt-1">
                            {strength.text}
                        </p>

                        <p className="text-xs text-gray-500 dark:text-gray-300">
                            12자 이상, 영문 대문자, 소문자, 숫자를 포함해야 합니다.
                        </p>
                    </div>

                    <div>
                        <label className="text-black dark:text-white text-sm">
                            비밀번호 확인
                        </label>

                        <input
                            type="password"
                            placeholder="비밀번호 확인"
                            className="w-full border rounded px-3 py-2 mt-1 text-black dark:text-white bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600"
                        />
                    </div>

                    <div>
                        <label className="text-black dark:text-white text-sm">
                            닉네임
                        </label>

                        <input
                            type="text"
                            placeholder="닉네임 입력"
                            className="w-full border rounded px-3 py-2 mt-1 text-black dark:text-white bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600"
                        />
                    </div>
                </div>

                <div className="flex gap-3 mt-6">
                    <button className="w-1/2 bg-blue-400 text-white py-2 rounded-lg hover:bg-blue-500">
                        회원가입
                    </button>

                    <button className="w-1/2 bg-gray-400 text-white py-2 rounded-lg hover:bg-gray-500">
                        취소
                    </button>
                </div>
            </div>
        </div>
    );
}
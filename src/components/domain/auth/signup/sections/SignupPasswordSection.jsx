"use client";

import { Eye, EyeOff } from "lucide-react";

/**
 * 회원가입 비밀번호 입력 섹션
 *
 * 기능:
 * - 비밀번호 / 비밀번호 확인 입력
 * - 비밀번호 표시 여부 토글
 * - 비밀번호 조건 충족 여부 실시간 표시
 * - 비밀번호 확인 일치 여부 표시
 */
export default function SignupPasswordSection({
    password,
    passwordCheck,
    showPassword,
    showPasswordCheck,
    setShowPassword,
    setShowPasswordCheck,
    handlePasswordChange,
    handlePasswordCheckChange,
    passwordChecks,
}) {
    const passwordMatch =
        passwordCheck.length > 0 && password === passwordCheck;

    const passwordMismatch =
        passwordCheck.length > 0 && password !== passwordCheck;

    return (
        <div className="rounded-xl border border-gray-200 bg-white p-5">
            <label className="mb-3 block text-base font-semibold text-gray-900">
                비밀번호
            </label>

            <div className="space-y-3">
                <div className="relative">
                    <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder="비밀번호를 입력하세요"
                        className="h-12 w-full rounded-xl border border-gray-300 px-5 pr-12 text-sm outline-none focus:border-blue-500"
                    />

                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                    >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                </div>

                <div className="relative">
                    <input
                        type={showPasswordCheck ? "text" : "password"}
                        value={passwordCheck}
                        onChange={handlePasswordCheckChange}
                        placeholder="비밀번호를 다시 입력하세요"
                        className="h-12 w-full rounded-xl border border-gray-300 px-5 pr-12 text-sm outline-none focus:border-blue-500"
                    />

                    <button
                        type="button"
                        onClick={() =>
                            setShowPasswordCheck(!showPasswordCheck)
                        }
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                    >
                        {showPasswordCheck ? (
                            <EyeOff size={18} />
                        ) : (
                            <Eye size={18} />
                        )}
                    </button>
                </div>
            </div>

            <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-xs">
                <p
                    className={`${
                        passwordChecks.length ? "text-green-600" : "text-red-500"
                    }`}
                >
                    {passwordChecks.length ? "✓" : "✗"} 10자 이상
                </p>

                <p
                    className={`${
                        passwordChecks.lower ? "text-green-600" : "text-red-500"
                    }`}
                >
                    {passwordChecks.lower ? "✓" : "✗"} 소문자
                </p>

                <p
                    className={`${
                        passwordChecks.upper ? "text-green-600" : "text-red-500"
                    }`}
                >
                    {passwordChecks.upper ? "✓" : "✗"} 대문자
                </p>

                <p
                    className={`${
                        passwordChecks.number ? "text-green-600" : "text-red-500"
                    }`}
                >
                    {passwordChecks.number ? "✓" : "✗"} 숫자
                </p>

                <p
                    className={`${
                        passwordChecks.special ? "text-green-600" : "text-red-500"
                    }`}
                >
                    {passwordChecks.special ? "✓" : "✗"} 특수문자
                </p>

                <p
                    className={`${
                        passwordMatch
                            ? "text-green-600"
                            : passwordMismatch
                            ? "text-red-500"
                            : "text-gray-400"
                    }`}
                >
                    {passwordMatch
                        ? "✓ 비밀번호 일치"
                        : passwordMismatch
                        ? "✗ 비밀번호 불일치"
                        : "비밀번호 확인"}
                </p>
            </div>
        </div>
    );
}
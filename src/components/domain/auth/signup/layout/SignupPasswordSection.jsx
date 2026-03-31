"use client";

import { Eye, EyeOff } from "lucide-react";
import InputField from "@/components/common/ui/InputField";

/**
 * 비밀번호 입력 영역
 * 
 * 역할:
 * - 비밀번호 입력
 * - 보기/숨기기 토글
 * - 비밀번호 조건 충족 여부 표시
 */
export default function SignupPasswordSection({
    showPassword,
    setShowPassword,
    password,
    setPassword,
    checks,
}) {
    return (
        <div>
            {/* 영역 제목 */}
            <label className="block text-sm font-medium mb-1 text-black dark:text-white">
                비밀번호
            </label>

            {/* 입력창 + 보기 아이콘 */}
            <div className="relative mt-2">
                <InputField
                    type={showPassword ? "text" : "password"}
                    placeholder="비밀번호 입력"
                    value={password}
                    onChange={(e) =>
                        // 영문 대소문자, 숫자, 특수문자만 허용
                        setPassword(e.target.value.replace(/[^A-Za-z0-9!@#$%^&*]/g, ""))
                    }
                    autoComplete="new-password"
                    className="w-full pr-12"
                />

                {/* 보기/숨기기 버튼 */}
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
            </div>

            {/* 비밀번호 조건 안내 */}
            <div className="text-xs mt-2 space-y-1">

                {/* 길이 조건 */}
                <p className={checks.length ? "text-green-500" : "text-gray-500"}>
                    {checks.length ? "✔" : "✖"} 10자 이상
                </p>

                {/* 대문자 포함 여부 */}
                <p className={checks.upper ? "text-green-500" : "text-gray-500"}>
                    {checks.upper ? "✔" : "✖"} 대문자 포함
                </p>

                {/* 소문자 포함 여부 */}
                <p className={checks.lower ? "text-green-500" : "text-gray-500"}>
                    {checks.lower ? "✔" : "✖"} 소문자 포함
                </p>

                {/* 숫자 포함 여부 */}
                <p className={checks.number ? "text-green-500" : "text-gray-500"}>
                    {checks.number ? "✔" : "✖"} 숫자 포함
                </p>

                {/* 특수문자 포함 여부 */}
                <p className={checks.special ? "text-green-500" : "text-gray-500"}>
                    {checks.special ? "✔" : "✖"} 특수문자 포함
                </p>
            </div>
        </div>
    );
}
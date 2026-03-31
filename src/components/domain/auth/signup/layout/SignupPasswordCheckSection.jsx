"use client";

import { Eye, EyeOff } from "lucide-react";
import InputField from "@/components/common/ui/InputField";

/**
 * 비밀번호 확인 입력 영역
 * 
 * 역할:
 * - 비밀번호 확인값 입력
 * - 보기/숨기기 토글
 * - 비밀번호 일치/불일치 메시지 표시
 */
export default function SignupPasswordCheckSection({
    showPasswordCheck,
    setShowPasswordCheck,
    passwordCheck,
    setPasswordCheck,
    passwordMatch,
    passwordMismatch,
}) {
    return (
        <div>
            {/* 영역 제목 */}
            <label className="block text-sm font-medium mb-1 text-black dark:text-white">
                비밀번호 확인
            </label>

            {/* 입력창 + 보기 아이콘 */}
            <div className="relative mt-2">
                <InputField
                    type={showPasswordCheck ? "text" : "password"}
                    placeholder="비밀번호 확인"
                    value={passwordCheck}
                    onChange={(e) =>
                        // 허용된 문자만 입력 가능
                        setPasswordCheck(e.target.value.replace(/[^A-Za-z0-9!@#$%^&*]/g, ""))
                    }
                    autoComplete="new-password"
                    className="w-full pr-12"
                />

                {/* 보기/숨기기 버튼 */}
                <button
                    type="button"
                    onClick={() => setShowPasswordCheck(!showPasswordCheck)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black dark:hover:text-white"
                >
                    {showPasswordCheck ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
            </div>

            {/* 비밀번호 일치 메시지 */}
            {passwordMatch && (
                <p className="text-green-500 text-xs mt-2">
                    비밀번호가 일치합니다.
                </p>
            )}

            {/* 비밀번호 불일치 메시지 */}
            {passwordMismatch && (
                <p className="text-red-500 text-xs mt-2">
                    비밀번호가 일치하지 않습니다.
                </p>
            )}
        </div>
    );
}
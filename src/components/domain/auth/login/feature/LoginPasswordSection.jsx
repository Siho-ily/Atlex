"use client";

import { Eye, EyeOff } from "lucide-react";
import Deprecated_InputField from "@/components/common/ui/Deprecated_InputField";

export default function LoginPasswordSection({
    password,
    setPassword,
    showPassword,
    setShowPassword,
}) {
    return (
        <div>
            <label className="block text-sm font-medium mb-1 text-black dark:text-white">
                비밀번호
            </label>

            <div className="relative mt-2">
                <Deprecated_InputField
                    type={showPassword ? "text" : "password"}
                    placeholder="비밀번호 입력"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);

                        // ==========================================
                        // 나중에 실제 기능 구현 시
                        // 여기서 입력 중 메시지 초기화,
                        // Enter 키 로그인 처리 등을 추가 가능
                        // ==========================================
                    }}
                    className="w-full pr-12"
                />

                {/* 비밀번호 보기 / 숨기기 버튼 */}
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black dark:hover:text-white"
                >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
            </div>
        </div>
    );
}
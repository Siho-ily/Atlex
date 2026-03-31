"use client";

import { Eye, EyeOff } from "lucide-react";
import InputField from "@/components/common/ui/InputField";

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
            <label className="block text-sm font-medium mb-1 text-black dark:text-white">
                비밀번호 확인
            </label>

            <div className="relative mt-2">
                <InputField
                    type={showPasswordCheck ? "text" : "password"}
                    placeholder="비밀번호 확인"
                    value={passwordCheck}
                    onChange={(e) =>
                        setPasswordCheck(e.target.value.replace(/[^A-Za-z0-9!@#$%^&*]/g, ""))
                    }
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
    );
}
"use client";

import { Eye, EyeOff } from "lucide-react";
import InputField from "@/components/common/ui/InputField";

export default function SignupPasswordSection({
    showPassword,
    setShowPassword,
    password,
    setPassword,
    checks,
}) {
    return (
        <div>
            <label className="block text-sm font-medium mb-1 text-black dark:text-white">
                비밀번호
            </label>

            <div className="relative mt-2">
                <InputField
                    type={showPassword ? "text" : "password"}
                    placeholder="비밀번호 입력"
                    value={password}
                    onChange={(e) =>
                        setPassword(e.target.value.replace(/[^A-Za-z0-9!@#$%^&*]/g, ""))
                    }
                    autoComplete="new-password"
                    className="w-full pr-12"
                />

                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
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
        </div>
    );
}
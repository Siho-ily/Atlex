"use client";

import Button from "@/components/common/ui/Button";
import InputField from "@/components/common/ui/InputField";

export default function SignupIdSection({
    userId,
    setUserId,
    idCheck,
    setIdCheck,
    handleIdCheck,
}) {
    return (
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
                        const filteredValue = e.target.value
                            .replace(/[^A-Za-z0-9]/g, "");

                        setUserId(filteredValue);
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

            <p className="text-xs text-gray-500 mt-2">
                아이디는 영문, 숫자만 입력 가능합니다.
            </p>

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
    );
}
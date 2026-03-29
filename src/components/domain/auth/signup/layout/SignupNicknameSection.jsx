"use client";

import Button from "@/components/common/ui/Button";
import InputField from "@/components/common/ui/InputField";

export default function SignupNicknameSection({
    nickname,
    setNickname,
    nickCheck,
    setNickCheck,
    handleNicknameCheck,
}) {
    return (
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
    );
}
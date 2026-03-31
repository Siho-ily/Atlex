"use client";

import Button from "@/components/common/ui/Button";
import InputField from "@/components/common/ui/InputField";

/**
 * 닉네임 입력 및 중복확인 영역
 * 
 * 역할:
 * - 닉네임 입력
 * - 중복확인 버튼 제공
 * - 중복확인 결과 메시지 출력
 */
export default function SignupNicknameSection({
    nickname,
    setNickname,
    nickCheck,
    setNickCheck,
    handleNicknameCheck,
}) {
    return (
        <div>
            {/* 영역 제목 */}
            <label className="block text-sm font-medium mb-1 text-black dark:text-white">
                닉네임
            </label>

            {/* 입력창 + 중복확인 버튼 */}
            <div className="flex gap-2">
                <InputField
                    type="text"
                    placeholder="닉네임 입력"
                    value={nickname}
                    onChange={(e) => {
                        // 닉네임 값 변경
                        setNickname(e.target.value);

                        // 입력이 바뀌면 기존 중복확인 결과 초기화
                        setNickCheck("");
                    }}
                    className="flex-1"
                />

                {/* 닉네임 중복확인 버튼 */}
                <Button
                    type="button"
                    onClick={handleNicknameCheck}
                    className="px-4 py-2"
                >
                    중복확인
                </Button>
            </div>

            {/* 사용 가능 메시지 */}
            {nickCheck === "ok" && (
                <p className="text-xs text-green-500 mt-2">
                    사용 가능한 닉네임입니다.
                </p>
            )}

            {/* 중복 메시지 */}
            {nickCheck === "duplicate" && (
                <p className="text-xs text-red-500 mt-2">
                    이미 사용중인 닉네임입니다.
                </p>
            )}

            {/* 빈값 메시지 */}
            {nickCheck === "empty" && (
                <p className="text-xs text-red-500 mt-2">
                    닉네임을 입력하세요.
                </p>
            )}
        </div>
    );
}
"use client";

import Button from "@/components/common/ui/Button";
import InputField from "@/components/common/ui/InputField";

/**
 * 아이디 입력 및 중복확인 영역
 * 
 * 역할:
 * - 아이디 입력
 * - 입력값 필터링
 * - 중복확인 버튼 제공
 * - 중복확인 결과 메시지 출력
 */
export default function SignupIdSection({
    userId,
    setUserId,
    idCheck,
    setIdCheck,
    handleIdCheck,
}) {
    return (
        <div>
            {/* 영역 제목 */}
            <label className="block text-sm font-medium mb-1 text-black dark:text-white">
                아이디
            </label>

            {/* 입력창 + 중복확인 버튼 */}
            <div className="flex gap-2">
                <InputField
                    type="text"
                    placeholder="아이디 입력"
                    value={userId}
                    onChange={(e) => {
                        // 영문, 숫자만 허용
                        const filteredValue = e.target.value
                            .replace(/[^A-Za-z0-9]/g, "");

                        setUserId(filteredValue);

                        // 아이디가 바뀌면 기존 중복확인 결과 초기화
                        setIdCheck("");
                    }}
                    className="flex-1"
                />

                {/* 아이디 중복확인 버튼 */}
                <Button
                    type="button"
                    onClick={handleIdCheck}
                    className="px-4 py-2"
                >
                    중복확인
                </Button>
            </div>

            {/* 입력 규칙 안내 */}
            <p className="text-xs text-gray-500 mt-2">
                아이디는 영문, 숫자만 입력 가능합니다.
            </p>

            {/* 사용 가능 메시지 */}
            {idCheck === "ok" && (
                <p className="text-xs text-green-500 mt-2">
                    사용 가능한 아이디입니다.
                </p>
            )}

            {/* 중복 메시지 */}
            {idCheck === "duplicate" && (
                <p className="text-xs text-red-500 mt-2">
                    이미 사용중인 아이디입니다.
                </p>
            )}

            {/* 빈값 메시지 */}
            {idCheck === "empty" && (
                <p className="text-xs text-red-500 mt-2">
                    아이디를 입력하세요.
                </p>
            )}
        </div>
    );
}
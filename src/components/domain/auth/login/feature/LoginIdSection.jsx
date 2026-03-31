"use client";

import InputField from "@/components/common/ui/InputField";

export default function LoginIdSection({
    userId,
    setUserId,
}) {
    return (
        <div>
            <label className="block text-sm font-medium mb-1 text-black dark:text-white">
                아이디
            </label>

            <InputField
                type="text"
                placeholder="아이디 입력"
                value={userId}
                onChange={(e) => {
                    // 회원가입 페이지와 비슷하게
                    // 한글 제거 + 공백 제거
                    const filteredValue = e.target.value
                        .replace(/[ㄱ-ㅎㅏ-ㅣ가-힣]/g, "")
                        .replace(/\s/g, "");

                    setUserId(filteredValue);

                    // ==========================================
                    // 나중에 실제 기능 구현 시
                    // 여기서 입력 중 에러 메시지 초기화 등을 추가 가능
                    // 예: clearMessage();
                    // ==========================================
                }}
                className="w-full"
            />
        </div>
    );
}
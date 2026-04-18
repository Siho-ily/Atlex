"use client";

/**
 * 회원가입 아이디 입력 섹션
 *
 * 기능:
 * - 아이디 입력값 표시
 * - 아이디 입력 변경 처리
 * - 아이디 중복확인 요청
 * - 중복확인 결과 메시지 표시
 */
export default function SignupIdSection({
    userId,
    handleUserIdChange,
    idCheck,
    handleIdCheck,
}) {
    return (
        <div className="rounded-xl border border-gray-200 bg-white p-5">
            <label className="mb-3 block text-base font-semibold text-gray-900">
                아이디
            </label>

            <div className="flex gap-3">
                <input
                    type="text"
                    value={userId}
                    onChange={handleUserIdChange}
                    placeholder="아이디를 입력하세요"
                    className="h-12 flex-1 rounded-xl border border-gray-300 px-5 text-sm outline-none focus:border-blue-500"
                />

                <button
                    type="button"
                    onClick={handleIdCheck}
                    className="shrink-0 rounded-xl bg-blue-500 px-4 text-sm font-semibold text-white hover:bg-blue-600"
                >
                    중복확인
                </button>
            </div>

            {idCheck && (
                <p className="mt-2 text-sm text-gray-600">
                    {idCheck}
                </p>
            )}
        </div>
    );
}
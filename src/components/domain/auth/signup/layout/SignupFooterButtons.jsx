"use client";

/**
 * 회원가입 하단 버튼 영역
 *
 * 기능:
 * - 이전 단계 이동
 * - 회원가입 요청
 */
export default function SignupFooterButtons({
    onPrev,
    onSignup,
    loading,
    canSubmit,
}) {
    return (
        <div className="mt-6 flex gap-3">
            <button
                type="button"
                onClick={onPrev}
                className="h-12 w-1/2 rounded-xl border border-gray-300 bg-white text-sm font-semibold text-gray-700 hover:bg-gray-50"
            >
                이전
            </button>

            <button
                type="button"
                onClick={onSignup}
                disabled={!canSubmit || loading}
                className="h-12 w-1/2 rounded-xl bg-blue-500 text-sm font-semibold text-white hover:bg-blue-600 disabled:cursor-not-allowed disabled:bg-blue-300"
            >
                {loading ? "회원가입 중..." : "회원가입"}
            </button>
        </div>
    );
}
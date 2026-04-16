"use client";

export default function SignupFooterButtons() {
    return (
        <div className="mt-6 flex gap-3">
            <button
                type="button"
                className="w-1/2 rounded-xl bg-blue-400 py-3 text-sm font-semibold text-white"
            >
                회원가입
            </button>

            <button
                type="button"
                className="w-1/2 rounded-xl bg-gray-300 py-3 text-sm font-medium text-gray-700"
            >
                취소
            </button>
        </div>
    );
}
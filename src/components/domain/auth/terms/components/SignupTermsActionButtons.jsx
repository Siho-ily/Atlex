"use client";

export default function SignupTermsActionButtons() {
    return (
        <div className="mt-6 flex gap-3">
            <button className="w-1/2 rounded-xl bg-blue-400 py-3 text-sm font-semibold text-white">
                다음
            </button>

            <button className="w-1/2 rounded-xl bg-gray-300 py-3 text-sm text-gray-700">
                취소
            </button>
        </div>
    );
}
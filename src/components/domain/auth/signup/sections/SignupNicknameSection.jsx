"use client";

export default function SignupNicknameSection() {
    return (
        <div className="rounded-xl border border-gray-200 bg-white p-5">
            <label className="mb-3 block text-base font-semibold text-gray-900">
                닉네임
            </label>

            <div className="flex gap-3">
                <input
                    type="text"
                    placeholder="닉네임을 입력하세요"
                    className="h-12 flex-1 rounded-xl border border-gray-300 px-5 text-sm outline-none focus:border-blue-500"
                />

                <button
                    type="button"
                    className="shrink-0 rounded-xl bg-blue-500 px-4 text-sm font-semibold text-white hover:bg-blue-600"
                >
                    중복확인
                </button>
            </div>
        </div>
    );
}
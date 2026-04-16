"use client";

export default function SignupPasswordSection() {
    return (
        <div className="rounded-xl border border-gray-200 bg-white p-5">
            <label className="mb-3 block text-base font-semibold text-gray-900">
                비밀번호
            </label>

            <div className="space-y-3">
                <input
                    type="password"
                    name="password"
                    autoComplete="new-password"
                    placeholder="비밀번호를 입력하세요"
                    className="block h-12 w-full rounded-xl border border-gray-300 bg-white px-5 text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:border-blue-500"
                />

                <input
                    type="password"
                    name="passwordCheck"
                    autoComplete="new-password"
                    placeholder="비밀번호를 다시 입력하세요"
                    className="block h-12 w-full rounded-xl border border-gray-300 bg-white px-5 text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:border-blue-500"
                />
            </div>

            <div className="mt-2 px-1 text-[10px] tracking-[-0.01em] text-gray-400">
                10자 이상 · 소문자 포함 · 대문자 포함 · 숫자 포함 · 특수문자 포함
            </div>
        </div>
    );
}
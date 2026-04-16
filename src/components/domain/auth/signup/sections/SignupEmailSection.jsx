"use client";

export default function SignupEmailSection() {
    return (
        <div className="rounded-xl border border-gray-200 bg-white p-5">
            <label className="mb-3 block text-base font-semibold text-gray-900">
                이메일
            </label>

            <div className="flex items-center gap-2">
                <input
                    type="text"
                    placeholder="이메일 아이디"
                    className="h-12 min-w-0 flex-1 rounded-xl border border-gray-300 px-5 text-sm outline-none focus:border-blue-500"
                />

                <span className="text-sm text-gray-500">@</span>

                <input
                    type="text"
                    placeholder="직접 입력"
                    className="h-12 min-w-0 flex-1 rounded-xl border border-gray-300 px-5 text-sm outline-none focus:border-blue-500"
                />
            </div>

            <select className="mt-3 h-12 w-full rounded-xl border border-gray-300 bg-white px-5 text-sm text-gray-700 outline-none focus:border-blue-500">
                <option>도메인 선택</option>
                <option>naver.com</option>
                <option>nate.com</option>
                <option>daum.net</option>
                <option>kakao.com</option>
                <option>gmail.com</option>
            </select>
        </div>
    );
}
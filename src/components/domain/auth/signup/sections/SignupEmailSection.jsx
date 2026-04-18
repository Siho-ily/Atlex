"use client";

/**
 * 회원가입 이메일 입력 섹션
 *
 * 기능:
 * - 이메일 아이디 / 도메인 입력
 * - 도메인 선택
 */
export default function SignupEmailSection({
    emailId,
    emailDomain,
    handleEmailIdChange,
    handleEmailDomainChange,
}) {
    function handleDomainSelect(e) {
        const value = e.target.value;

        handleEmailDomainChange({
            target: { value },
        });
    }

    return (
        <div className="rounded-xl border border-gray-200 bg-white p-5">
            <label className="mb-3 block text-base font-semibold text-gray-900">
                이메일
            </label>

            <div className="flex items-center gap-2">
                <input
                    type="text"
                    value={emailId}
                    onChange={handleEmailIdChange}
                    placeholder="이메일 아이디"
                    className="h-12 min-w-0 flex-1 rounded-xl border border-gray-300 px-5 text-sm outline-none focus:border-blue-500"
                />

                <span className="text-sm text-gray-500">@</span>

                <input
                    type="text"
                    value={emailDomain}
                    onChange={handleEmailDomainChange}
                    placeholder="직접 입력"
                    className="h-12 min-w-0 flex-1 rounded-xl border border-gray-300 px-5 text-sm outline-none focus:border-blue-500"
                />
            </div>

            <select
                value=""
                onChange={handleDomainSelect}
                className="mt-3 h-12 w-full rounded-xl border border-gray-300 bg-white px-5 text-sm text-gray-700 outline-none focus:border-blue-500"
            >
                <option value="">도메인 선택</option>
                <option value="naver.com">naver.com</option>
                <option value="nate.com">nate.com</option>
                <option value="daum.net">daum.net</option>
                <option value="kakao.com">kakao.com</option>
                <option value="gmail.com">gmail.com</option>
            </select>
        </div>
    );
}
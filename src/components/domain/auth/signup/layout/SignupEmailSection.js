"use client";

import Button from "@/components/common/ui/Button";
import InputField from "@/components/common/ui/InputField";

export default function SignupEmailSection({
    emailId,
    setEmailId,
    emailDomain,
    handleDomainChange,
    handleSelectChange,
    isValidEmail,
    emailCode,
    emailCodeSent,
    emailVerified,
    emailVerifyMessage,
    emailSendLoading,
    emailVerifyLoading,
    emailTimer,
    formattedEmailTime,
    handleSendEmailCode,
    handleVerifyEmailCode,
    handleEmailCodeChange,
}) {
    return (
        <div>
            <label className="block text-sm font-medium mb-1 text-black dark:text-white">
                이메일
            </label>

            <div className="flex gap-2 items-center">
                <InputField
                    type="text"
                    placeholder="이메일 입력"
                    value={emailId}
                    onChange={(e) => setEmailId(e.target.value)}
                    className="w-[38%]"
                />

                <span className="text-black dark:text-white font-medium">@</span>

                <InputField
                    type="text"
                    placeholder="도메인"
                    value={emailDomain}
                    onChange={handleDomainChange}
                    className="w-[34%]"
                />

                <select
                    value={
                        ["gmail.com", "naver.com", "daum.net", "kakao.com"].includes(emailDomain)
                            ? emailDomain
                            : "custom"
                    }
                    onChange={handleSelectChange}
                    className=" px-3 py-2 border rounded-lg text-black dark:text-white bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600"
                >
                    <option value="custom">직접입력</option>
                    <option value="gmail.com">gmail.com</option>
                    <option value="naver.com">naver.com</option>
                    <option value="daum.net">daum.net</option>
                    <option value="kakao.com">kakao.com</option>
                </select>
            </div>

            {emailId !== "" && emailDomain !== "" && !isValidEmail() && (
                <p className="text-xs text-red-500 mt-2">
                    올바른 이메일 형식을 입력하세요.
                </p>
            )}

            <div className="mt-3">
                <Button
                    type="button"
                    onClick={handleSendEmailCode}
                    disabled={!isValidEmail() || emailSendLoading}
                    className="w-full"
                >
                    {emailSendLoading
                        ? "전송중..."
                        : emailCodeSent
                        ? "인증번호 재전송"
                        : "인증번호 전송"}
                </Button>
            </div>

            {emailVerifyMessage && (
                <p
                    className={`text-xs mt-2 ${
                        emailVerified || emailCodeSent
                            ? "text-green-500"
                            : "text-red-500"
                    }`}
                >
                    {emailVerifyMessage}
                </p>
            )}

            {emailCodeSent && (
                <div className="mt-3">
                    <div className="flex gap-2">
                        <div className="relative flex-1">
                            <InputField
                                type="text"
                                placeholder="인증번호 6자리 입력"
                                value={emailCode}
                                onChange={handleEmailCodeChange}
                                className="w-full pr-16"
                            />

                            {!emailVerified && emailTimer > 0 && (
                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-red-500">
                                    {formattedEmailTime}
                                </span>
                            )}
                        </div>

                        <Button
                            type="button"
                            onClick={handleVerifyEmailCode}
                            disabled={
                                emailVerifyLoading ||
                                emailVerified ||
                                emailTimer === 0
                            }
                            className="px-4 py-2 whitespace-nowrap"
                        >
                            {emailVerifyLoading ? "확인중..." : "인증확인"}
                        </Button>
                    </div>

                    {emailTimer === 0 && !emailVerified && (
                        <p className="text-xs text-red-500 mt-2">
                            인증시간이 만료되었습니다. 인증번호를 다시 전송하세요.
                        </p>
                    )}
                </div>
            )}
        </div>
    );
}
"use client";

import Button from "@/components/common/ui/Button";
import InputField from "@/components/common/ui/InputField";

/**
 * 이메일 입력 및 인증 영역
 * 
 * 역할:
 * - 이메일 아이디 입력
 * - 이메일 도메인 입력/선택
 * - 인증번호 전송
 * - 인증번호 입력 및 확인
 * - 인증 타이머 및 안내 메시지 출력
 */
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
            {/* 영역 제목 */}
            <label className="block text-sm font-medium mb-1 text-black dark:text-white">
                이메일
            </label>

            {/* 이메일 입력줄 */}
            <div className="flex gap-2 items-center">

                {/* 이메일 앞부분 입력 */}
                <InputField
                    type="text"
                    placeholder="이메일 입력"
                    value={emailId}
                    onChange={(e) =>
                        // 영문, 숫자만 입력 가능
                        setEmailId(e.target.value.replace(/[^A-Za-z0-9]/g, ""))
                    }
                    className="w-[38%]"
                />

                {/* @ 기호 고정 표시 */}
                <span className="text-black dark:text-white font-medium">@</span>

                {/* 이메일 도메인 직접 입력 */}
                <InputField
                    type="text"
                    placeholder="도메인"
                    value={emailDomain}
                    onChange={handleDomainChange}
                    className="w-[34%]"
                />

                {/* 자주 사용하는 도메인 선택 박스 */}
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

            {/* 이메일 형식이 잘못되었을 때 출력 */}
            {emailId !== "" && emailDomain !== "" && !isValidEmail() && (
                <p className="text-xs text-red-500 mt-2">
                    올바른 이메일 형식을 입력하세요.
                </p>
            )}

            {/* 인증번호 전송 버튼 */}
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

            {/* 인증 관련 메시지 출력 */}
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

            {/* 인증번호를 전송한 경우에만 인증 입력칸 표시 */}
            {emailCodeSent && (
                <div className="mt-3">
                    <div className="flex gap-2">

                        {/* 인증번호 입력 영역 */}
                        <div className="relative flex-1">
                            <InputField
                                type="text"
                                placeholder="인증번호 6자리 입력"
                                value={emailCode}
                                onChange={handleEmailCodeChange}
                                className="w-full pr-16"
                            />

                            {/* 인증 완료 전, 타이머가 남아있으면 시간 표시 */}
                            {!emailVerified && emailTimer > 0 && (
                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-red-500">
                                    {formattedEmailTime}
                                </span>
                            )}
                        </div>

                        {/* 인증확인 버튼 */}
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

                    {/* 시간 만료 메시지 */}
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
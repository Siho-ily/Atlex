"use client";

export default function SignupHeader() {
    return (
        <>
            <h2 className="text-2xl font-bold text-center mb-2 text-black dark:text-white">
                회원가입
            </h2>

            <p className="text-sm text-gray-500 dark:text-gray-300 text-center mb-6">
                이메일, 비밀번호, 닉네임을 입력해주세요.
            </p>
        </>
    );
}
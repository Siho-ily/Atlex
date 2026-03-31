"use client";

/**
 * 회원가입 페이지 상단 헤더 영역
 * 
 * 역할:
 * - 페이지 제목 표시
 * - 안내 문구 표시
 */
export default function SignupHeader() {
    return (
        <>
            {/* 페이지 제목 */}
            <h2 className="text-2xl font-bold text-center mb-2 text-black dark:text-white">
                회원가입
            </h2>

            {/* 간단한 안내 문구 */}
            <p className="text-sm text-gray-500 dark:text-gray-300 text-center mb-6">
                이메일, 비밀번호, 닉네임을 입력해주세요.
            </p>
        </>
    );
}
"use client";

export default function LoginHeader() {
    return (
        <>
            {/* 페이지 제목 */}
            <h2 className="text-2xl font-bold text-center mb-2 text-black dark:text-white">
                로그인
            </h2>

            {/* 안내 문구 */}
            <p className="text-sm text-gray-500 dark:text-gray-300 text-center mb-6">
                아이디와 비밀번호를 입력해주세요.
            </p>
        </>
    );
}
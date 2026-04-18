"use client";

export default function LoginContainer({ children }) {
    return (
        // 로그인 페이지 전체 배경
        <div className="min-h-screen w-full bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
            {/* 가운데 정렬 */}
            <div className="min-h-screen flex items-center justify-center px-4">
                {/* 로그인 카드 */}
                <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 transition-colors duration-300">
                    {children}
                </div>
            </div>
        </div>
    );
}
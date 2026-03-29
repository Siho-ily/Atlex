"use client";

import Link from "next/link";

export default function LoginFooterLinks() {
    return (
        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-center gap-3 text-sm">
                {/* 회원가입 페이지 이동 */}
                <Link
                    href="/signup-page"
                    className="text-blue-500 hover:underline"
                >
                    회원가입
                </Link>

                <span className="text-gray-400">|</span>

                {/* 아이디 / 비밀번호 찾기 공용 페이지 이동 */}
                <Link
                    href=""/*아직 미구현*/
                    className="text-blue-500 hover:underline"
                >
                    아이디/비밀번호 찾기
                </Link>
            </div>
        </div>
    );
}
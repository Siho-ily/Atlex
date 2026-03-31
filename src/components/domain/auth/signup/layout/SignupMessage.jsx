"use client";

/**
 * 공통 메시지 출력 컴포넌트
 * 
 * 역할:
 * - 회원가입 관련 에러/안내 메시지 표시
 * - message가 없으면 아무것도 렌더링하지 않음
 */
export default function SignupMessage({ message }) {
    // 메시지가 없으면 화면에 출력하지 않음
    if (!message) return null;

    return (
        // 중앙 정렬된 빨간색 메시지 출력
        <p className="text-sm text-center text-red-500">
            {message}
        </p>
    );
}
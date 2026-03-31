"use client";

/**
 * 회원가입 페이지 전체 레이아웃 컨테이너
 * 
 * 역할:
 * - 화면 전체 배경 처리
 * - 가운데 정렬
 * - 카드 형태의 박스 제공
 */
export default function SignupContainer({ children }) {
    return (
        // 전체 화면 높이 + 배경색 + 다크모드 대응
        <div className="min-h-screen w-full bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
            
            {/* 내부 콘텐츠를 화면 중앙에 배치 */}
            <div className="min-h-screen flex items-center justify-center px-4">
                
                {/* 실제 회원가입 폼이 들어가는 카드 박스 */}
                <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 transition-colors duration-300">
                    {children}
                </div>
            </div>
        </div>
    );
}
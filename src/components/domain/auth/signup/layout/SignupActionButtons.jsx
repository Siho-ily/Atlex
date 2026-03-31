"use client";

import Button from "@/components/common/ui/Button";

/**
 * 회원가입 페이지 하단 액션 버튼 영역
 * 
 * 역할:
 * - 회원가입 버튼 표시
 * - 취소 버튼 표시
 * - 로딩/가입 가능 여부에 따라 버튼 상태 제어
 */
export default function SignupActionButtons({
    loading,
    canSignup,
    handleCancel,
    onSignup,
}) {
    return (
        // 버튼 2개를 가로로 배치
        <div className="flex gap-3 pt-2">

            {/* 회원가입 버튼 */}
            <Button
                type="button"
                onClick={onSignup}
                disabled={!canSignup || loading}
                className="w-1/2"
            >
                {/* 로딩 중이면 텍스트 변경 */}
                {loading ? "가입 중..." : "회원가입"}
            </Button>

            {/* 취소 버튼 */}
            <Button
                type="button"
                onClick={handleCancel}
                variant="secondary"
                className="w-1/2"
            >
                취소
            </Button>

        </div>
    );
}
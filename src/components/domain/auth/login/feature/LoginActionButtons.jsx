"use client";

import { Button } from "@/components/common/ui/button";

export default function LoginActionButtons({
    onLogin,
    handleCancel,
    loading,
    canLogin,
}) {
    return (
        <div className="flex gap-3 pt-2">
            {/* 로그인 버튼
                현재는 목업 상태라 onLogin에서 메시지만 처리
            */}
            <Button
                type="button"
                onClick={onLogin}
                disabled={!canLogin || loading}
                className="w-1/2"
            >
                {loading ? "로그인 중..." : "로그인"}
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
"use client";

import Button from "@/components/common/ui/Button";

export default function SignupActionButtons({
    loading,
    canSignup,
    handleCancel,
    onSignup,
}) {
    return (
        <div className="flex gap-3 pt-2">

            <Button
                type="button"
                onClick={onSignup}
                disabled={!canSignup || loading}
                className="w-1/2"
            >
                {loading ? "가입 중..." : "회원가입"}
            </Button>

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
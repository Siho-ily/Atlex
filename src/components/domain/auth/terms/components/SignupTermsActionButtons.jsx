"use client";

export default function SignupTermsActionButtons() {
    return (
        <div className="mt-6 flex gap-3">
            <button className="w-1/2 rounded-xl bg-primary py-3 text-sm font-semibold text-primary-foreground">
                다음
            </button>

            <button className="w-1/2 rounded-xl bg-secondary py-3 text-sm text-secondary-foreground">
                취소
            </button>
        </div>
    );
}

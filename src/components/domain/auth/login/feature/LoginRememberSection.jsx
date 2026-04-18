"use client";

export default function LoginRememberSection({
    rememberId,
    setRememberId,
}) {
    return (
        <div className="flex items-center gap-2">
            <input
                id="rememberId"
                type="checkbox"
                checked={rememberId}
                onChange={(e) => {
                    setRememberId(e.target.checked);

                    // ==========================================
                    // 현재는 목업이므로 체크 상태만 저장
                    //
                    // 나중에 실제 기능 구현 시:
                    // 로그인 성공 후 localStorage에 아이디 저장
                    // 또는 저장된 아이디 불러오기 처리 가능
                    // ==========================================
                }}
                className="w-4 h-4"
            />

            <label
                htmlFor="rememberId"
                className="text-sm text-black dark:text-white"
            >
                아이디 저장
            </label>
        </div>
    );
}
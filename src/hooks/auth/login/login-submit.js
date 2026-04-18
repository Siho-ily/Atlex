"use client";

/**
 * 로그인 최종 제출 로직
 * 현재는 목업이므로 실제 API 호출 없이 메시지만 처리
 */
export function useLoginSubmit({
    setMessage,
    canLogin,
}) {
    function onLogin() {
        // 기존 메시지 초기화
        setMessage("");

        // 최소 입력값 검사
        if (!canLogin) {
            setMessage("아이디와 비밀번호를 입력하세요.");
            return;
        }

        // ==========================================
        // 현재는 목업 상태
        //
        // 나중에 실제 기능 구현 시 여기서:
        // 1. 로그인 API 호출
        // 2. accessToken / refreshToken 저장
        // 3. 전역 사용자 상태 저장
        // 4. 메인 페이지 또는 대시보드 이동
        // 를 처리하면 됨
        // ==========================================

        setMessage("현재 로그인 기능은 목업 상태입니다.");
    }

    return {
        onLogin,
    };
}
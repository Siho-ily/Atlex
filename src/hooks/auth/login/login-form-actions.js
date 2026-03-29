"use client";

/**
 * 로그인 폼에서 사용하는 일반 액션 모음
 */
export function useLoginFormActions({
    router,
    setMessage,
}) {
    /**
     * 취소 버튼 클릭 시 홈으로 이동
     */
    function handleCancel() {
        router.push("/");
    }

    /**
     * 입력값 변경 시 메시지 초기화
     * 지금은 필요 시 컴포넌트에서 꺼내 쓸 수 있게만 둠
     */
    function clearMessage() {
        setMessage("");
    }

    return {
        handleCancel,
        clearMessage,
    };
}
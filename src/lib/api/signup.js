/**
 * 회원가입 API 호출
 * 
 * @param {Object} requestData - 회원가입 데이터
 * @returns {Object} { res, data }
 */
export async function signupApi(requestData) {

    // 회원가입 요청
    const res = await fetch("/api/v1/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        // 사용자 데이터 전달
        body: JSON.stringify(requestData),
    });

    // 응답 JSON 변환
    const data = await res.json();

    return { res, data };
}
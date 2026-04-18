/**
 * 이메일 인증번호 전송 API
 * 
 * @param {string} email - 사용자 이메일
 * @returns {Object} { res, data }
 */
export async function requestEmailCodeApi(email) {

    // 이메일 인증번호 전송 요청
    const res = await fetch("/api/v1/email/send-code", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        // 요청 body에 이메일 전달
        body: JSON.stringify({ email }),
    });

    // 서버 응답 JSON 변환
    const data = await res.json();

    return { res, data };
}

/**
 * 이메일 인증번호 검증 API
 * 
 * @param {string} email
 * @param {string} code
 * @returns {Object} { res, data }
 */
export async function verifyEmailCodeApi(email, code) {

    // 인증번호 검증 요청
    const res = await fetch("/api/v1/email/verify-code", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        // 이메일 + 인증번호 전달
        body: JSON.stringify({ email, code }),
    });

    // 응답 데이터 파싱
    const data = await res.json();

    return { res, data };
}
/**
 * 이메일 인증번호 전송 API 호출
 */
export async function requestEmailCodeApi(email) {
    const res = await fetch("/api/v1/email/send-code", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
    });

    const data = await res.json();
    return { res, data };
}

/**
 * 이메일 인증번호 검증 API 호출
 */
export async function verifyEmailCodeApi(email, code) {
    const res = await fetch("/api/v1/email/verify-code", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, code }),
    });

    const data = await res.json();
    return { res, data };
}
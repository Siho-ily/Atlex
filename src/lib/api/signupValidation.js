/**
 * 아이디 중복확인 API 호출
 */
export async function checkUserIdApi(userId) {
    const res = await fetch("/api/v1/auth/check-userid", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId }),
    });

    const data = await res.json();
    return { res, data };
}

/**
 * 닉네임 중복확인 API 호출
 */
export async function checkNicknameApi(nickname) {
    const res = await fetch("/api/v1/auth/check-nickname", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ nickname }),
    });

    const data = await res.json();
    return { res, data };
}
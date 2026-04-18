/**
 * 아이디 중복 확인 API
 * 
 * @param {string} userId
 */
export async function checkUserIdApi(userId) {

    const res = await fetch("/api/v1/auth/check-userid", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        // 아이디 전달
        body: JSON.stringify({ userId }),
    });

    const data = await res.json();

    return { res, data };
}

/**
 * 닉네임 중복 확인 API
 * 
 * @param {string} nickname
 */
export async function checkNicknameApi(nickname) {

    const res = await fetch("/api/v1/auth/check-nickname", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        // 닉네임 전달
        body: JSON.stringify({ nickname }),
    });

    const data = await res.json();

    return { res, data };
}
// components/signupButtons.js

// =========================
// 아이디 중복확인 함수
// =========================
export function handleIdCheck(userId, setIdCheck) {
    if (userId.trim() === "") {
        setIdCheck("empty");
        return;
    }

    if (userId.toLowerCase() === "admin") {
        setIdCheck("duplicate");
    } else {
        setIdCheck("ok");
    }
}

// =========================
// 닉네임 중복확인 함수
// =========================
export function handleNicknameCheck(nickname, setNickCheck) {
    if (nickname.trim() === "") {
        setNickCheck("empty");
        return;
    }

    if (nickname.toLowerCase() === "admin") {
        setNickCheck("duplicate");
    } else {
        setNickCheck("ok");
    }
}

// =========================
// 회원가입 버튼 클릭 시 실행
// =========================
export async function handleSignup({
    userId,
    emailId,
    emailDomain,
    password,
    passwordCheck,
    nickname,
    setMessage,
    setLoading,
    router,
}) {
    setMessage("");

    if (userId.trim() === "") {
        setMessage("아이디를 입력하세요.");
        return;
    }

    if (emailId.trim() === "" || emailDomain.trim() === "") {
        setMessage("이메일을 입력하세요.");
        return;
    }

    if (password.trim() === "") {
        setMessage("비밀번호를 입력하세요.");
        return;
    }

    if (password !== passwordCheck) {
        setMessage("비밀번호가 일치하지 않습니다.");
        return;
    }

    if (nickname.trim() === "") {
        setMessage("닉네임을 입력하세요.");
        return;
    }

    try {
        setLoading(true);

        const fullEmail = `${emailId}@${emailDomain}`;

        const requestData = {
            userId,
            email: fullEmail,
            password,
            name: nickname,
        };

        console.log("회원가입 요청 데이터:", requestData);

        router.push("/");
    } catch (error) {
        console.error(error);
        setMessage("서버 오류가 발생했습니다.");
    } finally {
        setLoading(false);
    }
}

// =========================
// 취소 버튼 클릭
// =========================
export function handleCancel(router) {
    router.push("/");
}
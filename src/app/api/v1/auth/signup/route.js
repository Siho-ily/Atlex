import { users } from "@/data/user/users";
import { created, fail, nowDt } from "@/lib/api/mock-response";

export async function POST(req) {
  const body = await req.json().catch(() => ({}));
  const {
    userId,
    password,
    name,
    email,
    termsAgreed,
    privacyAgreed,
    marketingAgreed = false,
  } = body;

  const errors = [];
  if (!userId) errors.push({ type: "field", field: "userId", message: "아이디를 입력해주세요." });
  if (!password) errors.push({ type: "field", field: "password", message: "비밀번호를 입력해주세요." });
  if (!name) errors.push({ type: "field", field: "name", message: "닉네임을 입력해주세요." });
  if (!email) errors.push({ type: "field", field: "email", message: "이메일을 입력해주세요." });
  if (!termsAgreed) errors.push({ type: "field", field: "termsAgreed", message: "이용약관에 동의해주세요." });
  if (!privacyAgreed) errors.push({ type: "field", field: "privacyAgreed", message: "개인정보 처리방침에 동의해주세요." });

  if (errors.length > 0) {
    return fail("VALIDATION_ERROR", "입력값이 올바르지 않습니다.", 400, errors);
  }

  if (users.some((u) => u.userId === userId)) {
    return fail("DUPLICATE_USER_ID", "이미 사용 중인 아이디입니다.", 409);
  }
  if (users.some((u) => u.email === email)) {
    return fail("DUPLICATE_EMAIL", "이미 사용 중인 이메일입니다.", 409);
  }

  const now = nowDt();
  const newUser = {
    id: users.length + 1,
    userId,
    name,
    email,
    active: true,
    marketingAgreed,
    createdAt: now,
    updatedAt: null,
  };

  return created(newUser, "회원가입이 완료되었습니다.");
}

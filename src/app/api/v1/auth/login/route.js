import { users } from "@/data/user/users";
import { ok, fail } from "@/lib/api/mock-response";

export async function POST(req) {
  const body = await req.json().catch(() => ({}));
  const { userId, password } = body;

  if (!userId || !password) {
    return fail("INVALID_CREDENTIALS", "아이디 또는 비밀번호가 올바르지 않습니다.", 400);
  }

  const user = users.find((u) => u.userId === userId);
  if (!user) {
    return fail("INVALID_CREDENTIALS", "아이디 또는 비밀번호가 올바르지 않습니다.", 400);
  }

  return ok(
    {
      accessToken: `test-access-${user.id}-${Date.now()}`,
      refreshToken: `test-refresh-${user.id}-${Date.now()}`,
      expiresIn: 600,
    },
    "로그인 성공",
  );
}

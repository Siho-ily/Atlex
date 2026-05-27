import { ok, fail } from "@/lib/api/mock-response";

export async function POST(req) {
  const body = await req.json().catch(() => ({}));
  const { refreshToken } = body;

  if (!refreshToken) {
    return fail("INVALID_TOKEN", "유효하지 않은 Refresh Token입니다.", 401);
  }

  return ok(
    {
      accessToken: `test-access-refreshed-${Date.now()}`,
      refreshToken: `test-refresh-rotated-${Date.now()}`,
      expiresIn: 600,
    },
    "토큰 재발급 성공",
  );
}

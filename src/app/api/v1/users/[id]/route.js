import { users } from "@/data/user/users";
import { ok, fail, nowDt } from "@/lib/api/mock-response";

// [id] 세그먼트는 숫자 id(예: 1) 또는 문자열 userId(예: "user001") 둘 다 받는다.
function findUser(identifier) {
  const numeric = Number(identifier);
  if (Number.isInteger(numeric) && String(numeric) === identifier) {
    return users.find((u) => u.id === numeric);
  }
  return users.find((u) => u.userId === identifier);
}

export async function GET(_req, { params }) {
  const { id } = await params;
  const user = findUser(id);

  if (!user) {
    return fail("USER_NOT_FOUND", "존재하지 않는 사용자입니다.", 404);
  }

  return ok(user, `${user.name} 님을 찾았습니다.`);
}

export async function PUT(req, { params }) {
  const { id } = await params;
  const user = findUser(id);

  if (!user) {
    return fail("USER_NOT_FOUND", "존재하지 않는 사용자입니다.", 404);
  }

  const body = await req.json().catch(() => ({}));
  const { userId, email, name } = body;

  const errors = [];
  if (userId !== undefined && (userId.length < 4 || userId.length > 15)) {
    errors.push({ type: "field", field: "userId", message: "아이디는 4자 이상 15자 이하로 입력해주세요." });
  }
  if (name !== undefined && (name.length < 2 || name.length > 10)) {
    errors.push({ type: "field", field: "name", message: "닉네임은 2자 이상 10자 이하로 입력해주세요." });
  }
  if (errors.length > 0) {
    return fail("VALIDATION_ERROR", "입력값이 올바르지 않습니다.", 400, errors);
  }

  const updated = {
    ...user,
    ...(userId && { userId }),
    ...(email && { email }),
    ...(name && { name }),
    updatedAt: nowDt(),
  };

  return ok(updated, `${updated.name} 님의 정보가 수정되었습니다.`);
}

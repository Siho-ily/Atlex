// 유저 raw API 호출. envelope 만 풀린 응답을 그대로 반환한다.
// 백엔드 endpoint 가 변경되면 이 파일의 URL/메서드만 수정한다.

import { apiClient } from "@/lib/api/client";

// GET /users/{identifier} — identifier 는 숫자 id 또는 userId 문자열 둘 다 허용한다(라우트에서 분기).
// 응답: ApiUser ({ id, userId, name, email, active, ... }). 없으면 USER_NOT_FOUND 로 throw.
export function fetchUserByIdentifier(identifier) {
  return apiClient.get(`/users/${encodeURIComponent(identifier)}`);
}

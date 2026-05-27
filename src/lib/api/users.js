import { apiClient } from "@/lib/api/client";

// identifier 는 숫자 id 또는 userId 문자열 둘 다 허용 (라우트에서 매칭).
export function fetchUserByIdentifier(identifier) {
  return apiClient.get(`/users/${encodeURIComponent(identifier)}`);
}

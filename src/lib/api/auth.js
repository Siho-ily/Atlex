// 인증 관련 raw API 호출. 매핑/정책 없이 axios 응답(envelope 푼 상태)을 그대로 반환한다.
// 백엔드 endpoint 가 바뀌면 이 파일의 URL/메서드만 수정한다.

import { apiClient } from "@/lib/api/client";

// POST /auth/login
export function loginApi({ userId, password }) {
  return apiClient.post("/auth/login", { userId, password });
}

// DELETE /auth/logout
// Authorization 헤더는 client.js 의 request interceptor 가 store 에서 토큰을 읽어 자동 첨부한다.
export function logoutApi() {
  return apiClient.delete("/auth/logout");
}

// POST /auth/signup
export function signupApi(payload) {
  return apiClient.post("/auth/signup", payload);
}

import axios from "axios";
import { getApiBaseUrl } from "@/lib/api/baseUrl";

// 공통 axios 인스턴스. response interceptor 에서 envelope({code, message, data, errors}) 를 풀고,
// 실패 코드는 Error 로 변환해 호출부의 try/catch 에 잡히도록 한다.
export const apiClient = axios.create({
  headers: { "Content-Type": "application/json" },
});

// ===== 인증 토큰 getter 주입 =====
// lib/api/* 가 store 모듈을 직접 import 하면 RSC 번들에 zustand 가 끌려올 수 있어 분리한다.
// 클라이언트 부트스트랩 시점(예: store/authStore.js 모듈 로드)에서 setter 를 1회 호출해 주입한다.
// 서버 컴포넌트 경로에서는 getter 가 호출되더라도 null 을 반환하므로 안전.
let getAccessToken = () => null;

// 최초 1회 호출 권장. 이후 호출은 덮어쓰기.
export function setAccessTokenGetter(fn) {
  getAccessToken = typeof fn === "function" ? fn : () => null;
}

// 매 요청마다 baseURL 을 다시 읽어 .env 변경이나 모듈 캐시 잔여 영향에서 안전하다.
apiClient.interceptors.request.use((config) => {
  config.baseURL = getApiBaseUrl();

  // 인증 토큰 자동 첨부.
  // - 브라우저 환경에서만 동작 (서버 컴포넌트 호출 경로에서는 zustand 접근 자체를 피한다).
  // - 호출부가 Authorization 헤더를 명시했다면 덮어쓰지 않는다 (이중 첨부 방지).
  // - 백엔드 인증 헤더 방식이 바뀌면 (Bearer → 쿠키 등) 이 블록만 수정한다.
  if (typeof window !== "undefined" && !config.headers?.Authorization) {
    const token = getAccessToken();
    if (token) config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// 응답 envelope 처리.
// 백엔드 envelope 포맷이 바뀌면 (예: { code, data } → { status, payload }) 이 블록만 수정하면 된다.
apiClient.interceptors.response.use(
  (response) => {
    const body = response.data;
    if (body && typeof body === "object" && "code" in body) {
      if (body.code === "SUCCESS") {
        return body.data;
      }
      const error = new Error(body.message ?? "API 요청에 실패했습니다.");
      error.code = body.code;
      error.errors = body.errors ?? null;
      error.status = response.status;
      throw error;
    }
    return body;
  },
  (error) => {
    const body = error.response?.data;
    if (body && typeof body === "object" && "code" in body) {
      const wrapped = new Error(body.message ?? "API 요청에 실패했습니다.");
      wrapped.code = body.code;
      wrapped.errors = body.errors ?? null;
      wrapped.status = error.response.status;
      throw wrapped;
    }
    throw error;
  },
);

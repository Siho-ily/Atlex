import axios from "axios";
import { getApiBaseUrl } from "@/lib/api/baseUrl";

// 공통 axios 인스턴스. response interceptor 에서 envelope({code, message, data, errors}) 를 풀고,
// 실패 코드는 Error 로 변환해 호출부의 try/catch 에 잡히도록 한다.
export const apiClient = axios.create({
  headers: { "Content-Type": "application/json" },
});

// 매 요청마다 baseURL 을 다시 읽어 .env 변경이나 모듈 캐시 잔여 영향에서 안전하다.
apiClient.interceptors.request.use((config) => {
  config.baseURL = getApiBaseUrl();
  return config;
});

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

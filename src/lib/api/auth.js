import { apiClient } from "@/lib/api/client";

export function loginApi({ userId, password }) {
  return apiClient.post("/auth/login", { userId, password });
}

export function logoutApi(accessToken) {
  return apiClient.delete("/auth/logout", {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
}

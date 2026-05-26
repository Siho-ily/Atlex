import { apiClient } from "@/lib/api/client";

export function fetchPosts({ page = 0, size = 10 } = {}) {
  return apiClient.get("/posts", { params: { page, size } });
}

export function fetchPostById(postId) {
  return apiClient.get(`/posts/${postId}`);
}

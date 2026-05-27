import { apiClient } from '@/lib/api/client';

export function fetchPosts({ page = 0, size = 10, authorUserId } = {}) {
  return apiClient.get('/posts', { params: { page, size, ...(authorUserId && { authorUserId }) } });
}

export function fetchPostById(postId) {
  return apiClient.get(`/posts/${postId}`);
}

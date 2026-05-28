// 게시글 raw API 호출. envelope 만 풀린 응답을 그대로 반환하고, 매핑/정책은 호출부(query/hook)에 위임한다.
// 백엔드 endpoint 가 변경되면 이 파일의 URL/메서드/쿼리 인자만 수정한다.

import { apiClient } from '@/lib/api/client';

// GET /posts — page/size 기반 페이지네이션. authorUserId 가 있으면 해당 유저의 글만 조회.
// 응답: { content: ApiPost[], totalElements, totalPages, ... }
export function fetchPosts({ page = 0, size = 10, authorUserId } = {}) {
  return apiClient.get('/posts', { params: { page, size, ...(authorUserId && { authorUserId }) } });
}

// GET /posts/{postId} — 게시글 단건 조회. 없으면 envelope code 가 POST_NOT_FOUND 인 에러로 throw.
export function fetchPostById(postId) {
  return apiClient.get(`/posts/${postId}`);
}

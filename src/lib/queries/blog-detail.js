// 게시글 상세 SSR 데이터 로더.
// 게시글의 작성자(authorUserId) 와 URL 의 username 이 일치하는지 검증한 뒤 UI shape 로 매핑한다.

import { fetchPostById } from "@/lib/api/posts";
import { toBlogDetail } from "@/lib/mappers/post";

// loadBlogDetailData(postId, authorUserId) → detail | null
// authorUserId 와 글의 작성자가 다르면 null 반환. 호출부에서 notFound() 로 404 처리할 것.
// 게시글 자체가 없는 경우(POST_NOT_FOUND 등)는 fetchPostById 가 throw 하므로 호출부 try/catch 에서 처리한다.
export async function loadBlogDetailData(postId, authorUserId) {
  const apiPost = await fetchPostById(postId);
  if (apiPost.authorUserId !== authorUserId) return null;
  return toBlogDetail(apiPost);
}

// 메인 피드 SSR 데이터 로더.
// fetchPosts 호출 + toBlogMainPost 매핑을 한 곳에 모아, app/page.jsx 가 query 만 호출하도록 한다.

import { fetchPosts } from '@/lib/api/posts';
import { toBlogMainPost } from '@/lib/mappers/post';

// loadMainPosts({ page, size }) → { posts, totalPages }
// 에러는 호출부로 던지지 않고 빈 배열로 swallow 한다.
// 메인 피드는 일부 실패가 있어도 페이지 자체는 빈 상태로라도 렌더하는 게 사용자 경험상 더 낫기 때문.
// (대신 console.error 로 흔적을 남겨 디버깅을 돕는다.)
export async function loadMainPosts({ page = 0, size = 10 } = {}) {
  try {
    const data = await fetchPosts({ page, size });
    return {
      posts: data.content.map(toBlogMainPost),
      totalPages: data.totalPages,
    };
  } catch (error) {
    console.error('[loadMainPosts] fetchPosts 실패:', error?.message || error);
    return { posts: [], totalPages: 0 };
  }
}

// 유저 블로그 홈 SSR 데이터 로더.
// user 와 posts 를 병렬 fetch 한 뒤 profile / feed UI shape 로 매핑한다.

import { fetchUserByIdentifier } from "@/lib/api/users";
import { fetchPosts } from "@/lib/api/posts";
import { toBlogHomeProfile } from "@/lib/mappers/user";
import { toBlogHomeFeedPost } from "@/lib/mappers/post";

// loadBlogHomeData(identifier) → { profile, feed }
// feed 의 filterLabel / sortLabel / helperText / pagination 등 정적 필드는 mock 영역이다.
// 실제 백엔드 연동 시 별도 API 응답으로 대체될 후보.
export async function loadBlogHomeData(identifier) {
  const [user, postsPage] = await Promise.all([
    fetchUserByIdentifier(identifier),
    fetchPosts({ page: 0, size: 10, authorUserId: identifier }),
  ]);

  const profile = toBlogHomeProfile(user);
  const posts = postsPage.content.map(toBlogHomeFeedPost);

  const feed = {
    totalCount: postsPage.totalElements,
    filterLabel: "이번 주",
    sortLabel: "최신순",
    helperText:
      "제목과 본문은 카드형 목록으로 유지하고, 피드 중심의 배치로 재정렬한 정적 목업입니다.",
    pageSizeLabel: "한 페이지에 최대 10개",
    posts,
    pagination: [
      { id: "prev", label: "<", kind: "control" },
      { id: "page-1", label: "1", current: true },
    ],
  };

  return { profile, feed };
}

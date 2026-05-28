// API User 엔티티를 UI shape 으로 변환하는 순수 매퍼.
// 비동기 호출 금지. 백엔드 필드명이 바뀌면 input 부분만 수정한다.

// input: fetchUserByIdentifier 응답 (ApiUser)
// output: 유저 블로그 홈 프로필 shape (CategoryBlogHomeContent 의 profile)
// API 미정 필드(stats, bio, quickActions)는 임시 mock 값으로 채워둔다 — 백엔드 추가 시 교체.
export function toBlogHomeProfile(apiUser) {
  return {
    userId: apiUser.userId,
    nickname: apiUser.name,
    bio: "그냥 대충 소개글 적는 곳",
    stats: [
      { id: "followers", label: "팔로워", value: "0" },
      { id: "following", label: "팔로잉", value: "0" },
      { id: "posts", label: "게시글", value: "0" },
    ],
    quickActions: [
      { id: "follow", label: "팔로우", tone: "accent" },
      { id: "category", label: "카테고리", tone: "neutral" },
      { id: "graph", label: "그래프 보기", tone: "soft" },
    ],
  };
}

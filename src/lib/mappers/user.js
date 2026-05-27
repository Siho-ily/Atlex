// API User 엔티티를 블로그 홈 프로필 UI shape 으로 변환.
// API 미정 필드(stats, bio, quickActions)는 기본값으로 채운다.
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

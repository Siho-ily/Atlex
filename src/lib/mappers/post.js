// API Post 엔티티를 도메인별 UI shape 으로 변환하는 순수 매퍼.
// 비동기 호출 금지(여기서 추가 fetch 가 필요해지면 query 레이어로 옮긴다).
// 백엔드 응답 필드명이 바뀌면 input 부분만 수정하면 된다 (호출부 무영향).
// API 스펙에 없는 필드는 기본값/유도값으로 채운다.

function truncate(text, max) {
  if (!text) return "";
  if (text.length <= max) return text;
  return `${text.slice(0, max).trimEnd()}…`;
}

function pad2(n) {
  return String(n).padStart(2, "0");
}

export function formatKoreanDate(iso) {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return `${d.getFullYear()}년 ${d.getMonth() + 1}월 ${d.getDate()}일`;
}

export function formatDotDate(iso) {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return `${d.getFullYear()}.${pad2(d.getMonth() + 1)}.${pad2(d.getDate())}`;
}

// input: fetchPosts 의 content[] 한 항목 (ApiPost)
// output: 메인 피드 카드 shape (BlogMainPostGrid 에서 소비)
export function toBlogMainPost(apiPost) {
  return {
    id: String(apiPost.id),
    title: apiPost.title,
    excerpt: truncate(apiPost.content, 80),
    author: apiPost.authorName,
    authorUserId: apiPost.authorUserId,
    likes: apiPost.likes ?? 0,
    comments: 0,
    publishedAt: formatKoreanDate(apiPost.createdAt),
    eyebrow: apiPost.categoryName ?? "post",
    cover: apiPost.thumbnailUrl
      ? { variant: "image", url: apiPost.thumbnailUrl }
      : { variant: "none" },
  };
}

// input: fetchPostById 응답 (ApiPost)
// output: 상세 페이지 shape (BlogDetailContent 에서 소비)
export function toBlogDetail(apiPost) {
  return {
    blogTitle: apiPost.authorUserId ? `${apiPost.authorUserId}.log` : "blog",
    category: apiPost.categoryName ?? "미분류",
    title: apiPost.title,
    excerpt: truncate(apiPost.content, 120),
    publishedAt: formatKoreanDate(apiPost.createdAt),
    updatedAt: formatKoreanDate(apiPost.updatedAt),
    readTime: `${Math.max(1, Math.ceil((apiPost.content?.length ?? 0) / 300))} min read`,
    visibilityLabel: apiPost.isPublic ? "공개" : "비공개",
    authorUserId: apiPost.authorUserId ?? null,
    adminActions: ["통계", "수정", "삭제"],
    contentBlocks: [
      ...(apiPost.thumbnailUrl
        ? [{ id: "cover", type: "image", src: apiPost.thumbnailUrl, caption: "" }]
        : []),
      { id: "body", type: "paragraph", text: apiPost.content ?? "" },
    ],
  };
}

// input: fetchPosts 의 content[] 한 항목 (ApiPost, authorUserId 필터링 후)
// output: 유저 블로그 홈 피드 카드 shape (CategoryBlogHomeContent 의 feed.posts)
export function toBlogHomeFeedPost(apiPost) {
  return {
    id: apiPost.id,
    title: apiPost.title,
    excerpt: truncate(apiPost.content, 120),
    category: apiPost.categoryName ?? "미분류",
    tags: [],
    date: formatDotDate(apiPost.createdAt),
    likes: apiPost.likes ?? 0,
    comments: 0,
    bookmarks: 0,
    isLiked: false,
    thumbnailUrl: apiPost.thumbnailUrl ?? undefined,
    isPrivate: !apiPost.isPublic,
  };
}

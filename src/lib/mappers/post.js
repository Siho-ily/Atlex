// API Post 엔티티를 도메인별 UI shape 으로 변환하는 매퍼.
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

// 블로그 메인 카드 shape (src/data/blog-main/blog-main-posts.js 의 한 항목)
export function toBlogMainPost(apiPost) {
  return {
    id: String(apiPost.id),
    title: apiPost.title,
    excerpt: truncate(apiPost.content, 80),
    author: apiPost.authorName,
    likes: apiPost.likes ?? 0,
    comments: 0,
    publishedAt: formatKoreanDate(apiPost.createdAt),
    eyebrow: apiPost.categoryName ?? "post",
    cover: { variant: "none", size: "medium", tone: "cream" },
  };
}

// 유저 블로그 피드 카드 shape (src/data/blog-home/blog-home-mock-data.js 의 posts 항목)
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

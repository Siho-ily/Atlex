// bloghome 정적 목업 데이터 모음
export const blogHomeHeaderData = {
  logoLabel: "LOGO",
  blogTitle: "userId's blog",
  searchPlaceholder: "검색어를 입력하세요",
  toolbarButtons: [
    { id: "search", label: "검색", tone: "soft" },
    { id: "alert", label: "알림", tone: "neutral" },
  ],
  profileLabel: "프로필 사진",
};

// 사이드바 프로필 데이터
export const blogHomeProfile = {
  userId: "userId",
  nickname: "닉네임",
  bio: "그냥 대충 소개글 적는 곳",
  stats: [
    { id: "followers", label: "팔로워", value: "120" },
    { id: "following", label: "팔로잉", value: "120" },
    { id: "posts", label: "게시글", value: "38" },
  ],
  quickActions: [
    { id: "follow", label: "팔로우", tone: "accent" },
    { id: "category", label: "카테고리", tone: "neutral" },
    { id: "graph", label: "그래프 보기", tone: "soft" },
  ],
};

// 태그 선택 상태 확인용 데이터
export const blogHomeTags = [
  { id: "all", label: "전체 글", count: 78, active: true },
  { id: "tag-1", label: "태그 1", count: 12 },
  { id: "tag-2", label: "태그 2", count: 9 },
  { id: "tag-3", label: "태그 3", count: 8 },
  { id: "tag-4", label: "태그 4", count: 6 },
  { id: "tag-5", label: "태그 5", count: 5 },
  { id: "tag-6", label: "태그 6", count: 4 },
  { id: "tag-7", label: "태그 7", count: 3 },
];

// map 렌더링용 피드 데이터
export const blogHomeFeedData = {
  totalCount: 38,
  filterLabel: "이번 주",
  sortLabel: "최신순",
  helperText:
    "제목과 본문은 카드형 목록으로 유지하고, 피드 중심의 배치로 재정렬한 정적 목업입니다.",
  pageSizeLabel: "한 페이지에 최대 10개",
  posts: [
    {
      id: 1,
      category: "Public",
      title: "게시글의 제목 | 게시글의 제목 | 게시글의 제목 | 게시글의 제목",
      excerpt:
        "본문 내용 | 본문 내용 | 본문 내용 | 본문 내용 | 본문 내용 | 본문 내용 | 본문 내용 | 본문 내용 | 본문 내용 | 본문 내용",
      tags: ["태그 1", "태그 2", "태그 3"],
      date: "2026.03.23",
      likes: 24,
      comments: 8,
      bookmarks: 2,
      isLiked: true,
      thumbnailUrl: "https://placehold.co/600x400?text=IMG",
    },
    {
      id: 2,
      category: "Public",
      title: "게시글의 제목",
      excerpt: "본문 내용 | 본문 내용 | 본문 내용 | 본문 내용",
      tags: ["태그 4", "태그 5"],
      date: "2026.02.29",
      likes: 14,
      comments: 6,
      bookmarks: 2,
      isLiked: true,
    },
    {
      id: 3,
      category: "Private",
      title: "비공개 게시글의 제목",
      excerpt:
        "본문 내용 | 본문 내용 | 본문 내용 | 본문 내용 | 본문 내용 | 본문 내용 | 본문 내용 | 본문 내용 | 본문 내용",
      tags: ["태그 8", "태그 9"],
      date: "2026.01.23",
      likes: 0,
      comments: 0,
      bookmarks: 0,
      isPrivate: true,
    },
  ],
  pagination: [
    { id: "prev", label: "<", kind: "control" },
    { id: "page-1", label: "1" },
    { id: "ellipsis-start", label: "...", kind: "ellipsis" },
    { id: "page-11", label: "11" },
    { id: "page-12", label: "12", current: true },
    { id: "page-13", label: "13" },
    { id: "ellipsis-end", label: "...", kind: "ellipsis" },
    { id: "page-20", label: "20" },
    { id: "next", label: ">", kind: "control" },
  ],
};

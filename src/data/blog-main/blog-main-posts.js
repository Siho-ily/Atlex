// 블로그 메인 화면용 목업 데이터입니다. 여러 커버 타입을 한 번에 확인할 수 있게 구성했습니다.
export const blogMainFilters = [
  {
    id: "trending",
    label: "주목한 글",
    description: "지금 가장 많이 읽히는 글보다, 화면에서 먼저 보여주고 싶은 기록을 모아둔 보기입니다.",
  },
  {
    id: "recommended",
    label: "가볍게 읽기",
    description: "조용하지만 오래 남는 글, 작업 중간에 천천히 읽기 좋은 메모를 묶었습니다.",
  },
  {
    id: "latest",
    label: "새로 올라온 글",
    description: "최근에 적은 메모, 회고, 실험 기록을 시간 흐름대로 정리한 탭입니다.",
  },
  {
    id: "feed",
    label: "아카이브",
    description: "짧은 기록부터 긴 글까지 한 화면에서 훑어볼 수 있는 카드 모음입니다.",
  },
];

export const blogMainPeriods = [
  { id: "week", label: "이번 주" },
  { id: "month", label: "이번 달" },
  { id: "all", label: "전체" },
];

export const blogMainPosts = [
  {
    id: "morning-buttons-note",
    title: "아침에 다시 본 버튼 간격 메모",
    excerpt:
      "같은 버튼이어도 좌우 여백이 조금만 달라지면 화면의 긴장이 바뀐다. 오늘은 기능보다 먼저 간격을 정리해보자는 생각으로 시작했다.",
    author: "minji",
    likes: 19,
    comments: 7,
    publishedAt: "2026년 4월 15일",
    eyebrow: "layout note",
    cover: {
      variant: "stack",
      main: "PAPER",
      caption: "LAYOUT",
      size: "large",
      tone: "cream",
    },
  },
  {
    id: "small-toolkit-weekend",
    title: "주말에 만든 작은 툴킷 조합 기록",
    excerpt:
      "크게 거창한 프로젝트는 아니어도 자주 쓰는 도구 조합을 정리해두면 다음 주의 시작이 조금 덜 번잡해진다.",
    author: "nora",
    likes: 27,
    comments: 4,
    publishedAt: "2026년 4월 14일",
    eyebrow: "side note",
    cover: {
      variant: "orbit",
      main: "LOOP",
      caption: "WEEKEND",
      size: "large",
      tone: "cyan",
    },
  },
  {
    id: "question-log",
    title: "질문을 먼저 적어두면 회의가 짧아진다",
    excerpt:
      "답을 빨리 찾으려는 습관보다 질문을 분류해두는 습관이 더 오래 남는다. 오늘 메모는 회의 전에 적어둔 문장들에 대한 이야기다.",
    author: "Jun",
    likes: 16,
    comments: 5,
    publishedAt: "2026년 4월 13일",
    eyebrow: "essay",
    cover: {
      variant: "poster",
      main: "ASK",
      caption: "FIELD NOTE",
      symbol: "Q",
      size: "large",
      tone: "cream",
    },
  },
  {
    id: "tiny-chart-experiment",
    title: "숫자를 작게 보여줘도 전달되는 방식",
    excerpt:
      "숫자를 크게 세우지 않아도 리듬만 잘 잡히면 훑어보는 사람은 자연스럽게 흐름을 읽는다. 이번에는 작고 차분한 차트를 시험했다.",
    author: "data.han",
    likes: 22,
    comments: 6,
    publishedAt: "2026년 4월 13일",
    eyebrow: "experiment",
    cover: {
      variant: "wave",
      main: "ECHO 12",
      bars: [6, 8, 7, 9, 12, 10, 8, 11, 9, 7],
      size: "large",
      tone: "blue",
    },
  },
  {
    id: "screen-mood-study",
    title: "강한 사진 없이도 분위기는 만들 수 있다",
    excerpt:
      "이미지가 화면의 중심이 아니어도 된다. 형태와 간격, 텍스트 대비만으로도 충분히 밀도를 만들 수 있다는 쪽에 더 마음이 간다.",
    author: "ha-neul",
    likes: 18,
    comments: 3,
    publishedAt: "2026년 4월 12일",
    eyebrow: "visual study",
    cover: {
      variant: "ribbon",
      main: "SHIFT",
      size: "large",
      tone: "ink",
    },
  },
  {
    id: "browser-reading-log",
    title: "문서를 읽다가 따로 적어둔 브라우저 메모",
    excerpt:
      "한 번에 다 이해하려고 하기보다 걸리는 단어와 문장만 가볍게 남겨두는 방식이 오히려 기억에 오래 남았다.",
    author: "chanhee",
    likes: 8,
    comments: 1,
    publishedAt: "2026년 4월 11일",
    eyebrow: "reading log",
    cover: {
      variant: "grid",
      caption: "CHECKLIST",
      activeCells: [1, 6, 7, 13, 17],
      size: "medium",
      tone: "blue",
    },
  },
  {
    id: "release-temperature",
    title: "새 버전이 나오면 먼저 기록부터 남기는 이유",
    excerpt:
      "성능 비교보다 먼저 적는 첫인상은 며칠 뒤 다시 읽었을 때 더 솔직한 기준점이 된다. 그래서 이번에도 짧게 시작했다.",
    author: "yujin",
    likes: 14,
    comments: 2,
    publishedAt: "2026년 4월 17일",
    eyebrow: "release",
    cover: {
      variant: "minimal",
      main: "4.7",
      size: "medium",
      tone: "cream",
    },
  },
  {
    id: "handoff-thread",
    title: "작업 인수인계 문장은 길지 않아도 된다",
    excerpt:
      "상대가 바로 이어서 일할 수 있게 만드는 문장만 남기면 된다. 친절함은 길이보다 순서에 더 가깝다는 쪽을 믿고 있다.",
    author: "seoyeon",
    likes: 11,
    comments: 4,
    publishedAt: "2026년 4월 28일",
    eyebrow: "workflow",
    cover: {
      variant: "thread",
      main: "HANDOFF",
      caption: "3 STEPS",
      size: "medium",
      tone: "blue",
    },
  },
  {
    id: "spacing-note",
    title: "간격만 정리해도 화면은 차분해진다",
    excerpt:
      "폰트나 색을 바꾸지 않아도 여백 정리만으로 분위기가 크게 달라질 때가 있다. 오늘은 그 미묘한 차이를 붙잡아봤다.",
    author: "Yereong",
    likes: 9,
    comments: 2,
    publishedAt: "2026년 4월 14일",
    eyebrow: "design note",
    cover: {
      variant: "dots",
      main: "CALM",
      caption: "SPACING",
      size: "small",
      tone: "slate",
    },
  },
  {
    id: "first-week-notes",
    title: "첫 주에 적어둔 낯선 감각들",
    excerpt:
      "새로운 팀에 들어가면 설명보다 먼저 손에 걸리는 것들이 있다. 그 조용한 감각들을 잊기 전에 짧게 적어둔 메모다.",
    author: "Nayoung",
    likes: 7,
    comments: 3,
    publishedAt: "2026년 4월 13일",
    eyebrow: "team memo",
    cover: {
      variant: "none",
      size: "small",
      tone: "cream",
    },
  },
];

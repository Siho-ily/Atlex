// PostTagMap 엔티티 더미 데이터
export const postTagMaps = [
  { id: 1, postId: 1, tagId: 3 },    // 하린 - 버튼 간격: ui
  { id: 2, postId: 1, tagId: 4 },    // 하린 - 버튼 간격: layout
  { id: 3, postId: 2, tagId: 12 },   // 민준 - 툴킷: workflow
  { id: 4, postId: 2, tagId: 10 },   // 민준 - 툴킷: memo
  { id: 5, postId: 3, tagId: 11 },   // 서연 - 질문: essay
  { id: 6, postId: 3, tagId: 12 },   // 서연 - 질문: workflow
  { id: 7, postId: 4, tagId: 13 },   // 지우 - 숫자: experiment
  { id: 8, postId: 5, tagId: 5 },    // 서연 - 사진: design
  { id: 9, postId: 5, tagId: 3 },    // 서연 - 사진: ui
  { id: 10, postId: 6, tagId: 14 },  // 도윤 - 문서: reading
  { id: 11, postId: 7, tagId: 15 },  // 민준 - 버전: review
  { id: 12, postId: 7, tagId: 1 },   // 민준 - 버전: react
  { id: 13, postId: 8, tagId: 12 },  // 하린 - 인수인계: workflow
  { id: 14, postId: 9, tagId: 7 },   // 서연 - 간격: css
  { id: 15, postId: 9, tagId: 4 },   // 서연 - 간격: layout
  { id: 16, postId: 10, tagId: 10 }, // 지우 - 첫주: memo
  { id: 17, postId: 11, tagId: 3 },  // 하린 - 여백: ui
  { id: 18, postId: 11, tagId: 4 },  // 하린 - 여백: layout
  { id: 19, postId: 11, tagId: 5 },  // 하린 - 여백: design
  { id: 20, postId: 12, tagId: 6 },  // 민준 - TypeScript: typescript
  { id: 21, postId: 12, tagId: 29 }, // 민준 - TypeScript: frontend
  { id: 22, postId: 13, tagId: 97 }, // 서연 - 다크모드: dark-mode
  { id: 23, postId: 13, tagId: 7 },  // 서연 - 다크모드: css
  { id: 24, postId: 14, tagId: 41 }, // 지우 - SVG 차트: chart
  { id: 25, postId: 14, tagId: 40 }, // 지우 - SVG 차트: svg
  { id: 26, postId: 15, tagId: 3 },  // 도윤 - 읽기 화면: ui
  { id: 27, postId: 15, tagId: 36 }, // 도윤 - 읽기 화면: ux
  { id: 28, postId: 16, tagId: 54 }, // 예린 - 집중력: productivity
  { id: 29, postId: 16, tagId: 55 }, // 예린 - 집중력: retrospective
  { id: 30, postId: 17, tagId: 5 },  // 하준 - 타이포그래피: design
  { id: 31, postId: 17, tagId: 68 }, // 하준 - 타이포그래피: resources
  { id: 32, postId: 18, tagId: 42 }, // 유진 - useCallback: hooks
  { id: 33, postId: 18, tagId: 22 }, // 유진 - useCallback: performance
  { id: 34, postId: 18, tagId: 1 },  // 유진 - useCallback: react
  { id: 35, postId: 19, tagId: 91 }, // 지훈 - 비활성 계정: product
  { id: 36, postId: 19, tagId: 11 }, // 지훈 - 비활성 계정: essay
  { id: 37, postId: 20, tagId: 79 }, // 수빈 - 꾸준함: habit
  { id: 38, postId: 20, tagId: 11 }, // 수빈 - 꾸준함: essay
  { id: 39, postId: 21, tagId: 9 },  // 하린 - 컴포넌트 이름: component
  { id: 40, postId: 21, tagId: 5 },  // 하린 - 컴포넌트 이름: design
  { id: 41, postId: 22, tagId: 31 }, // 민준 - Git 커밋: git
  { id: 42, postId: 22, tagId: 12 }, // 민준 - Git 커밋: workflow
  { id: 43, postId: 23, tagId: 35 }, // 서연 - Figma: figma
  { id: 44, postId: 23, tagId: 9 },  // 서연 - Figma: component
  { id: 45, postId: 24, tagId: 23 }, // 지우 - 접근성+SEO: accessibility
  { id: 46, postId: 24, tagId: 37 }, // 지우 - 접근성+SEO: seo
  { id: 47, postId: 25, tagId: 14 }, // 도윤 - 기술 문서: reading
  { id: 48, postId: 25, tagId: 63 }, // 도윤 - 기술 문서: tips
  { id: 49, postId: 26, tagId: 82 }, // 예린 - 스탠드업: team
  { id: 50, postId: 26, tagId: 84 }, // 예린 - 스탠드업: communication
  { id: 51, postId: 27, tagId: 95 }, // 하준 - 블로그 시작: content
  { id: 52, postId: 27, tagId: 81 }, // 하준 - 블로그 시작: growth
  { id: 53, postId: 28, tagId: 49 }, // 유진 - Vite: vite
  { id: 54, postId: 28, tagId: 48 }, // 유진 - Vite: webpack
  { id: 55, postId: 28, tagId: 22 }, // 유진 - Vite: performance
  { id: 56, postId: 29, tagId: 11 }, // 지훈 - 개발 멈추기: essay
  { id: 57, postId: 29, tagId: 80 }, // 지훈 - 개발 멈추기: mindset
  { id: 58, postId: 30, tagId: 79 }, // 수빈 - 매일 한 줄: habit
  { id: 59, postId: 30, tagId: 75 }, // 수빈 - 매일 한 줄: daily
  { id: 60, postId: 31, tagId: 7 },  // 하린 - 반응형 텍스트: css
  { id: 61, postId: 31, tagId: 24 }, // 하린 - 반응형 텍스트: responsive
  { id: 62, postId: 32, tagId: 139 }, // 민준 - React Query: react-query
  { id: 63, postId: 32, tagId: 98 },  // 민준 - React Query: state-management
  { id: 64, postId: 33, tagId: 23 }, // 서연 - 색상 대비: accessibility
  { id: 65, postId: 33, tagId: 5 },  // 서연 - 색상 대비: design
  { id: 66, postId: 34, tagId: 26 }, // 지우 - URL 상태: javascript
  { id: 67, postId: 34, tagId: 29 }, // 지우 - URL 상태: frontend
  { id: 68, postId: 35, tagId: 72 }, // 도윤 - 기술 서적: book
  { id: 69, postId: 35, tagId: 14 }, // 도윤 - 기술 서적: reading
  { id: 70, postId: 36, tagId: 85 }, // 예린 - 코드리뷰: feedback
  { id: 71, postId: 36, tagId: 82 }, // 예린 - 코드리뷰: team
  { id: 72, postId: 37, tagId: 22 }, // 하준 - 웹폰트: performance
  { id: 73, postId: 37, tagId: 5 },  // 하준 - 웹폰트: design
  { id: 74, postId: 38, tagId: 21 }, // 유진 - 테스트: testing
  { id: 75, postId: 38, tagId: 81 }, // 유진 - 테스트: growth
  { id: 76, postId: 39, tagId: 59 }, // 지훈 - 아이디어: idea
  { id: 77, postId: 39, tagId: 80 }, // 지훈 - 아이디어: mindset
  { id: 78, postId: 40, tagId: 10 }, // 수빈 - 기록: memo
  { id: 79, postId: 40, tagId: 75 }, // 수빈 - 기록: daily
  { id: 80, postId: 41, tagId: 23 }, // 하린 - 포커스트랩: accessibility
  { id: 81, postId: 41, tagId: 9 },  // 하린 - 포커스트랩: component
  { id: 82, postId: 42, tagId: 150 }, // 민준 - 모노레포: monorepo
  { id: 83, postId: 42, tagId: 105 }, // 민준 - 모노레포: turbopack
  { id: 84, postId: 43, tagId: 46 }, // 서연 - Tailwind: tailwind
  { id: 85, postId: 43, tagId: 7 },  // 서연 - Tailwind: css
  { id: 86, postId: 44, tagId: 26 }, // 지우 - 드래그앤드롭: javascript
  { id: 87, postId: 44, tagId: 13 }, // 지우 - 드래그앤드롭: experiment
  { id: 88, postId: 45, tagId: 14 }, // 도윤 - 아티클 루틴: reading
  { id: 89, postId: 45, tagId: 54 }, // 도윤 - 아티클 루틴: productivity
  { id: 90, postId: 46, tagId: 87 }, // 예린 - 온보딩: onboarding
  { id: 91, postId: 46, tagId: 82 }, // 예린 - 온보딩: team
  { id: 92, postId: 47, tagId: 89 }, // 하준 - 포트폴리오: portfolio
  { id: 93, postId: 47, tagId: 57 }, // 하준 - 포트폴리오: career
  { id: 94, postId: 48, tagId: 45 }, // 유진 - Storybook: storybook
  { id: 95, postId: 48, tagId: 9 },  // 유진 - Storybook: component
  { id: 96, postId: 49, tagId: 80 }, // 지훈 - 번아웃: mindset
  { id: 97, postId: 49, tagId: 57 }, // 지훈 - 번아웃: career
  { id: 98, postId: 50, tagId: 72 }, // 수빈 - 독서노트: book
  { id: 99, postId: 50, tagId: 95 }, // 수빈 - 독서노트: content
  { id: 100, postId: 51, tagId: 4 }, // 하린 - CSS Grid: layout
  { id: 101, postId: 51, tagId: 7 }, // 하린 - CSS Grid: css
  { id: 102, postId: 52, tagId: 134 }, // 민준 - GitHub Actions: ci-cd
  { id: 103, postId: 52, tagId: 32 },  // 민준 - GitHub Actions: devops
  { id: 104, postId: 53, tagId: 124 }, // 서연 - 와이어프레임: wireframe
  { id: 105, postId: 53, tagId: 36 },  // 서연 - 와이어프레임: ux
  { id: 106, postId: 54, tagId: 12 }, // 지우 - 스프린트: workflow
  { id: 107, postId: 54, tagId: 82 }, // 지우 - 스프린트: team
  { id: 108, postId: 55, tagId: 72 }, // 도윤 - 오프라인 독서: book
  { id: 109, postId: 55, tagId: 14 }, // 도윤 - 오프라인 독서: reading
  { id: 110, postId: 56, tagId: 55 }, // 예린 - 분기 회고: retrospective
  { id: 111, postId: 56, tagId: 76 }, // 예린 - 분기 회고: weekly
  { id: 112, postId: 57, tagId: 71 }, // 하준 - 컨퍼런스: conference
  { id: 113, postId: 57, tagId: 69 }, // 하준 - 컨퍼런스: inspiration
  { id: 114, postId: 58, tagId: 102 }, // 유진 - Playwright: playwright
  { id: 115, postId: 58, tagId: 21 },  // 유진 - Playwright: testing
  { id: 116, postId: 59, tagId: 57 }, // 지훈 - 커리어: career
  { id: 117, postId: 59, tagId: 80 }, // 지훈 - 커리어: mindset
  { id: 118, postId: 60, tagId: 72 }, // 수빈 - 읽기 방식: book
  { id: 119, postId: 60, tagId: 11 }, // 수빈 - 읽기 방식: essay
  { id: 120, postId: 61, tagId: 26 }, // 하린 - 무한스크롤: javascript
  { id: 121, postId: 61, tagId: 29 }, // 하린 - 무한스크롤: frontend
  { id: 122, postId: 62, tagId: 100 }, // 민준 - Zustand: zustand
  { id: 123, postId: 62, tagId: 98 },  // 민준 - Zustand: state-management
  { id: 124, postId: 63, tagId: 5 },  // 서연 - 타이포그래피: design
  { id: 125, postId: 63, tagId: 3 },  // 서연 - 타이포그래피: ui
  { id: 126, postId: 64, tagId: 42 }, // 지우 - 커스텀 훅: hooks
  { id: 127, postId: 64, tagId: 9 },  // 지우 - 커스텀 훅: component
  { id: 128, postId: 65, tagId: 60 }, // 도윤 - RSS: bookmark
  { id: 129, postId: 65, tagId: 14 }, // 도윤 - RSS: reading
  { id: 130, postId: 66, tagId: 84 }, // 예린 - 문서 문화: communication
  { id: 131, postId: 66, tagId: 86 }, // 예린 - 문서 문화: remote
  { id: 132, postId: 67, tagId: 114 }, // 하준 - 오픈소스: open-source
  { id: 133, postId: 67, tagId: 133 }, // 하준 - 오픈소스: github
  { id: 134, postId: 68, tagId: 44 }, // 유진 - vitest: vitest
  { id: 135, postId: 68, tagId: 21 }, // 유진 - vitest: testing
  { id: 136, postId: 69, tagId: 70 }, // 지훈 - 사이드 프로젝트: side-project
  { id: 137, postId: 69, tagId: 59 }, // 지훈 - 사이드 프로젝트: idea
  { id: 138, postId: 70, tagId: 84 }, // 수빈 - 글쓰기: communication
  { id: 139, postId: 70, tagId: 95 }, // 수빈 - 글쓰기: content
  { id: 140, postId: 71, tagId: 3 },  // 하린 - 스켈레톤: ui
  { id: 141, postId: 71, tagId: 9 },  // 하린 - 스켈레톤: component
  { id: 142, postId: 72, tagId: 67 }, // 민준 - 개발환경: tools
  { id: 143, postId: 72, tagId: 12 }, // 민준 - 개발환경: workflow
  { id: 144, postId: 73, tagId: 35 }, // 서연 - 핸드오프: figma
  { id: 145, postId: 73, tagId: 5 },  // 서연 - 핸드오프: design
  { id: 146, postId: 74, tagId: 20 }, // 지우 - API 캐싱: api
  { id: 147, postId: 74, tagId: 22 }, // 지우 - API 캐싱: performance
  { id: 148, postId: 75, tagId: 10 }, // 도윤 - 문장 모음: memo
  { id: 149, postId: 75, tagId: 14 }, // 도윤 - 문장 모음: reading
  { id: 150, postId: 76, tagId: 55 }, // 예린 - 팀 회고: retrospective
  { id: 151, postId: 76, tagId: 82 }, // 예린 - 팀 회고: team
  { id: 152, postId: 77, tagId: 147 }, // 하준 - shadcn: shadcn
  { id: 153, postId: 77, tagId: 9 },   // 하준 - shadcn: component
  { id: 154, postId: 78, tagId: 145 }, // 유진 - Zod: zod
  { id: 155, postId: 78, tagId: 6 },   // 유진 - Zod: typescript
  { id: 156, postId: 79, tagId: 80 }, // 지훈 - 막힘 풀기: mindset
  { id: 157, postId: 79, tagId: 59 }, // 지훈 - 막힘 풀기: idea
  { id: 158, postId: 80, tagId: 11 }, // 수빈 - 글쓰기 완성: essay
  { id: 159, postId: 80, tagId: 95 }, // 수빈 - 글쓰기 완성: content
  { id: 160, postId: 81, tagId: 3 },  // 하린 - 토글 카드: ui
  { id: 161, postId: 81, tagId: 9 },  // 하린 - 토글 카드: component
  { id: 162, postId: 82, tagId: 143 }, // 민준 - tRPC: trpc
  { id: 163, postId: 82, tagId: 6 },   // 민준 - tRPC: typescript
  { id: 164, postId: 83, tagId: 40 }, // 서연 - SVG 아이콘: svg
  { id: 165, postId: 83, tagId: 9 },  // 서연 - SVG 아이콘: component
  { id: 166, postId: 84, tagId: 139 }, // 지우 - 낙관적 업데이트: react-query
  { id: 167, postId: 84, tagId: 36 },  // 지우 - 낙관적 업데이트: ux
  { id: 168, postId: 85, tagId: 72 }, // 도윤 - 책 기억법: book
  { id: 169, postId: 85, tagId: 14 }, // 도윤 - 책 기억법: reading
  { id: 170, postId: 86, tagId: 55 }, // 예린 - 월간 회고: retrospective
  { id: 171, postId: 86, tagId: 129 }, // 예린 - 월간 회고: monthly
  { id: 172, postId: 87, tagId: 8 },   // 하준 - Framer Motion: animation
  { id: 173, postId: 87, tagId: 149 }, // 하준 - Framer Motion: framer-motion
  { id: 174, postId: 88, tagId: 21 }, // 유진 - MSW: testing
  { id: 175, postId: 88, tagId: 20 }, // 유진 - MSW: api
  { id: 176, postId: 89, tagId: 57 }, // 지훈 - 5년 후: career
  { id: 177, postId: 89, tagId: 81 }, // 지훈 - 5년 후: growth
  { id: 178, postId: 90, tagId: 95 }, // 수빈 - 블로그 꾸준함: content
  { id: 179, postId: 90, tagId: 79 }, // 수빈 - 블로그 꾸준함: habit
  { id: 180, postId: 91, tagId: 3 },  // 하린 - 아카이브: ui
  { id: 181, postId: 91, tagId: 36 }, // 하린 - 아카이브: ux
  { id: 182, postId: 92, tagId: 31 }, // 민준 - 커밋 단위: git
  { id: 183, postId: 92, tagId: 12 }, // 민준 - 커밋 단위: workflow
  { id: 184, postId: 93, tagId: 5 },  // 서연 - 빈 상태: design
  { id: 185, postId: 93, tagId: 36 }, // 서연 - 빈 상태: ux
  { id: 186, postId: 94, tagId: 36 }, // 지우 - 에러 메시지: ux
  { id: 187, postId: 94, tagId: 130 }, // 지우 - 에러 메시지: ux-writing
  { id: 188, postId: 95, tagId: 60 }, // 도윤 - 레퍼런스: bookmark
  { id: 189, postId: 95, tagId: 68 }, // 도윤 - 레퍼런스: resources
  { id: 190, postId: 96, tagId: 79 }, // 예린 - 아침 루틴: habit
  { id: 191, postId: 96, tagId: 54 }, // 예린 - 아침 루틴: productivity
  { id: 192, postId: 97, tagId: 2 },  // 하준 - Next.js App Router: nextjs
  { id: 193, postId: 97, tagId: 29 }, // 하준 - Next.js App Router: frontend
  { id: 194, postId: 98, tagId: 21 }, // 유진 - 테스트 커버리지: testing
  { id: 195, postId: 98, tagId: 82 }, // 유진 - 테스트 커버리지: team
  { id: 196, postId: 99, tagId: 57 }, // 지훈 - 퇴사: career
  { id: 197, postId: 99, tagId: 11 }, // 지훈 - 퇴사: essay
  { id: 198, postId: 100, tagId: 95 }, // 수빈 - 100번째 글: content
  { id: 199, postId: 100, tagId: 79 }, // 수빈 - 100번째 글: habit
  { id: 200, postId: 101, tagId: 1 },  // 하린 - 로딩 상태: react
  { id: 201, postId: 101, tagId: 9 },  // 하린 - 로딩 상태: component
  { id: 202, postId: 102, tagId: 142 }, // 민준 - Prisma: prisma
  { id: 203, postId: 102, tagId: 111 }, // 민준 - Prisma: database
  { id: 204, postId: 103, tagId: 5 },  // 서연 - 컬러 팔레트: design
  { id: 205, postId: 103, tagId: 3 },  // 서연 - 컬러 팔레트: ui
  { id: 206, postId: 104, tagId: 145 }, // 지우 - 폼 관리: zod
  { id: 207, postId: 104, tagId: 29 },  // 지우 - 폼 관리: frontend
  { id: 208, postId: 105, tagId: 54 }, // 도윤 - 집중력: productivity
  { id: 209, postId: 105, tagId: 79 }, // 도윤 - 집중력: habit
  { id: 210, postId: 106, tagId: 55 }, // 예린 - 회고 습관: retrospective
  { id: 211, postId: 106, tagId: 80 }, // 예린 - 회고 습관: mindset
  { id: 212, postId: 107, tagId: 95 }, // 하준 - 좋은 아티클: content
  { id: 213, postId: 107, tagId: 73 }, // 하준 - 좋은 아티클: article
  { id: 214, postId: 108, tagId: 22 }, // 유진 - 코드 분할: performance
  { id: 215, postId: 108, tagId: 29 }, // 유진 - 코드 분할: frontend
  { id: 216, postId: 109, tagId: 81 }, // 지훈 - 커뮤니티: growth
  { id: 217, postId: 109, tagId: 84 }, // 지훈 - 커뮤니티: communication
  { id: 218, postId: 110, tagId: 89 }, // 수빈 - 블로그 포트폴리오: portfolio
  { id: 219, postId: 110, tagId: 95 }, // 수빈 - 블로그 포트폴리오: content
];

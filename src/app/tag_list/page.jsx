"use client";

import { Suspense, useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "@/components/common/ui/tabs";
import { Input } from "@/components/common/ui/input";
import { cn } from "@/lib/utils";
import Header from "@/components/common/layout/Header";

const SORT_OPTIONS = [
  { label: "트렌딩", value: "trending" },
  { label: "인기순", value: "popular" },
  { label: "알파벳순", value: "alphabet" },
];

const PAGE_SIZE = 12;

// 실제 API 붙이기 전까지만 사용하는 mock 데이터
const MOCK_TAGS = [
  { name: "javascript", postCount: 12847, trendScore: 98 },
  { name: "react", postCount: 9234, trendScore: 95 },
  { name: "typescript", postCount: 7512, trendScore: 92 },
  { name: "python", postCount: 6890, trendScore: 90 },
  { name: "spring", postCount: 5341, trendScore: 82 },
  { name: "nextjs", postCount: 4728, trendScore: 86 },
  { name: "java", postCount: 4512, trendScore: 78 },
  { name: "nodejs", postCount: 4103, trendScore: 76 },
  { name: "vue", postCount: 3256, trendScore: 74 },
  { name: "CSS", postCount: 3189, trendScore: 70 },
  { name: "docker", postCount: 2891, trendScore: 72 },
  { name: "AWS", postCount: 2654, trendScore: 69 },
  { name: "mysql", postCount: 2430, trendScore: 66 },
  { name: "redis", postCount: 2140, trendScore: 64 },
  { name: "kubernetes", postCount: 1980, trendScore: 68 },
  { name: "figma", postCount: 1765, trendScore: 61 },
  { name: "git", postCount: 1654, trendScore: 60 },
  { name: "github", postCount: 1542, trendScore: 59 },
  { name: "tailwind", postCount: 1498, trendScore: 73 },
  { name: "supabase", postCount: 1210, trendScore: 71 },
  { name: "graphql", postCount: 1180, trendScore: 69 },
  { name: "mongodb", postCount: 1102, trendScore: 67 },
  { name: "rust", postCount: 980, trendScore: 75 },
  { name: "golang", postCount: 912, trendScore: 72 },
  { name: "flutter", postCount: 876, trendScore: 70 },
  { name: "swift", postCount: 834, trendScore: 65 },
  { name: "kotlin", postCount: 798, trendScore: 63 },
  { name: "linux", postCount: 754, trendScore: 60 },
  { name: "nginx", postCount: 712, trendScore: 58 },
  { name: "postgresql", postCount: 689, trendScore: 62 },
  { name: "nestjs", postCount: 654, trendScore: 66 },
  { name: "prisma", postCount: 621, trendScore: 64 },
  { name: "svelte", postCount: 598, trendScore: 68 },
  { name: "astro", postCount: 543, trendScore: 71 },
  { name: "vite", postCount: 512, trendScore: 67 },
  { name: "eslint", postCount: 487, trendScore: 55 },
  { name: "jest", postCount: 465, trendScore: 57 },
  { name: "storybook", postCount: 432, trendScore: 59 },
];

function getCacheKey(sort, keyword) {
  return `${sort}:${keyword}`;
}

async function fetchTags({ sort, keyword, page }) {
  // 실제 API 붙일 때 이 부분만 교체하면 됨
  await new Promise((resolve) => setTimeout(resolve, 250));

  const normalizedKeyword = keyword.trim().toLowerCase();

  const filteredTags = normalizedKeyword
    ? MOCK_TAGS.filter((tag) =>
        tag.name.toLowerCase().includes(normalizedKeyword)
      )
    : MOCK_TAGS;

  const sortedTags = [...filteredTags];

  if (sort === "popular") {
    sortedTags.sort((a, b) => b.postCount - a.postCount);
  } else if (sort === "alphabet") {
    sortedTags.sort((a, b) =>
      a.name.localeCompare(b.name, "en", { sensitivity: "base" })
    );
  } else {
    sortedTags.sort((a, b) => b.trendScore - a.trendScore);
  }

  const startIndex = (page - 1) * PAGE_SIZE;
  const endIndex = page * PAGE_SIZE;
  const items = sortedTags.slice(startIndex, endIndex);

  return {
    items,
    totalCount: sortedTags.length,
    hasMore: endIndex < sortedTags.length,
  };
}

function TagListContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const sortParam = searchParams.get("sort");
  const currentSort = SORT_OPTIONS.some((o) => o.value === sortParam)
    ? sortParam
    : "trending";

  const [tags, setTags] = useState([]);
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState("");
  const [totalCount, setTotalCount] = useState(0);
  const [hasMore, setHasMore] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const tagCacheRef = useRef(new Map());
  const requestIdRef = useRef(0);

  // 로딩 상태를 ref로 추적해서 loadTags deps에서 제거
  const pageRef = useRef(1);
  const hasMoreRef = useRef(false);
  const isLoadingRef = useRef(true);
  const isLoadingMoreRef = useRef(false);

  // observer가 항상 최신 loadMore 로직을 참조하도록 ref로 유지
  const loadMoreCallbackRef = useRef(null);
  const observerInstanceRef = useRef(null);

  const normalizedKeyword = keyword.trim().toLowerCase();

  // currentSort, normalizedKeyword만 deps에 포함 — 로딩 상태 변화로 재생성되지 않음
  const loadTags = useCallback(
    async ({ targetPage, reset = false }) => {
      const cacheKey = getCacheKey(currentSort, normalizedKeyword);

      if (reset) {
        const cached = tagCacheRef.current.get(cacheKey);
        if (cached) {
          pageRef.current = cached.page;
          hasMoreRef.current = cached.hasMore;
          isLoadingRef.current = false;
          isLoadingMoreRef.current = false;
          setTags(cached.items);
          setPage(cached.page);
          setTotalCount(cached.totalCount);
          setHasMore(cached.hasMore);
          setIsLoading(false);
          setIsLoadingMore(false);
          return;
        }

        pageRef.current = 1;
        hasMoreRef.current = false;
        isLoadingRef.current = true;
        isLoadingMoreRef.current = false;
        setTags([]);
        setPage(1);
        setTotalCount(0);
        setHasMore(false);
        setIsLoading(true);
        setIsLoadingMore(false);
      } else {
        if (isLoadingRef.current || isLoadingMoreRef.current || !hasMoreRef.current) return;
        isLoadingMoreRef.current = true;
        setIsLoadingMore(true);
      }

      const requestId = ++requestIdRef.current;

      try {
        const result = await fetchTags({
          sort: currentSort,
          keyword: normalizedKeyword,
          page: targetPage,
        });

        if (requestIdRef.current !== requestId) return;

        setTags((prevTags) => {
          const nextTags = reset ? result.items : [...prevTags, ...result.items];
          tagCacheRef.current.set(cacheKey, {
            items: nextTags,
            page: targetPage,
            totalCount: result.totalCount,
            hasMore: result.hasMore,
          });
          return nextTags;
        });

        pageRef.current = targetPage;
        hasMoreRef.current = result.hasMore;
        setPage(targetPage);
        setTotalCount(result.totalCount);
        setHasMore(result.hasMore);
      } finally {
        if (requestIdRef.current === requestId) {
          isLoadingRef.current = false;
          isLoadingMoreRef.current = false;
          setIsLoading(false);
          setIsLoadingMore(false);
        }
      }
    },
    [currentSort, normalizedKeyword]
  );

  // 렌더마다 최신 로직으로 갱신 — observer 재등록 없이 최신 상태 참조
  loadMoreCallbackRef.current = () => {
    if (isLoadingRef.current || isLoadingMoreRef.current || !hasMoreRef.current) return;
    loadTags({ targetPage: pageRef.current + 1, reset: false });
  };

  // 정렬·검색어 변경 시 목록 초기화 후 1페이지부터 재요청
  useEffect(() => {
    loadTags({ targetPage: 1, reset: true });
  }, [loadTags]);

  // callback ref: sentinel 요소 mount/unmount 시 observer 자동 연결/해제
  const setObserverTarget = useCallback((node) => {
    if (observerInstanceRef.current) {
      observerInstanceRef.current.disconnect();
      observerInstanceRef.current = null;
    }

    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          loadMoreCallbackRef.current?.();
        }
      },
      { root: null, rootMargin: "160px", threshold: 0 }
    );

    observer.observe(node);
    observerInstanceRef.current = observer;
  }, []);

  const handleSortChange = (sortValue) => {
    if (!SORT_OPTIONS.some((o) => o.value === sortValue)) return;
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", sortValue);
    params.delete("page");
    router.replace(`?${params.toString()}`, { scroll: false });
  };

  const handleKeywordChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header logoHref="/" />
      <main className="px-5 pb-12 pt-7 sm:px-8 lg:px-10">
      <section className="mx-auto w-full max-w-[820px]">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-[28px] font-bold tracking-[-0.02em] text-foreground">
              태그 목록
            </h1>

            <Tabs
              value={currentSort}
              onValueChange={handleSortChange}
              className="mt-2"
            >
              <TabsList variant="line" className="h-auto gap-7 p-0">
                {SORT_OPTIONS.map((option) => (
                  <TabsTrigger
                    key={option.value}
                    value={option.value}
                    className={cn(
                      "px-0 pb-2 text-[15px] text-muted-foreground",
                      "hover:text-foreground",
                      "data-active:font-bold data-active:text-primary",
                      "data-[state=active]:font-bold data-[state=active]:text-primary",
                      "after:bg-primary"
                    )}
                  >
                    {option.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          <Input
            type="text"
            placeholder="태그 검색..."
            aria-label="태그 검색"
            variant="filled"
            size="lg"
            value={keyword}
            onChange={handleKeywordChange}
            className={cn(
              "w-full border-border bg-muted text-[14px] text-foreground",
              "placeholder:text-muted-foreground",
              "focus-visible:border-ring focus-visible:bg-muted",
              "sm:w-[250px]"
            )}
          />
        </div>

        {isLoading && (
          <p className="py-10 text-center text-[13px] text-muted-foreground">
            태그를 불러오는 중입니다.
          </p>
        )}

        {!isLoading && (
          <>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-[10px]">
              {tags.map((tag) => {
                const encodedTagName = encodeURIComponent(tag.name);

                return (
                  <Link
                    key={tag.name}
                    href={`/tags/${encodedTagName}`}
                    className={cn(
                      "cursor-pointer rounded-md border border-border bg-card px-4 py-3",
                      "text-card-foreground transition-colors",
                      "hover:border-primary/60 hover:bg-accent hover:text-accent-foreground"
                    )}
                  >
                    <p className="text-[15px] font-medium">{tag.name}</p>

                    <p className="mt-1 text-[12px] text-muted-foreground">
                      {tag.postCount.toLocaleString()}개의 포스트
                    </p>
                  </Link>
                );
              })}
            </div>

            {normalizedKeyword && totalCount === 0 && (
              <p className="py-10 text-center text-[13px] text-muted-foreground">
                &ldquo;{keyword.trim()}&rdquo;에 해당하는 태그가 없습니다.
              </p>
            )}

            {hasMore && (
              <div
                ref={setObserverTarget}
                className="flex h-20 items-center justify-center text-[13px] text-muted-foreground"
              >
                {isLoadingMore ? "더 불러오는 중..." : ""}
              </div>
            )}

            {!hasMore && totalCount > 0 && (
              <p className="py-10 text-center text-[13px] text-muted-foreground">
                모든 태그를 불러왔습니다.
              </p>
            )}
          </>
        )}
      </section>
      </main>
    </div>
  );
}

export default function TagListPage() {
  return (
    <Suspense fallback={null}>
      <TagListContent />
    </Suspense>
  );
}

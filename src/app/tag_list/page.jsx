ㅇ"use client";

import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "@/components/common/ui/tabs";
import { Input } from "@/components/common/ui/input";
import { cn } from "@/lib/utils";

const SORT_OPTIONS = [
  { label: "트렌딩", value: "trending" },
  { label: "인기순", value: "popular" },
  { label: "알파벳순", value: "alphabet" },
];

const PAGE_SIZE = 12;

const TAGS = [
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

function TagListContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentSort = searchParams.get("sort") || "trending";

  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState("");

  const observerTargetRef = useRef(null);

  const sortedTags = useMemo(() => {
    const filtered = keyword
      ? TAGS.filter((tag) =>
          tag.name.toLowerCase().includes(keyword.toLowerCase())
        )
      : TAGS;

    const copiedTags = [...filtered];

    if (currentSort === "popular") {
      return copiedTags.sort((a, b) => b.postCount - a.postCount);
    }

    if (currentSort === "alphabet") {
      return copiedTags.sort((a, b) => a.name.localeCompare(b.name));
    }

    return copiedTags.sort((a, b) => b.trendScore - a.trendScore);
  }, [currentSort, keyword]);

  const visibleTags = useMemo(() => {
    return sortedTags.slice(0, page * PAGE_SIZE);
  }, [sortedTags, page]);

  const hasMore = visibleTags.length < sortedTags.length;
  const maxPage = Math.ceil(sortedTags.length / PAGE_SIZE);

  const handleSortChange = (sortValue) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", sortValue);
    params.delete("page");
    setPage(1);
    router.replace(`?${params.toString()}`);
  };

  const handleKeywordChange = (e) => {
    setKeyword(e.target.value);
    setPage(1);
  };

  useEffect(() => {
    if (!observerTargetRef.current) return;
    if (!hasMore) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPage((prev) => Math.min(prev + 1, maxPage));
        }
      },
      {
        root: null,
        rootMargin: "160px",
        threshold: 0,
      }
    );

    observer.observe(observerTargetRef.current);

    return () => {
      observer.disconnect();
    };
  }, [hasMore, page, maxPage]);

  return (
    <main className="min-h-screen bg-[#111] px-6 py-8 text-white">
      <section className="mx-auto w-full max-w-[820px]">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-[28px] font-bold tracking-[-0.02em]">
              태그 목록
            </h1>

            <Tabs value={currentSort} onValueChange={handleSortChange} className="mt-2">
              <TabsList variant="line" className="gap-7 p-0 h-auto">
                {SORT_OPTIONS.map((option) => (
                  <TabsTrigger
                    key={option.value}
                    value={option.value}
                    className="px-0 pb-2 text-[15px] text-neutral-500 hover:text-neutral-300 data-active:font-bold data-active:text-white after:bg-white"
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
            variant="filled"
            size="lg"
            value={keyword}
            onChange={handleKeywordChange}
            className="w-full border-transparent bg-[#2a2a2a] text-[14px] text-white placeholder:text-neutral-500 focus-visible:border-neutral-500 focus-visible:bg-[#2a2a2a] sm:w-[250px]"
          />
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-[10px]">
          {visibleTags.map((tag) => {
            const encodedTagName = encodeURIComponent(tag.name);

            return (
              <Link
                key={tag.name}
                href={`/tags/${encodedTagName}`}
                className={cn(
                  "rounded-md border bg-[#1f1f1f] px-4 py-3 transition-colors",
                  "cursor-pointer hover:border-neutral-500",
                  "border-[#343434] text-white"
                )}
              >
                <p className="text-[15px] font-medium">
                  {tag.name}
                </p>

                <p className="mt-1 text-[12px] text-neutral-500">
                  {tag.postCount.toLocaleString()}개의 포스트
                </p>
              </Link>
            );
          })}
        </div>

        {keyword && sortedTags.length === 0 && (
          <p className="py-10 text-center text-[13px] text-neutral-500">
            "{keyword}"에 해당하는 태그가 없습니다.
          </p>
        )}

        {hasMore && (
          <div
            ref={observerTargetRef}
            className="flex h-20 items-center justify-center text-[13px] text-neutral-500"
          >
            더 불러오는 중...
          </div>
        )}

        {!hasMore && sortedTags.length > 0 && (
          <p className="py-10 text-center text-[13px] text-neutral-600">
            모든 태그를 불러왔습니다.
          </p>
        )}
      </section>
    </main>
  );
}

export default function TagListPage() {
  return (
    <Suspense>
      <TagListContent />
    </Suspense>
  );
}

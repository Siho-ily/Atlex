// 메인 피드 무한스크롤 hook.
// IntersectionObserver 를 hook 내부에 둬서 컴포넌트는 sentinelRef 만 DOM 에 꽂으면 된다.
// TanStack Query 도입 시 `useInfiniteQuery({ queryKey, queryFn, getNextPageParam })` 로 1:1 교체된다.

'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { fetchPosts } from '@/lib/api/posts';
import { toBlogMainPost } from '@/lib/mappers/post';

// useInfinitePosts({ pageSize, authorUserId, initialPosts, totalPages })
//   pageSize:     한 페이지 크기 (기본 10)
//   authorUserId: 특정 유저 글만 보고 싶을 때 (선택)
//   initialPosts: SSR 에서 받은 첫 페이지 (hydration 용)
//   totalPages:   SSR 에서 받은 총 페이지 수 (hydration 용, hasMore 판정 기준)
// 반환: { posts, isLoading, error, hasMore, loadMore, sentinelRef }
//   sentinelRef 를 화면 하단 요소에 붙이면 자동으로 loadMore 가 호출된다.
export function useInfinitePosts({
  pageSize = 10,
  authorUserId,
  initialPosts = [],
  totalPages = 0,
} = {}) {
  const [posts, setPosts] = useState(initialPosts);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const hasMore = page + 1 < totalPages;
  const sentinelRef = useRef(null);

  const loadMore = useCallback(async () => {
    if (isLoading || !hasMore) return;
    setIsLoading(true);
    setError(null);
    try {
      const nextPage = page + 1;
      const data = await fetchPosts({ page: nextPage, size: pageSize, authorUserId });
      setPosts((prev) => [...prev, ...data.content.map(toBlogMainPost)]);
      setPage(nextPage);
    } catch (err) {
      setError(err);
      console.error('[useInfinitePosts] fetchPosts 실패:', err?.message || err);
    } finally {
      setIsLoading(false);
    }
  }, [isLoading, hasMore, page, pageSize, authorUserId]);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) loadMore();
      },
      { rootMargin: '200px' },
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [loadMore]);

  return { posts, isLoading, error, hasMore, loadMore, sentinelRef };
}

'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { fetchPosts } from '@/lib/api/posts';
import { toBlogMainPost } from '@/lib/mappers/post';
import BlogMainPostGrid from './BlogMainPostGrid';

const PAGE_SIZE = 10;

export default function BlogMainInfinitePostGrid({ initialPosts, totalPages }) {
  const [posts, setPosts] = useState(initialPosts);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const hasMore = page + 1 < totalPages;
  const sentinelRef = useRef(null);

  const loadMore = useCallback(async () => {
    if (loading || !hasMore) return;
    setLoading(true);
    try {
      const nextPage = page + 1;
      const data = await fetchPosts({ page: nextPage, size: PAGE_SIZE });
      setPosts(prev => [...prev, ...data.content.map(toBlogMainPost)]);
      setPage(nextPage);
    } catch (e) {
      console.error('[InfiniteScroll] fetchPosts 실패:', e?.message || e);
    } finally {
      setLoading(false);
    }
  }, [loading, hasMore, page]);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) loadMore();
      },
      { rootMargin: '200px' }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [loadMore]);

  return (
    <>
      <BlogMainPostGrid posts={posts} emptyMessage="아직 표시할 게시글이 없습니다." />
      <div ref={sentinelRef} className="flex justify-center py-6">
        {loading && (
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-border border-t-foreground" />
        )}
      </div>
    </>
  );
}

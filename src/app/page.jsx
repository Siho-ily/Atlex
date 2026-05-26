import BlogMainPostGrid from '@/components/domain/blog-main/feature/BlogMainPostGrid';
import BlogMainToolbar from '@/components/domain/blog-main/feature/BlogMainToolbar';
import BlogMainContainer from '@/components/domain/blog-main/layout/BlogMainContainer';
import Header from '@/components/common/layout/Header';
import { blogMainFilters, blogMainPeriods } from '@/data/blog-main/blog-main-posts';
import { fetchPosts } from '@/lib/api/posts';
import { toBlogMainPost } from '@/lib/mappers/post';

export const metadata = {
  title: 'User Blog Main',
  description: 'User blog main page'
};

async function loadMainPosts() {
  try {
    const page = await fetchPosts({ page: 0, size: 10 });
    return page.content.map(toBlogMainPost);
  } catch (error) {
    console.error('[MainPage] fetchPosts 실패:', error?.message || error);
    return [];
  }
}

export default async function MainPage() {
  // 아직 상호작용이 연결되지 않아 각 그룹의 첫 항목을 기본 선택 상태로 둡니다.
  const activeFilter = blogMainFilters[0];
  const activePeriod = blogMainPeriods[0];
  const posts = await loadMainPosts();

  return (
    <BlogMainContainer>
      <Header />
      <BlogMainToolbar
        activeFilterId={activeFilter.id}
        activePeriodId={activePeriod.id}
        filters={blogMainFilters}
        periods={blogMainPeriods}
      />

      <BlogMainPostGrid posts={posts} emptyMessage="아직 표시할 게시글이 없습니다." />
    </BlogMainContainer>
  );
}

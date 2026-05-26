import Header from '@/components/common/layout/UserBlogHeader';
import BlogMainPostGrid from '@/components/domain/blog-main/feature/BlogMainPostGrid';
import BlogMainToolbar from '@/components/domain/blog-main/feature/BlogMainToolbar';
import BlogMainContainer from '@/components/domain/blog-main/layout/BlogMainContainer';
import BlogMainHeader from '@/components/domain/blog-main/layout/BlogMainHeader';
import { blogMainFilters, blogMainPeriods, blogMainPosts } from '@/data/blog-main/blog-main-posts';

export const metadata = {
  title: 'User Blog Main',
  description: 'User blog main page'
};

export default function MainPage() {
  // 아직 상호작용이 연결되지 않아 각 그룹의 첫 항목을 기본 선택 상태로 둡니다.
  const activeFilter = blogMainFilters[0];
  const activePeriod = blogMainPeriods[0];

  return (
    <BlogMainContainer>
      <BlogMainHeader />
      <BlogMainToolbar
        activeFilterId={activeFilter.id}
        activePeriodId={activePeriod.id}
        filters={blogMainFilters}
        periods={blogMainPeriods}
      />

      <BlogMainPostGrid posts={blogMainPosts} emptyMessage="아직 표시할 게시글이 없습니다." />
    </BlogMainContainer>
  );
}

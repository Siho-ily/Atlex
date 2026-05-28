import BlogMainInfinitePostGrid from '@/components/domain/blog-main/feature/BlogMainInfinitePostGrid';
import BlogMainToolbar from '@/components/domain/blog-main/feature/BlogMainToolbar';
import Header from '@/components/common/layout/Header';
import { blogMainFilters, blogMainPeriods } from '@/data/blog-main/blog-main-posts';
import { loadMainPosts } from '@/lib/queries/blog-main';

export const metadata = {
  title: 'User Blog Main',
  description: 'User blog main page'
};

export default async function MainPage() {
  const activeFilter = blogMainFilters[0];
  const activePeriod = blogMainPeriods[0];
  const { posts, totalPages } = await loadMainPosts();

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <div className="mx-auto w-full max-w-content-wide px-5 pb-12 pt-7 sm:px-8 lg:px-10">
        <BlogMainToolbar
          activeFilterId={activeFilter.id}
          activePeriodId={activePeriod.id}
          filters={blogMainFilters}
          periods={blogMainPeriods}
        />
        <BlogMainInfinitePostGrid initialPosts={posts} totalPages={totalPages} />
      </div>
    </main>
  );
}

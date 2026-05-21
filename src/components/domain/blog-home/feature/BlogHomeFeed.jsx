import BlogHomeFeedItemLayout from "@/components/domain/blog-home/layout/BlogHomeFeedItemLayout";
import BlogHomeFeedListLayout from "@/components/domain/blog-home/layout/BlogHomeFeedListLayout";
import BlogHomeFeedSectionHeaderLayout from "@/components/domain/blog-home/layout/BlogHomeFeedSectionHeaderLayout";
import BlogHomePagination from "@/components/domain/blog-home/ui/BlogHomePagination";

export default function BlogHomeFeed({ feed }) {
  const { filterLabel, pagination, posts, totalCount } = feed;

  return (
    <section className="space-y-5">
      <BlogHomeFeedSectionHeaderLayout
        filterLabel={filterLabel}
        totalCount={totalCount}
      />

      <BlogHomeFeedListLayout>
        {posts.map((post, index) => (
          <BlogHomeFeedItemLayout
            key={post.id}
            {...post}
            isLast={index === posts.length - 1}
          />
        ))}
      </BlogHomeFeedListLayout>

      <BlogHomePagination items={pagination} />
    </section>
  );
}

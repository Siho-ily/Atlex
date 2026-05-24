import { Textfield } from "@/components/common/ui/textfield";
import BlogHomeFeedItemLayout from "@/components/domain/blog-home/layout/BlogHomeFeedItemLayout";
import BlogHomeFeedListLayout from "@/components/domain/blog-home/layout/BlogHomeFeedListLayout";
import BlogHomeFeedSectionHeaderLayout from "@/components/domain/blog-home/layout/BlogHomeFeedSectionHeaderLayout";
import BlogHomePagination from "@/components/domain/blog-home/ui/BlogHomePagination";
import { blogHomeFeedCopy } from "@/data/blog-home/blog-home-copy";

export default function BlogHomeFeed({ feed }) {
  const {
    eyebrowLabel = blogHomeFeedCopy.eyebrowLabel,
    pagination = [],
    posts = [],
    title = blogHomeFeedCopy.defaultTitle,
    totalCount = posts.length,
  } = feed;
  const hasPosts = posts.length > 0;

  return (
    <section className="space-y-5">
      <BlogHomeFeedSectionHeaderLayout
        eyebrowLabel={eyebrowLabel}
        title={title}
        totalCount={totalCount}
      />

      {hasPosts ? (
        <BlogHomeFeedListLayout>
          {posts.map((post, index) => (
            <BlogHomeFeedItemLayout
              key={post.id}
              {...post}
              isLast={index === posts.length - 1}
            />
          ))}
        </BlogHomeFeedListLayout>
      ) : (
        <BlogHomeFeedListLayout>
          <div className="flex min-h-64 flex-col items-center justify-center gap-2 px-6 py-16 text-center">
            <Textfield size="lg" weight="bold">
              {blogHomeFeedCopy.getEmptyStateTitle(title)}
            </Textfield>
            <Textfield variant="muted" size="sm">
              {blogHomeFeedCopy.emptyStateDescription}
            </Textfield>
          </div>
        </BlogHomeFeedListLayout>
      )}

      {hasPosts && pagination.length > 0 ? (
        <BlogHomePagination items={pagination} />
      ) : null}
    </section>
  );
}

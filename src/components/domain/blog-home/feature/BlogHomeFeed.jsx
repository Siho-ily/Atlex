import BlogHomeFeedItemLayout from "@/components/domain/blog-home/layout/BlogHomeFeedItemLayout";
import BlogHomeFeedListLayout from "@/components/domain/blog-home/layout/BlogHomeFeedListLayout";
import BlogHomeFeedSectionHeaderLayout from "@/components/domain/blog-home/layout/BlogHomeFeedSectionHeaderLayout";
import { Textfield } from "@/components/common/ui/textfield";
import BlogHomePagination from "@/components/domain/blog-home/ui/BlogHomePagination";

export default function BlogHomeFeed({ feed }) {
  const { pagination = [], posts = [], title, totalCount } = feed;
  const hasPosts = posts.length > 0;

  return (
    <section className="space-y-5">
      <BlogHomeFeedSectionHeaderLayout title={title} totalCount={totalCount} />

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
              {title
                ? `"${title}" 태그에 해당하는 글이 아직 없습니다.`
                : "아직 작성된 글이 없습니다."}
            </Textfield>
            <Textfield variant="muted" size="sm">
              다른 태그를 선택하거나 전체 글로 돌아가 보세요.
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

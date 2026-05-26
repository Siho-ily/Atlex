import BlogHomeFeedItemContentLayout from "@/components/domain/blog-home/layout/BlogHomeFeedItemContentLayout";
import BlogHomeFeedItemFooterLayout from "@/components/domain/blog-home/layout/BlogHomeFeedItemFooterLayout";
import BlogHomeFeedItemThumbnailLayout from "@/components/domain/blog-home/layout/BlogHomeFeedItemThumbnailLayout";
import { cn } from "@/lib/utils";

export default function BlogHomeFeedItemLayout({
  bookmarks = 0,
  category,
  className,
  comments = 0,
  date,
  excerpt,
  isLiked = false,
  isLast = false,
  isPrivate = false,
  likes = 0,
  tags = [],
  thumbnail,
  title,
}) {
  const hasThumbnail = Boolean(thumbnail);

  return (
    <article
      className={cn(
        "px-5 py-6 md:px-6 md:py-7",
        !isLast ? "border-b border-border" : "",
        isPrivate ? "opacity-[0.85]" : "",
        className
      )}
    >
      <div
        className={cn(
          "flex flex-col gap-5",
          hasThumbnail
            ? "lg:grid lg:grid-cols-[240px_minmax(0,1fr)] lg:items-start lg:gap-6"
            : ""
        )}
      >
        <BlogHomeFeedItemThumbnailLayout thumbnail={thumbnail} />

        <div className="min-w-0 flex flex-1 flex-col">
          <BlogHomeFeedItemContentLayout
            category={category}
            excerpt={excerpt}
            isPrivate={isPrivate}
            tags={tags}
            title={title}
          />
          <BlogHomeFeedItemFooterLayout
            bookmarks={bookmarks}
            comments={comments}
            date={date}
            isLiked={isLiked}
            likes={likes}
          />
        </div>
      </div>
    </article>
  );
}

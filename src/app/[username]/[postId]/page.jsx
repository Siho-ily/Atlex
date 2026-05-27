import { notFound } from "next/navigation";
import BlogDetailContent from "@/components/domain/blog-detail/feature/BlogDetailContent";
import BlogDetailSidebar from "@/components/domain/blog-detail/feature/BlogDetailSidebar";
import BlogDetailContainer from "@/components/domain/blog-detail/layout/BlogDetailContainer";
import UserBlogHeader from "@/components/common/layout/UserBlogHeader";
import { fetchPostById } from "@/lib/api/posts";
import { toBlogDetail } from "@/lib/mappers/post";
import { stripHandle } from "@/lib/url/handle";

export default async function BlogDetailPage({ params }) {
  const { username, postId } = await params;

  let detail;
  try {
    const apiPost = await fetchPostById(postId);
    if (apiPost.authorUserId !== stripHandle(username)) {
      notFound();
    }
    detail = toBlogDetail(apiPost);
  } catch (error) {
    if (error?.code === "POST_NOT_FOUND") {
      notFound();
    }
    console.error("[BlogDetailPage] 데이터 로딩 실패:", error);
    throw error;
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <UserBlogHeader userId={stripHandle(username)} />
      <BlogDetailContainer>
        <div className="mx-auto grid w-full max-w-[1328px] gap-10 xl:grid-cols-[214px_minmax(0,1fr)_214px] xl:items-start">
          <div className="order-2 xl:order-1 xl:self-stretch">
            <BlogDetailSidebar bookmarks={7} likes={18} />
          </div>
          <div className="order-1 xl:order-2">
            <BlogDetailContent {...detail} />
          </div>
          <div aria-hidden="true" className="hidden xl:block xl:order-3" />
        </div>
      </BlogDetailContainer>
    </main>
  );
}

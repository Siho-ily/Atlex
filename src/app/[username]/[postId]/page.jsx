import { notFound } from "next/navigation";
import BlogDetailContent from "@/components/domain/blog-detail/feature/BlogDetailContent";
import BlogDetailSidebar from "@/components/domain/blog-detail/feature/BlogDetailSidebar";
import BlogDetailContainer from "@/components/domain/blog-detail/layout/BlogDetailContainer";
import Header from "@/components/common/layout/Header";
import { fetchPostById } from "@/lib/api/posts";
import { toBlogDetail } from "@/lib/mappers/post";
import { stripHandle } from "@/lib/url/handle";

export default async function BlogDetailPage({ params }) {
  const { postId } = await params;

  let detail;
  try {
    const apiPost = await fetchPostById(stripHandle(postId));
    detail = toBlogDetail(apiPost);
  } catch (error) {
    if (error?.code === "POST_NOT_FOUND") {
      notFound();
    }
    console.error("[BlogDetailPage] 데이터 로딩 실패:", error);
    throw error;
  }

  return (
    <BlogDetailContainer>
      <Header logoHref="/" />

      <div className="mx-auto grid w-full max-w-[1080px] gap-10 xl:grid-cols-[214px_minmax(0,1fr)] xl:items-start">
        <BlogDetailSidebar
          bookmarks={7}
          likes={18}
        />

        <BlogDetailContent {...detail} />
      </div>
    </BlogDetailContainer>
  );
}

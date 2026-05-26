import BlogDetailContent from "@/components/domain/blog-detail/feature/BlogDetailContent";
import BlogDetailSidebar from "@/components/domain/blog-detail/feature/BlogDetailSidebar";
import BlogDetailContainer from "@/components/domain/blog-detail/layout/BlogDetailContainer";
import Header from "@/components/common/layout/Header";
import { blogDetailPreview } from "@/data/blog-detail/blog-detail-preview";

export const metadata = {
  title: "Blog Detail Preview",
  description: "Static blog detail UI preview page",
};

export default function BlogDetailPreviewPage() {
  return (
    <BlogDetailContainer>
      <Header logoHref="/" />

      <div className="mx-auto grid w-full max-w-[1080px] gap-10 xl:grid-cols-[214px_minmax(0,1fr)] xl:items-start">
        <BlogDetailSidebar
          bookmarks={7}
          likes={18}
        />

        <BlogDetailContent {...blogDetailPreview} />
      </div>
    </BlogDetailContainer>
  );
}

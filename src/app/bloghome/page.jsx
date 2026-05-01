// 데이터 연결만 담당하는 페이지
import BlogHomeFeed from "@/components/domain/blog-home/feature/BlogHomeFeed";
import BlogHomeSidebar from "@/components/domain/blog-home/feature/BlogHomeSidebar";
import BlogHomeContainer from "@/components/domain/blog-home/layout/BlogHomeContainer";
import BlogHomeHeader from "@/components/domain/blog-home/layout/BlogHomeHeader";
import {
  blogHomeFeedData,
  blogHomeHeaderData,
  blogHomeProfile,
  blogHomeTags,
} from "@/data/blog-home/blog-home-mock-data";

export const metadata = {
  title: "Blog Home Preview",
  description: "Static blog home UI preview page",
};

export default function BlogHomePage() {
  return (
    <BlogHomeContainer>
      <div className="space-y-6">
        <BlogHomeHeader {...blogHomeHeaderData} />

        {/* 프로필 보드 + 글 목록 2열 배치 */}
        <div className="grid gap-6 xl:grid-cols-[280px_minmax(0,1fr)] xl:items-start">
          {/* 스크롤 시 사이드바 고정 */}
          <div className="xl:sticky xl:top-8">
            <BlogHomeSidebar profile={blogHomeProfile} tags={blogHomeTags} />
          </div>

          <BlogHomeFeed feed={blogHomeFeedData} />
        </div>
      </div>
    </BlogHomeContainer>
  );
}

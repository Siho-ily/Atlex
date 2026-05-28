import { notFound } from "next/navigation";
import { headers } from "next/headers";
import CategoryBlogHomeContent from "@/components/domain/category/feature/CategoryBlogHomeContent";
import Header from "@/components/common/layout/Header";
import { blogHomeTags } from "@/data/blog-home/blog-home-mock-data";
import { loadBlogHomeData } from "@/lib/queries/blog-home";
import { stripHandle } from "@/lib/url/handle";

export default async function BlogHomePage({ params }) {
  const { username } = await params;
  const headersList = await headers();
  // 유저 핸들 prefix(@) 없는 경로는 블로그 홈으로 인정하지 않는다.
  if (!headersList.get("x-handle-prefix")) {
    notFound();
  }

  const identifier = stripHandle(username);

  let data;
  try {
    data = await loadBlogHomeData(identifier);
  } catch (error) {
    if (error?.code === "USER_NOT_FOUND") {
      notFound();
    }
    console.error("[BlogHomePage] 데이터 로딩 실패:", error);
    throw error;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header blogUserId={identifier} />
      <div className="mx-auto w-full max-w-content-wide px-5 pb-12 pt-7 sm:px-8 lg:px-10">
        <CategoryBlogHomeContent
          feed={data.feed}
          profile={data.profile}
          tags={blogHomeTags}
        />
      </div>
    </div>
  );
}

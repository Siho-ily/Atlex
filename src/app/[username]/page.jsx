import { notFound } from "next/navigation";
import CategoryBlogHomeContent from "@/components/domain/category/feature/CategoryBlogHomeContent";
import UserBlogHeader from "@/components/common/layout/UserBlogHeader";
import { blogHomeTags } from "@/data/blog-home/blog-home-mock-data";
import { fetchUserByIdentifier } from "@/lib/api/users";
import { fetchPosts } from "@/lib/api/posts";
import { toBlogHomeProfile } from "@/lib/mappers/user";
import { toBlogHomeFeedPost } from "@/lib/mappers/post";
import { stripHandle } from "@/lib/url/handle";

async function loadBlogHomeData(identifier) {
  const [user, postsPage] = await Promise.all([
    fetchUserByIdentifier(identifier),
    fetchPosts({ page: 0, size: 10, authorUserId: identifier }),
  ]);

  const profile = toBlogHomeProfile(user);
  const mappedPosts = postsPage.content.map(toBlogHomeFeedPost);

  const feed = {
    totalCount: postsPage.totalElements,
    filterLabel: "이번 주",
    sortLabel: "최신순",
    helperText:
      "제목과 본문은 카드형 목록으로 유지하고, 피드 중심의 배치로 재정렬한 정적 목업입니다.",
    pageSizeLabel: "한 페이지에 최대 10개",
    posts: mappedPosts,
    pagination: [
      { id: "prev", label: "<", kind: "control" },
      { id: "page-1", label: "1", current: true },
    ],
  };

  return { profile, feed };
}

export default async function BlogHomePage({ params }) {
  const { username } = await params;
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
      <UserBlogHeader userId={identifier} />
      <div className="mx-auto w-full max-w-[1720px] px-4 py-8 sm:px-6 lg:px-8">
        <CategoryBlogHomeContent
          feed={data.feed}
          profile={data.profile}
          tags={blogHomeTags}
        />
      </div>
    </div>
  );
}

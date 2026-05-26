import CategoryBlogHomeContent from "@/components/domain/category/feature/CategoryBlogHomeContent";
import UserBlogHeader from "@/components/common/layout/UserBlogHeader";
import {
  blogHomeFeedData,
  blogHomeProfile,
  blogHomeTags,
} from "@/data/blog-home/blog-home-mock-data";

export const metadata = {
  title: "Blog Home Preview",
  description: "Static blog home UI preview page",
};

export default function BlogHomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <UserBlogHeader userId={blogHomeProfile.userId} />
      <div className="mx-auto w-full max-w-[1720px] px-4 py-8 sm:px-6 lg:px-8">
        <CategoryBlogHomeContent
          feed={blogHomeFeedData}
          profile={blogHomeProfile}
          tags={blogHomeTags}
        />
      </div>
    </div>
  );
}

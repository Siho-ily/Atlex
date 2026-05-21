import BlogHomeFeed from "@/components/domain/blog-home/feature/BlogHomeFeed";
import BlogHomeSidebar from "@/components/domain/blog-home/feature/BlogHomeSidebar";
import BlogHomeBodyLayout from "@/components/domain/blog-home/layout/BlogHomeBodyLayout";
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

        <BlogHomeBodyLayout
          sidebar={
            <BlogHomeSidebar profile={blogHomeProfile} tags={blogHomeTags} />
          }
        >
          <BlogHomeFeed feed={blogHomeFeedData} />
        </BlogHomeBodyLayout>
      </div>
    </BlogHomeContainer>
  );
}

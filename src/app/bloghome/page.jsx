import BlogHomeContent from "@/components/domain/blog-home/feature/BlogHomeContent";
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
      <BlogHomeHeader {...blogHomeHeaderData} />
      <div className="mx-auto w-full max-w-[1720px] px-4 py-8 sm:px-6 lg:px-8">
        <BlogHomeContent
          feed={blogHomeFeedData}
          profile={blogHomeProfile}
          tags={blogHomeTags}
        />
      </div>
    </BlogHomeContainer>
  );
}

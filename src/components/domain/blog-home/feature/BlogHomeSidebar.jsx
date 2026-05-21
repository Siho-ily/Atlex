import BlogHomeSidebarProfileLayout from "@/components/domain/blog-home/layout/BlogHomeSidebarProfileLayout";
import BlogHomeSidebarTagsLayout from "@/components/domain/blog-home/layout/BlogHomeSidebarTagsLayout";

export default function BlogHomeSidebar({ profile, tags }) {
  return (
    <aside className="space-y-4">
      <BlogHomeSidebarProfileLayout profile={profile} tags={tags} />
      <BlogHomeSidebarTagsLayout tags={tags} />
    </aside>
  );
}

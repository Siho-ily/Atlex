import BlogHomeSidebarProfileLayout from "@/components/domain/blog-home/layout/BlogHomeSidebarProfileLayout";
import BlogHomeSidebarTagsLayout from "@/components/domain/blog-home/layout/BlogHomeSidebarTagsLayout";

export default function BlogHomeSidebar({ onTagSelect, profile, tags }) {
  return (
    <aside className="space-y-4">
      <BlogHomeSidebarProfileLayout profile={profile} />
      <BlogHomeSidebarTagsLayout onTagSelect={onTagSelect} tags={tags} />
    </aside>
  );
}

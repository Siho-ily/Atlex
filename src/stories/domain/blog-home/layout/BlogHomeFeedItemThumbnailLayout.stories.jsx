import BlogHomeFeedItemThumbnailLayout from "@/components/domain/blog-home/layout/BlogHomeFeedItemThumbnailLayout";

/** @type { import('@storybook/nextjs-vite').Meta<typeof BlogHomeFeedItemThumbnailLayout> } */
const meta = {
  title: "Domain/BlogHome/Layout/BlogHomeFeedItemThumbnailLayout",
  component: BlogHomeFeedItemThumbnailLayout,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
};

export default meta;

export const WithPlaceholder = {
  render: () => (
    <div className="w-60">
      <BlogHomeFeedItemThumbnailLayout
        thumbnail={{
          label: "썸네일 이미지",
          className: "border-b border-border bg-muted/60",
        }}
      />
    </div>
  ),
};

export const NoThumbnail = {
  render: () => (
    <div className="w-60 rounded-xl border border-dashed border-border p-4 text-center text-sm text-muted-foreground">
      thumbnail prop이 없으면 렌더링되지 않습니다.
      <BlogHomeFeedItemThumbnailLayout thumbnail={null} />
    </div>
  ),
};

export const CustomLabel = {
  render: () => (
    <div className="w-80">
      <BlogHomeFeedItemThumbnailLayout
        thumbnail={{
          label: "커버 이미지 (16:10)",
          className: "bg-primary/10",
        }}
      />
    </div>
  ),
};

export const Wide = {
  render: () => (
    <div className="w-[600px]">
      <BlogHomeFeedItemThumbnailLayout
        thumbnail={{
          label: "넓은 썸네일",
          className: "bg-muted/60",
        }}
      />
    </div>
  ),
};

import BlogDetailContainer from "@/components/domain/blog-detail/layout/BlogDetailContainer";

/** @type { import('@storybook/nextjs-vite').Meta<typeof BlogDetailContainer> } */
const meta = {
  title: "Domain/BlogDetail/Layout/BlogDetailContainer",
  component: BlogDetailContainer,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
};

export default meta;

export const Default = {
  render: () => (
    <BlogDetailContainer>
      <div className="rounded-2xl border border-dashed border-border bg-muted/30 p-8 text-center text-muted-foreground">
        <p className="text-sm">BlogDetailContainer children slot</p>
        <p className="mt-2 text-xs">max-width: 1560px / 좌우 패딩: px-5 sm:px-8 lg:px-10</p>
      </div>
    </BlogDetailContainer>
  ),
};

export const WithContent = {
  render: () => (
    <BlogDetailContainer>
      <div className="flex gap-8">
        <div className="flex-1 space-y-4">
          <div className="h-16 rounded-2xl border border-dashed border-border bg-muted/30 p-4 text-center text-sm text-muted-foreground">
            BlogDetailContent (메인 콘텐츠 영역)
          </div>
          <div className="h-40 rounded-2xl border border-dashed border-border bg-muted/20 p-4 text-sm text-muted-foreground">
            <p>아티클 본문 영역</p>
            <p className="mt-2 text-xs">최대 너비 820px</p>
          </div>
        </div>
        <div className="w-[280px] shrink-0">
          <div className="rounded-2xl border border-dashed border-border bg-muted/30 p-4 text-center text-sm text-muted-foreground">
            BlogDetailSidebar (사이드바 영역)
          </div>
        </div>
      </div>
    </BlogDetailContainer>
  ),
};

export const Empty = {
  render: () => (
    <BlogDetailContainer>
      <></>
    </BlogDetailContainer>
  ),
};

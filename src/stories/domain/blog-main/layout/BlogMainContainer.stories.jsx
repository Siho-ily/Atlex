import BlogMainContainer from "@/components/domain/blog-main/layout/BlogMainContainer";

/** @type { import('@storybook/nextjs-vite').Meta<typeof BlogMainContainer> } */
const meta = {
  title: "Domain/BlogMain/Layout/BlogMainContainer",
  component: BlogMainContainer,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
};
export default meta;

export const Default = {
  render: () => (
    <BlogMainContainer>
      <div className="rounded-xl border border-dashed border-border p-8 text-center text-muted-foreground">
        페이지 본문 영역 (children)
      </div>
    </BlogMainContainer>
  ),
};

export const WithContent = {
  render: () => (
    <BlogMainContainer>
      <h1 className="mb-4 text-2xl font-bold tracking-tight">블로그 메인</h1>
      <p className="mb-6 text-muted-foreground">
        BlogMainContainer는 상단 그라디언트 레이어와 최대 너비 제한, 반응형 패딩을 포함한 페이지 래퍼입니다.
      </p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="h-32 rounded-[9px] border border-border bg-card flex items-center justify-center text-muted-foreground text-sm"
          >
            카드 {i + 1}
          </div>
        ))}
      </div>
    </BlogMainContainer>
  ),
};

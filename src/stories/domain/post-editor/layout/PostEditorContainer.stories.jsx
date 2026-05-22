import PostEditorContainer from "@/components/domain/post-editor/layout/PostEditorContainer";

/** @type { import('@storybook/nextjs-vite').Meta<typeof PostEditorContainer> } */
const meta = {
  title: "Domain/PostEditor/Layout/PostEditorContainer",
  component: PostEditorContainer,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
};

export default meta;

export const Default = {
  render: () => (
    <PostEditorContainer>
      <div className="rounded-2xl border-2 border-dashed border-border bg-background p-8 text-center text-sm text-muted-foreground">
        PostEditorShell 자리 (최대 너비 1520px · 배경 slate-50)
      </div>
    </PostEditorContainer>
  ),
};

"use client";

import PostEditorToolRail from "@/components/domain/post-editor/layout/PostEditorToolRail";
import { postEditorToolCategories } from "@/data/post-editor/post-editor-tool-categories";
import usePostEditorPanels from "@/hooks/post-editor/post-editor-panels";

function ToolRailDemo({ initialToolId, initialOpen = false }) {
  const { isToolPanelOpen, openToolPanel, selectedToolId } = usePostEditorPanels(
    postEditorToolCategories,
    { initialToolId, initialOpen },
  );

  return (
    <div className="flex h-14 w-[640px] overflow-hidden rounded-2xl border border-border bg-slate-100/70">
      <PostEditorToolRail
        isToolPanelOpen={isToolPanelOpen}
        onSelectTool={openToolPanel}
        selectedToolId={selectedToolId}
        toolCategories={postEditorToolCategories}
      />
    </div>
  );
}

/** @type { import('@storybook/nextjs-vite').Meta } */
const meta = {
  title: "Domain/PostEditor/Layout/PostEditorToolRail",
  component: PostEditorToolRail,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
};

export default meta;

// 레일 타일 클릭 시 선택 토글, 같은 타일 재클릭 시 닫힘 동작 확인
export const Default = {
  render: () => <ToolRailDemo />,
};

// 첫 번째 툴이 이미 선택된 상태
export const WithSelection = {
  render: () => (
    <ToolRailDemo initialToolId="text-style" initialOpen />
  ),
};

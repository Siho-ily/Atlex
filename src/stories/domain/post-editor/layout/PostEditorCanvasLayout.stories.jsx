"use client";

// PostEditorCanvasLayout 스토리
//
// 주의: 데스크탑(≥ 1280px) floating 도크는 .closest("[data-post-editor-shell]")를 앵커로 삼는다.
// Storybook canvas 안에서는 PostEditorShell로 감싸야 올바른 위치 계산이 된다.
// 스토리 너비를 1280px 이상으로 맞추면 fixed floating 동작도 확인할 수 있다.

import PostEditorCanvasLayout from "@/components/domain/post-editor/layout/PostEditorCanvasLayout";
import PostEditorSidebar from "@/components/domain/post-editor/layout/PostEditorSidebar";
import PostEditorToolRail from "@/components/domain/post-editor/layout/PostEditorToolRail";
import PostEditorShell from "@/components/domain/post-editor/layout/PostEditorShell";
import { postEditorToolCategories } from "@/data/post-editor/post-editor-tool-categories";
import usePostEditorPanels from "@/hooks/post-editor/post-editor-panels";

const mockGetItemState = (groupId) => ({
  isActive: false,
  isDisabled: groupId === "font-color",
});

function CanvasLayoutDemo({ initialOpen = false }) {
  const {
    activeGroup,
    activeTool,
    closeToolPanel,
    isToolPanelOpen,
    openToolPanel,
    selectGroup,
    selectedToolId,
  } = usePostEditorPanels(postEditorToolCategories, {
    initialGroupId: "font-style",
    initialOpen,
    initialToolId: "text-style",
  });

  const hasActiveToolPanel = Boolean(activeTool && activeGroup);
  const isToolDockOpen = isToolPanelOpen && hasActiveToolPanel;

  return (
    <PostEditorShell>
      <div className="border-b border-border px-7 py-4 text-sm font-semibold text-muted-foreground">
        TopBar 영역
      </div>
      <PostEditorCanvasLayout
        isToolPanelOpen={isToolDockOpen}
        content={
          <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
            본문 에디터 영역
          </div>
        }
        toolPanel={
          hasActiveToolPanel ? (
            <PostEditorSidebar
              activeGroup={activeGroup}
              activeTool={activeTool}
              getItemState={mockGetItemState}
              onClose={closeToolPanel}
              onExecuteItem={() => {}}
              onSelectGroup={selectGroup}
            />
          ) : null
        }
        toolRail={
          <PostEditorToolRail
            isToolPanelOpen={isToolDockOpen}
            onSelectTool={openToolPanel}
            selectedToolId={selectedToolId}
            toolCategories={postEditorToolCategories}
          />
        }
      />
    </PostEditorShell>
  );
}

/** @type { import('@storybook/nextjs-vite').Meta } */
const meta = {
  title: "Domain/PostEditor/Layout/PostEditorCanvasLayout",
  component: PostEditorCanvasLayout,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
};

export default meta;

// 도크 닫힌 상태 — 레일만 보임
export const DockClosed = {
  render: () => (
    <div className="bg-slate-50 p-8">
      <CanvasLayoutDemo initialOpen={false} />
    </div>
  ),
};

// 도크 열린 상태 — 레일 + 사이드바 패널
export const DockOpen = {
  render: () => (
    <div className="bg-slate-50 p-8">
      <CanvasLayoutDemo initialOpen={true} />
    </div>
  ),
};

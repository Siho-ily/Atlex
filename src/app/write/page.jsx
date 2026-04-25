"use client";

import { useState } from "react";
import PostEditorContentSection from "@/components/domain/post-editor/feature/PostEditorContentSection";
import PostEditorDraftModal from "@/components/domain/post-editor/feature/PostEditorDraftModal";
import PostEditorSidebar from "@/components/domain/post-editor/feature/PostEditorSidebar";
import PostEditorTitleSection from "@/components/domain/post-editor/feature/PostEditorTitleSection";
import PostEditorToolRail from "@/components/domain/post-editor/feature/PostEditorToolRail";
import PostEditorTopBar from "@/components/domain/post-editor/feature/PostEditorTopBar";
import PostEditorCanvasLayout from "@/components/domain/post-editor/layout/PostEditorCanvasLayout";
import PostEditorContainer from "@/components/domain/post-editor/layout/PostEditorContainer";
import { postEditorCopy } from "@/data/post-editor/post-editor-copy";
import { postEditorDrafts } from "@/data/post-editor/post-editor-drafts";
import { postEditorToolCategories } from "@/data/post-editor/post-editor-tool-categories";
import usePostEditorPanels from "@/hooks/post-editor/post-editor-panels";
import usePostEditorRichText from "@/hooks/post-editor/post-editor-rich-text";
import usePostEditorTags from "@/hooks/post-editor/post-editor-tags";

const INITIAL_BODY =
  "행사 운영 일정과 부스 배치 변경 사항을 먼저 안내하는 예시 본문입니다. 현장 동선과 참여 시간, 주의 사항을 확인해 주세요. #일정 #안내";

export default function PostWritePage() {
  const [isDraftModalOpen, setIsDraftModalOpen] = useState(false);
  const [title, setTitle] = useState(postEditorDrafts[0]?.title ?? "");
  // 본문 관련 편집 상태는 전용 훅으로 분리해서, 페이지는 레이아웃 조합에만 집중하게 한다.
  const richText = usePostEditorRichText({
    initialContent: INITIAL_BODY,
  });

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
    initialOpen: true,
    initialToolId: "text-style",
  });

  const tagField = usePostEditorTags(richText.bodyText, {
    initialManualTags: ["공지", "운영"],
  });

  const hasActiveToolPanel = Boolean(activeTool && activeGroup);
  const isToolDockOpen = isToolPanelOpen && hasActiveToolPanel;

  return (
    <PostEditorContainer>
      <div className="relative">
        <div
          data-post-editor-shell
          className="overflow-hidden rounded-[26px] border-2 border-slate-900 bg-white shadow-[0_24px_48px_-24px_rgba(15,23,42,0.28)]"
        >
          <PostEditorTopBar
            logoLabel={postEditorCopy.logoLabel}
            onOpenDraftModal={() => setIsDraftModalOpen(true)}
          />

          <PostEditorTitleSection
            title={title}
            titlePlaceholder={postEditorCopy.titlePlaceholder}
            tagField={tagField}
            tagPlaceholder={postEditorCopy.tagPlaceholder}
            onTitleChange={setTitle}
          />

          <PostEditorCanvasLayout
            isToolPanelOpen={isToolDockOpen}
            content={
              <PostEditorContentSection
                bodyPlaceholder={postEditorCopy.bodyPlaceholder}
                bodyText={richText.bodyText}
                editor={richText.editor}
                isEditorEmpty={richText.isEditorEmpty}
              />
            }
            toolPanel={
              hasActiveToolPanel ? (
                <PostEditorSidebar
                  activeGroup={activeGroup}
                  activeTool={activeTool}
                  getItemState={richText.getToolbarItemState}
                  onClose={closeToolPanel}
                  onExecuteItem={richText.executeToolbarItem}
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
        </div>

        <PostEditorDraftModal
          drafts={postEditorDrafts}
          isOpen={isDraftModalOpen}
          onClose={() => setIsDraftModalOpen(false)}
        />
      </div>
    </PostEditorContainer>
  );
}

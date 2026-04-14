"use client";

import { useState } from "react";
import PostEditorContentSection from "@/components/domain/post-editor/feature/PostEditorContentSection";
import PostEditorDraftModal from "@/components/domain/post-editor/feature/PostEditorDraftModal";
import PostEditorSidebar from "@/components/domain/post-editor/feature/PostEditorSidebar";
import PostEditorToolRail from "@/components/domain/post-editor/feature/PostEditorToolRail";
import PostEditorTopBar from "@/components/domain/post-editor/feature/PostEditorTopBar";
import PostEditorTitleSection from "@/components/domain/post-editor/feature/PostEditorTitleSection";
import usePostEditorPanels from "@/hooks/post-editor/post-editor-panels";
import usePostEditorTags from "@/hooks/post-editor/post-editor-tags";
import PostEditorCanvasLayout from "@/components/domain/post-editor/layout/PostEditorCanvasLayout";
import PostEditorContainer from "@/components/domain/post-editor/layout/PostEditorContainer";
import PostEditorHeader from "@/components/domain/post-editor/layout/PostEditorHeader";

export default function PostEditorScreen({ copy, drafts, toolCategories }) {
  // 화면 자체에서 직접 관리하는 값은 작성 중인 제목/본문과 모달 열림 여부입니다.
  const [isDraftModalOpen, setIsDraftModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // 오른쪽 도구 패널 상태는 전용 훅으로 분리해서 관리합니다.
  const {
    activeGroup,
    activeTool,
    closeToolPanel,
    isToolPanelOpen,
    openToolPanel,
    selectGroup,
    selectedToolId,
  } = usePostEditorPanels(toolCategories);

  // 태그 입력, 본문 해시태그 추출, 태그 삭제는 태그 전용 훅이 맡습니다.
  const tagField = usePostEditorTags(body);
  const hasActiveToolPanel = Boolean(activeTool && activeGroup);

  return (
    <PostEditorContainer>
      <PostEditorHeader
        pageTitle={copy.pageTitle}
        viewportLabel={copy.viewportLabel}
      />

      <div className="relative">
        <div className="overflow-hidden rounded-[26px] border-2 border-slate-900 bg-white shadow-[0_24px_48px_-24px_rgba(15,23,42,0.28)]">
          {/* 상단 바는 로고, 임시 저장 목록, 게시 버튼 영역입니다. */}
          <PostEditorTopBar
            logoLabel={copy.logoLabel}
            onOpenDraftModal={() => setIsDraftModalOpen(true)}
          />

          {/* 제목 입력과 태그 입력은 작성 흐름 초반에 함께 배치합니다. */}
          <PostEditorTitleSection
            title={title}
            titlePlaceholder={copy.titlePlaceholder}
            tagPlaceholder={copy.tagPlaceholder}
            onTitleChange={setTitle}
            tagField={tagField}
          />

          {/* 본문 영역, 오른쪽 세부 패널, 툴 레일을 한 레이아웃 안에서 조합합니다. */}
          <PostEditorCanvasLayout
            isToolPanelOpen={isToolPanelOpen && hasActiveToolPanel}
            content={
              <PostEditorContentSection
                body={body}
                bodyPlaceholder={copy.bodyPlaceholder}
                onBodyChange={setBody}
              />
            }
            toolPanel={
              hasActiveToolPanel ? (
                <PostEditorSidebar
                  activeTool={activeTool}
                  activeGroup={activeGroup}
                  onSelectGroup={selectGroup}
                  onClose={closeToolPanel}
                />
              ) : null
            }
            toolRail={
              <PostEditorToolRail
                toolCategories={toolCategories}
                selectedToolId={selectedToolId}
                onSelectTool={openToolPanel}
              />
            }
          />
        </div>

        {/* 임시 저장 목록 모달은 화면 위에 겹쳐서 열립니다. */}
        <PostEditorDraftModal
          isOpen={isDraftModalOpen}
          drafts={drafts}
          onClose={() => setIsDraftModalOpen(false)}
        />
      </div>
    </PostEditorContainer>
  );
}

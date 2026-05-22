'use client';

// write 페이지의 최상위 orchestration 레이어.
// 상태·훅을 여기서 한 곳에서 관리하고, 각 Section 컴포넌트에 props로 내려준다.
// 레이아웃 조합과 모달 열림 여부 외의 로직은 훅에 위임한다.

import { useState } from 'react';
import PostEditorContentSection from '@/components/domain/post-editor/layout/PostEditorContentSection';
import PostEditorDraftModal from '@/components/domain/post-editor/layout/PostEditorDraftModal';
import PostEditorSidebar from '@/components/domain/post-editor/layout/PostEditorSidebar';
import PostEditorTitleSection from '@/components/domain/post-editor/layout/PostEditorTitleSection';
import PostEditorToolRail from '@/components/domain/post-editor/layout/PostEditorToolRail';
import PostEditorTopBar from '@/components/domain/post-editor/layout/PostEditorTopBar';
import PostEditorCanvasLayout from '@/components/domain/post-editor/layout/PostEditorCanvasLayout';
import PostEditorContainer from '@/components/domain/post-editor/layout/PostEditorContainer';
import PostEditorShell from '@/components/domain/post-editor/layout/PostEditorShell';
import { postEditorCopy } from '@/data/post-editor/post-editor-copy';
import { postEditorDrafts } from '@/data/post-editor/post-editor-drafts';
import { postEditorToolCategories } from '@/data/post-editor/post-editor-tool-categories';
import usePostEditorPanels from '@/hooks/post-editor/post-editor-panels';
import usePostEditorRichText from '@/hooks/post-editor/post-editor-rich-text';
import usePostEditorTags from '@/hooks/post-editor/post-editor-tags';

const INITIAL_BODY =
  '행사 운영 일정과 부스 배치 변경 사항을 먼저 안내하는 예시 본문입니다. 현장 동선과 참여 시간, 주의 사항을 확인해 주세요. #일정 #안내';

export default function PostWritePage() {
  const [isDraftModalOpen, setIsDraftModalOpen] = useState(false);
  const [title, setTitle] = useState(postEditorDrafts[0]?.title ?? '');

  // tiptap 에디터 인스턴스·본문 텍스트·툴바 실행을 한 번에 관리하는 훅
  const richText = usePostEditorRichText({
    initialContent: INITIAL_BODY
  });

  // 툴레일 선택 상태·사이드바 열림·그룹 전환을 관리하는 훅
  const {
    activeGroup,
    activeTool,
    closeToolPanel,
    isToolPanelOpen,
    openToolPanel,
    selectGroup,
    selectedToolId
  } = usePostEditorPanels(postEditorToolCategories, {
    initialGroupId: 'font-style',
    initialOpen: true,
    initialToolId: 'text-style'
  });

  // 수동 태그 입력 + 본문 #해시태그 자동 감지를 통합 관리하는 훅
  const tagField = usePostEditorTags(richText.bodyText, {
    initialManualTags: ['공지', '운영']
  });

  // activeTool·activeGroup이 모두 있어야 사이드바를 렌더할 수 있다
  const hasActiveToolPanel = Boolean(activeTool && activeGroup);
  // 툴 도크(레일+사이드바)를 실제로 펼치는 조건
  const isToolDockOpen = isToolPanelOpen && hasActiveToolPanel;

  return (
    <PostEditorContainer>
      {/* PostEditorShell: 둥근 모서리·테두리·그림자로 에디터 전체를 감싸는 외곽 카드 */}
      <PostEditorShell>
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
            // hasActiveToolPanel이 false면 null을 내려줘서 사이드바를 아예 언마운트
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
      </PostEditorShell>

      {/* DraftModal은 Dialog portal로 body에 마운트되므로 Shell 바깥에 위치해야 한다 */}
      <PostEditorDraftModal
        drafts={postEditorDrafts}
        isOpen={isDraftModalOpen}
        onClose={() => setIsDraftModalOpen(false)}
      />
    </PostEditorContainer>
  );
}

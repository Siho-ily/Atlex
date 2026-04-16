"use client";

import { EditorContent } from "@tiptap/react";

export default function PostEditorContentSection({
  bodyPlaceholder,
  bodyText,
  editor,
  isEditorEmpty,
}) {
  return (
    <div className="flex h-full min-h-0 flex-col">
      <div className="min-h-0 flex-1 p-5 sm:p-7">
        <div className="flex h-full min-h-0 flex-col rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-5 sm:p-6">
          <p className="text-lg font-semibold text-slate-800">본문</p>

          <div className="relative mt-4 min-h-0 flex-1">
            {isEditorEmpty ? (
              // TipTap 기본 영역에는 placeholder가 없어서, 비어 있을 때만 안내 문구를 겹쳐서 보여준다.
              <p className="pointer-events-none absolute inset-x-0 top-0 whitespace-pre-line text-base leading-8 text-slate-400">
                {bodyPlaceholder}
              </p>
            ) : null}

            <div className="post-editor-prose h-full min-h-0 overflow-y-auto overflow-x-hidden break-words">
              <EditorContent editor={editor} />
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 pb-5 text-right text-sm text-slate-500 sm:px-7 sm:pb-6">
        총 {bodyText.length}자
      </div>
    </div>
  );
}

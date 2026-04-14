import { FolderOpen, Trash2, X } from "lucide-react";

export default function PostEditorDraftModal({ isOpen, drafts, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <>
      {/* 모달이 열리면 에디터 위에 겹쳐서 임시 저장 목록을 보여줍니다. */}
      <div className="absolute inset-0 z-20 flex items-start justify-center rounded-[26px] bg-slate-950/20 p-4 backdrop-blur-[2px] sm:p-6">
        <div className="w-full max-w-3xl rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_32px_64px_-32px_rgba(15,23,42,0.4)] sm:p-6">
          <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                임시 저장 목록
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">
                임시 저장 목록
              </h2>
              <p className="mt-2 text-sm text-slate-500">총 {drafts.length}개</p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-slate-300 bg-white p-2.5 text-slate-600 transition hover:bg-slate-50"
              aria-label="임시 저장 목록 닫기"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-5 space-y-4">
            {/* 각 초안은 제목, 요약, 수정 시각, 액션 버튼으로 구성됩니다. */}
            {drafts.map((draft) => (
              <article
                key={draft.id}
                className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      {draft.updatedAt}
                    </p>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {draft.title}
                    </h3>
                    <p className="max-w-2xl text-sm leading-6 text-slate-600">
                      {draft.body}
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                    >
                      <FolderOpen className="h-4 w-4" />
                      로드
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-sm font-semibold text-rose-700 transition hover:bg-rose-100"
                    >
                      <Trash2 className="h-4 w-4" />
                      삭제
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

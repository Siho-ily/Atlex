export default function PostEditorTopBar({ logoLabel, onOpenDraftModal }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-slate-200 px-5 py-4 sm:px-7">
      {/* 좌측은 브랜드/서비스 진입점으로 사용하는 자리입니다. */}
      <button
        type="button"
        className="rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-base font-semibold text-slate-800 transition hover:bg-slate-50"
      >
        {logoLabel}
      </button>

      <div className="flex flex-wrap items-center gap-3">
        {/* 임시 저장 목록 모달을 여는 버튼입니다. */}
        <button
          type="button"
          onClick={onOpenDraftModal}
          className="rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
        >
          임시 저장 목록
        </button>
        {/* 실제 게시 API가 붙기 전까지는 UI 위치만 잡아둔 버튼입니다. */}
        <button
          type="button"
          className="rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          게시 버튼
        </button>
      </div>
    </div>
  );
}

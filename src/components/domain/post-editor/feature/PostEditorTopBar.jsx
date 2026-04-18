export default function PostEditorTopBar({
  draftButtonLabel = "임시 저장 목록",
  logoLabel = "로고",
  onOpenDraftModal,
  publishButtonLabel = "게시 버튼",
}) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-slate-200 px-5 py-4 sm:px-7">
      <button
        type="button"
        className="rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-base font-semibold text-slate-800 transition hover:bg-slate-50"
      >
        {logoLabel}
      </button>

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={onOpenDraftModal}
          className="rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
        >
          {draftButtonLabel}
        </button>
        <button
          type="button"
          className="rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          {publishButtonLabel}
        </button>
      </div>
    </div>
  );
}

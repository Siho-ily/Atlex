export default function PostEditorContentSection({
  body,
  bodyPlaceholder,
  onBodyChange,
}) {
  return (
    <div className="flex h-full min-h-0 flex-col">
      <div className="flex-1 min-h-0 p-5 sm:p-7">
        <div className="flex h-full min-h-0 flex-col rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-5 sm:p-6">
          <p className="text-lg font-semibold text-slate-800">본문</p>
          <textarea
            value={body}
            placeholder={bodyPlaceholder}
            onChange={(event) => onBodyChange(event.target.value)}
            wrap="soft"
            className="mt-4 flex-1 min-h-0 w-full resize-none overflow-y-scroll overflow-x-hidden break-words bg-transparent text-base leading-8 text-slate-700 outline-none placeholder:text-slate-400"
          />
        </div>
      </div>

      <div className="px-5 pb-5 text-right text-sm text-slate-500 sm:px-7 sm:pb-6">
        총 {body.length}자
      </div>
    </div>
  );
}

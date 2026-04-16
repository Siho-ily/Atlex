import { X } from "lucide-react";

const CHIP_STYLES = {
  manual:
    "bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-100 hover:bg-emerald-100",
  automatic: "bg-slate-100 text-slate-600 ring-1 ring-inset ring-slate-200",
};

function TagChip({ tag, variant, onRemove }) {
  const className = [
    "inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition",
    CHIP_STYLES[variant],
  ].join(" ");

  if (!onRemove) {
    return <span className={className}>{tag}</span>;
  }

  return (
    <button
      type="button"
      onClick={() => onRemove(tag)}
      className={className}
      aria-label={`${tag} 태그 삭제`}
    >
      <span>{tag}</span>
      <X className="h-3.5 w-3.5" />
    </button>
  );
}

export default function PostEditorTagField({
  bodyTags,
  combinedTags,
  manualTags,
  onRemoveTag,
  onTagInputChange,
  onTagInputKeyDown,
  tagInput,
  tagPlaceholder,
}) {
  const manualTagSet = new Set(manualTags);

  return (
    <div className="border-t border-slate-100 px-5 py-5 sm:px-7">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <label className="text-sm font-semibold text-slate-500">태그</label>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
          총 {combinedTags.length}개
        </span>
      </div>

      <div className="mt-4 rounded-[22px] border border-slate-200 bg-slate-50 px-4 py-3 transition focus-within:border-slate-400 focus-within:bg-white">
        <div className="flex flex-wrap items-center gap-2">
          {combinedTags.map((tag) => {
            const isManualTag = manualTagSet.has(tag);

            return (
              <TagChip
                key={tag}
                tag={tag}
                variant={isManualTag ? "manual" : "automatic"}
                onRemove={isManualTag ? onRemoveTag : undefined}
              />
            );
          })}

          <input
            type="text"
            value={tagInput}
            placeholder={
              combinedTags.length === 0 ? tagPlaceholder : "태그를 입력하세요"
            }
            onChange={(event) => onTagInputChange(event.target.value)}
            onKeyDown={onTagInputKeyDown}
            className="min-w-[180px] flex-1 bg-transparent py-2 text-base text-slate-700 outline-none placeholder:text-slate-400"
          />
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-slate-500">
        <p>Enter를 누르면 태그가 등록됩니다.</p>
        <p>
          본문의{" "}
          <span className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-slate-700">
            #태그
          </span>
          도 자동으로 추가됩니다.
        </p>
      </div>

      {bodyTags.length > 0 && (
        <p className="mt-3 text-sm text-slate-500">
          본문에서 감지된 태그: {bodyTags.map((tag) => `#${tag}`).join(", ")}
        </p>
      )}
    </div>
  );
}

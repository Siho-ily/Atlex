import PostEditorTagChip from "@/components/domain/post-editor/ui/PostEditorTagChip";

const BODY_TAG_HELPER_PREFIX = "\uBCF8\uBB38\uC758 ";
const BODY_TAG_HELPER_SUFFIX =
  "\uB3C4 \uC790\uB3D9\uC73C\uB85C \uCD94\uAC00\uB429\uB2C8\uB2E4.";
const REGISTER_TAG_HELPER =
  "Enter\uB97C \uB204\uB974\uBA74 \uD0DC\uADF8\uAC00 \uB4F1\uB85D\uB429\uB2C8\uB2E4.";
const TAG_LABEL = "\uD0DC\uADF8";
const TAG_TOKEN = "#\uD0DC\uADF8";

export default function PostEditorTagField({
  countLabel,
  detectedTagsLabel,
  inputPlaceholder,
  onTagInputChange,
  onTagInputKeyDown,
  tagInput,
  tags,
}) {
  return (
    <div className="border-t border-slate-100 px-5 py-5 sm:px-7">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <label className="text-sm font-semibold text-slate-500">
          {TAG_LABEL}
        </label>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
          {countLabel}
        </span>
      </div>

      <div className="mt-4 rounded-[22px] border border-slate-200 bg-slate-50 px-4 py-3 transition focus-within:border-slate-400 focus-within:bg-white">
        <div className="flex flex-wrap items-center gap-2">
          {tags.map((tag) => (
            <PostEditorTagChip
              key={tag.id}
              label={tag.label}
              onRemove={tag.onRemove}
              variant={tag.variant}
            />
          ))}

          <input
            type="text"
            value={tagInput}
            placeholder={inputPlaceholder}
            onChange={(event) => onTagInputChange(event.target.value)}
            onKeyDown={onTagInputKeyDown}
            className="min-w-[180px] flex-1 bg-transparent py-2 text-base text-slate-700 outline-none placeholder:text-slate-400"
          />
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-slate-500">
        <p>{REGISTER_TAG_HELPER}</p>
        <p>
          {BODY_TAG_HELPER_PREFIX}
          <span className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-slate-700">
            {TAG_TOKEN}
          </span>
          {BODY_TAG_HELPER_SUFFIX}
        </p>
      </div>

      {detectedTagsLabel ? (
        <p className="mt-3 text-sm text-slate-500">{detectedTagsLabel}</p>
      ) : null}
    </div>
  );
}

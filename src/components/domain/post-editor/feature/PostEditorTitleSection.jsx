import PostEditorTagField from "@/components/domain/post-editor/ui/PostEditorTagField";

export default function PostEditorTitleSection({
  title,
  titlePlaceholder,
  onTitleChange,
  tagPlaceholder,
  tagField,
}) {
  const {
    bodyTags,
    combinedTags,
    manualTags,
    onRemoveTag,
    onTagInputChange,
    onTagInputKeyDown,
    tagInput,
  } = tagField;

  return (
    <section className="border-b border-slate-200">
      <div className="px-5 py-6 sm:px-7">
        <label className="block text-sm font-semibold text-slate-500">제목</label>
        <input
          type="text"
          value={title}
          placeholder={titlePlaceholder}
          onChange={(event) => onTitleChange(event.target.value)}
          className="mt-3 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-lg font-semibold text-slate-900 outline-none transition focus:border-slate-400 focus:bg-white"
        />
      </div>

      <PostEditorTagField
        bodyTags={bodyTags}
        combinedTags={combinedTags}
        manualTags={manualTags}
        onRemoveTag={onRemoveTag}
        onTagInputChange={onTagInputChange}
        onTagInputKeyDown={onTagInputKeyDown}
        tagInput={tagInput}
        tagPlaceholder={tagPlaceholder}
      />
    </section>
  );
}

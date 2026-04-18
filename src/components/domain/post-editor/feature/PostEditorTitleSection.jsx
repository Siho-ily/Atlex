import PostEditorTagFieldSection from "@/components/domain/post-editor/feature/PostEditorTagFieldSection";

const TITLE_LABEL = "\uC81C\uBAA9";

export default function PostEditorTitleSection({
  title,
  titlePlaceholder,
  onTitleChange,
  tagPlaceholder,
  tagField,
}) {
  return (
    <section className="border-b border-slate-200">
      <div className="px-5 py-6 sm:px-7">
        <label className="block text-sm font-semibold text-slate-500">
          {TITLE_LABEL}
        </label>
        <input
          type="text"
          value={title}
          placeholder={titlePlaceholder}
          onChange={(event) => onTitleChange(event.target.value)}
          className="mt-3 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-lg font-semibold text-slate-900 outline-none transition focus:border-slate-400 focus:bg-white"
        />
      </div>

      <PostEditorTagFieldSection
        tagField={tagField}
        tagPlaceholder={tagPlaceholder}
      />
    </section>
  );
}

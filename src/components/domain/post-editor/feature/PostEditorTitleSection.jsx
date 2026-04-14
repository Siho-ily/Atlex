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
        {/* 게시물 제목을 입력하는 기본 영역입니다. */}
        <label className="block text-sm font-semibold text-slate-500">
          {"\uC81C\uBAA9"}
        </label>
        <input
          type="text"
          value={title}
          placeholder={titlePlaceholder}
          onChange={(event) => onTitleChange(event.target.value)}
          className="mt-3 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-lg font-semibold text-slate-900 outline-none transition focus:border-slate-400 focus:bg-white"
        />
      </div>

      {/* 태그 입력 UI는 별도 컴포넌트로 분리해서 책임을 나눴습니다. */}
      <PostEditorTagField
        tagInput={tagInput}
        tagPlaceholder={tagPlaceholder}
        manualTags={manualTags}
        bodyTags={bodyTags}
        combinedTags={combinedTags}
        onTagInputChange={onTagInputChange}
        onTagInputKeyDown={onTagInputKeyDown}
        onRemoveTag={onRemoveTag}
      />
    </section>
  );
}

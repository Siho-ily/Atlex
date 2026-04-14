export default function PostEditorToolRail({
  onSelectTool,
  selectedToolId,
  toolCategories,
}) {
  return (
    <div className="flex h-full flex-col items-center justify-between px-3 py-5">
      <p className="[writing-mode:vertical-rl] text-xs font-semibold tracking-[0.24em] text-slate-500">
        도구 패널
      </p>

      <div className="flex flex-col gap-3">
        {/* 툴 레일은 상위 도구 카테고리만 빠르게 전환하는 역할입니다. */}
        {toolCategories.map((tool) => {
          const isActive = tool.id === selectedToolId;

          return (
            <button
              key={tool.id}
              type="button"
              onClick={() => onSelectTool(tool.id)}
              className={[
                "h-14 w-14 rounded-lg border text-base font-semibold transition",
                isActive
                  ? "border-slate-900 bg-slate-900 text-white"
                  : "border-slate-300 bg-white text-slate-700 hover:border-slate-400 hover:bg-slate-50",
              ].join(" ")}
            >
              {tool.railLabel}
            </button>
          );
        })}
      </div>
    </div>
  );
}

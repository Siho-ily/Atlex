export default function PostEditorToolRail({
  isToolPanelOpen,
  onSelectTool,
  selectedToolId,
  toolCategories,
}) {
  return (
    <div className="flex h-full min-h-0 flex-col items-center px-3 py-5">
      <p className="[writing-mode:vertical-rl] text-xs font-semibold tracking-[0.24em] text-slate-500">
        도구 패널
      </p>

      <div className="mt-5 flex flex-1 min-h-0 flex-col gap-3 overflow-y-auto">
        {toolCategories.map((tool) => {
          const isActive = tool.id === selectedToolId;

          return (
            <button
              key={tool.id}
              type="button"
              onClick={() => onSelectTool(tool.id)}
              aria-controls="post-editor-tool-panel"
              aria-expanded={tool.id === selectedToolId && isToolPanelOpen}
              aria-pressed={tool.id === selectedToolId}
              aria-label={`${tool.title} 도구 열기`}
              title={tool.title}
              className={[
                "relative h-14 w-14 rounded-lg border text-base font-semibold transition",
                isActive
                  ? "border-slate-900 bg-slate-900 text-white"
                  : "border-slate-300 bg-white text-slate-700 hover:border-slate-400 hover:bg-slate-50",
              ].join(" ")}
            >
              {tool.railLabel}
              {isActive ? (
                <span className="absolute inset-x-3 bottom-2 h-1 rounded-full bg-current opacity-80" />
              ) : null}
            </button>
          );
        })}
      </div>
    </div>
  );
}

import { X } from "lucide-react";

export default function PostEditorSidebar({
  activeGroup,
  activeTool,
  onClose,
  onSelectGroup,
}) {
  return (
    <div className="flex h-full min-h-0 flex-col">
      <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            도구 패널
          </p>
          <p className="mt-1 text-lg font-semibold text-slate-900">
            {activeTool.title}
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="rounded-lg border border-slate-300 bg-white p-2 text-slate-600 transition hover:bg-slate-50"
          aria-label="도구 패널 닫기"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      <div className="flex-1 min-h-0 space-y-5 overflow-y-scroll p-5">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
          <div>
            <p className="text-sm font-semibold text-slate-500">현재 도구</p>
            <p className="mt-1 text-xl font-semibold text-slate-900">
              {activeTool.title}
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              {activeTool.caption}
            </p>
          </div>
        </div>

        <section>
          <div>
            <h2 className="text-lg font-semibold text-slate-900">상위 옵션</h2>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              도구 묶음 버튼을 누르면 이 영역이 열리고 여기서 다시 세부 그룹을 선택할 수 있습니다.
            </p>
          </div>

          <div className="mt-4 grid gap-3">
            {activeTool.groups.map((group) => {
              const isActive = group.id === activeGroup.id;

              return (
                <button
                  key={group.id}
                  type="button"
                  onClick={() => onSelectGroup(group.id)}
                  className={[
                    "rounded-xl border px-4 py-4 text-left transition",
                    isActive
                      ? "border-slate-900 bg-slate-900 text-white"
                      : "border-slate-200 bg-white text-slate-800 hover:border-slate-300 hover:bg-slate-50",
                  ].join(" ")}
                >
                  <p className="text-base font-semibold">{group.title}</p>
                  <p
                    className={[
                      "mt-2 text-sm leading-6",
                      isActive ? "text-slate-300" : "text-slate-500",
                    ].join(" ")}
                  >
                    {group.description}
                  </p>
                </button>
              );
            })}
          </div>
        </section>

        <section>
          <div>
            <h2 className="text-lg font-semibold text-slate-900">하위 옵션</h2>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              상위 옵션에서 선택한 그룹의 세부 항목이 아래에 표시됩니다.
            </p>
          </div>

          <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
            <div className="border-b border-slate-200 pb-4">
              <p className="text-base font-semibold text-slate-900">
                {activeGroup.title}
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                {activeGroup.description}
              </p>
            </div>

            <div className="mt-4 grid gap-3">
              {activeGroup.items.map((item) => (
                <button
                  key={item}
                  type="button"
                  className="rounded-xl border border-slate-200 bg-white px-4 py-4 text-left text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

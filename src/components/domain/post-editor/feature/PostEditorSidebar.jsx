import { X } from "lucide-react";

const COLOR_GROUP_NOTICE =
  "색상 관련 기능은 이번 작업 범위에서 제외해서 버튼만 비활성화해 두었습니다.";

export default function PostEditorSidebar({
  activeGroup,
  activeTool,
  getItemState,
  onClose,
  onExecuteItem,
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

      <div className="min-h-0 flex-1 space-y-5 overflow-y-scroll p-5">
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
              도구 묶음 버튼을 누르면 해당 영역이 열리고 거기서 다시 세부 그룹을
              선택할 수 있습니다.
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
              상위 옵션에서 선택한 그룹 안의 세부 항목을 바로 실행할 수 있습니다.
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
              {activeGroup.id === "font-color" ? (
                <p className="mt-3 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-sm leading-6 text-amber-900">
                  {COLOR_GROUP_NOTICE}
                </p>
              ) : null}
            </div>

            <div className="mt-4 grid gap-3">
              {activeGroup.items.map((item) => {
                // 버튼마다 활성/비활성 상태를 따로 계산해서, 현재 적용된 서식을 바로 확인할 수 있게 한다.
                const { isActive, isDisabled } = getItemState(
                  activeGroup.id,
                  item,
                );

                return (
                  <button
                    key={item}
                    type="button"
                    disabled={isDisabled}
                    aria-pressed={isActive}
                    onClick={() => onExecuteItem(activeGroup.id, item)}
                    className={[
                      "rounded-xl border px-4 py-4 text-left text-sm font-semibold transition",
                      isDisabled
                        ? "cursor-not-allowed border-slate-200 bg-slate-100 text-slate-400"
                        : isActive
                          ? "border-slate-900 bg-slate-900 text-white"
                          : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50",
                    ].join(" ")}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

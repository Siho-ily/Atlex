export default function PostEditorCanvasLayout({
  content,
  isToolPanelOpen,
  toolPanel,
  toolRail,
}) {
  return (
    <section
      className={[
        "relative grid min-h-[820px] grid-cols-[minmax(0,1fr)_84px]",
        isToolPanelOpen
          ? "xl:grid-cols-[minmax(0,1fr)_360px_84px]"
          : "xl:grid-cols-[minmax(0,1fr)_84px]",
      ].join(" ")}
    >
      <div className="min-w-0">{content}</div>

      {isToolPanelOpen && (
        <>
          {/* 좁은 화면에서는 도구 패널을 우측 오버레이로 띄워서 바로 사용할 수 있게 합니다. */}
          <aside className="absolute inset-y-0 right-[84px] z-10 w-[min(360px,calc(100%-84px))] border-l border-slate-200 bg-white shadow-[-24px_0_48px_-24px_rgba(15,23,42,0.24)] xl:hidden">
            {toolPanel}
          </aside>

          {/* 넓은 화면에서는 기존처럼 본문 옆 고정 컬럼으로 보여줍니다. */}
          <aside className="hidden border-l border-slate-200 bg-white xl:block">
            {toolPanel}
          </aside>
        </>
      )}

      <div className="border-l border-slate-200 bg-slate-100/70">{toolRail}</div>
    </section>
  );
}

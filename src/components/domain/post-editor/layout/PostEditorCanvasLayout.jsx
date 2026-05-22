"use client";

// [Layout] 에디터 캔버스(본문 영역)와 플로팅 툴 도크(레일+사이드바)를 배치하는 레이아웃 컴포넌트.
//
// 동작 방식:
//   - 모바일/태블릿(< 1280px): 도크가 section 오른쪽에 absolute로 붙는다.
//   - 데스크탑(≥ 1280px): 도크가 PostEditorShell 오른쪽에 fixed로 떠서 스크롤·리사이즈를 따라간다.
//     위치 기준은 .closest("[data-post-editor-shell]") — PostEditorShell의 data 속성이 앵커 역할.

import { useLayoutEffect, useRef, useState } from "react";

const DESKTOP_BREAKPOINT = 1280;
const TOOL_RAIL_WIDTH = 84;   // 툴레일(아이콘 목록) 고정 너비 px
const TOOL_PANEL_WIDTH = 360; // 사이드바(옵션 패널) 고정 너비 px
const TOOL_DOCK_GAP = 24;     // 쉘 오른쪽 여백 및 뷰포트 상하 여백 px

// 데스크탑 플로팅 도크의 fixed position·크기를 계산한다.
// 쉘(anchorElement)의 BoundingClientRect를 기준으로 뷰포트를 벗어나지 않도록 클램핑한다.
function getDesktopDockStyle(anchorElement, isToolPanelOpen) {
  const anchorRect = anchorElement.getBoundingClientRect();
  const dockWidth = isToolPanelOpen
    ? TOOL_PANEL_WIDTH + TOOL_RAIL_WIDTH
    : TOOL_RAIL_WIDTH;
  const dockHeight = Math.min(
    anchorRect.height,
    window.innerHeight - TOOL_DOCK_GAP * 2,
  );
  const nextTop = Math.min(
    Math.max(anchorRect.top, TOOL_DOCK_GAP),
    anchorRect.bottom - dockHeight,
  );
  const nextLeft = Math.min(
    anchorRect.right + TOOL_DOCK_GAP,
    window.innerWidth - dockWidth - TOOL_DOCK_GAP,
  );

  return {
    height: `${dockHeight}px`,
    left: `${nextLeft}px`,
    top: `${nextTop}px`,
    width: `${dockWidth}px`,
  };
}

export default function PostEditorCanvasLayout({
  content,
  isToolPanelOpen,
  toolPanel,
  toolRail,
}) {
  const sectionRef = useRef(null);
  const [desktopDockStyle, setDesktopDockStyle] = useState(null);

  useLayoutEffect(() => {
    let animationFrameId = 0;

    function updateDockPosition() {
      if (!sectionRef.current || window.innerWidth < DESKTOP_BREAKPOINT) {
        // 모바일에서는 fixed 해제 — absolute로 되돌린다
        setDesktopDockStyle(null);
        return;
      }

      // PostEditorShell의 data-post-editor-shell을 앵커로 삼는다.
      // Shell을 찾지 못하면 section 자체를 대체 앵커로 사용.
      const anchorElement =
        sectionRef.current.closest("[data-post-editor-shell]") ??
        sectionRef.current;

      setDesktopDockStyle(
        getDesktopDockStyle(anchorElement, isToolPanelOpen),
      );
    }

    // rAF로 감싸서 레이아웃 스래싱 없이 한 프레임에 한 번만 위치를 업데이트한다
    function scheduleDockPositionUpdate() {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = window.requestAnimationFrame(updateDockPosition);
    }

    scheduleDockPositionUpdate();
    window.addEventListener("resize", scheduleDockPositionUpdate);
    window.addEventListener("scroll", scheduleDockPositionUpdate, {
      passive: true,
    });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", scheduleDockPositionUpdate);
      window.removeEventListener("scroll", scheduleDockPositionUpdate);
    };
  }, [isToolPanelOpen]);

  const isDesktopFloatingDock = Boolean(desktopDockStyle);

  return (
    <section ref={sectionRef} className="relative h-[820px] min-h-[820px]">
      {/* 본문 영역 — 도크 너비만큼 오른쪽 패딩을 줘서 도크에 가려지지 않게 한다 */}
      <div
        className={[
          "h-full min-h-0 min-w-0 pr-[84px]",
          // 데스크탑 floating일 때는 도크가 쉘 바깥에 뜨므로 추가 패딩 불필요
          isToolPanelOpen && !isDesktopFloatingDock ? "xl:pr-[444px]" : "xl:pr-0",
        ].join(" ")}
      >
        {content}
      </div>

      {/* 툴 도크 — 레일 + 사이드바(열려있을 때만) */}
      <aside
        className={[
          "z-10 flex min-h-0 items-stretch overflow-hidden",
          // 데스크탑: fixed floating / 모바일: section에 absolute로 붙음
          desktopDockStyle ? "fixed" : "absolute inset-y-0 right-0",
          isDesktopFloatingDock
            ? "rounded-[26px] border border-slate-200 bg-white shadow-[0_24px_48px_-24px_rgba(15,23,42,0.28)]"
            : "",
          isToolPanelOpen
            ? "w-[min(444px,100%)] shadow-[-24px_0_48px_-24px_rgba(15,23,42,0.24)]"
            : "w-[84px]",
        ].join(" ")}
        style={desktopDockStyle ?? undefined}
      >
        {isToolPanelOpen ? (
          // id="post-editor-tool-panel" — ToolRail의 aria-controls가 이 id를 참조한다
          <div
            id="post-editor-tool-panel"
            className={[
              "min-w-0 flex-1 overflow-hidden bg-white",
              isDesktopFloatingDock ? "" : "border-l border-slate-200",
            ].join(" ")}
          >
            {toolPanel}
          </div>
        ) : null}

        <div className="w-[84px] min-h-0 border-l border-slate-200 bg-slate-100/70">
          {toolRail}
        </div>
      </aside>
    </section>
  );
}

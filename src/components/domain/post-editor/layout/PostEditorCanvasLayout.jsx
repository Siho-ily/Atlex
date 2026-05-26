"use client";

// [Layout] 에디터 캔버스(본문 영역)와 하단 툴 도크(레일)를 배치하는 레이아웃 컴포넌트.
//
// 동작 방식:
//   - 모바일/태블릿(< 1280px): 도크가 section 하단에 absolute로 붙는다.
//   - 데스크탑(≥ 1280px): 도크가 PostEditorShell 하단에 fixed로 떠서 스크롤·리사이즈를 따라간다.
//     위치 기준은 .closest("[data-post-editor-shell]") — PostEditorShell의 data 속성이 앵커 역할.

import { useLayoutEffect, useRef, useState } from "react";

const DESKTOP_BREAKPOINT = 1280;
const TOOL_RAIL_HEIGHT = 56;  // 툴레일 고정 높이 px
const TOOL_DOCK_GAP = 24;     // 뷰포트 상하 여백 px
const RAIL_MARGIN = 12;       // 레일 좌우·하단 여백 px

// 데스크탑 플로팅 도크의 fixed position·크기를 계산한다.
// 쉘(anchorElement)의 BoundingClientRect 하단에 붙이되 여백·뷰포트를 벗어나지 않도록 클램핑한다.
function getDesktopDockStyle(anchorElement) {
  const anchorRect = anchorElement.getBoundingClientRect();
  const nextTop = Math.max(
    Math.min(
      anchorRect.bottom - TOOL_RAIL_HEIGHT - RAIL_MARGIN,
      window.innerHeight - TOOL_RAIL_HEIGHT - TOOL_DOCK_GAP,
    ),
    anchorRect.top,
  );

  return {
    height: `${TOOL_RAIL_HEIGHT}px`,
    // 쉘 중앙에서 translateX(-50%)로 가운데 정렬 — width는 콘텐츠에 맞게 자동
    left: `${anchorRect.left + anchorRect.width / 2}px`,
    top: `${nextTop}px`,
    transform: "translateX(-50%)",
  };
}

export default function PostEditorCanvasLayout({ content, toolRail }) {
  const sectionRef = useRef(null);
  const [desktopDockStyle, setDesktopDockStyle] = useState(null);

  useLayoutEffect(() => {
    let animationFrameId = 0;

    function updateDockPosition() {
      if (!sectionRef.current || window.innerWidth < DESKTOP_BREAKPOINT) {
        setDesktopDockStyle(null);
        return;
      }

      const anchorElement =
        sectionRef.current.closest("[data-post-editor-shell]") ??
        sectionRef.current;

      setDesktopDockStyle(getDesktopDockStyle(anchorElement));
    }

    function scheduleDockPositionUpdate() {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = window.requestAnimationFrame(updateDockPosition);
    }

    scheduleDockPositionUpdate();
    window.addEventListener("resize", scheduleDockPositionUpdate);
    window.addEventListener("scroll", scheduleDockPositionUpdate, { passive: true });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", scheduleDockPositionUpdate);
      window.removeEventListener("scroll", scheduleDockPositionUpdate);
    };
  }, []);

  const isDesktopFloatingDock = Boolean(desktopDockStyle);

  return (
    <section ref={sectionRef} className="relative h-[820px] min-h-[820px]">
      {/* 본문 영역 — 레일 높이 + 여백만큼 하단 패딩을 줘서 레일에 가려지지 않게 한다 */}
      <div className="h-full min-h-0 min-w-0 pb-[68px]">
        {content}
      </div>

      {/* 툴 도크 — 콘텐츠 너비에 맞게 w-fit, 가운데 정렬 */}
      <aside
        className={[
          "z-10 h-[56px] w-max overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_4px_24px_-4px_rgba(15,23,42,0.14)]",
          desktopDockStyle ? "fixed" : "absolute bottom-3 left-1/2 -translate-x-1/2",
        ].join(" ")}
        style={desktopDockStyle ?? undefined}
      >
        {toolRail}
      </aside>
    </section>
  );
}

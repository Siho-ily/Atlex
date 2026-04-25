"use client";

import { useLayoutEffect, useRef, useState } from "react";

const DESKTOP_BREAKPOINT = 1280;
const TOOL_RAIL_WIDTH = 84;
const TOOL_PANEL_WIDTH = 360;
const TOOL_DOCK_GAP = 24;

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
        setDesktopDockStyle(null);
        return;
      }

      const anchorElement =
        sectionRef.current.closest("[data-post-editor-shell]") ??
        sectionRef.current;

      setDesktopDockStyle(
        getDesktopDockStyle(anchorElement, isToolPanelOpen),
      );
    }

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
      <div
        className={[
          "h-full min-h-0 min-w-0 pr-[84px]",
          isToolPanelOpen && !isDesktopFloatingDock ? "xl:pr-[444px]" : "xl:pr-0",
        ].join(" ")}
      >
        {content}
      </div>

      <aside
        className={[
          "z-10 flex min-h-0 items-stretch overflow-hidden",
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

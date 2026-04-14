"use client";

import { useState } from "react";

function getFirstTool(toolCategories) {
  return toolCategories[0] ?? null;
}

function getActiveTool(toolCategories, toolId) {
  const firstTool = getFirstTool(toolCategories);

  return toolCategories.find((tool) => tool.id === toolId) ?? firstTool;
}

function getActiveGroup(tool, groupId) {
  return tool?.groups.find((group) => group.id === groupId) ?? tool?.groups[0] ?? null;
}

export default function usePostEditorPanels(toolCategories) {
  const firstTool = getFirstTool(toolCategories);
  const [isToolPanelOpen, setIsToolPanelOpen] = useState(false);
  const [selectedToolId, setSelectedToolId] = useState(firstTool?.id ?? "");
  const [selectedGroupId, setSelectedGroupId] = useState(
    firstTool?.groups[0]?.id ?? ""
  );

  // 선택된 도구/그룹 id를 기준으로 현재 패널에 보여줄 데이터를 계산합니다.
  const activeTool = getActiveTool(toolCategories, selectedToolId);
  const activeGroup = getActiveGroup(activeTool, selectedGroupId);

  function openToolPanel(toolId) {
    const nextTool = getActiveTool(toolCategories, toolId);

    if (!nextTool) {
      return;
    }

    if (isToolPanelOpen && nextTool.id === activeTool?.id) {
      setIsToolPanelOpen(false);
      return;
    }

    setSelectedToolId(nextTool.id);
    setSelectedGroupId(nextTool.groups[0]?.id ?? "");
    setIsToolPanelOpen(true);
  }

  function selectGroup(groupId) {
    if (!activeTool?.groups.some((group) => group.id === groupId)) {
      return;
    }

    setSelectedGroupId(groupId);
  }

  function closeToolPanel() {
    setIsToolPanelOpen(false);
  }

  return {
    activeGroup,
    activeTool,
    closeToolPanel,
    isToolPanelOpen,
    openToolPanel,
    selectGroup,
    selectedToolId,
  };
}

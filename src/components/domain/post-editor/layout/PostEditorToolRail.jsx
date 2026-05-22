// [Section] 에디터 우측 수직 툴 레일 — 각 툴 타일을 ToggleGroup으로 단일 선택하고 Tooltip으로 이름 표시
import { Textfield } from "@/components/common/ui/textfield";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/common/ui/tooltip";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/common/ui/toggle-group";

export default function PostEditorToolRail({
  isToolPanelOpen,  // 사이드바가 열려 있는지 여부 (aria-expanded에 사용)
  onSelectTool,     // (toolId) => void — 레일 타일 클릭 시 호출 (같은 툴 재클릭 시 닫힘)
  selectedToolId,
  toolCategories,   // { id, title, railLabel, groups[] }[] — data에서 주입
}) {
  // base-ui ToggleGroup value는 string[] — 단일 선택이지만 배열로 감싸야 한다
  const railValue = selectedToolId ? [selectedToolId] : [];

  const handleRailChange = (next) => {
    // 선택 해제 시 무시 — 닫기는 onSelectTool 내부에서 같은 툴 재선택으로 처리한다
    const [nextId] = next ?? [];
    if (nextId) onSelectTool(nextId);
  };

  return (
    <div className="flex h-full min-h-0 flex-col items-center px-3 py-5">
      <Textfield
        variant="muted"
        size="xs"
        weight="semibold"
        className="[writing-mode:vertical-rl] tracking-[0.24em]"
      >
        도구 패널
      </Textfield>

      <ToggleGroup
        value={railValue}
        onValueChange={handleRailChange}
        orientation="vertical"
        spacing={3}
        className="mt-5 min-h-0 flex-1 overflow-y-auto"
      >
        {toolCategories.map((tool) => {
          const isActive = tool.id === selectedToolId;

          return (
            <Tooltip key={tool.id}>
              <TooltipTrigger
                render={
                  <ToggleGroupItem
                    value={tool.id}
                    variant="outline"
                    size="lg"
                    aria-controls="post-editor-tool-panel"
                    aria-expanded={isActive && isToolPanelOpen}
                    aria-label={`${tool.title} 도구 열기`}
                    className="relative h-14 w-14 rounded-lg text-base font-semibold data-[pressed]:bg-foreground data-[pressed]:text-background"
                  >
                    {tool.railLabel}
                    {isActive ? (
                      <span className="absolute inset-x-3 bottom-2 h-1 rounded-full bg-current opacity-80" />
                    ) : null}
                  </ToggleGroupItem>
                }
              />
              <TooltipContent side="left">{tool.title}</TooltipContent>
            </Tooltip>
          );
        })}
      </ToggleGroup>
    </div>
  );
}

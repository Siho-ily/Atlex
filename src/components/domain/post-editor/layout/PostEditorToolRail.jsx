// [Section] 에디터 하단 수평 툴 레일 — 각 카테고리 버튼이 컴팩트 아이콘 팝오버를 연다
import { Textfield } from '@/components/common/ui/textfield';
import PostEditorToolPopover from './PostEditorToolPopover';

export default function PostEditorToolRail({
  getItemState, // (groupId, itemLabel) => { isActive, isDisabled }
  onExecuteItem, // (groupId, itemLabel) => void
  toolCategories // { id, title, railLabel, groups[] }[]
}) {
  return (
    <div className="flex h-full min-h-0 flex-row items-center gap-4 px-5">
      <div className="flex items-center gap-1">
        {toolCategories.map(tool => (
          <PostEditorToolPopover
            key={tool.id}
            tool={tool}
            getItemState={getItemState}
            onExecuteItem={onExecuteItem}
          />
        ))}
      </div>
    </div>
  );
}

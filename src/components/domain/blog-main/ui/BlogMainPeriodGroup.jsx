import { EllipsisVertical } from 'lucide-react';
import { Button } from '@/components/common/ui/button';

export default function BlogMainPeriodGroup({ periods = [], activePeriodId }) {
  return (
    <div className="flex items-center justify-end gap-2">
      {periods.map(period => {
        const isActive = period.id === activePeriodId;

        return (
          <button
            key={period.id}
            type="button"
            aria-pressed={isActive}
            className={[
              'cursor-default rounded-[1rem] px-4 py-2.5 text-sm font-semibold',
              isActive
                ? 'bg-foreground text-background'
                : 'border border-border bg-card text-muted-foreground'
            ].join(' ')}>
            {period.label}
          </button>
        );
      })}

      <Button
        variant="outline"
        size="icon"
        aria-label="더 보기"
        className="h-11 w-11 cursor-default rounded-[1rem] bg-card">
        <EllipsisVertical className="h-4 w-4" />
      </Button>
    </div>
  );
}

import { Card } from "@/components/common/ui/card";
import { cn } from "@/lib/utils";

export default function BlogHomeFeedListLayout({ children, className }) {
  return (
    <Card
      className={cn(
        // 바깥 카드가 리스트 전체 틀을 맡고, 각 아이템이 자기 구분선을 그린다.
        "overflow-hidden rounded-3xl gap-0 border-border bg-card/40 py-0 shadow-none",
        className
      )}
    >
      {children}
    </Card>
  );
}

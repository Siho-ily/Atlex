// 공통 pill 버튼
import { cn } from "@/lib/utils";

const toneClassNameMap = {
  accent: "border-primary/25 bg-primary/10 text-foreground",
  neutral: "border-border bg-card text-foreground",
  soft: "border-border bg-muted/70 text-foreground",
  warm: "border-border bg-secondary text-secondary-foreground",
};

// 추후 사이즈 분리용 맵
const sizeClassNameMap = {
  md: "h-11 px-4 text-sm",
  lg: "h-11 px-4 text-sm",
};

export default function BlogHomePillButton({
  className,
  icon: Icon,
  label,
  size = "md",
  tone = "neutral",
}) {
  return (
    <button
      type="button"
      className={cn(
        "inline-flex items-center gap-2 rounded-full border font-semibold transition-colors",
        toneClassNameMap[tone],
        sizeClassNameMap[size],
        className
      )}
    >
      {Icon ? <Icon className="size-4" /> : null}
      <span>{label}</span>
    </button>
  );
}

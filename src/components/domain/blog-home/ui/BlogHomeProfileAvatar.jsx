import { cn } from "@/lib/utils";

const sizeClassNameMap = {
  sm: "h-14 w-14 border-[3px] text-[10px] leading-3",
  lg: "h-28 w-28 border-4 text-sm leading-5",
};

function renderLabel(label) {
  return label.split(" ").map((word, index) => (
    <span key={`${word}-${index}`} className="block">
      {word}
    </span>
  ));
}

export default function BlogHomeProfileAvatar({
  alt = "\uD504\uB85C\uD544 \uC0AC\uC9C4",
  className,
  label = "\uD504\uB85C\uD544 \uC0AC\uC9C4",
  showLabel = true,
  size = "lg",
  src,
}) {
  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center overflow-hidden rounded-full border-primary/35 bg-primary/10 text-center font-semibold text-muted-foreground",
        sizeClassNameMap[size],
        className
      )}
    >
      {src ? (
        <img alt={alt} className="h-full w-full object-cover" src={src} />
      ) : showLabel ? (
        <span>{renderLabel(label)}</span>
      ) : null}
    </div>
  );
}

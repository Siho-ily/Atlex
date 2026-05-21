import { Button } from "@/components/common/ui/button";
import { Capsule } from "@/components/common/ui/capsule";
import { cn } from "@/lib/utils";

export default function BlogHomeTagChip({
  active = false,
  count,
  fullWidth = false,
  label,
}) {
  return (
    <Button
      type="button"
      variant="ghost"
      className={cn(
        "h-auto rounded-full p-0 hover:bg-transparent hover:text-current",
        fullWidth ? "w-full justify-start" : "w-auto"
      )}
    >
      <Capsule
        className={cn(
          "h-auto w-full gap-3 rounded-full px-4 py-2 text-sm font-semibold",
          fullWidth ? "justify-between" : "",
          active
            ? "border-foreground bg-foreground text-background hover:bg-foreground"
            : "border-border bg-card text-muted-foreground hover:bg-card"
        )}
      >
        <span>{label}</span>
        {typeof count === "number" ? (
          <span
            className={cn(
              "rounded-full px-2.5 py-0.5 text-xs font-bold",
              active
                ? "bg-background/15 text-background"
                : "bg-muted text-muted-foreground"
            )}
          >
            {count}
          </span>
        ) : null}
      </Capsule>
    </Button>
  );
}

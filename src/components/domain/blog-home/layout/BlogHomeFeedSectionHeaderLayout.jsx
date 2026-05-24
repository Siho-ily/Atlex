import { Textfield, textfieldVariants } from "@/components/common/ui/textfield";
import { cn } from "@/lib/utils";

export default function BlogHomeFeedSectionHeaderLayout({
  eyebrowLabel,
  title,
  totalCount,
}) {
  return (
    <div className="space-y-2">
      <Textfield className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
        {eyebrowLabel}
      </Textfield>
      <h2
        className={cn(
          textfieldVariants({
            size: "xl",
            weight: "bold",
          }),
          "text-3xl tracking-tight"
        )}
      >
        {title} <span className="text-primary">{totalCount}</span>
      </h2>
    </div>
  );
}

import { Lock } from "lucide-react";

import { Capsule } from "@/components/common/ui/capsule";
import { Textfield, textfieldVariants } from "@/components/common/ui/textfield";
import { cn } from "@/lib/utils";

const titleClampStyle = {
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 2,
  overflow: "hidden",
};

const excerptClampStyle = {
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 3,
  overflow: "hidden",
};

const defaultFeedLabel = "Static Feed";

export default function BlogHomeFeedItemContentLayout({
  category,
  excerpt,
  feedLabel = defaultFeedLabel,
  isPrivate = false,
  tags = [],
  title,
}) {
  return (
    <>
      <div className="mb-4 flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        <Capsule
          className={cn(
            "gap-1 rounded-full border-transparent px-2.5 py-1",
            isPrivate
              ? "bg-muted text-muted-foreground hover:bg-muted"
              : "bg-primary/10 text-foreground hover:bg-primary/10"
          )}
        >
          {isPrivate ? <Lock className="size-3.5" /> : null}
          {category}
        </Capsule>

        <Textfield className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          {feedLabel}
        </Textfield>
      </div>

      <h3
        className={cn(
          textfieldVariants({
            size: "xl",
            weight: "bold",
          }),
          "leading-snug tracking-tight md:text-2xl"
        )}
        style={titleClampStyle}
      >
        {title}
      </h3>

      <Textfield
        variant="muted"
        size="sm"
        className="mt-3 leading-6"
        style={excerptClampStyle}
      >
        {excerpt}
      </Textfield>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Capsule
            key={tag}
            className="rounded-full border-border bg-background px-3 py-1 text-xs font-semibold text-muted-foreground hover:bg-background"
          >
            {tag}
          </Capsule>
        ))}
      </div>
    </>
  );
}

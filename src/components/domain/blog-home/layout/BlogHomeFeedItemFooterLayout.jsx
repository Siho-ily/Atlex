import { Bookmark, Heart, MessageSquare } from "lucide-react";

import { Separator } from "@/components/common/ui/separator";
import { Textfield } from "@/components/common/ui/textfield";
import { cn } from "@/lib/utils";

function ReactionBadge({ active = false, icon: Icon, value }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 text-xs font-semibold",
        active ? "text-destructive" : "text-muted-foreground"
      )}
    >
      <Icon className="size-3.5" />
      {value}
    </span>
  );
}

export default function BlogHomeFeedItemFooterLayout({
  bookmarks = 0,
  comments = 0,
  date,
  isLiked = false,
  likes = 0,
}) {
  return (
    <div className="mt-5 space-y-4">
      <Separator />

      <div className="flex flex-wrap items-center justify-between gap-3">
        <Textfield className="text-xs font-semibold text-muted-foreground">
          {date}
        </Textfield>

        <div className="flex flex-wrap items-center gap-4">
          <ReactionBadge active={isLiked} icon={Heart} value={likes} />
          <ReactionBadge icon={MessageSquare} value={comments} />
          <ReactionBadge icon={Bookmark} value={bookmarks} />
        </div>
      </div>
    </div>
  );
}

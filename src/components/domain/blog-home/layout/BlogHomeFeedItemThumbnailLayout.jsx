import { Image } from "@/components/common/ui/image";
import { Textfield } from "@/components/common/ui/textfield";
import { ImageIcon } from "lucide-react";

import { cn } from "@/lib/utils";

export default function BlogHomeFeedItemThumbnailLayout({ thumbnail }) {
  // 텍스트형 게시물은 썸네일 영역을 아예 렌더링하지 않는다.
  if (!thumbnail) {
    return null;
  }

  return (
    <Image
      className={cn(
        "aspect-[16/10] h-auto w-full rounded-2xl border-border bg-muted/40 text-muted-foreground",
        thumbnail.className
      )}
      icon={
        // 실제 이미지 소스가 없을 때 보여줄 플레이스홀더 내용이다.
        <div className="flex flex-col items-center gap-3 text-center">
          <ImageIcon className="size-8 text-primary" />
          <Textfield size="default" weight="semibold" className="text-foreground">
            {thumbnail.label}
          </Textfield>
        </div>
      }
    />
  );
}

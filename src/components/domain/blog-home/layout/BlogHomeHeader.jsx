import { Bell, Search } from "lucide-react";

import { Button } from "@/components/common/ui/button";
import { Separator } from "@/components/common/ui/separator";
import { Textfield } from "@/components/common/ui/textfield";
import BlogHomePillButton from "@/components/domain/blog-home/ui/BlogHomePillButton";
import BlogHomeProfileAvatar from "@/components/domain/blog-home/ui/BlogHomeProfileAvatar";

const toolbarIconMap = {
  search: Search,
  alert: Bell,
};

export default function BlogHomeHeader({
  logoLabel,
  blogTitle,
  toolbarButtons,
  profileLabel,
}) {
  return (
    <header className="border-b border-border pb-6">
      <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
        <div className="flex flex-wrap items-center gap-4">
          <span className="text-4xl font-black tracking-tight text-foreground">
            {logoLabel}
          </span>
          <Separator orientation="vertical" className="hidden h-6 md:block" />
          <div>
            <Textfield className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
              User Blog
            </Textfield>
            <h1 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {blogTitle}
            </h1>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-end gap-2">
          {toolbarButtons.map(({ id, label, tone }) => {
            const Icon = toolbarIconMap[id];

            return (
              <BlogHomePillButton
                key={id}
                icon={Icon}
                label={label}
                tone={tone}
              />
            );
          })}

          <Button
            type="button"
            variant="ghost"
            aria-label={profileLabel}
            className="h-auto w-auto rounded-full p-0 hover:bg-transparent hover:text-current"
          >
            <BlogHomeProfileAvatar alt={profileLabel} size="sm" />
          </Button>
        </div>
      </div>
    </header>
  );
}

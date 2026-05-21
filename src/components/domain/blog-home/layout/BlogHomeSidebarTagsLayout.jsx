import { Textfield } from "@/components/common/ui/textfield";
import BlogHomeSidebarCard from "@/components/domain/blog-home/layout/BlogHomeSidebarCard";
import BlogHomeTagChip from "@/components/domain/blog-home/ui/BlogHomeTagChip";

const defaultTitle = "\uD0DC\uADF8";
const defaultDescription =
  "\uAE00 \uBAA9\uB85D\uC5D0\uC11C \uC4F0\uB294 \uD0DC\uADF8\uB4E4\uC744 \uD55C \uBC88\uC5D0 \uD6D1\uC5B4\uBCFC \uC218 \uC788\uAC8C \uB454 \uC601\uC5ED\uC774\uB2E4.";

export default function BlogHomeSidebarTagsLayout({
  description = defaultDescription,
  tags,
  title = defaultTitle,
}) {
  return (
    <BlogHomeSidebarCard>
      <div className="space-y-1">
        <h3 className="text-lg font-bold text-foreground">{title}</h3>
        <Textfield variant="muted" size="sm" className="leading-6">
          {description}
        </Textfield>
      </div>

      {/* 좁은 사이드바 카드 폭에 맞춰 태그를 세로로 쌓아 보여준다. */}
      <div className="mt-5 flex flex-col items-start gap-3">
        {tags.map((tag) => (
          <BlogHomeTagChip
            key={tag.id}
            active={tag.active}
            count={tag.count}
            label={tag.label}
          />
        ))}
      </div>
    </BlogHomeSidebarCard>
  );
}

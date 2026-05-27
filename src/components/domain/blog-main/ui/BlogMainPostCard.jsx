import Link from "next/link";
import { Heart } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/common/ui/card";
import { postDetailHref, userBlogHref } from "@/lib/url/handle";
import BlogMainPostCover from "./BlogMainPostCover";

export default function BlogMainPostCard({ post }) {
  const hasCover = !!(post.cover && post.cover.variant !== "none");
  const detailHref = post.authorUserId ? postDetailHref(post.authorUserId, post.id) : null;
  const userHref = post.authorUserId ? userBlogHref(post.authorUserId) : null;

  const detailBody = (
    <>
      <BlogMainPostCover cover={post.cover} />

      {/* 커버가 없는 카드는 상단 여백을 조금 더 줘서 텍스트 덩어리의 균형을 맞춥니다. */}
      <CardContent className={`flex-1 px-3 pb-3 ${hasCover ? "pt-3" : "pt-3.5"}`}>
        {post.eyebrow ? (
          <p className="mb-1 text-[0.56rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            {post.eyebrow}
          </p>
        ) : null}

        <h3 className="text-[0.88rem] font-bold leading-5.5 tracking-[-0.03em] text-foreground group-hover:underline">
          {post.title}
        </h3>

        <p className="mt-1.5 text-[0.74rem] leading-5 text-muted-foreground">
          {post.excerpt}
        </p>

        <div className="mt-3.5 flex items-center justify-between text-[0.62rem] text-muted-foreground">
          <span>{post.publishedAt}</span>
          <span>{post.comments}개의 댓글</span>
        </div>
      </CardContent>
    </>
  );

  return (
    <Card className="gap-0 rounded-[9px] py-0">
      {detailHref ? (
        <Link href={detailHref} className="group flex flex-1 flex-col">
          {detailBody}
        </Link>
      ) : (
        <div className="flex flex-1 flex-col">{detailBody}</div>
      )}

      <CardFooter className="justify-between rounded-b-[9px] bg-transparent px-3 py-2 text-[0.68rem] text-muted-foreground">
        <p>
          by{" "}
          {userHref ? (
            <Link
              href={userHref}
              className="font-semibold text-foreground hover:underline"
            >
              {post.author}
            </Link>
          ) : (
            <span className="font-semibold text-foreground">{post.author}</span>
          )}
        </p>

        <p className="inline-flex items-center gap-1 font-semibold text-foreground">
          <Heart className="h-3 w-3 fill-current" />
          <span>{post.likes}</span>
        </p>
      </CardFooter>
    </Card>
  );
}

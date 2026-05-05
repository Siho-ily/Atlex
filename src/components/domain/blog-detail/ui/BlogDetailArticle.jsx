function ArticleImage({ caption }) {
  return (
    <figure className="space-y-4">
      <div className="overflow-hidden rounded-[1.8rem] border border-border bg-card">
        <div className="relative h-[280px] bg-[linear-gradient(160deg,#f4f7f8_0%,#ffffff_55%,#eef2f4_100%)] sm:h-[360px]">
          <div className="absolute left-8 top-8 h-[68%] w-[34%] rounded-[1.8rem] border border-border bg-background" />
          <div className="absolute left-[28%] top-[16%] h-[54%] w-[26%] rounded-[1.6rem] border border-border bg-card" />
          <div className="absolute right-8 bottom-8 w-[34%] rounded-[1.3rem] border border-border bg-background px-4 py-4">
            <p className="text-[0.72rem] leading-6 text-muted-foreground">
              image block
            </p>
          </div>
        </div>
      </div>
      <figcaption className="text-[0.86rem] leading-7 text-muted-foreground">
        {caption}
      </figcaption>
    </figure>
  );
}

export default function BlogDetailArticle({ contentBlocks }) {
  return (
    <article className="space-y-8">
      {contentBlocks.map((block) => {
        // 이미지 블록은 읽기 리듬을 끊어 주면서도 렌더링 분기는 단순하게 유지합니다.
        if (block.type === "image") {
          return <ArticleImage key={block.id} caption={block.caption} />;
        }

        // 그 외 블록은 현재 기본 문단 스타일로 처리합니다.
        return (
          <p
            key={block.id}
            className="text-[1rem] leading-9 text-foreground/84 sm:text-[1.05rem]"
          >
            {block.text}
          </p>
        );
      })}
    </article>
  );
}

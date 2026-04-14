import PostEditorScreen from "@/components/domain/post-editor/feature/PostEditorScreen";
import { postEditorCopy } from "@/data/post-editor/post-editor-copy";
import { postEditorDrafts } from "@/data/post-editor/post-editor-drafts";
import { postEditorToolCategories } from "@/data/post-editor/post-editor-tool-categories";

export const metadata = {
  title: "게시물 작성 페이지",
  description: "와이어프레임 느낌을 반영한 게시물 작성 페이지 UI",
};

export default function PostWritePage() {
  // 페이지는 필요한 데이터 조각들을 모아서 작성 화면에 전달합니다.
  return (
    <PostEditorScreen
      copy={postEditorCopy}
      drafts={postEditorDrafts}
      toolCategories={postEditorToolCategories}
    />
  );
}

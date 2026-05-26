import { posts } from "@/data/post/posts";
import { ok, fail, requireAuth, nowDt } from "@/lib/api/mock-response";

export async function GET(_req, { params }) {
  const { postId } = await params;
  const post = posts.find((p) => p.id === Number(postId));

  if (!post) {
    return fail("POST_NOT_FOUND", "존재하지 않는 게시글입니다.", 404);
  }

  return ok(post, null);
}

export async function PATCH(req, { params }) {
  const authError = requireAuth(req);
  if (authError) return authError;

  const { postId } = await params;
  const post = posts.find((p) => p.id === Number(postId));

  if (!post) {
    return fail("POST_NOT_FOUND", "존재하지 않는 게시글입니다.", 404);
  }

  const body = await req.json().catch(() => ({}));
  const { title, content, categoryId, isPublic } = body;

  const updated = {
    ...post,
    ...(title !== undefined && { title }),
    ...(content !== undefined && { content }),
    ...(categoryId !== undefined && { categoryId }),
    ...(isPublic !== undefined && { isPublic }),
    updatedAt: nowDt(),
  };

  return ok(updated, "게시글이 수정되었습니다.");
}

export async function DELETE(req, { params }) {
  const authError = requireAuth(req);
  if (authError) return authError;

  const { postId } = await params;
  const post = posts.find((p) => p.id === Number(postId));

  if (!post) {
    return fail("POST_NOT_FOUND", "존재하지 않는 게시글입니다.", 404);
  }

  return ok(null, "게시글이 삭제되었습니다.");
}

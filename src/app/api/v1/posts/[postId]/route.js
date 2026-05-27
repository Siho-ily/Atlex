import { posts } from "@/data/post/posts";
import { categories } from "@/data/category/categories";
import { users } from "@/data/user/users";
import { ok, fail, requireAuth, nowDt } from "@/lib/api/mock-response";

const categoryById = new Map(categories.map((c) => [c.id, c]));
const userById = new Map(users.map((u) => [u.id, u]));

function enrichPost(post) {
  return {
    ...post,
    categoryName: post.categoryId ? categoryById.get(post.categoryId)?.name ?? null : null,
    authorUserId: userById.get(post.authorId)?.userId ?? null,
  };
}

export async function GET(_req, { params }) {
  const { postId } = await params;
  const post = posts.find((p) => p.id === Number(postId));

  if (!post) {
    return fail("POST_NOT_FOUND", "존재하지 않는 게시글입니다.", 404);
  }

  return ok(enrichPost(post), null);
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

  if (title !== undefined) post.title = title;
  if (content !== undefined) post.content = content;
  if (categoryId !== undefined) post.categoryId = categoryId;
  if (isPublic !== undefined) post.isPublic = isPublic;
  post.updatedAt = nowDt();

  return ok(enrichPost(post), "게시글이 수정되었습니다.");
}

export async function DELETE(req, { params }) {
  const authError = requireAuth(req);
  if (authError) return authError;

  const { postId } = await params;
  const index = posts.findIndex((p) => p.id === Number(postId));

  if (index === -1) {
    return fail("POST_NOT_FOUND", "존재하지 않는 게시글입니다.", 404);
  }

  posts.splice(index, 1);

  return ok(null, "게시글이 삭제되었습니다.");
}

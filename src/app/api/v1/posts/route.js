import { posts } from "@/data/post/posts";
import { categories } from "@/data/category/categories";
import { ok, created, fail, requireAuth, nowDt } from "@/lib/api/mock-response";

const categoryById = new Map(categories.map((c) => [c.id, c]));

function withCategoryName(post) {
  return {
    ...post,
    categoryName: post.categoryId ? categoryById.get(post.categoryId)?.name ?? null : null,
  };
}

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const page = Math.max(0, Number(searchParams.get("page") ?? 0));
  const size = Math.min(50, Math.max(1, Number(searchParams.get("size") ?? 10)));

  const publicPosts = posts.filter((p) => p.isPublic);
  const totalElements = publicPosts.length;
  const totalPages = Math.ceil(totalElements / size);
  const start = page * size;

  const content = publicPosts.slice(start, start + size).map(withCategoryName);

  return ok(
    { content, totalElements, totalPages, number: page, size },
    null,
  );
}

export async function POST(req) {
  const authError = requireAuth(req);
  if (authError) return authError;

  const body = await req.json().catch(() => ({}));
  const { title, content, categoryId = null, isPublic = true } = body;

  const errors = [];
  if (!title) errors.push({ type: "field", field: "title", message: "제목을 입력해주세요." });
  if (!content) errors.push({ type: "field", field: "content", message: "본문을 입력해주세요." });
  if (errors.length > 0) {
    return fail("VALIDATION_ERROR", "입력값이 올바르지 않습니다.", 400, errors);
  }

  const now = nowDt();
  const newPost = {
    id: posts.length + 1,
    categoryId,
    title,
    content,
    authorId: 1,
    authorName: "테스트유저",
    hits: 0,
    likes: 0,
    isPublic,
    createdAt: now,
    updatedAt: now,
  };

  return created(newPost, "게시글이 작성되었습니다.");
}

import { posts } from '@/data/post/posts';
import { categories } from '@/data/category/categories';
import { users } from '@/data/user/users';

const categoryById = new Map(categories.map(c => [c.id, c]));
const userById = new Map(users.map(u => [u.id, u]));

export function enrichPost(post) {
  return {
    ...post,
    categoryName: post.categoryId ? (categoryById.get(post.categoryId)?.name ?? null) : null,
    authorUserId: userById.get(post.authorId)?.userId ?? null,
  };
}

export function queryPosts({ page = 0, size = 10, authorUserId } = {}) {
  const publicPosts = posts
    .filter(p => p.isPublic)
    .filter(p => !authorUserId || userById.get(p.authorId)?.userId === authorUserId);

  const totalElements = publicPosts.length;
  const totalPages = Math.ceil(totalElements / size);
  const content = publicPosts.slice(page * size, (page + 1) * size).map(enrichPost);

  return { content, totalElements, totalPages, number: page, size };
}

export function queryPostById(postId) {
  const post = posts.find(p => p.id === Number(postId));
  if (!post) {
    const error = new Error('존재하지 않는 게시글입니다.');
    error.code = 'POST_NOT_FOUND';
    throw error;
  }
  return enrichPost(post);
}

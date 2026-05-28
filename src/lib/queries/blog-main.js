import { queryPosts } from '@/lib/data/posts';
import { toBlogMainPost } from '@/lib/mappers/post';

export async function loadMainPosts({ page = 0, size = 10 } = {}) {
  try {
    const data = queryPosts({ page, size });
    return {
      posts: data.content.map(toBlogMainPost),
      totalPages: data.totalPages,
    };
  } catch (error) {
    console.error('[loadMainPosts] 실패:', error?.message || error);
    return { posts: [], totalPages: 0 };
  }
}

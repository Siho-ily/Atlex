import { queryPostById } from '@/lib/data/posts';
import { toBlogDetail } from '@/lib/mappers/post';

export async function loadBlogDetailData(postId, authorUserId) {
  const apiPost = queryPostById(postId);
  if (apiPost.authorUserId !== authorUserId) return null;
  return toBlogDetail(apiPost);
}

import { queryUserByIdentifier } from '@/lib/data/users';
import { queryPosts } from '@/lib/data/posts';
import { toBlogHomeProfile } from '@/lib/mappers/user';
import { toBlogHomeFeedPost } from '@/lib/mappers/post';

export async function loadBlogHomeData(identifier) {
  const user = queryUserByIdentifier(identifier);
  const postsPage = queryPosts({ page: 0, size: 10, authorUserId: identifier });

  const profile = toBlogHomeProfile(user);
  const posts = postsPage.content.map(toBlogHomeFeedPost);

  const feed = {
    totalCount: postsPage.totalElements,
    filterLabel: '이번 주',
    sortLabel: '최신순',
    helperText:
      '제목과 본문은 카드형 목록으로 유지하고, 피드 중심의 배치로 재정렬한 정적 목업입니다.',
    pageSizeLabel: '한 페이지에 최대 10개',
    posts,
    pagination: [
      { id: 'prev', label: '<', kind: 'control' },
      { id: 'page-1', label: '1', current: true },
    ],
  };

  return { profile, feed };
}

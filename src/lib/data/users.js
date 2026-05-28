import { users } from '@/data/user/users';

export function queryUserByIdentifier(identifier) {
  const numeric = Number(identifier);
  const user = (Number.isInteger(numeric) && String(numeric) === String(identifier))
    ? users.find(u => u.id === numeric)
    : users.find(u => u.userId === identifier);

  if (!user) {
    const error = new Error('존재하지 않는 사용자입니다.');
    error.code = 'USER_NOT_FOUND';
    throw error;
  }
  return user;
}

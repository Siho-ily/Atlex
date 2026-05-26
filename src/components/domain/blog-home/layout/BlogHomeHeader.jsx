import Header from '@/components/common/layout/UserBlogHeader';

function findToolbarButton(toolbarButtons, id) {
  return toolbarButtons.find(button => button.id === id);
}

function getHeaderUserId(userId, blogTitle) {
  if (userId) {
    return userId;
  }

  if (!blogTitle) {
    return undefined;
  }

  return blogTitle.replace(/'s blog$/i, '');
}

export default function BlogHomeHeader({
  blogTitle,
  logoSrc,
  onProfileClick,
  toolbarButtons = [],
  userId
}) {
  const searchButton = findToolbarButton(toolbarButtons, 'search');
  const notificationButton = findToolbarButton(toolbarButtons, 'alert');

  return (
    <Header
      logoSrc={logoSrc}
      onNotification={notificationButton?.onClick}
      onProfileClick={onProfileClick}
      onSearch={searchButton?.onClick}
      userId={getHeaderUserId(userId, blogTitle)}
    />
  );
}

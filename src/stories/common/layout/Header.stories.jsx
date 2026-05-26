import Header from '@/components/common/layout/UserBlogHeader';

/** @type { import('@storybook/nextjs-vite').Meta<typeof Header> } */
const meta = {
  title: 'Common/Layout/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    onSearch: { action: 'search clicked' },
    onNotification: { action: 'notification clicked' },
    onProfileClick: { action: 'profile clicked' }
  }
};

export default meta;

/** @type { import('@storybook/nextjs-vite').StoryObj<typeof Header> } */
export const Default = {
  args: {
    userId: 'User',
    logoSrc: '/next.svg' // public 폴더의 기본 이미지 활용
  }
};

export const CustomUser = {
  args: {
    userId: 'JohnDoe',
    logoSrc: '/vercel.svg'
  }
};

export const LongNickname = {
  args: {
    userId: 'VeryLongNicknameThatMightBreakLayout'
  }
};

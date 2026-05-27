import BlogMainPeriodGroup from "@/components/domain/blog-main/ui/BlogMainPeriodGroup";

/** @type { import('@storybook/nextjs-vite').Meta<typeof BlogMainPeriodGroup> } */
const meta = {
  title: "Domain/BlogMain/UI/BlogMainPeriodGroup",
  component: BlogMainPeriodGroup,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    activePeriodId: {
      control: "select",
      options: ["1w", "1m", "3m", "6m", "1y", "all"],
      description: "현재 활성화된 기간 ID",
    },
    periods: { control: "object" },
  },
};
export default meta;

const periods = [
  { id: "1w", label: "1주" },
  { id: "1m", label: "1개월" },
  { id: "3m", label: "3개월" },
  { id: "1y", label: "1년" },
  { id: "all", label: "전체" },
];

export const Default = {
  args: {
    periods,
    activePeriodId: "1m",
  },
};

export const WeekActive = {
  args: {
    periods,
    activePeriodId: "1w",
  },
};

export const AllActive = {
  args: {
    periods,
    activePeriodId: "all",
  },
};

export const FewPeriods = {
  args: {
    periods: [
      { id: "1m", label: "1개월" },
      { id: "all", label: "전체" },
    ],
    activePeriodId: "all",
  },
};

export const EmptyPeriods = {
  args: {
    periods: [],
    activePeriodId: undefined,
  },
};

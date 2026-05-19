import { OptionGroup, OptionGroupItem } from "@/components/common/ui/option-group"

/** @type { import('@storybook/nextjs-vite').Meta<typeof OptionGroup> } */
const meta = {
  title: "Common/UI/OptionGroup",
  component: OptionGroup,
  tags: ["autodocs"],
}

export default meta

export const Default = {
  render: () => (
    <OptionGroup defaultValue={["all"]}>
      <OptionGroupItem value="all">전체</OptionGroupItem>
      <OptionGroupItem value="popular">인기</OptionGroupItem>
      <OptionGroupItem value="new">최신</OptionGroupItem>
    </OptionGroup>
  ),
}

export const NoneSelected = {
  render: () => (
    <OptionGroup>
      <OptionGroupItem value="all">전체</OptionGroupItem>
      <OptionGroupItem value="popular">인기</OptionGroupItem>
      <OptionGroupItem value="new">최신</OptionGroupItem>
    </OptionGroup>
  ),
}

export const Sizes = {
  render: () => (
    <div className="flex flex-col gap-4">
      <OptionGroup defaultValue={["a"]}>
        <OptionGroupItem value="a" size="sm">Small</OptionGroupItem>
        <OptionGroupItem value="b" size="sm">Small</OptionGroupItem>
        <OptionGroupItem value="c" size="sm">Small</OptionGroupItem>
      </OptionGroup>
      <OptionGroup defaultValue={["a"]}>
        <OptionGroupItem value="a">Default</OptionGroupItem>
        <OptionGroupItem value="b">Default</OptionGroupItem>
        <OptionGroupItem value="c">Default</OptionGroupItem>
      </OptionGroup>
      <OptionGroup defaultValue={["a"]}>
        <OptionGroupItem value="a" size="lg">Large</OptionGroupItem>
        <OptionGroupItem value="b" size="lg">Large</OptionGroupItem>
        <OptionGroupItem value="c" size="lg">Large</OptionGroupItem>
      </OptionGroup>
    </div>
  ),
}

export const Disabled = {
  render: () => (
    <OptionGroup defaultValue={["all"]}>
      <OptionGroupItem value="all">전체</OptionGroupItem>
      <OptionGroupItem value="popular" disabled>인기</OptionGroupItem>
      <OptionGroupItem value="new">최신</OptionGroupItem>
    </OptionGroup>
  ),
}

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/common/ui/select";

const options = [
  { value: "apple", label: "사과" },
  { value: "banana", label: "바나나" },
  { value: "cherry", label: "체리" },
];

function BasicSelect({ variant, size, disabled, placeholder = "항목을 선택하세요" }) {
  return (
    <Select>
      <SelectTrigger variant={variant} size={size} disabled={disabled}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options.map((o) => (
            <SelectItem key={o.value} value={o.value}>
              {o.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

/** @type { import('@storybook/nextjs-vite').Meta } */
const meta = {
  title: "Common/UI/Select",
  component: SelectTrigger,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outline", "filled", "ghost"],
    },
    size: {
      control: "select",
      options: ["sm", "default", "lg"],
    },
    disabled: { control: "boolean" },
  },
  render: (args) => <BasicSelect {...args} />,
};

export default meta;

export const Default = {
  args: { variant: "default", size: "default" },
};

export const Outline = {
  args: { variant: "outline" },
};

export const Filled = {
  args: { variant: "filled" },
};

export const Ghost = {
  args: { variant: "ghost" },
};

export const Sizes = {
  render: () => (
    <div className="flex flex-col gap-3">
      <BasicSelect size="sm" placeholder="Small" />
      <BasicSelect size="default" placeholder="Default" />
      <BasicSelect size="lg" placeholder="Large" />
    </div>
  ),
};

export const AllVariants = {
  render: () => (
    <div className="flex flex-col gap-3">
      <BasicSelect variant="default" placeholder="Default" />
      <BasicSelect variant="outline" placeholder="Outline" />
      <BasicSelect variant="filled" placeholder="Filled" />
      <BasicSelect variant="ghost" placeholder="Ghost" />
    </div>
  ),
};

export const Disabled = {
  args: { disabled: true, placeholder: "비활성화 상태" },
};

export const Invalid = {
  render: () => (
    <Select>
      <SelectTrigger aria-invalid="true">
        <SelectValue placeholder="오류 상태" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options.map((o) => (
            <SelectItem key={o.value} value={o.value}>
              {o.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};

export const DestructiveItems = {
  render: () => (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="작업을 선택하세요" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="edit">편집</SelectItem>
          <SelectItem value="duplicate">복제</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectItem value="delete" variant="destructive">삭제</SelectItem>
          <SelectItem value="reset" variant="destructive">초기화</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};

export const LongText = {
  render: () => (
    <div className="w-48">
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="항목을 선택하세요" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="short">짧은 텍스트</SelectItem>
            <SelectItem value="long">매우 길고 긴 텍스트가 잘리는지 확인합니다</SelectItem>
            <SelectItem value="longer">이것은 더욱더 길고 긴 텍스트로 truncate가 올바르게 동작하는지 검증합니다</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  ),
};

export const WithGroups = {
  render: () => (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="과일을 선택하세요" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>국내산</SelectLabel>
          <SelectItem value="apple">사과</SelectItem>
          <SelectItem value="pear">배</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>수입산</SelectLabel>
          <SelectItem value="banana">바나나</SelectItem>
          <SelectItem value="mango">망고</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};

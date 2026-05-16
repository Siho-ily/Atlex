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

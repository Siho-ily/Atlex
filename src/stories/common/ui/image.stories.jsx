import { ImageIcon, Upload, UserRound } from "lucide-react"

const ImageBox = ({
  icon,
  title,
  description,
  shape = "square",
  size = "default",
}) => {
  const shapeStyle =
    shape === "circle" ? "rounded-full" : "rounded-xl"

  const sizeStyle =
    size === "wide"
      ? "h-40 w-72"
      : "h-40 w-40"

  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 border border-dashed bg-muted/30 p-4 ${shapeStyle} ${sizeStyle}`}
    >
      {icon}

      <div className="text-center">
        <p className="text-sm font-medium">{title}</p>
        <p className="text-xs text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  )
}

/** @type { import('@storybook/nextjs-vite').Meta<typeof ImageBox> } */
const meta = {
  title: "Common/UI/Image",
  component: ImageBox,
  tags: ["autodocs"],

  argTypes: {
    shape: {
      control: "select",
      options: ["square", "circle"],
    },

    size: {
      control: "select",
      options: ["default", "wide"],
    },

    title: {
      control: "text",
    },

    description: {
      control: "text",
    },
  },
}

export default meta

export const Default = {
  args: {
    icon: (
      <ImageIcon className="size-8 text-muted-foreground" />
    ),
    title: "이미지",
    description: "이미지를 추가하세요",
    shape: "square",
    size: "default",
  },
}

export const UploadBox = {
  args: {
    icon: (
      <Upload className="size-8 text-muted-foreground" />
    ),
    title: "업로드",
    description: "클릭해서 업로드",
    shape: "square",
    size: "default",
  },
}

export const Profile = {
  args: {
    icon: (
      <UserRound className="size-8 text-muted-foreground" />
    ),
    title: "프로필",
    description: "프로필 사진 등록",
    shape: "circle",
    size: "default",
  },
}

export const WideImage = {
  args: {
    icon: (
      <ImageIcon className="size-8 text-muted-foreground" />
    ),
    title: "대표 이미지",
    description: "썸네일을 추가하세요",
    shape: "square",
    size: "wide",
  },
}

export const AllTypes = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <ImageBox
        icon={
          <ImageIcon className="size-8 text-muted-foreground" />
        }
        title="기본 이미지"
        description="이미지 없음"
      />

      <ImageBox
        icon={
          <Upload className="size-8 text-muted-foreground" />
        }
        title="업로드"
        description="클릭해서 업로드"
      />

      <ImageBox
        icon={
          <UserRound className="size-8 text-muted-foreground" />
        }
        title="프로필"
        description="사진 등록"
        shape="circle"
      />

      <ImageBox
        icon={
          <ImageIcon className="size-8 text-muted-foreground" />
        }
        title="대표 이미지"
        description="썸네일 추가"
        size="wide"
      />
    </div>
  ),
}
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/common/ui/card"

import { Button } from "@/components/common/ui/button"
import { Input } from "@/components/common/ui/input"
import { Image } from "@/components/common/ui/image"
import { Field, FieldLabel } from "@/components/common/ui/field"

function ProfileSettingForm() {
  return (
    <Card className="rounded-3xl border-border/60 bg-card/80 shadow-sm backdrop-blur">
      <CardHeader>
        <CardTitle>프로필 설정</CardTitle>

        <CardDescription>
          프로필 정보와 이메일을 관리할 수 있습니다.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center">
          <Image shape="circle" size="default" />

          <div className="flex gap-3">
            <Button variant="outline">
              이미지 변경
            </Button>

            <Button variant="ghost">
              제거
            </Button>
          </div>
        </div>

        <Field>
          <FieldLabel>닉네임</FieldLabel>

          <Input
            variant="outline"
            size="lg"
            placeholder="닉네임을 입력하세요"
            defaultValue="atlex_user"
            className="h-11 rounded-xl"
          />
        </Field>

        <Field>
          <FieldLabel>이메일</FieldLabel>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Input
              variant="outline"
              size="lg"
              placeholder="이메일을 입력하세요"
              defaultValue="atlex@example.com"
              className="h-11 rounded-xl"
            />

            <Button
              type="button"
              variant="secondary"
              className="h-11 rounded-xl px-5"
            >
              인증하기
            </Button>
          </div>

          <p className="mt-2 text-sm text-muted-foreground">
            이메일 변경 시 인증 메일이 발송됩니다.
          </p>
        </Field>
      </CardContent>

      <CardFooter className="justify-end gap-3">
        <Button variant="outline">
          취소
        </Button>

        <Button>
          저장
        </Button>
      </CardFooter>
    </Card>
  )
}

export { ProfileSettingForm }
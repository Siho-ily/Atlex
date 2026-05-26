"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/common/ui/card"

import { Button } from "@/components/common/ui/button"
import { PasswordField } from "@/components/common/layout/PasswordField"

function PasswordSettingForm() {
  return (
    <Card className="rounded-3xl border-border/60 bg-card/80 shadow-sm backdrop-blur">
      <CardHeader>
        <CardTitle>비밀번호 변경</CardTitle>

        <CardDescription>
          안전한 계정 관리를 위해 비밀번호를 변경하세요.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-5">
        <PasswordField
          value=""
          onChange={() => {}}
          confirmValue=""
          onConfirmChange={() => {}}
          checks={{}}
        />
      </CardContent>

      <CardFooter className="justify-end gap-3">
        <Button variant="outline">
          취소
        </Button>

        <Button>
          변경하기
        </Button>
      </CardFooter>
    </Card>
  )
}

export { PasswordSettingForm }
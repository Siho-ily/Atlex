"use client"

import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"

import { Button } from "@/components/common/ui/button"
import { Checkbox } from "@/components/common/ui/checkbox"
import { Field, FieldGroup, FieldLabel } from "@/components/common/ui/field"
import { Input } from "@/components/common/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/common/ui/input-group"

function LoginForm() {
  const [userId, setUserId] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6">
      <FieldGroup className="gap-5">
        <Field>
          <FieldLabel>아이디</FieldLabel>

          <Input
            type="text"
            variant="outline"
            size="lg"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            placeholder="아이디를 입력하세요"
            className="h-10 rounded-lg"
          />
        </Field>

        <Field>
          <FieldLabel>비밀번호</FieldLabel>

          <InputGroup variant="outline" className="h-10 rounded-lg">
            <InputGroupInput
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호를 입력하세요"
            />

            <InputGroupAddon align="inline-end">
              <InputGroupButton
                type="button"
                size="icon-xs"
                onClick={() => setShowPassword((v) => !v)}
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
        </Field>

        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 text-sm text-foreground">
            <Checkbox />
            아이디 저장
          </label>

          <div className="flex items-center gap-2 text-sm">
            <button
              type="button"
              className="font-semibold text-primary hover:underline"
            >
              아이디 찾기
            </button>

            <span className="text-muted-foreground">|</span>

            <button
              type="button"
              className="font-semibold text-primary hover:underline"
            >
              비밀번호 초기화
            </button>
          </div>
        </div>

        <Button
          type="submit"
          className="h-10 w-full rounded-lg text-sm font-bold"
        >
          로그인
        </Button>

        <p className="border-t border-border/60 pt-5 text-center text-sm text-muted-foreground">
          아직 계정이 없으신가요?{" "}
          <button
            type="button"
            className="font-semibold text-primary hover:underline"
          >
            회원가입
          </button>
        </p>
      </FieldGroup>
    </form>
  )
}

export { LoginForm }
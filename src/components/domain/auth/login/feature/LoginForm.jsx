"use client"

import { Button } from "@/components/common/ui/button"
import { Input } from "@/components/common/ui/input"
import { Label } from "@/components/common/ui/label"
import { Checkbox } from "@/components/common/ui/checkbox"
import Link from "next/link"

export default function LoginForm() {
  return (
    <form className="space-y-8">

      {/* 아이디 */}
      <div className="rounded-[20px] border border-border bg-card p-8 shadow-sm">
        <Label
          htmlFor="userId"
          className="mb-5 block font-serif text-2xl font-bold text-card-foreground"
        >
          아이디
        </Label>

        <Input
          id="userId"
          name="userId"
          type="text"
          placeholder="아이디를 입력하세요"
          className="h-16 rounded-2xl border-border bg-background px-6 font-serif text-xl"
        />
      </div>

      {/* 비밀번호 */}
      <div className="rounded-[20px] border border-border bg-card p-8 shadow-sm">
        <Label
          htmlFor="password"
          className="mb-5 block font-serif text-2xl font-bold text-card-foreground"
        >
          비밀번호
        </Label>

        <Input
          id="password"
          name="password"
          type="password"
          placeholder="비밀번호를 입력하세요"
          className="h-16 rounded-2xl border-border bg-background px-6 font-serif text-xl"
        />
      </div>

      {/* 옵션 */}
      <div className="flex items-center justify-between px-2">
        <div className="flex items-center gap-3">
          <Checkbox id="remember" />

          <Label
            htmlFor="remember"
            className="font-serif text-lg text-muted-foreground"
          >
            아이디 저장
          </Label>
        </div>

        <Button
          type="button"
          variant="link"
          className="font-serif text-lg text-primary hover:underline"
        >
          비밀번호 찾기
        </Button>
      </div>

      {/* 로그인 버튼 */}
      <Button
        type="submit"
        className="h-16 w-full rounded-2xl text-2xl font-bold"
      >
        로그인
      </Button>

      {/* 회원가입 */}
      <p className="text-center font-serif text-lg text-muted-foreground">
        아직 회원이 아니신가요?{" "}
        <Button
          type="button"
          variant="link"
          className="font-bold text-primary hover:underline"
        >
          <Link href="/signup-page" className="font-bold text-primary hover:underline">
            회원가입
          </Link>
        </Button>
      </p>
    </form>
  )
}
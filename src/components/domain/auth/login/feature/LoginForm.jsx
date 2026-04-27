"use client"

import { Button } from "@/components/common/ui/button"
import { Input } from "@/components/common/ui/input"
import { Label } from "@/components/common/ui/label"
import { Checkbox } from "@/components/common/ui/checkbox"

export default function LoginForm() {
  return (
    <form className="space-y-8">
      
      {/* 아이디 */}
      <section className="rounded-[20px] border border-border bg-card p-8 shadow-sm">
        <Label
          htmlFor="userId"
          className="mb-5 block font-serif text-2xl font-bold text-card-foreground"
        >
          아이디
        </Label>

        <Input
          id="userId"
          type="text"
          placeholder="아이디를 입력하세요"
          className="h-16 rounded-2xl border-border bg-background px-6 font-serif text-xl"
        />
      </section>

      {/* 비밀번호 */}
      <section className="rounded-[20px] border border-border bg-card p-8 shadow-sm">
        <Label
          htmlFor="password"
          className="mb-5 block font-serif text-2xl font-bold text-card-foreground"
        >
          비밀번호
        </Label>

        <Input
          id="password"
          type="password"
          placeholder="비밀번호를 입력하세요"
          className="h-16 rounded-2xl border-border bg-background px-6 font-serif text-xl"
        />
      </section>

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

        <button
          type="button"
          className="font-serif text-lg text-primary hover:underline"
        >
          비밀번호 찾기
        </button>
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
        <button
          type="button"
          className="font-bold text-primary hover:underline"
        >
          회원가입
        </button>
      </p>
    </form>
  )
}
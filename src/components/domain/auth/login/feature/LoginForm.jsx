"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/common/ui/button"
import { Checkbox } from "@/components/common/ui/checkbox"
import { FieldGroup } from "@/components/common/ui/field"
import { UserIdField } from "@/components/common/layout/UserIdField"
import { PasswordField } from "@/components/common/layout/PasswordField"

import { loginApi } from "@/lib/api/auth"
import { fetchUserByIdentifier } from "@/lib/api/users"
import { useAuthStore } from "@/store/authStore"

function LoginForm({ onSwitchMode }) {
  const router = useRouter()
  const login = useAuthStore((s) => s.login)

  const [userId, setUserId] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      const { accessToken } = await loginApi({ userId, password })
      const user = await fetchUserByIdentifier(userId)
      login({ user, accessToken })
      router.push("/")
    } catch (err) {
      setError(err.message ?? "로그인에 실패했습니다.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6">
      <FieldGroup className="gap-5">
        <UserIdField
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          showCheckButton={false}
        />

        <PasswordField
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          showConfirm={false}
          showChecks={false}
        />

        {error && (
          <p className="text-sm text-destructive">{error}</p>
        )}

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
          disabled={loading}
          className="h-10 w-full rounded-lg text-sm font-bold"
        >
          {loading ? "로그인 중..." : "로그인"}
        </Button>

        <p className="border-t border-border/60 pt-5 text-center text-sm text-muted-foreground">
          아직 계정이 없으신가요?{" "}
          <button
            type="button"
            onClick={onSwitchMode}
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

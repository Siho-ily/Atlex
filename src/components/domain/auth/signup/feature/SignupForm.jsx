"use client"

import { useState } from "react"

import { Button } from "@/components/common/ui/button"
import { FieldGroup } from "@/components/common/ui/field"

import { UserIdField } from "@/components/common/layout/UserIdField"
import { EmailField } from "@/components/common/layout/EmailField"
import { PasswordField } from "@/components/common/layout/PasswordField"
import { NicknameField } from "@/components/common/layout/NicknameField"

function SignupForm() {
  const [userId, setUserId] = useState("")
  const [nickname, setNickname] = useState("")

  const [emailLocal, setEmailLocal] = useState("")
  const [emailDomain, setEmailDomain] = useState("")
  const [selectedDomain, setSelectedDomain] = useState("")

  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const [userIdCheck, setUserIdCheck] = useState(null)
  const [nicknameCheck, setNicknameCheck] = useState(null)

  const passwordChecks = {
    length: password.length >= 10,
    lower: /[a-z]/.test(password),
    upper: /[A-Z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[^A-Za-z0-9]/.test(password),
  }

  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6">
      <FieldGroup className="gap-4">
        <UserIdField
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          onCheckDuplicate={() =>
            setUserIdCheck({
              ok: true,
              message: "사용 가능한 아이디입니다.",
            })
          }
          checkResult={userIdCheck}
        />

        <EmailField
          localValue={emailLocal}
          domainValue={emailDomain}
          selectedDomain={selectedDomain}
          onLocalChange={(e) => setEmailLocal(e.target.value)}
          onDomainChange={(e) => setEmailDomain(e.target.value)}
          onSelectedDomainChange={setSelectedDomain}
        />

        <PasswordField
          value={password}
          confirmValue={confirmPassword}
          onChange={(e) => setPassword(e.target.value)}
          onConfirmChange={(e) => setConfirmPassword(e.target.value)}
          checks={passwordChecks}
        />

        <NicknameField
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          onCheckDuplicate={() =>
            setNicknameCheck({
              ok: true,
              message: "사용 가능한 닉네임입니다.",
            })
          }
          checkResult={nicknameCheck}
        />

        <div className="flex gap-3 pt-2">
          <Button
            type="button"
            variant="outline"
            className="h-10 flex-1 rounded-lg text-sm font-bold"
          >
            뒤로가기
          </Button>

          <Button
            type="submit"
            className="h-10 flex-1 rounded-lg text-sm font-bold"
          >
            회원가입
          </Button>
        </div>

        <p className="pt-1 text-center text-sm text-muted-foreground">
          이미 계정이 있으신가요?{" "}
          <button
            type="button"
            className="font-semibold text-primary hover:underline"
          >
            로그인
          </button>
        </p>
      </FieldGroup>
    </form>
  )
}

export { SignupForm }
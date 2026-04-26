"use client"

import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"

import { Field, FieldLabel, FieldError } from "@/components/common/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/common/ui/input-group"

const PASSWORD_CHECKS = [
  { key: "length", label: "10자 이상" },
  { key: "lower", label: "소문자" },
  { key: "upper", label: "대문자" },
  { key: "number", label: "숫자" },
  { key: "special", label: "특수문자" },
]

export function PasswordField({
  value,
  onChange,
  confirmValue,
  onConfirmChange,
  checks,
  error,
}) {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)

  const passwordMatch = confirmValue?.length > 0 && value === confirmValue
  const passwordMismatch = confirmValue?.length > 0 && value !== confirmValue

  return (
    <Field data-invalid={!!error || undefined}>
      <FieldLabel>비밀번호</FieldLabel>

      <div className="flex flex-col gap-2">
        <InputGroup variant="outline">
          <InputGroupInput
            type={showPassword ? "text" : "password"}
            value={value}
            onChange={onChange}
            placeholder="비밀번호 입력"
            aria-invalid={!!error || undefined}
          />
          <InputGroupAddon align="inline-end">
            <InputGroupButton onClick={() => setShowPassword((v) => !v)}>
              {showPassword ? <EyeOff /> : <Eye />}
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>

        <InputGroup
          variant="outline"
          className={
            passwordMatch
              ? "border-green-500 focus-within:border-green-500 focus-within:ring-green-500/50"
              : undefined
          }
        >
          <InputGroupInput
            type={showConfirm ? "text" : "password"}
            value={confirmValue}
            onChange={onConfirmChange}
            placeholder="비밀번호 확인"
            aria-invalid={passwordMismatch || undefined}
          />
          <InputGroupAddon align="inline-end">
            <InputGroupButton onClick={() => setShowConfirm((v) => !v)}>
              {showConfirm ? <EyeOff /> : <Eye />}
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>

      {checks && (
        <ul className="flex flex-wrap gap-3 text-xs">
          {PASSWORD_CHECKS.map(({ key, label }) => (
            <li
              key={key}
              className={`flex w-auto shrink-0 items-center gap-1 ${checks[key] ? "text-green-600" : "text-destructive"}`}
            >
              <span aria-hidden="true">•</span>
              {label}
            </li>
          ))}
        </ul>
      )}

      {error && <FieldError>{error}</FieldError>}
    </Field>
  )
}

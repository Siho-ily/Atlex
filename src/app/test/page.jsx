"use client"

import { EmailField } from "@/components/common/layout/EmailField";
import { NicknameField } from "@/components/common/layout/NicknameField";
import { PasswordField } from "@/components/common/layout/PasswordField";
import { UserIdField } from "@/components/common/layout/UserIdField";
import { useState } from "react";

export default function Test() {
    return (
        <div className="flex flex-col space-y-10">
            <UserIdTest />
            <NicknameTest />
            <PasswordTest />
            <EmailTest />
        </div>
    )
}

function EmailTest() {
    // 이메일
    const [localValue, setLocalValue] = useState("")
    const [domainValue, setDomainValue] = useState("")
    const [selectedDomain, setSelectedDomain] = useState("")

    return (
        <div className="w-4/6">
            <EmailField
                localValue={localValue}
                domainValue={domainValue}
                onLocalChange={(e) => setLocalValue(e.target.value)}
                onDomainChange={(e) => setDomainValue(e.target.value)}
                selectedDomain={selectedDomain}
                onSelectedDomainChange={(value) => setSelectedDomain(value)}
                error="" // 만약 값이 있으면 error 형식으로 표시됨
            />
        </div>
    )
}

function PasswordTest() {
    // 비밀번호
    const [passwordValue, setPasswordValue] = useState("")
    const [confirmValue, setConfirmValue] = useState("")
    const [checks, setChecks] = useState({
        length: false,
        lower: false,
        upper: false,
        number: false,
        special: false,
    })

    const checkPassword = (value) => {
        setChecks({
            length: value.length >= 10,
            lower: /[a-z]/.test(value),
            upper: /[A-Z]/.test(value),
            number: /[0-9]/.test(value),
            special: /[^a-zA-Z0-9]/.test(value),
        })
    }

    return (
        <div className="w-4/6">
            <PasswordField
                value={passwordValue}
                onChange={(e) => setPasswordValue(e.target.value)}
                confirmValue={passwordValue}
                checks={checks}
                onConfirmChange={(e) => setPasswordValue(e.target.value)}
                error=""
            />
        </div>
    )
}

function NicknameTest() {
    // 닉네임
    const [draftValue, setDraftValue] = useState("")   // 입력 중 표시값
    const [nicknameValue, setNicknameValue] = useState("") // blur 시 커밋된 값
    const [checkResult, setCheckResult] = useState(null)
    /*
    checkResult = {
        ok: boolean,
        message: string
    } or null
    */

    const checkDuplicate = () => {
        const val = draftValue
        setNicknameValue(val)

        if (val === "") {
            setCheckResult(null)
            return
        }
        if (val === "admin") {
            setCheckResult({ ok: false, message: "이미 사용중인 닉네임입니다." })
            return
        }
        // ...
        setCheckResult({ ok: true, message: "사용가능한 닉네임입니다." })
    }

    const onBlur = (e) => {
        if (e.target.value.length > 10) {
            setCheckResult({ ok: false, message: "닉네임은 10자 이내로 입력해주세요." })
            return;
        }

        setNicknameValue(e.target.value) // blur 시에만 커밋
    }

    return (
        <div className="w-4/6">
            <NicknameField
                value={draftValue}
                onChange={(e) => setDraftValue(e.target.value)}
                onBlur={onBlur}
                onCheckDuplicate={checkDuplicate}
                checkResult={checkResult}
                error={null}
            />
        </div>
    )
}

function UserIdTest() {
    // 아이디
    const [draftValue, setDraftValue] = useState("")   // 입력 중 표시값
    const [userIdValue, setUserIdValue] = useState("") // blur 시 커밋된 값
    const [checkResult, setCheckResult] = useState(null)
    /*
    checkResult = {
        ok: boolean,
        message: string
    } or null
    */

    const checkDuplicate = () => {
        if (userIdValue === "") {
            setCheckResult(null)
            return
        }
        if (userIdValue === "admin") {
            setCheckResult({ ok: false, message: "이미 사용중인 아이디입니다." })
            return
        }
        // ...
        setCheckResult({ ok: true, message: "사용가능한 아이디입니다." })
    }

    const onBlur = (e) => {
        setUserIdValue(e.target.value) // blur 시에만 커밋
        setCheckResult(null)           // 새로 입력하면 중복확인 초기화
    }

    return (
        <div className="w-4/6">
            <UserIdField
                value={draftValue}
                onChange={(e) => setDraftValue(e.target.value)}
                onBlur={onBlur}
                onCheckDuplicate={checkDuplicate}
                checkResult={checkResult}
                disabled={checkResult?.ok || false}
            />
        </div>
    )
}
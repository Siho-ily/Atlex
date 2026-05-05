"use client"

import { Input } from "@/components/common/ui/input"
import { Label } from "@/components/common/ui/label"
import { Button } from "@/components/common/ui/button"
import { Switch } from "@/components/common/ui/switch"

import OptionSection from "../layout/OptionSection"

export default function OptionForm() {
  return (
    <form className="space-y-10">

      {/* 👤 프로필 설정 */}
      <OptionSection title="프로필 설정">
        <div className="flex items-center gap-8">

          <div className="h-28 w-28 rounded-full bg-muted flex items-center justify-center text-xl font-bold text-muted-foreground">
            IMG
          </div>

          <div className="space-y-3">
            <Button variant="secondary">사진 변경</Button>
            <p className="text-sm text-muted-foreground">
              JPG, PNG 파일 업로드 가능
            </p>
          </div>

        </div>

        <div className="mt-8 space-y-4">
          <Label>닉네임</Label>
          <Input placeholder="닉네임 입력" />

          <Label className="mt-4">이메일</Label>
          <Input placeholder="email@example.com" />
        </div>
      </OptionSection>

      {/* 📝 블로그 설정 */}
      <OptionSection title="블로그 설정">
        <div className="space-y-5">
          <div>
            <Label>블로그 이름</Label>
            <Input placeholder="내 블로그 이름" />
          </div>

          <div>
            <Label>한줄 소개</Label>
            <Input placeholder="블로그 소개를 입력하세요" />
          </div>

          <div className="flex items-center justify-between pt-4">
            <span className="text-lg font-medium">공개 여부</span>
            <Switch />
          </div>
        </div>
      </OptionSection>

      {/* 🔔 알림 설정 */}
      <OptionSection title="알림 설정">
        <div className="flex items-center justify-between">
          <span className="text-lg font-medium">이메일 알림 받기</span>
          <Switch />
        </div>
      </OptionSection>

      {/* 🔐 계정 관리 */}
      <OptionSection title="계정 관리">
        <div className="space-y-4">

          <Button variant="secondary" className="w-full">
            비밀번호 변경
          </Button>

          <Button variant="outline" className="w-full">
            로그아웃
          </Button>

          <Button variant="destructive" className="w-full">
            회원 탈퇴
          </Button>

        </div>
      </OptionSection>

      {/* 저장 버튼 */}
      <Button className="w-full h-14 text-xl font-bold rounded-xl">
        변경사항 저장
      </Button>

    </form>
  )
}
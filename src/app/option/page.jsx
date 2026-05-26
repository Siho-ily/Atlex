"use client"

import { useState } from "react"

import { OptionSidebar } from "@/components/domain/option/layout/OptionSidebar"
import { OptionContent } from "@/components/domain/option/layout/OptionContent"

export default function Page() {
  const [activeMenu, setActiveMenu] = useState("profile")

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,#eef4ff,white_45%)]">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8 lg:px-10">
        <header className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-primary text-sm font-bold text-primary-foreground">
              A
            </div>

            <div>
              <h1 className="text-xl font-extrabold tracking-tight text-foreground">
                ATLEX
              </h1>

              <p className="text-sm text-muted-foreground">
                계정 설정
              </p>
            </div>
          </div>

          <button
            type="button"
            className="text-sm font-semibold text-primary hover:underline"
          >
            블로그로 돌아가기
          </button>
        </header>

        <div className="grid flex-1 grid-cols-1 gap-6 lg:grid-cols-[260px_1fr]">
          <OptionSidebar
            activeMenu={activeMenu}
            onChangeMenu={setActiveMenu}
          />

          <OptionContent activeMenu={activeMenu} />
        </div>
      </div>
    </main>
  )
}
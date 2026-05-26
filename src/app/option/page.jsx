"use client"

import { useState } from "react"

import Header from "@/components/common/layout/Header"
import { OptionSidebar } from "@/components/domain/option/layout/OptionSidebar"
import { OptionContent } from "@/components/domain/option/layout/OptionContent"

export default function Page() {
  const [activeMenu, setActiveMenu] = useState("profile")

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,var(--muted),var(--background)_45%)]">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 lg:px-10">
        <Header />

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
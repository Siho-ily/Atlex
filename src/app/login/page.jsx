import { LoginHero } from "@/components/domain/auth/login/layout/LoginHero"
import { LoginCard } from "@/components/domain/auth/login/layout/LoginCard"
import Header from "@/components/common/layout/Header"

export default function Page() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,var(--muted),var(--background)_45%)]">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 lg:px-10">
        <Header />

        <div className="grid flex-1 grid-cols-1 items-center gap-14 py-8 lg:grid-cols-[1.05fr_480px]">
          <LoginHero />
          <LoginCard />
        </div>
      </div>
    </main>
  )
}

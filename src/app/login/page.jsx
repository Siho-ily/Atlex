import { LoginHero } from "@/components/domain/auth/login/layout/LoginHero"
import { LoginCard } from "@/components/domain/auth/login/layout/LoginCard"

export default function Page() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,#eef4ff,white_45%)]">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 lg:px-10">
        <header className="flex h-16 shrink-0 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex size-9 items-center justify-center rounded-xl bg-primary text-sm font-bold text-primary-foreground">
              A
            </div>

            <span className="text-xl font-extrabold tracking-tight text-foreground">
              ATLEX
            </span>
          </div>

          <button
            type="button"
            className="text-sm font-semibold text-primary hover:underline"
          >
            회원가입
          </button>
        </header>

        <div className="grid flex-1 grid-cols-1 items-center gap-14 py-8 lg:grid-cols-[1.05fr_480px]">
          <LoginHero />
          <LoginCard />
        </div>
      </div>
    </main>
  )
}
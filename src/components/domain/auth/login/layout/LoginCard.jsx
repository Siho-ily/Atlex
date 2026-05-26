import { LoginLogo } from "@/components/domain/auth/login/feature/LoginLogo"
import { LoginForm } from "@/components/domain/auth/login/feature/LoginForm"

import { Textfield } from "@/components/common/ui/textfield"

function LoginCard() {
  return (
    <section className="flex items-center justify-center py-6">
      <div className="w-full rounded-3xl border border-border/60 bg-background p-6 lg:p-8">
        <LoginLogo />

        <div className="mt-6 border-b border-border/60 pb-5">
          <h2 className="text-2xl font-black tracking-tight text-foreground">
            로그인
          </h2>

          <Textfield variant="muted" size="sm" className="mt-2 leading-6">
            Atlex 계정으로 로그인하고 더 많은 기능을 이용해보세요.
          </Textfield>
        </div>

        <LoginForm />
      </div>
    </section>
  )
}

export { LoginCard }
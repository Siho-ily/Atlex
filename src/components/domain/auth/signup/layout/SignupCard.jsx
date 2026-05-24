import { SignupLogo } from "@/components/domain/auth/signup/feature/SignupLogo"
import { SignupForm } from "@/components/domain/auth/signup/feature/SignupForm"

import { Textfield } from "@/components/common/ui/textfield"

function SignupCard() {
  return (
    <section className="flex items-center justify-center py-6">
      <div className="w-full rounded-3xl border border-border/60 bg-background p-6 lg:p-7">
        <SignupLogo />

        <div className="mt-6 border-b border-border/60 pb-5">
          <h2 className="text-2xl font-black tracking-tight text-foreground">
            회원가입
          </h2>

          <Textfield
            variant="muted"
            size="sm"
            className="mt-2 leading-6"
          >
            Atlex 계정을 생성하고
            그래프 기반 블로그를 시작해보세요.
          </Textfield>
        </div>

        <SignupForm />
      </div>
    </section>
  )
}

export { SignupCard }
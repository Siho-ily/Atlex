import { Textfield } from "@/components/common/ui/textfield"

function SignupLogo() {
  return (
    <div className="flex items-center gap-3 lg:hidden">
      <div className="flex size-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground font-bold shadow-lg">
        A
      </div>

      <Textfield size="xl" weight="bold" className="tracking-tight">
        ATLEX
      </Textfield>
    </div>
  )
}

export { SignupLogo }
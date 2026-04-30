import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/common/ui/card"

import LoginHeader from "./LoginHeader"
import LoginForm from "../feature/LoginForm"

export default function LoginCard() {
  return (
    <Card className="w-full max-w-[760px] rounded-[28px] border-border bg-card shadow-xl">
      <CardHeader className="pt-12 pb-10">
        <LoginHeader />
      </CardHeader>

      <CardContent className="px-12 pb-14">
        <div className="rounded-[24px] border border-primary/40 bg-primary/10 p-10">
          <LoginForm />
        </div>
      </CardContent>
    </Card>
  )
}
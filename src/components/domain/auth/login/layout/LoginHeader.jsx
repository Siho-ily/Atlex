import LoginLogo from "./LoginLogo"

export default function LoginHeader() {
  return (
    <div className="flex flex-col items-center text-center">
      <LoginLogo />

      <h1 className="mt-12 font-serif text-5xl font-bold text-foreground">
        로그인
      </h1>

      <p className="mt-5 font-serif text-xl text-muted-foreground">
        아이디와 비밀번호를 입력해서 로그인해주세요.
      </p>
    </div>
  )
}
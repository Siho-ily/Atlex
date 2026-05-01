// 공통 레이아웃 래퍼
export default function BlogHomeContainer({ children }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* 최대 너비 + 내부 여백 */}
      <div className="mx-auto w-full max-w-[1720px] px-4 py-8 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  );
}

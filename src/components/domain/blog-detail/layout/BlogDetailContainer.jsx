export default function BlogDetailContainer({ children }) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="relative mx-auto w-full max-w-[1560px] px-5 pb-24 pt-5 sm:px-8 lg:px-10">
        {children}
      </div>
    </main>
  );
}

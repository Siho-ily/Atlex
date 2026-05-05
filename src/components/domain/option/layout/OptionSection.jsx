export default function OptionSection({ title, children }) {
  return (
    <section className="rounded-2xl border border-border bg-card p-8 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold text-card-foreground">
        {title}
      </h2>
      {children}
    </section>
  )
}
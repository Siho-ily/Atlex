export default function PostEditorHeader({ pageTitle, viewportLabel }) {
  return (
    <header className="mb-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          {pageTitle}
        </h1>
        <p className="text-xl font-semibold text-slate-500">{viewportLabel}</p>
      </div>
    </header>
  );
}

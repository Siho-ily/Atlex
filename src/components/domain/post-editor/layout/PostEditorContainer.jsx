export default function PostEditorContainer({ children }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto w-full max-w-[1520px] px-4 py-8 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  );
}

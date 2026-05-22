// [Layout] 페이지 전체 배경과 최대 너비 제한을 담당하는 최외곽 래퍼
export default function PostEditorContainer({ children }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto w-full max-w-[1520px] px-4 py-8 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  );
}

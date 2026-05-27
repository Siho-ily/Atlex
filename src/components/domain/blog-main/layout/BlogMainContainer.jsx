export default function BlogMainContainer({ children }) {
  // 데스크톱에서는 여백을 넉넉하게 유지하고, 작은 화면에서는 패딩을 보존합니다.
  return (
    <div className="mx-auto w-full max-w-[1680px] px-5 pb-12 pt-7 sm:px-8 lg:px-10">
      {children}
    </div>
  );
}

// client 컴포넌트용 비동기 조회 헬퍼.
// TanStack Query `useQuery` 와 동일한 반환 shape({ data, isLoading, error, refetch }) 로 두어,
// 추후 라이브러리 도입 시 이 파일만 삭제하고 import 만 교체하면 호출부 변경이 거의 없도록 한다.

'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

// useAsync(asyncFn, deps, options)
//   asyncFn: () => Promise<T> — fetch 함수. deps 가 바뀔 때마다 새로 호출된다.
//   deps:    의존성 배열. useEffect 와 동일 규칙.
//   options.enabled:     false 면 fetch 를 미루고 data/loading 모두 초기 상태 유지.
//   options.initialData: 첫 렌더 시 data 시드값. SSR hydration 용도.
// 반환: { data, isLoading, error, refetch }
//   refetch 는 deps 가 변하지 않아도 수동으로 다시 부르고 싶을 때 사용.
export function useAsync(asyncFn, deps = [], { enabled = true, initialData } = {}) {
  const [data, setData] = useState(initialData);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // unmount 이후 setState 가 호출되지 않도록 cancel flag 를 ref 로 관리한다.
  // (StrictMode 의 double-invoke, 빠른 deps 변경에서 race condition 방지)
  const cancelledRef = useRef(false);

  const run = useCallback(async () => {
    if (!enabled) return;
    cancelledRef.current = false;
    setIsLoading(true);
    setError(null);
    try {
      const result = await asyncFn();
      if (!cancelledRef.current) setData(result);
    } catch (err) {
      if (!cancelledRef.current) setError(err);
    } finally {
      if (!cancelledRef.current) setIsLoading(false);
    }
    // asyncFn 은 deps 가 정한 시점에만 새로 생성되도록 호출부가 책임진다.
    // 여기서 asyncFn 을 deps 에 넣으면 매 렌더마다 fetch 가 도는 사고가 잘 난다.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled, ...deps]);

  useEffect(() => {
    run();
    return () => {
      cancelledRef.current = true;
    };
  }, [run]);

  return { data, isLoading, error, refetch: run };
}

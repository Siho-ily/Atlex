// client 컴포넌트용 mutation 헬퍼.
// TanStack Query `useMutation` 과 동일한 반환 shape({ mutate, mutateAsync, isPending, error, data, reset }) 로 두어,
// 추후 라이브러리 도입 시 이 파일만 삭제하고 import 만 교체하면 호출부 변경이 거의 없도록 한다.

'use client';

import { useCallback, useRef, useState } from 'react';

// useMutation(mutationFn, options)
//   mutationFn: (variables) => Promise<T>
//   options.onSuccess: (data, variables) => void
//   options.onError:   (error, variables) => void
// 반환:
//   mutate(variables)      — fire-and-forget. 결과는 콜백/상태로 받는다.
//   mutateAsync(variables) — Promise 반환. await 가능. throw 도 그대로 전파.
//   isPending, error, data — 마지막 호출의 상태.
//   reset()                — 상태 초기화 (에러/데이터 클리어).
export function useMutation(mutationFn, { onSuccess, onError } = {}) {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(undefined);

  // unmount 이후 setState 방지.
  const cancelledRef = useRef(false);

  const execute = useCallback(
    async (variables) => {
      cancelledRef.current = false;
      setIsPending(true);
      setError(null);
      try {
        const result = await mutationFn(variables);
        if (!cancelledRef.current) {
          setData(result);
          setIsPending(false);
        }
        onSuccess?.(result, variables);
        return result;
      } catch (err) {
        if (!cancelledRef.current) {
          setError(err);
          setIsPending(false);
        }
        onError?.(err, variables);
        throw err;
      }
    },
    [mutationFn, onSuccess, onError],
  );

  // mutate 는 throw 를 삼킨다. 호출부에서 try/catch 가 필요 없는 fire-and-forget 용도.
  // mutateAsync 는 throw 를 그대로 전파해 await 패턴을 지원한다.
  const mutate = useCallback(
    (variables) => {
      execute(variables).catch(() => {});
    },
    [execute],
  );

  const reset = useCallback(() => {
    setError(null);
    setData(undefined);
    setIsPending(false);
  }, []);

  return { mutate, mutateAsync: execute, isPending, error, data, reset };
}

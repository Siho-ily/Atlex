import { NextResponse } from 'next/server';

export function proxy(request) {
  const pathname = request.nextUrl.pathname;

  if (pathname.startsWith('/@')) {
    const url = request.nextUrl.clone();
    url.pathname = '/' + pathname.slice(2);
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};

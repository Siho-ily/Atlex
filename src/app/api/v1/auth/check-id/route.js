import { NextResponse } from "next/server";

/**
 * 아이디 중복 여부를 확인하는 API 라우트
 *
 * 이 라우트는 클라이언트 요청을 백엔드 서버의
 * 아이디 중복확인 API로 전달한다.
 */
export async function POST(req) {
    try {
        const body = await req.json();
        const { userId } = body;

        if (!userId) {
            return NextResponse.json(
                { message: "아이디를 입력하세요." },
                { status: 400 }
            );
        }

        const backendResponse = await fetch(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/auth/check-id`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ userId }),
                cache: "no-store",
            }
        );

        const data = await backendResponse.json().catch(() => ({}));

        if (!backendResponse.ok) {
            return NextResponse.json(
                {
                    message: data.message || "이미 사용 중인 아이디입니다.",
                },
                { status: backendResponse.status }
            );
        }

        return NextResponse.json(
            {
                message: data.message || "사용 가능한 아이디입니다.",
                data,
            },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { message: "아이디 확인 중 서버 오류가 발생했습니다." },
            { status: 500 }
        );
    }
}
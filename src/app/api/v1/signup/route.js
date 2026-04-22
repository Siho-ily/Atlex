import { NextResponse } from "next/server";
import { createApiUrl } from "@/lib/api/baseUrl";

/**
 * 회원가입 요청을 처리하는 API 라우트
 *
 * 이 라우트는 실제 회원가입 로직을 직접 처리하지 않고
 * 백엔드 서버로 요청을 전달하는 프록시 역할을 수행한다.
 */
export async function POST(req) {
    try {
        const body = await req.json();
        const { userId, password, name, email } = body;

        if (!userId || !password || !name || !email) {
            return NextResponse.json(
                { message: "필수값이 누락되었습니다." },
                { status: 400 }
            );
        }

        // BASE_API_URL에는 /api/v1까지 포함되어 있으므로 endpoint만 넘긴다.
        const backendResponse = await fetch(
            createApiUrl("/auth/signup"),
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userId,
                    password,
                    name,
                    email,
                }),
                cache: "no-store",
            }
        );

        const data = await backendResponse.json().catch(() => ({}));

        if (!backendResponse.ok) {
            return NextResponse.json(
                {
                    message: data.message || "회원가입에 실패했습니다.",
                },
                { status: backendResponse.status }
            );
        }

        return NextResponse.json(
            {
                message: data.message || "회원가입이 완료되었습니다.",
                data,
            },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { message: "회원가입 처리 중 서버 오류가 발생했습니다." },
            { status: 500 }
        );
    }
}

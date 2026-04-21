import { NextResponse } from "next/server";
import { createApiUrl } from "@/lib/api/baseUrl";

/**
 * 닉네임 중복 여부를 확인하는 API 라우트
 *
 * 이 라우트는 클라이언트 요청을 백엔드 서버의
 * 닉네임 중복확인 API로 전달한다.
 */
export async function POST(req) {
    try {
        const body = await req.json();
        const { nickname } = body;

        if (!nickname) {
            return NextResponse.json(
                { message: "닉네임을 입력하세요." },
                { status: 400 }
            );
        }

        // BASE_API_URL에는 /api/v1까지 포함되어 있으므로 endpoint만 넘긴다.
        const backendResponse = await fetch(
            createApiUrl("/auth/check-nickname"),
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ nickname }),
                cache: "no-store",
            }
        );

        const data = await backendResponse.json().catch(() => ({}));

        if (!backendResponse.ok) {
            return NextResponse.json(
                {
                    message: data.message || "이미 사용 중인 닉네임입니다.",
                },
                { status: backendResponse.status }
            );
        }

        return NextResponse.json(
            {
                message: data.message || "사용 가능한 닉네임입니다.",
                data,
            },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { message: "닉네임 확인 중 서버 오류가 발생했습니다." },
            { status: 500 }
        );
    }
}

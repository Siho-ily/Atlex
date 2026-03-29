import { NextResponse } from "next/server";
import mockUsers from "@/data/mockusers.json";

/**
 * 닉네임 중복확인 API
 * - 전달받은 nickname이 이미 존재하는지 검사
 */
export async function POST(req) {
    try {
        const body = await req.json();
        const nickname = body?.nickname?.trim()?.toLowerCase();

        // 닉네임이 비어있으면 실패 응답
        if (!nickname) {
            return NextResponse.json(
                {
                    success: false,
                    type: "empty",
                    message: "닉네임을 입력하세요.",
                },
                { status: 400 }
            );
        }

        // mockUsers에 같은 name이 있는지 검사
        const isDuplicate = mockUsers.some(
            (user) => user.name?.trim()?.toLowerCase() === nickname
        );

        return NextResponse.json(
            {
                success: true,
                type: isDuplicate ? "duplicate" : "ok",
                message: isDuplicate
                    ? "이미 사용중인 닉네임입니다."
                    : "사용 가능한 닉네임입니다.",
            },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                type: "error",
                message: "닉네임 중복확인 중 오류가 발생했습니다.",
            },
            { status: 500 }
        );
    }
}
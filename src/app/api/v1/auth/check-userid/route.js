import { NextResponse } from "next/server";
import mockUsers from "@/data/mockusers.json";

/**
 * 아이디 중복확인 API
 * - 전달받은 userId가 이미 존재하는지 검사
 */
export async function POST(req) {
    try {
        const body = await req.json();
        const userId = body?.userId?.trim()?.toLowerCase();

        // 아이디가 비어있으면 실패 응답
        if (!userId) {
            return NextResponse.json(
                {
                    success: false,
                    type: "empty",
                    message: "아이디를 입력하세요.",
                },
                { status: 400 }
            );
        }

        // mockUsers에 같은 user_id가 있는지 검사
        const isDuplicate = mockUsers.some(
            (user) => user.user_id?.trim()?.toLowerCase() === userId
        );

        // 중복이면 duplicate, 아니면 ok 반환
        return NextResponse.json(
            {
                success: true,
                type: isDuplicate ? "duplicate" : "ok",
                message: isDuplicate
                    ? "이미 사용중인 아이디입니다."
                    : "사용 가능한 아이디입니다.",
            },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                type: "error",
                message: "아이디 중복확인 중 오류가 발생했습니다.",
            },
            { status: 500 }
        );
    }
}
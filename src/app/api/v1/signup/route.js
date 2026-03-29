import { NextResponse } from "next/server";
import mockUsers from "@/data/mockusers.json";

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

        const idExists = mockUsers.some((user) => user.user_id === userId);
        if (idExists) {
            return NextResponse.json(
                { message: "이미 사용 중인 아이디입니다." },
                { status: 409 }
            );
        }

        const nameExists = mockUsers.some((user) => user.name === name);
        if (nameExists) {
            return NextResponse.json(
                { message: "이미 사용 중인 닉네임입니다." },
                { status: 409 }
            );
        }

        const newUser = {
            id: mockUsers.length + 1,
            user_id: userId,
            email,
            password,
            name,
            active: true,
            create_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
        };

        mockUsers.push(newUser);

        console.log("새 회원가입 사용자:", newUser);
        console.log("현재 mockUsers:", mockUsers);

        return NextResponse.json(
            {
                message: "회원가입이 완료되었습니다.",
                user: newUser,
            },
            { status: 201 }
        );
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            { message: "서버 오류가 발생했습니다." },
            { status: 500 }
        );
    }
}
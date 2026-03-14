import mockUsers from "@/components/data/mockusers.json";

export async function POST(req) {
    try {
        const body = await req.json();
        const email = body?.email?.trim()?.toLowerCase();

        if (!email) {
            return Response.json({
                success: false,
                message: "이메일을 입력해주세요.",
            });
        }

        const isDuplicate = mockUsers.some(
            (user) => user.email?.trim()?.toLowerCase() === email
        );

        if (isDuplicate) {
            return Response.json({
                success: false,
                type: "duplicate",
                message: "이미 사용중인 이메일입니다.",
            });
        }

        // 테스트용 고정 인증번호
        return Response.json({
            success: true,
            message: "인증번호를 전송했습니다. 테스트용 인증번호는 123456 입니다.",
            code: "123456",
        });
    } catch (error) {
        return Response.json({
            success: false,
            message: "인증번호 전송 중 오류가 발생했습니다.",
        });
    }
}
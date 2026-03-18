export async function POST(req) {
    try {
        const body = await req.json();

        const email = body?.email?.trim()?.toLowerCase();
        const code = body?.code?.trim();

        if (!email) {
            return Response.json({
                success: false,
                message: "이메일 정보가 없습니다.",
            });
        }

        if (!code) {
            return Response.json({
                success: false,
                message: "인증번호를 입력하세요.",
            });
        }

        // 테스트용 고정 인증번호
        if (code !== "123456") {
            return Response.json({
                success: false,
                message: "인증번호가 올바르지 않습니다.",
            });
        }

        return Response.json({
            success: true,
            message: "이메일 인증이 완료되었습니다.",
        });
    } catch (error) {
        return Response.json({
            success: false,
            message: "이메일 인증 처리 중 오류가 발생했습니다.",
        });
    }
}
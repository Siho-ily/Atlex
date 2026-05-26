"use client";

export default function SignupTermsHeader() {
    return (
        <>
            <div className="mb-8 flex justify-center">
                <div className="rounded-2xl bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 px-8 py-3 shadow-md">
                    <span className="text-2xl font-extrabold tracking-[0.2em] text-white">
                        ATLAS
                    </span>
                </div>
            </div>

            <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold text-foreground">약관 동의</h1>
                <p className="mt-3 text-sm text-muted-foreground">
                    아틀라스 서비스 이용을 위해 아래 약관을 확인해 주세요.
                </p>
            </div>
        </>
    );
}

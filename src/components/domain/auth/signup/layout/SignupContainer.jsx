"use client";

export default function SignupContainer({ children }) {
    return (
        <main className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
            <div className="w-full max-w-[560px] rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
                <div className="mb-8 flex justify-center">
                    <div className="rounded-2xl bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 px-8 py-3 shadow-md">
                        <span className="text-2xl font-extrabold tracking-[0.2em] text-white">
                            ATLAS
                        </span>
                    </div>
                </div>

                {children}
            </div>
        </main>
    );
}
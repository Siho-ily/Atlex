"use client";

export default function SignupTermsContainer({ children }) {
    return (
        <main className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
            <div className="w-full max-w-[560px] rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
                {children}
            </div>
        </main>
    );
}
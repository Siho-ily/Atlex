"use client";

export default function SignupTermsContainer({ children }) {
    return (
        <main className="min-h-screen bg-muted flex items-center justify-center px-4 py-10">
            <div className="w-full max-w-[560px] rounded-2xl border border-border bg-card p-8 shadow-lg">
                {children}
            </div>
        </main>
    );
}

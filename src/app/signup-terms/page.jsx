"use client";

import SignupTermsHeader from "@/components/domain/auth/terms/layout/SignupTermsHeader";
import SignupTermsSection from "@/components/domain/auth/terms/components/SignupTermsSection";
import SignupTermsActionButtons from "@/components/domain/auth/terms/components/SignupTermsActionButtons";

export default function Page() {
    return (
        <main className="min-h-screen bg-muted flex items-center justify-center px-4 py-10">
            <div className="w-full max-w-[560px] rounded-2xl border border-border bg-card p-8 shadow-lg">
                <SignupTermsHeader />
                <SignupTermsSection />
                <SignupTermsActionButtons />
            </div>
        </main>
    );
}
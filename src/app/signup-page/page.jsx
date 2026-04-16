"use client";

import SignupContainer from "@/components/domain/auth/signup/layout/SignupContainer";
import SignupHeader from "@/components/domain/auth/signup/layout/SignupHeader";
import SignupFooterButtons from "@/components/domain/auth/signup/layout/SignupFooterButtons";
import SignupIdSection from "@/components/domain/auth/signup/sections/SignupIdSection";
import SignupEmailSection from "@/components/domain/auth/signup/sections/SignupEmailSection";
import SignupPasswordSection from "@/components/domain/auth/signup/sections/SignupPasswordSection";
import SignupNicknameSection from "@/components/domain/auth/signup/sections/SignupNicknameSection";

export default function Page() {
    return (
        <SignupContainer>
            <SignupHeader />

            <section className="space-y-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">
                <SignupIdSection />
                <SignupEmailSection />
                <SignupPasswordSection />
                <SignupNicknameSection />
            </section>

            <SignupFooterButtons />
        </SignupContainer>
    );
}
"use client";

import SignupTermsContainer from "@/components/domain/auth/terms/layout/SignupTermsContainer";
import SignupTermsHeader from "@/components/domain/auth/terms/layout/SignupTermsHeader";
import SignupTermsSection from "@/components/domain/auth/terms/components/SignupTermsSection";
import SignupTermsActionButtons from "@/components/domain/auth/terms/components/SignupTermsActionButtons";

export default function Page() {
    return (
        <SignupTermsContainer>
            <SignupTermsHeader />
            <SignupTermsSection />
            <SignupTermsActionButtons />
        </SignupTermsContainer>
    );
}
"use client";

import SignupContainer from "@/components/domain/auth/signup/layout/SignupContainer";
import SignupHeader from "@/components/domain/auth/signup/layout/SignupHeader";
import SignupFooterButtons from "@/components/domain/auth/signup/layout/SignupFooterButtons";
import SignupIdSection from "@/components/domain/auth/signup/sections/SignupIdSection";
import SignupEmailSection from "@/components/domain/auth/signup/sections/SignupEmailSection";
import SignupPasswordSection from "@/components/domain/auth/signup/sections/SignupPasswordSection";
import SignupNicknameSection from "@/components/domain/auth/signup/sections/SignupNicknameSection";
import { useSignup } from "@/hooks/auth/signup/signup";

export default function Page() {
    const {
        userId,
        emailId,
        emailDomain,
        password,
        passwordCheck,
        nickname,

        idCheck,
        nickCheck,
        message,

        showPassword,
        showPasswordCheck,
        setShowPassword,
        setShowPasswordCheck,

        loading,
        canSubmit,

        handleUserIdChange,
        handleNicknameChange,
        handlePasswordChange,
        handlePasswordCheckChange,
        handleEmailIdChange,
        handleEmailDomainChange,

        handleIdCheck,
        handleNickCheck,
        handlePrev,
        handleSignup,

        passwordChecks,
    } = useSignup();

    return (
        <SignupContainer>
            <SignupHeader />

            <section className="space-y-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">
                <SignupIdSection
                    userId={userId}
                    handleUserIdChange={handleUserIdChange}
                    idCheck={idCheck}
                    handleIdCheck={handleIdCheck}
                />

                <SignupEmailSection
                    emailId={emailId}
                    emailDomain={emailDomain}
                    handleEmailIdChange={handleEmailIdChange}
                    handleEmailDomainChange={handleEmailDomainChange}
                />

                <SignupPasswordSection
                    password={password}
                    passwordCheck={passwordCheck}
                    showPassword={showPassword}
                    showPasswordCheck={showPasswordCheck}
                    setShowPassword={setShowPassword}
                    setShowPasswordCheck={setShowPasswordCheck}
                    handlePasswordChange={handlePasswordChange}
                    handlePasswordCheckChange={handlePasswordCheckChange}
                    passwordChecks={passwordChecks}
                />

                <SignupNicknameSection
                    nickname={nickname}
                    handleNicknameChange={handleNicknameChange}
                    nickCheck={nickCheck}
                    handleNickCheck={handleNickCheck}
                />
            </section>

            {message && (
                <p className="mt-4 text-sm font-medium text-red-500">
                    {message}
                </p>
            )}

            <SignupFooterButtons
                onPrev={handlePrev}
                onSignup={handleSignup}
                loading={loading}
                canSubmit={canSubmit}
            />
        </SignupContainer>
    );
}
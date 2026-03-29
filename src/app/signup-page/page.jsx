"use client";

import useSignup from "@/hooks/auth/signup/signup";
import SignupContainer from "@/components/domain/auth/signup/layout/SignupContainer";
import SignupHeader from "@/components/domain/auth/signup/layout/SignupHeader";
import SignupIdSection from "@/components/domain/auth/signup/layout/SignupIdSection";
import SignupEmailSection from "@/components/domain/auth/signup/layout/SignupEmailSection";
import SignupPasswordSection from "@/components/domain/auth/signup/layout/SignupPasswordSection";
import SignupPasswordCheckSection from "@/components/domain/auth/signup/layout/SignupPasswordCheckSection";
import SignupNicknameSection from "@/components/domain/auth/signup/layout/SignupNicknameSection";
import SignupMessage from "@/components/domain/auth/signup/layout/SignupMessage";
import SignupActionButtons from "@/components/domain/auth/signup/layout/SignupActionButtons";

export default function Page() {
    const signup = useSignup();

    return (
        <SignupContainer>
            <SignupHeader />

            <div className="space-y-4">
                <SignupIdSection
                    userId={signup.userId}
                    setUserId={signup.setUserId}
                    idCheck={signup.idCheck}
                    setIdCheck={signup.setIdCheck}
                    handleIdCheck={signup.handleIdCheck}
                />

                <SignupEmailSection
                    emailId={signup.emailId}
                    setEmailId={signup.setEmailId}
                    emailDomain={signup.emailDomain}
                    handleDomainChange={signup.handleDomainChange}
                    handleSelectChange={signup.handleSelectChange}
                    isValidEmail={signup.isValidEmail}
                    emailCode={signup.emailCode}
                    emailCodeSent={signup.emailCodeSent}
                    emailVerified={signup.emailVerified}
                    emailVerifyMessage={signup.emailVerifyMessage}
                    emailSendLoading={signup.emailSendLoading}
                    emailVerifyLoading={signup.emailVerifyLoading}
                    emailTimer={signup.emailTimer}
                    formattedEmailTime={signup.formattedEmailTime}
                    handleSendEmailCode={signup.handleSendEmailCode}
                    handleVerifyEmailCode={signup.handleVerifyEmailCode}
                    handleEmailCodeChange={signup.handleEmailCodeChange}
                />

                <SignupPasswordSection
                    showPassword={signup.showPassword}
                    setShowPassword={signup.setShowPassword}
                    password={signup.password}
                    setPassword={signup.setPassword}
                    checks={signup.checks}
                />

                <SignupPasswordCheckSection
                    showPasswordCheck={signup.showPasswordCheck}
                    setShowPasswordCheck={signup.setShowPasswordCheck}
                    passwordCheck={signup.passwordCheck}
                    setPasswordCheck={signup.setPasswordCheck}
                    passwordMatch={signup.passwordMatch}
                    passwordMismatch={signup.passwordMismatch}
                />

                <SignupNicknameSection
                    nickname={signup.nickname}
                    setNickname={signup.setNickname}
                    nickCheck={signup.nickCheck}
                    setNickCheck={signup.setNickCheck}
                    handleNicknameCheck={signup.handleNicknameCheck}
                />

                <SignupMessage message={signup.message} />

                <SignupActionButtons
                    loading={signup.loading}
                    canSignup={signup.canSignup}
                    handleCancel={signup.handleCancel}
                    onSignup={signup.onSignup}
                />
            </div>
        </SignupContainer>
    );
}
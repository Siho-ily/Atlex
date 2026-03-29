"use client";

// 로그인 전체 상태/이벤트를 묶은 최상위 훅
import useLogin from "@/hooks/auth/login/login";

// layout 영역
import LoginContainer from "@/components/domain/auth/login/layout/LoginContainer";
import LoginHeader from "@/components/domain/auth/login/layout/LoginHeader";
import LoginMessage from "@/components/domain/auth/login/layout/LoginMessage";

// feature 영역
import LoginIdSection from "@/components/domain/auth/login/feature/LoginIdSection";
import LoginPasswordSection from "@/components/domain/auth/login/feature/LoginPasswordSection";
import LoginRememberSection from "@/components/domain/auth/login/feature/LoginRememberSection";
import LoginActionButtons from "@/components/domain/auth/login/feature/LoginActionButtons";
import LoginFooterLinks from "@/components/domain/auth/login/feature/LoginFooterLinks";

export default function Page() {
    // 로그인 페이지에서 사용할 상태/함수 모음
    const login = useLogin();

    return (
        <LoginContainer>
            <LoginHeader />

            <div className="space-y-4">
                {/* 아이디 입력 영역 */}
                <LoginIdSection
                    userId={login.userId}
                    setUserId={login.setUserId}
                />

                {/* 비밀번호 입력 영역 */}
                <LoginPasswordSection
                    password={login.password}
                    setPassword={login.setPassword}
                    showPassword={login.showPassword}
                    setShowPassword={login.setShowPassword}
                />

                {/* 아이디 저장 체크박스 */}
                <LoginRememberSection
                    rememberId={login.rememberId}
                    setRememberId={login.setRememberId}
                />

                {/* 에러 / 안내 메시지 */}
                <LoginMessage message={login.message} />

                {/* 로그인 / 취소 버튼 */}
                <LoginActionButtons
                    onLogin={login.onLogin}
                    handleCancel={login.handleCancel}
                    loading={login.loading}
                    canLogin={login.canLogin}
                />

                {/* footer 링크
                    - 회원가입 페이지 이동
                    - 아이디/비밀번호 찾기 공용 페이지 이동
                */}
                <LoginFooterLinks />
            </div>
        </LoginContainer>
    );
}
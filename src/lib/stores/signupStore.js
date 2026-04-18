import { create } from "zustand";

/**
 * 회원가입 전체 상태 저장 (Zustand)
 * - 입력값
 * - 인증 상태
 * - 로딩 상태
 */
const initialState = {
    showPassword: false,        // 비밀번호 보기 여부
    showPasswordCheck: false,   // 비밀번호 확인 보기 여부

    userId: "",                 // 아이디
    emailId: "",                // 이메일 아이디 부분
    emailDomain: "",            // 이메일 도메인
    password: "",               // 비밀번호
    passwordCheck: "",          // 비밀번호 확인
    nickname: "",               // 닉네임

    idCheck: "",                // 아이디 중복 확인 결과
    nickCheck: "",              // 닉네임 중복 확인 결과

    message: "",                // 에러 메시지
    loading: false,             // 회원가입 진행 중 여부

    emailCode: "",              // 인증번호
    emailCodeSent: false,       // 인증번호 전송 여부
    emailVerified: false,       // 이메일 인증 완료 여부
    emailVerifyMessage: "",     // 인증 메시지
    emailSendLoading: false,    // 인증번호 전송 로딩
    emailVerifyLoading: false,  // 인증 확인 로딩
    emailTimer: 0,              // 인증 타이머
};
export const useSignupStore = create((set) => ({
    ...initialState,

    setShowPassword: (value) => set({ showPassword: value }),
    setShowPasswordCheck: (value) => set({ showPasswordCheck: value }),

    setUserId: (value) => set({ userId: value }),
    setEmailId: (value) => set({ emailId: value }),
    setEmailDomain: (value) => set({ emailDomain: value }),
    setPassword: (value) => set({ password: value }),
    setPasswordCheck: (value) => set({ passwordCheck: value }),
    setNickname: (value) => set({ nickname: value }),

    setIdCheck: (value) => set({ idCheck: value }),
    setNickCheck: (value) => set({ nickCheck: value }),

    setMessage: (value) => set({ message: value }),
    setLoading: (value) => set({ loading: value }),

    setEmailCode: (value) => set({ emailCode: value }),
    setEmailCodeSent: (value) => set({ emailCodeSent: value }),
    setEmailVerified: (value) => set({ emailVerified: value }),
    setEmailVerifyMessage: (value) => set({ emailVerifyMessage: value }),
    setEmailSendLoading: (value) => set({ emailSendLoading: value }),
    setEmailVerifyLoading: (value) => set({ emailVerifyLoading: value }),

    setEmailTimer: (value) =>
        set((state) => ({
            emailTimer: typeof value === "function" ? value(state.emailTimer) : value,
        })),

    resetSignupState: () => set(initialState),
}));
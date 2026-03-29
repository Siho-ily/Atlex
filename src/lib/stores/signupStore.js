import { create } from "zustand";

const initialState = {
    showPassword: false,
    showPasswordCheck: false,

    userId: "",
    emailId: "",
    emailDomain: "",
    password: "",
    passwordCheck: "",
    nickname: "",

    idCheck: "",
    nickCheck: "",

    message: "",
    loading: false,

    emailCode: "",
    emailCodeSent: false,
    emailVerified: false,
    emailVerifyMessage: "",
    emailSendLoading: false,
    emailVerifyLoading: false,
    emailTimer: 0,
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
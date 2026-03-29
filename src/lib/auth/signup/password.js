/**
 * 비밀번호 조건 검사
 */
export function getPasswordChecks(password) {
    return {
        length: password.length >= 10,
        lower: /[a-z]/.test(password),
        upper: /[A-Z]/.test(password),
        number: /[0-9]/.test(password),
        special: /[!@#$%^&*]/.test(password),
    };
}
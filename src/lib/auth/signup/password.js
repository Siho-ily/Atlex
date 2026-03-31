/**
 * 비밀번호 조건 검사 함수
 * 
 * 검사 항목:
 * - 길이 10자 이상
 * - 소문자 포함
 * - 대문자 포함
 * - 숫자 포함
 * - 특수문자 포함
 */
export function getPasswordChecks(password) {

    return {
        length: password.length >= 10,           // 길이 조건
        lower: /[a-z]/.test(password),           // 소문자
        upper: /[A-Z]/.test(password),           // 대문자
        number: /[0-9]/.test(password),          // 숫자
        special: /[!@#$%^&*]/.test(password),    // 특수문자
    };
}
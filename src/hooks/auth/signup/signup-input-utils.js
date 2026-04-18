"use client";

/**
 * ASCII 기반 입력만 허용하는 공통 유틸
 *
 * 허용 범위:
 * - 영문 대소문자
 * - 숫자
 * - 특수문자
 *
 * 제한 범위:
 * - 한글
 * - 공백
 * - ASCII 범위를 벗어나는 문자
 */

/**
 * 공백 없이 출력 가능한 ASCII 문자만 남긴다.
 * 허용 범위는 0x21 ~ 0x7E 이며, space(0x20)는 제외한다.
 */
export function sanitizeAsciiVisible(value = "") {
    return value.replace(/[^\x21-\x7E]/g, "");
}

/**
 * 아이디 입력값을 정리한다.
 */
export function sanitizeUserId(value = "") {
    return sanitizeAsciiVisible(value);
}

/**
 * 비밀번호 입력값을 정리한다.
 */
export function sanitizePassword(value = "") {
    return sanitizeAsciiVisible(value);
}

/**
 * 이메일 아이디(local part) 입력값을 정리한다.
 */
export function sanitizeEmailId(value = "") {
    return sanitizeAsciiVisible(value);
}

/**
 * 이메일 도메인 입력값을 정리한다.
 */
export function sanitizeEmailDomain(value = "") {
    return sanitizeAsciiVisible(value);
}
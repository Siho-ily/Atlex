/**
 * 문자열 정규화 함수
 * 
 * 역할:
 * - 앞뒤 공백 제거
 * - 소문자로 변환 (비교 일관성 유지)
 * 
 * @param {string} value
 * @returns {string}
 */
export function normalize(value) {
    return value?.trim()?.toLowerCase() || "";
}
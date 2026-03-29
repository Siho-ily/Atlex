/**
 * 문자열 정규화
 * - 앞뒤 공백 제거
 * - 영문 비교 일관성을 위해 소문자로 변환
 */
export function normalize(value) {
    return value?.trim()?.toLowerCase() || "";
}
/**
 * 이메일 형식 검증 함수
 * 
 * @param {string} emailId
 * @param {string} emailDomain
 * @returns {boolean}
 */
export function isValidEmailFormat(emailId, emailDomain) {

    const local = emailId.trim();                 // 이메일 앞부분
    const domain = emailDomain.trim().toLowerCase(); // 도메인

    // 둘 중 하나라도 없으면 false
    if (!local || !domain) return false;

    // 전체 이메일 생성
    const email = `${local}@${domain}`;

    // 기본 이메일 정규식
    const basicRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    // 정규식 검사 실패 시 false
    if (!basicRegex.test(email)) return false;

    // 연속 점 검사
    if (local.includes("..") || domain.includes("..")) return false;

    // 시작/끝 점 검사
    if (
        local.startsWith(".") ||
        local.endsWith(".") ||
        domain.startsWith(".") ||
        domain.endsWith(".")
    ) {
        return false;
    }

    // 도메인 내부 공백 검사
    const domainParts = domain.split(".");
    if (domainParts.some((part) => part.trim() === "")) return false;

    return true;
}
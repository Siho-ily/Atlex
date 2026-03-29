/**
 * 이메일 형식 검사
 */
export function isValidEmailFormat(emailId, emailDomain) {
    const local = emailId.trim();
    const domain = emailDomain.trim().toLowerCase();

    if (!local || !domain) return false;

    const email = `${local}@${domain}`;
    const basicRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (!basicRegex.test(email)) return false;

    if (local.includes("..") || domain.includes("..")) return false;

    if (
        local.startsWith(".") ||
        local.endsWith(".") ||
        domain.startsWith(".") ||
        domain.endsWith(".")
    ) {
        return false;
    }

    const domainParts = domain.split(".");
    if (domainParts.some((part) => part.trim() === "")) return false;

    return true;
}
// 현재는 Next.js 내부 mock 라우트(src/app/api/v1/*)를 호출하므로 같은 호스트(:3000)를 가리킨다.
// 실제 백엔드 연동 시 BASE_API_URL 환경변수로 외부 주소(예: http://localhost:8000/api/v1)를 덮어쓴다.
const DEFAULT_API_BASE_URL = "http://localhost:3000/api/v1";

// base URL 끝의 /를 제거해서 endpoint를 붙일 때 //가 생기지 않게 한다.
function trimTrailingSlashes(value) {
    return value.replace(/\/+$/, "");
}

// endpoint 앞의 /를 제거해서 base URL과 항상 한 개의 /로 이어지게 한다.
function trimLeadingSlashes(value) {
    return value.replace(/^\/+/, "");
}

export function getApiBaseUrl() {
    // 서버 라우트에서만 사용하는 값이라 NEXT_PUBLIC_ 없이 .env에서 읽는다.
    const baseUrl = process.env.BASE_API_URL || DEFAULT_API_BASE_URL;

    return trimTrailingSlashes(baseUrl.trim());
}

export function createApiUrl(path = "") {
    const baseUrl = getApiBaseUrl();
    const cleanPath = trimLeadingSlashes(String(path));

    // createApiUrl("/auth/signup") -> http://localhost:8000/api/v1/auth/signup
    return cleanPath ? `${baseUrl}/${cleanPath}` : baseUrl;
}

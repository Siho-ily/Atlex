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
    // 클라이언트: 같은 앱의 API 라우트를 호출하므로 상대경로로 충분하다.
    if (typeof window !== "undefined") {
        return "/api/v1";
    }

    // 서버: BASE_API_URL 환경변수로 외부 백엔드 주소를 덮어쓸 수 있다.
    const baseUrl = process.env.BASE_API_URL || DEFAULT_API_BASE_URL;
    return trimTrailingSlashes(baseUrl.trim());
}

export function createApiUrl(path = "") {
    const baseUrl = getApiBaseUrl();
    const cleanPath = trimLeadingSlashes(String(path));

    // createApiUrl("/auth/signup") -> http://localhost:8000/api/v1/auth/signup
    return cleanPath ? `${baseUrl}/${cleanPath}` : baseUrl;
}

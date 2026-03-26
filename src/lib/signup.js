export async function signupApi(requestData) {
    const res = await fetch("/api/v1/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
    });

    const data = await res.json();
    return { res, data };
}
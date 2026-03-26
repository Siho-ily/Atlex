export function getPasswordChecks(password) {
    return {
        length: password.length >= 10,
        lower: /[a-z]/.test(password),
        upper: /[A-Z]/.test(password),
        number: /[0-9]/.test(password),
        special: /[!@#$%^&*]/.test(password),
    };
}

export function getPasswordStrength(password) {
    const checks = getPasswordChecks(password);

    let score = 0;
    if (checks.length) score++;
    if (checks.lower) score++;
    if (checks.upper) score++;
    if (checks.number) score++;
    if (checks.special) score++;

    if (password.length === 0) {
        return { width: "0%", color: "bg-gray-300", text: "" };
    }

    if (score <= 2) {
        return { width: "33%", color: "bg-red-400", text: "약함" };
    }

    if (score <= 4) {
        return { width: "66%", color: "bg-yellow-400", text: "보통" };
    }

    return { width: "100%", color: "bg-green-500", text: "강함" };
}
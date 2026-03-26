import mockUsers from "@/data/mockusers.json";
import { normalize } from "./normalize";

export function isDuplicateUserId(userId) {
    const normalizedUserId = normalize(userId);

    if (!normalizedUserId) return false;

    return mockUsers.some((user) => normalize(user.user_id) === normalizedUserId);
}

export function isDuplicateNickname(nickname) {
    const normalizedNickname = normalize(nickname);

    if (!normalizedNickname) return false;

    return mockUsers.some((user) => normalize(user.name) === normalizedNickname);
}

export function isValidEmailFormat(emailId, emailDomain) {
    if (!emailId.trim() || !emailDomain.trim()) return false;

    const email = `${emailId}@${emailDomain}`;
    const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    return regex.test(email);
}
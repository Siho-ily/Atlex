"use client";

export default function LoginMessage({ message }) {
    // 메시지가 없으면 렌더링하지 않음
    if (!message) return null;

    return (
        <p className="text-sm text-center text-red-500">
            {message}
        </p>
    );
}
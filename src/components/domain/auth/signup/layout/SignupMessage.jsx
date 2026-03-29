"use client";

export default function SignupMessage({ message }) {
    if (!message) return null;

    return (
        <p className="text-sm text-center text-red-500">
            {message}
        </p>
    );
}
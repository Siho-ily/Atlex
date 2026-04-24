"use client";

export default function Deprecated_Button({
    type = "button",
    children,
    onClick,
    disabled = false,
    variant = "primary",
    className = "",
}) {
    const base =
        "px-4 py-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed";

    const styles = {
        primary: "bg-blue-500 text-white hover:bg-blue-600",

        secondary:
            "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500",

        dark: "bg-black text-white dark:bg-white dark:text-black",
    };

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`${base} ${styles[variant]} ${className}`}
        >
            {children}
        </button>
    );
}
"use client";

export default function Deprecated_InputField({ className = "", ...props }) {
    return (
        <input
            {...props}
            className={[
                "w-full rounded-xl border border-gray-300 bg-white text-sm text-gray-900",
                "placeholder:text-gray-400 outline-none focus:border-blue-500",
                className,
            ].join(" ")}
        />
    );
}
"use client";

export default function InputField({
    className = "",
    ...props
}) {
    return (
        <input
            {...props}
            className={`px-3 py-2 border rounded-lg text-black dark:text-white bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 outline-none ${className}`}
        />
    );
}
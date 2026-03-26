"use client";

export default function SignupContainer({ children }) {
    return (
        <div className="min-h-screen w-full bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
            <div className="min-h-screen flex items-center justify-center px-4">
                <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 transition-colors duration-300">
                    {children}
                </div>
            </div>
        </div>
    );
}
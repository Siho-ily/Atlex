"use client";

import { useEffect, useState } from "react";

export default function DarkModePage() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        const html = document.documentElement;

        if (savedTheme === "dark") {
            html.classList.add("dark");
            setIsDark(true);
        } else {
            html.classList.remove("dark");
            setIsDark(false);
        }
    }, []);

    function toggleTheme() {
        const html = document.documentElement;
        const nextDark = !html.classList.contains("dark");

        html.classList.toggle("dark", nextDark);
        localStorage.setItem("theme", nextDark ? "dark" : "light");
        setIsDark(nextDark);
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-background transition-colors duration-300">
            <div className="text-center space-y-4">
                <h1 className="text-2xl font-bold text-foreground">
                    다크모드 설정 페이지
                </h1>

                <button
                    type="button"
                    onClick={toggleTheme}
                    className="absolute top-5 right-5 px-4 py-2 rounded-lg bg-black text-white dark:bg-white dark:text-black z-10"
                >
                    {isDark ? "라이트모드" : "다크모드"}
                </button>

                <p className="text-muted-foreground">
                    현재 모드: {isDark ? "다크모드" : "라이트모드"}
                </p>
            </div>
        </div>
    );
}
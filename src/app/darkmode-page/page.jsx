"use client";

import { useEffect, useState } from "react";
import DarkModeToggle from "@/components/common/feature/DarkModeToggle";

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
        <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="text-center space-y-4">
                <h1 className="text-2xl font-bold text-black dark:text-white">
                    다크모드 설정 페이지
                </h1>

                <DarkModeToggle isDark={isDark} onToggle={toggleTheme} />

                <p className="text-gray-600 dark:text-gray-300">
                    현재 모드: {isDark ? "다크모드" : "라이트모드"}
                </p>
            </div>
        </div>
    );
}
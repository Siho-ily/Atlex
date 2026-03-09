"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {

  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {

    const html = document.documentElement;

    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDark(false);
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDark(true);
    }
  }

  return (
    <button
      onClick={toggle}
      className="px-4 py-2 rounded border"
    >
      {dark ? "라이트모드" : "다크모드"}
    </button>
  );
}
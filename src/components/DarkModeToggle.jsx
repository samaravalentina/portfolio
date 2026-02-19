"use client";

import { useEffect, useState } from "react";

export default function DarkModeToggle() {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        const theme = localStorage.getItem("theme");
        if (theme === dark) {
            document.documentElement.classList.add("dark");
            setDark(true);
        }
    }, []);

    const toggleTheme = () => {
        if (dark) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme, light");
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme, dark");
        }
        setDark(!dark);
    };

    return(
        <button
        onClick={toggleTheme}
        className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700"
        >
            {dark ? "☀️ Light" : "🌙 Dark"}
        </button>
    );
}
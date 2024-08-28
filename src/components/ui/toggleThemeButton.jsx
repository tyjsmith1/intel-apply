"use client"

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from "react-icons/fa";

export default function ToggleThemeButton() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null; // Avoid hydration mismatch

    return (
        <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="w-10 h-10 flex items-center justify-center bg-gray-200 dark:bg-gray-800 rounded-full"
        >
        {theme === 'dark' ? <FaSun /> : <FaMoon />}
        </button>
    );
}
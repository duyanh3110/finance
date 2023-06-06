/** @type {import('tailwindcss').Config} */
require("tailwindcss/defaultTheme");
import defaultTheme from "tailwindcss/defaultTheme";

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontSize: {
            "12px": ["12px", "15px"],
            "13px": ["13px", "16px"],
            "14px": ["14px", "17px"],
            "16px": ["16px", "20px"],
            "18px": ["18px", "22px"],
            "20px": ["20px", "25px"],
        },
        extend: {
            fontFamily: {
                sans: ["KumbhSans", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                // root color
                primary: "#C8EE44",
                secondary: "#29A073",
                // Text colors
                "text-1": "#1B212D",
                "text-2": "#929EAE",
                "text-3": "#78778B",
                "pure-white": "#FFFFFF",
                // Gray
                "gray-1": "#FAFAFA",
                "gray-2": "#F8F8F8",
                "gray-3": "#F5F5F5",
                "gray-4": "#FDFDFD",
                "gray-5": "#F2F2F2",
                // Darkish
                "key-black": "#363A3F",
                "dark-bg": "#1C1A2E",
                "dark-shade": "#1E1C30",
                "dark-1": "#201E34",
                "dark-2": "#282541",
                // Status
                error: "#E5363D",
                success: "#19D076",
                // Logo
                on: "#292D32",
                off: "#929EAE",
            },
        },
    },
    plugins: [],
};

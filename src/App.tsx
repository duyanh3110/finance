import React from "react";
import { ToggleTheme } from "./components/ToggleTheme";

export default function App() {
    const [darkMode, setDarkMode] = React.useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={`h-screen w-full ${darkMode ? "dark" : ""}`}>
            <h1 className="text-3xl font-bold underline">Hello world!</h1>
            <ToggleTheme toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        </div>
    );
}

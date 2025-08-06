import {createContext, useEffect, useState} from "react";

export const ThemeContext = createContext<any>(null)
const ThemeProvider = ({children}: { children: React.ReactNode }) => {
    const [theme, seTheme ] = useState("light")
    const toggleTheme = () => {
        seTheme((prev) => prev === "light" ? "dark" : "light")
    }
    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
    }, [theme]);
    return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}
export default ThemeProvider
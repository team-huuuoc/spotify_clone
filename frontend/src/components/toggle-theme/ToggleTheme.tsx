import React, {useContext} from 'react';
import {ThemeContext} from "@/contexts/ThemeContext";
import {Moon, Sun} from "lucide-react";

const ToggleTheme = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)!
  return (
    <div>
        <label className={"cursor-pointer"}>
            <input id={"theme-toogle"} onChange={toggleTheme} type={"checkbox"} checked={theme === "dark"} className={"hidden"}/>
            {theme === "dark" ? (
                <Moon className={"w-6 h-6 text-yellow-400 transition-all duration-300"} />
            ) : (
                <Sun className={"w-6 h-6 text-gray-700 transition-all duration-300"} />
            )}
        </label>
    </div>
  );
};

export default ToggleTheme;

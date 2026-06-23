import {createContext, useContext, useEffect, useState} from "react";


const darkModeContext = createContext();

export function DarkModeProvider({ children }) {
    const [darkMode, setDarkMode] = useState(false);

    function toggleDarkMode() {setDarkMode((prevState)=>!prevState);}


    useEffect(() => {
        if (darkMode) document.documentElement.classList.add('dark');
       if (!darkMode)  document.documentElement.classList.remove('dark');
    }, [darkMode]);


    return <darkModeContext.Provider value={{darkMode, toggleDarkMode}}>{children} </darkModeContext.Provider>;
}






export function useDarkMode() {
    const context = useContext(darkModeContext);
    if (!context) throw new Error("useDarkMode must be used inside darkModeProvider");
    return context;
}
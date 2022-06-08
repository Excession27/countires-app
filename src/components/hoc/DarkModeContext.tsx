import { createContext, useEffect, useState } from "react";

export const DarkModeContext = createContext<any>({});

export default function DarkModeContextProvider({ children }: any) {
  const [darkMode, setDarkMode] = useState<boolean>(() =>
    localStorage.darkMode === "true" ? true : false
  );

  useEffect(() => {
    localStorage.darkMode = darkMode;
    console.log(darkMode);
    if (!darkMode) {
      document.querySelector("body")?.classList.remove("dark");
    }
    if (darkMode) {
      document.querySelector("body")?.classList.add("dark");
    }
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

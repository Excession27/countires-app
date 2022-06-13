import { createContext, useEffect, useState } from "react";
import { DarkContextProviderProps } from "../../api/country/types";

export const DarkModeContext = createContext<any>({});

export default function DarkModeContextProvider({
  children,
}: DarkContextProviderProps) {
  const [darkMode, setDarkMode] = useState<boolean>(() =>
    localStorage.darkMode === "true" ? true : false
  );

  useEffect(() => {
    localStorage.darkMode = darkMode;
    if (!darkMode) {
      document.querySelector("body")?.classList.remove("dark:bg-gray-800");
      document.querySelector("html")?.classList.remove("dark");
    }
    if (darkMode) {
      document.querySelector("body")?.classList.add("dark:bg-gray-800");
      document.querySelector("html")?.classList.add("dark");
    }
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

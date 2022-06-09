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
      document.querySelector("body")?.classList.remove("dark");
      document
        .querySelector("html")
        ?.setAttribute("style", "background-color: #ffffff");
    }
    if (darkMode) {
      document.querySelector("body")?.classList.add("dark");
      document
        .querySelector("html")
        ?.setAttribute("style", "background-color: #1f2937");
    }
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

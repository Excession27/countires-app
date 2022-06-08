import { createContext, useEffect, useState } from "react";

export const DarkModeContext = createContext<any>({
  darkMode: localStorage.getItem("darkMode") || false,
});

export default function DarkModeContextProvider({ children }: any) {
  const loadDarkModeSetting =
    localStorage.getItem("darkMode") === undefined
      ? false
      : localStorage.darkMode;
  const [darkMode, setDarkMode] = useState<boolean>(loadDarkModeSetting);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode.toString());
    document.querySelector("body")?.classList.toggle("dark");
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { DarkModeContext } from "../hoc/DarkModeContext";
import { DarkContextType } from "../../api/country/types";

const Header = () => {
  const { darkMode, setDarkMode } =
    useContext<DarkContextType>(DarkModeContext);

  return (
    <div className="flex justify-between items-center px-5 h-32 drop-shadow-sm bg-slate-50 dark:bg-gray-600 dark:text-slate-200">
      <h1 className="font-bold text-lg">Where in the world?</h1>

      <button
        className="flex items-center p-2"
        onClick={() => {
          setDarkMode((prev) => !prev);
        }}
      >
        {darkMode ? (
          <>
            <div>
              <FontAwesomeIcon icon={faSun} className="mr-1" />
            </div>
            <p>Light mode</p>
          </>
        ) : (
          <>
            <div>
              <FontAwesomeIcon icon={faMoon} className="mr-1" />
            </div>
            <p>Dark mode</p>
          </>
        )}
      </button>
    </div>
  );
};

export default Header;

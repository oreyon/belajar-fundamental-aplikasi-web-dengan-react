import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react"
import type { Theme } from "./ThemeContext";
import ThemeContext from "./ThemeContext";

interface PropTypes {
  children: ReactNode;
}


const ThemeProvider = (props:PropTypes) => {
  const { children } = props;
  const [theme, setTheme] = useState<Theme>(
    (localStorage.getItem("theme") as Theme) || "light"
  );

  const toggleTheme = useCallback(() => {
    setTheme((prev:Theme) => {
      const nextTheme = prev === "light" ? "dark" : "light";
      localStorage.setItem("theme", nextTheme);
      return nextTheme;
    });
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
export default ThemeProvider
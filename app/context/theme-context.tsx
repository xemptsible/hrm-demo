import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

type ThemeContextType = {
  isDark: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useThemeContext() {
  const value = useContext(ThemeContext);
  if (value == undefined) throw Error("Cannot use outside of ThemeProvider");

  return value;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDark, toggle] = useState(false);

  const toggleTheme = useCallback(() => {
    toggle((theme) => !theme);
  }, [toggle]);

  const themeValue = useMemo(
    () => ({ isDark, toggleTheme }),
    [isDark, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={themeValue}>{children}</ThemeContext.Provider>
  );
}

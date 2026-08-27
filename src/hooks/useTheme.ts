import { useEffect, useLayoutEffect, useState } from "react";

export type Theme = "light" | "dark";

// Avoid the React "useLayoutEffect does nothing on the server" warning
// during Astro's build-time SSR of this component.
const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

function currentTheme(): Theme {
  return typeof document !== "undefined" && document.documentElement.classList.contains("dark")
    ? "dark"
    : "light";
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>("light");

  // Layout.astro sets the "dark" class before paint to avoid a flash;
  // read that back here rather than guessing during SSR.
  useIsomorphicLayoutEffect(() => {
    setTheme(currentTheme());
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return [theme, setTheme] as const;
}
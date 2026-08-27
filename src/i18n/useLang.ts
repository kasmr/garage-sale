import { useEffect, useState } from "react";
import { defaultLang, type Lang } from "./index";

function initialLang(): Lang {
  if (typeof window === "undefined") return defaultLang;
  const stored = window.localStorage.getItem("lang");
  return stored === "en" || stored === "ru" ? stored : defaultLang;
}

export function useLang() {
  // Read from localStorage during the initial client render itself, so
  // hydration resolves the stored language in one pass instead of
  // painting the default first and correcting it in a later effect.
  const [lang, setLang] = useState<Lang>(initialLang);

  // Reveal the page (see the "lang-pending" class set in Layout.astro)
  // now that this render has resolved the correct language.
  useEffect(() => {
    document.documentElement.classList.remove("lang-pending");
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    window.localStorage.setItem("lang", lang);
  }, [lang]);

  // Back/forward navigation can restore a page from the browser's bfcache
  // instead of re-running this hook, leaving it showing whatever language
  // was active before the visit. Re-sync from localStorage when that happens.
  useEffect(() => {
    const onPageShow = (e: PageTransitionEvent) => {
      if (!e.persisted) return;
      setLang(initialLang());
    };
    window.addEventListener("pageshow", onPageShow);
    return () => window.removeEventListener("pageshow", onPageShow);
  }, []);

  return [lang, setLang] as const;
}

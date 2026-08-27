import en from "./en.json";
import ru from "./ru.json";

export const languages = {
  en: "English",
  ru: "Русский",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "ru";

const dictionaries = { en, ru } as const;

export function useTranslations(lang: Lang) {
  return dictionaries[lang] ?? dictionaries[defaultLang];
}

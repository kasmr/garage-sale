import LanguageSwitcher from "./LanguageSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";
import type { Lang } from "../i18n";
import type { Theme } from "../hooks/useTheme";
import { baseUrl } from "../utils/baseUrl";

export default function Header({
  title,
  lang,
  onLangChange,
  theme,
  onThemeChange,
}: {
  title: string;
  lang: Lang;
  onLangChange: (lang: Lang) => void;
  theme: Theme;
  onThemeChange: (theme: Theme) => void;
}) {
  return (
    <header className="sticky top-0 z-10 border-b border-line bg-paper/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-6">
        <a
          href={baseUrl}
          className="text-sm font-semibold tracking-widest uppercase"
        >
          {title}
        </a>
        <div className="flex items-center gap-5">
          <LanguageSwitcher lang={lang} onChange={onLangChange} />
          <ThemeSwitcher theme={theme} onChange={onThemeChange} />
        </div>
      </div>
    </header>
  );
}

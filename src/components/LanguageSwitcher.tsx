import { languages, type Lang } from "../i18n";

export default function LanguageSwitcher({
  lang,
  onChange,
}: {
  lang: Lang;
  onChange: (lang: Lang) => void;
}) {
  return (
    <nav className="flex gap-3 text-base tracking-widest uppercase">
      {Object.entries(languages).map(([code, label]) => (
        <button
          key={code}
          type="button"
          onClick={() => onChange(code as Lang)}
          className={
            code === lang
              ? "cursor-pointer text-ink"
              : "cursor-pointer text-taupe hover:text-ink"
          }
        >
          {label}
        </button>
      ))}
    </nav>
  );
}

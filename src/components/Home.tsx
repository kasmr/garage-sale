import { useState } from "react";
import Header from "./Header";
import { items } from "../data/items";
import { sale } from "../data/sale";
import { useTranslations } from "../i18n";
import { useLang } from "../i18n/useLang";
import { useTheme } from "../hooks/useTheme";
import { baseUrl } from "../utils/baseUrl";

type ViewMode = "list" | "grid";

function truncate(text: string, maxLength: number) {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trimEnd()}…`;
}

export default function Home() {
  const [lang, setLang] = useLang();
  const [theme, setTheme] = useTheme();
  const [view, setView] = useState<ViewMode>("list");
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);
  const t = useTranslations(lang);

  return (
    <>
      <Header
        title={t.siteTitle}
        lang={lang}
        onLangChange={setLang}
        theme={theme}
        onThemeChange={setTheme}
      />

      <main className="mx-auto max-w-3xl px-6 py-16">
        <div className="mb-12 rounded-2xl border border-line bg-line/15 px-6 py-8 sm:px-10 sm:py-10">
          <p className="text-lg leading-relaxed text-ink/80">
            {sale.welcome[lang]}
          </p>
        </div>

        <section className="mb-12 border-y border-line py-8">
          <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <dt className="text-xs tracking-widest text-taupe uppercase">
                {t.saleAddressLabel}
              </dt>
              <dd className="mt-1">{sale.address[lang]}</dd>
              <dd className="mt-2 flex gap-4">
                <a
                  href={sale.maps.google}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-taupe transition hover:text-ink"
                >
                  <img
                    src={`${baseUrl}icons/google-maps.png`}
                    alt="google-maps-icon"
                    className="h-8 w-8 rounded-md"
                  />
                  <span className="text-sm tracking-wide">
                    {t.googleMapsLink}
                  </span>
                </a>
                <a
                  href={sale.maps.apple}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-taupe transition hover:text-ink"
                >
                  <img
                    src={`${baseUrl}icons/apple-maps.png`}
                    alt="apple-maps-icon"
                    className="h-8 w-8 rounded-md"
                  />
                  <span className="text-sm tracking-wide">
                    {t.appleMapsLink}
                  </span>
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs tracking-widest text-taupe uppercase">
                {t.saleDatesLabel}
              </dt>
              <dd className="mt-1">{sale.dates[lang]}</dd>
            </div>
          </dl>
        </section>

        <div className="mb-12 rounded-xl border border-amber-300 bg-amber-100 px-5 py-4 text-amber-900 dark:border-amber-700 dark:bg-amber-900/30 dark:text-amber-200">
          <p className="leading-relaxed">{sale.pickupNote[lang]}</p>
        </div>

        <div className="mb-12 flex items-center justify-between">
          <h1 className="text-base tracking-widest text-taupe uppercase">
            {t.browseHeading}
          </h1>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => {
                setView("list");
                setHoveredSlug(null);
              }}
              aria-label={t.viewList}
              aria-pressed={view === "list"}
              className={
                view === "list"
                  ? "cursor-pointer text-ink"
                  : "cursor-pointer text-taupe hover:text-ink"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-8 w-8"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => {
                setView("grid");
                setHoveredSlug(null);
              }}
              aria-label={t.viewGrid}
              aria-pressed={view === "grid"}
              className={
                view === "grid"
                  ? "cursor-pointer text-ink"
                  : "cursor-pointer text-taupe hover:text-ink"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-8 w-8"
              >
                <rect x="3" y="3" width="5" height="5" rx="1" />
                <rect x="9.5" y="3" width="5" height="5" rx="1" />
                <rect x="16" y="3" width="5" height="5" rx="1" />
                <rect x="3" y="9.5" width="5" height="5" rx="1" />
                <rect x="9.5" y="9.5" width="5" height="5" rx="1" />
                <rect x="16" y="9.5" width="5" height="5" rx="1" />
                <rect x="3" y="16" width="5" height="5" rx="1" />
                <rect x="9.5" y="16" width="5" height="5" rx="1" />
                <rect x="16" y="16" width="5" height="5" rx="1" />
              </svg>
            </button>
          </div>
        </div>

        {view === "list" ? (
          <div className="flex flex-col divide-y divide-line">
            {items.map((item) => {
              const isHovered = hoveredSlug === item.slug;
              return (
                <a
                  key={item.slug}
                  href={`${baseUrl}items/${item.slug}`}
                  onMouseEnter={() => setHoveredSlug(item.slug)}
                  onMouseLeave={() => setHoveredSlug(null)}
                  className={`-mx-6 px-6 py-10 transition-colors ${isHovered ? "bg-line/20" : ""}`}
                >
                  <div className="aspect-[4/3] overflow-hidden bg-line/40">
                    <img
                      src={item.photos[0].src}
                      alt={item.title[lang]}
                      className={`h-full w-full object-contain transition duration-500 ${isHovered ? "scale-[1.03]" : ""}`}
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-5">
                    <h2 className="text-lg font-medium">{item.title[lang]}</h2>
                    <p className="mt-1 flex items-baseline gap-3">
                      <span className="text-2xl font-semibold">
                        {item.price}
                      </span>
                      {item.originalPrice && (
                        <span className="text-taupe line-through">
                          {item.originalPrice}
                        </span>
                      )}
                      {item.priceNote && (
                        <span className="text-sm text-taupe">
                          {item.priceNote}
                        </span>
                      )}
                    </p>
                    <p
                      className={`mt-2 transition-colors ${isHovered ? "text-ink" : "text-ink/70"}`}
                    >
                      {truncate(item.description[lang], 100)}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-1">
            {items.map((item) => {
              const isHovered = hoveredSlug === item.slug;
              return (
                <a
                  key={item.slug}
                  href={`${baseUrl}items/${item.slug}`}
                  onMouseEnter={() => setHoveredSlug(item.slug)}
                  onMouseLeave={() => setHoveredSlug(null)}
                  className="relative aspect-square overflow-hidden bg-line/40"
                >
                  <img
                    src={item.photos[0].src}
                    alt={item.title[lang]}
                    className={`h-full w-full object-cover transition duration-500 ${isHovered ? "scale-105" : ""}`}
                    loading="lazy"
                  />
                  {isHovered && (
                    <div
                      className={`pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-1 bg-black/60 px-3 text-center transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
                    >
                      <span className="text-2xl font-semibold text-white">
                        {item.price}
                      </span>
                      <span className="text-sm font-medium text-white">
                        {truncate(item.title[lang], 40)}
                      </span>
                    </div>
                  )}
                </a>
              );
            })}
          </div>
        )}

        <section
          id="contact"
          className="mt-16 border-t border-line pt-12 text-center"
        >
          <h2 className="text-xs tracking-widest text-taupe uppercase">
            {t.contactHeading}
          </h2>
          <p className="mt-3 text-lg">{sale.contact.name[lang]}</p>
          <div className="mt-6 flex items-center justify-center gap-6">
            <a
              href={sale.contact.telegram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.telegramLink}
              className="cursor-pointer transition hover:opacity-80"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#26A5E4"
                className="h-10 w-10"
              >
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
            </a>
            <a
              href={sale.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.whatsappLink}
              className="cursor-pointer transition hover:opacity-80"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#25D366"
                className="h-10 w-10"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-line py-8 text-center text-xs tracking-widest text-taupe uppercase">
        {sale.address[lang]}
      </footer>
    </>
  );
}

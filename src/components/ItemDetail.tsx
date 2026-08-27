import Gallery from "./Gallery";
import Header from "./Header";
import type { Item } from "../data/items";
import { sale } from "../data/sale";
import { useTranslations } from "../i18n";
import { useLang } from "../i18n/useLang";
import { useTheme } from "../hooks/useTheme";
import { baseUrl } from "../utils/baseUrl";
import { useDocumentMeta } from "../hooks/uesDocumentMeta";

export default function ItemDetail({ item }: { item: Item }) {
  const [lang, setLang] = useLang();
  const [theme, setTheme] = useTheme();
  const t = useTranslations(lang);
  useDocumentMeta(
    `${item.title[lang]} - ${item.price}`,
    item.description[lang],
  );

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
        <a
          href={baseUrl}
          className="mb-10 inline-block text-xs tracking-widest text-taupe uppercase hover:text-ink"
        >
          &larr; {t.backToItems}
        </a>

        <h1 className="text-2xl font-medium">{item.title[lang]}</h1>

        <div className="mt-6">
          <Gallery photos={item.photos} />
        </div>

        <p className="mt-8 flex items-baseline gap-3">
          <span className="text-4xl font-semibold">{item.price}</span>
          {item.originalPrice && (
            <span className="text-xl text-taupe line-through">
              {item.originalPrice}
            </span>
          )}
          {item.priceNote && (
            <span className="text-taupe">{item.priceNote}</span>
          )}
        </p>

        <p className="mt-4 max-w-2xl leading-relaxed text-ink/70">
          {item.description[lang]}
        </p>

        {item.links.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
            {item.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-widest text-taupe uppercase hover:text-ink"
              >
                {link.label[lang]} &#8599;
              </a>
            ))}
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

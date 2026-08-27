import { useEffect, useState } from "react";

type Photo = { src: string; alt: string };

export default function Gallery({ photos }: { photos: Photo[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = () => setActiveIndex(null);
  const showPrev = () =>
    setActiveIndex((i) => (i === null ? null : (i - 1 + photos.length) % photos.length));
  const showNext = () =>
    setActiveIndex((i) => (i === null ? null : (i + 1) % photos.length));

  useEffect(() => {
    if (activeIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex]);

  return (
    <div>
      <button
        type="button"
        onClick={() => setActiveIndex(0)}
        className="mb-3 block aspect-[4/3] w-full cursor-pointer overflow-hidden bg-line/40 focus:outline-none"
      >
        <img
          src={photos[0].src}
          alt={photos[0].alt}
          className="h-full w-full object-contain"
        />
      </button>

      {photos.length > 1 && (
        <div className="grid grid-cols-4 gap-3 sm:grid-cols-6">
          {photos.map((photo, i) => (
            <button
              key={photo.src}
              type="button"
              onClick={() => setActiveIndex(i)}
              className="aspect-[4/3] cursor-pointer overflow-hidden focus:outline-none"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="h-full w-full object-cover transition hover:scale-105"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      )}

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-4 top-4 text-3xl text-white/80 hover:text-white"
          >
            &times;
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            aria-label="Previous photo"
            className="absolute left-2 text-4xl text-white/80 hover:text-white sm:left-6"
          >
            &#8249;
          </button>

          <img
            src={photos[activeIndex].src}
            alt={photos[activeIndex].alt}
            className="max-h-[85vh] max-w-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label="Next photo"
            className="absolute right-2 text-4xl text-white/80 hover:text-white sm:right-6"
          >
            &#8250;
          </button>
        </div>
      )}
    </div>
  );
}

import { baseUrl } from "../utils/baseUrl";

export type Item = {
  slug: string;
  price: string;
  originalPrice?: string;
  priceNote?: string;
  title: { en: string; ru: string };
  description: { en: string; ru: string };
  links: { label: { en: string; ru: string }; url: string; icon?: string }[];
  photos: { src: string; alt: string }[];
};

export const items: Item[] = [
  {
    slug: "soundbar",
    price: "110€",
    originalPrice: "170€",
    title: {
      en: "LG Soundbar S60T",
      ru: "Саундбар LG S60T",
    },
    description: {
      en: "LG S60T soundbar. Goes together with bluetooth subwoofer, creates really good 3.1 sound. Bought new for 170€, selling for 110€.",
      ru: "Саундбар LG S60T. В комплекте bluetooth сабвуфер, получается приличный звук 3.1. Покупал за 170€, продаю за 110€.",
    },
    links: [
      {
        label: { en: "Product link", ru: "Ссылка на товар" },
        url: "https://www.lg.com/hu/tv-es-hangprojektor/hangprojektor-soundbar/s60t/",
      },
    ],
    photos: [
      { src: `${baseUrl}/images/soundbar-1.jpg`, alt: "LG Soundbar S60T" },
      { src: `${baseUrl}/images/soundbar-2.jpg`, alt: "LG Soundbar S60T" },
      { src: `${baseUrl}/images/soundbar-3.jpg`, alt: "LG Soundbar S60T" },
    ],
  },
  {
    slug: "robot-vacuum",
    price: "140€",
    title: {
      en: "Xiaomi Robot Vacuum S10",
      ru: "Робот-пылесос Xiaomi S10",
    },
    description: {
      en: "Xiaomi Robot Vacuum S10.",
      ru: "Робот-пылесос Xiaomi S10. Как сторожевой пес, но выгуливать не надо",
    },
    links: [
      {
        label: { en: "Product link", ru: "Ссылка на товар" },
        url: "https://mi-home.hu/products/xiaomi-robot-vacuum-s10",
      },
    ],
    photos: [
      {
        src: `${baseUrl}/images/vaacum-cleaner-1.jpg`,
        alt: "Xiaomi Robot Vacuum S10",
      },
      {
        src: `${baseUrl}/images/vaacum-cleaner-2.jpg`,
        alt: "Xiaomi Robot Vacuum S10",
      },
    ],
  },
  {
    slug: "tennis-racket",
    price: "70€",
    title: {
      en: "Tennis Racket Head Radical Pro Graphene 360 2022",
      ru: "Теннисная ракетка Head Radical Pro Graphene 360 2022",
    },
    description: {
      en: "Tennis Racket Head Radical Pro Graphene 360 2022, 310g, 98cm",
      ru: "Теннисная ракетка Head Radical Pro Graphene 360 2022, 310g, 98cm",
    },
    links: [
      {
        label: { en: "Product link", ru: "Ссылка на товар" },
        url: "https://teniszuto.arukereso.hu/head/graphene-360-radical-pro-2-p1032706936",
      },
      {
        label: { en: "Review link", ru: "Ссылка на обзор" },
        url: "https://www.tennis-warehouse.com/learning_center/racquet_reviews/HG3RPreview.html?srsltid=AfmBOop3oaWuWD-0xUu-eb5FAM7I1ebtRSk4u4a4OxsKVWIhfyUUT7Of",
      },
    ],
    photos: [
      {
        src: `${baseUrl}/images/tennis-racket-1.jpg`,
        alt: "Tennis racket",
      },
      {
        src: `${baseUrl}/images/tennis-racket-2.jpg`,
        alt: "Tennis racket",
      },
    ],
  },
  {
    slug: "ping-pong-racket",
    price: "10€",
    title: {
      en: "Table Tennis Racket Set (2 rackets + balls)",
      ru: "Набор ракеток для настольного тенниса (2 шт. + мячи)",
    },
    description: {
      en: "Decathlon TTR 100 table tennis set — 2 rackets and balls, good for casual/school use.",
      ru: "Набор для настольного тенниса Decathlon TTR 100 — 2 ракетки и мячи, подходит для повседневной игры. Продаю, тк люди в парке смеялись над уровнем игры",
    },
    links: [
      {
        label: { en: "Product link", ru: "Ссылка на товар" },
        url: "https://www.decathlon.hu/p/pingponguto-szett-2-db-uto-labdak-iskolai-hasznalatra-ttr-100-3-ittf/_/R-p-353270?mc=8872802",
      },
    ],
    photos: [
      {
        src: `${baseUrl}/images/tennis-rackets-1.jpg`,
        alt: "Table tennis racket set",
      },
    ],
  },
  {
    slug: "mattress",
    price: "12.5€",
    title: {
      en: "Camping Air Mattress",
      ru: "Надувной туристический матрас",
    },
    description: {
      en: "Decathlon Air Basic camping mattress.",
      ru: "Надувной туристический матрас Decathlon Air Basic. Использовал дважды, в квартире. Насоса в комплекте нет, но можно накачать ртом или купить насос отдельно.",
    },
    links: [
      {
        label: { en: "Product link", ru: "Ссылка на товар" },
        url: "https://www.decathlon.hu/p/kempingmatrac-air-basic/_/R-p-310021?mc=8561145",
      },
    ],
    photos: [
      { src: `${baseUrl}/images/matress-1.jpg`, alt: "Camping air mattress" },
      { src: `${baseUrl}/images/matress-2.jpg`, alt: "Camping air mattress" },
    ],
  },
  {
    slug: "tea-kettle",
    price: "5€",
    title: {
      en: "IKEA Riklig Glass Teapot",
      ru: "Стеклянный чайник IKEA Riklig",
    },
    description: {
      en: "IKEA Riklig glass teapot.",
      ru: "Стеклянный чайник IKEA Riklig.",
    },
    links: [
      {
        label: { en: "Product link", ru: "Ссылка на товар" },
        url: "https://www.ikea.com/hu/hu/p/riklig-teaskanna-ueveg-40297848/",
      },
    ],
    photos: [
      {
        src: `${baseUrl}/images/tea-kettle-1.jpg`,
        alt: "IKEA Riklig glass teapot",
      },
    ],
  },
  {
    slug: "shoe-wardrobe",
    price: "25€",
    title: {
      en: "IKEA Bissa Shoe Cabinet",
      ru: "Обувной шкаф IKEA Bissa",
    },
    description: {
      en: "IKEA Bissa shoe cabinet with 2 compartments, white. 49x28x93 cm.",
      ru: "Обувной шкаф IKEA Bissa с 2 отделениями, белый. 49x28x93 cm.",
    },
    links: [
      {
        label: { en: "Product link", ru: "Ссылка на товар" },
        url: "https://www.ikea.com/hu/hu/p/bissa-ciposszekreny-2-taroloval-feher-70530256/",
      },
    ],
    photos: [
      {
        src: `${baseUrl}/images/shoe-wardrobe-1.jpg`,
        alt: "IKEA Bissa shoe cabinet",
      },
      {
        src: `${baseUrl}/images/shoe-wardrobe-2.jpg`,
        alt: "IKEA Bissa shoe cabinet",
      },
    ],
  },
  {
    slug: "cabinet",
    price: "25€",
    title: {
      en: "2-drawer cabinet",
      ru: "Тумбочка",
    },
    description: {
      en: "2 draweers cabinet, white. 80x50x180cm.",
      ru: "Тумбочка с 2 отделениями, белая. 80x50x180cm. Ни один мизинец при эксплуатации не пострадал, рекомендую",
    },
    links: [],
    photos: [
      { src: `${baseUrl}/images/wardrobe-1.jpg`, alt: "Wardrobe" },
      { src: `${baseUrl}/images/wardrobe-2.jpg`, alt: "Wardrobe" },
      { src: `${baseUrl}/images/wardrobe-3.jpg`, alt: "Wardrobe" },
      { src: `${baseUrl}/images/wardrobe-4.jpg`, alt: "Wardrobe" },
    ],
  },
  {
    slug: "water-purifier",
    price: "30€",
    title: {
      en: "LifeStraw Home 10-Cup Water Purifier",
      ru: "Фильтр для воды LifeStraw Home на 10 чашек",
    },
    description: {
      en: "LifeStraw Home 10-Cup water filter pitcher. Both filters need replacing, as they've reached the end of their service life. I bought it specifically to remove lead from the water. As you may know, much of central Budapest has a lead contamination problem due to old housing stock with old lead pipes. It comes with a certificate confirming this.",
      ru: "Фильтр-кувшин для воды LifeStraw Home на 10 чашек. Требует замены обоих фильтров, подошли по времени. Покупал специально для очищения воды от свинца. Как вам может быть известно, в большей центральной части будапешта проблема загрязнения свинцом из-за старого жилого фонда со старыми свинцовыми трубами. У него есть сертификат подтверждающий это.",
    },
    links: [
      {
        label: { en: "Product link", ru: "Ссылка на товар" },
        url: "https://eu.lifestraw.com/products/lifestraw-home-10-cup",
      },
      {
        label: { en: "Budapest pipes map", ru: "Карта труб Будапешта" },
        url: "https://www.google.com/maps/d/viewer?mid=1UO6iUOCewhGYshx3QMKS-zv8xDVySR46&ll=47.49275230209709%2C19.125935499999976&z=11",
        icon: `${baseUrl}/icons/google-maps.png`,
      },
    ],
    photos: [
      {
        src: `${baseUrl}/images/water-purifier-1.jpg`,
        alt: "LifeStraw Home 10-Cup water purifier",
      },
    ],
  },
  {
    slug: "smart-scales",
    price: "15€",
    title: {
      en: "Xiaomi Body Composition Scale S400",
      ru: "Умные весы Xiaomi Body Composition Scale S400",
    },
    description: {
      en: "Xiaomi Body Composition Scale S400 smart scale.",
      ru: "Умные весы Xiaomi Body Composition Scale S400. Не знаю то ли радоваться, то ли плакать, что вес показывает точно (цифра большая)",
    },
    links: [
      {
        label: { en: "Product link", ru: "Ссылка на товар" },
        url: "https://m.alza.hu/EN/xiaomi-body-composition-scale-s400-d12293093.htm",
      },
    ],
    photos: [
      {
        src: `${baseUrl}/images/scales-1.jpg`,
        alt: "Xiaomi Body Composition Scale S400",
      },
      {
        src: `${baseUrl}/images/scales-2.jpg`,
        alt: "Xiaomi Body Composition Scale S400",
      },
    ],
  },
  {
    slug: "vapor-iron",
    price: "25€",
    title: {
      en: "Tefal Access Steam Force Iron",
      ru: "Утюг с парогенератором Tefal Access Steam Force",
    },
    description: {
      en: "Tefal Access Steam Force DT8270E1 steam iron, black.",
      ru: "Утюг-парогенератор Tefal Access Steam Force DT8270E1, чёрный.",
    },
    links: [
      {
        label: { en: "Product link", ru: "Ссылка на товар" },
        url: "https://www.mediamarkt.hu/hu/product/_tefal-dt8270e1-access-steam-force-g%C5%91z%C3%B6l%C5%91-fekete-1365797.html",
      },
    ],
    photos: [
      {
        src: `${baseUrl}/images/vapor-iron-1.jpg`,
        alt: "Tefal Access Steam Force iron",
      },
      {
        src: `${baseUrl}/images/vapor-iron-2.jpg`,
        alt: "Tefal Access Steam Force iron",
      },
    ],
  },
];

export function getItem(slug: string) {
  return items.find((item) => item.slug === slug);
}

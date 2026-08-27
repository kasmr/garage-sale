
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
    slug: "monitor",
    price: "150€",
    originalPrice: "250€",
    title: {
      en: "LG UltraWide Monitor 29WP500-B",
      ru: "Монитор LG UltraWide 29WP500-B",
    },
    description: {
      en: "29-inch UltraWide LG monitor, model 29WP500-B. Bought new for 250€, selling for 150€.",
      ru: "29-дюймовый монитор LG UltraWide, модель 29WP500-B. Покупал за 250€, продаю за 150€.",
    },
    links: [
      {
        label: { en: "Compare price", ru: "Сравнить цену" },
        url: "https://www.arukereso.hu/monitor-c3126/lg/ultrawide-29wp500-b-p652180485/",
      },
      {
        label: { en: "Product link", ru: "Ссылка на товар" },
        url: "https://www.lg.com/hu/monitorok/ultrawide-monitor/29wp500-b/",
      },
    ],
    photos: [
      { src: "/images/monitor-1.jpg", alt: "LG UltraWide Monitor 29WP500-B" },
      { src: "/images/monitor-2.jpg", alt: "LG UltraWide Monitor 29WP500-B" },
    ],
  },
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
      { src: "/images/soundbar-1.jpg", alt: "LG Soundbar S60T" },
      { src: "/images/soundbar-2.jpg", alt: "LG Soundbar S60T" },
      { src: "/images/soundbar-3.jpg", alt: "LG Soundbar S60T" },
    ],
  },
  {
    slug: "air-purifier",
    price: "100€",
    originalPrice: "179€",
    title: {
      en: "Pro Breeze 5L Portable Air Cooler",
      ru: "Портативный воздухоохладитель Pro Breeze 5L",
    },
    description: {
      en: "Pro Breeze 5L portable air cooler with 4 operating modes. Bought for 179€, selling for 100€.",
      ru: "Портативный воздухоохладитель Pro Breeze объёмом 5 л, 4 режима работы. Покупал за 179€, отдаю за 100€.",
    },
    links: [
      {
        label: { en: "Product link", ru: "Ссылка на товар" },
        url: "https://eu.probreeze.com/products/5l-portable-air-cooler-with-4-operating-modes",
      },
    ],
    photos: [
      { src: "/images/air-purifier-1.jpg", alt: "Pro Breeze 5L Portable Air Cooler" },
      { src: "/images/air-purifier-2.jpg", alt: "Pro Breeze 5L Portable Air Cooler" },
      { src: "/images/air-purifier-3.jpg", alt: "Pro Breeze 5L Portable Air Cooler" },
    ],
  },
  {
    slug: "computer-chair",
    price: "25€",
    title: {
      en: "IKEA Renberget Office Chair",
      ru: "Компьютерное кресло IKEA Renberget",
    },
    description: {
      en: "IKEA Renberget swivel office chair in black (Bomstad).",
      ru: "Компьютерное кресло IKEA Renberget, чёрное (Bomstad).",
    },
    links: [
      {
        label: { en: "Product link", ru: "Ссылка на товар" },
        url: "https://www.ikea.com/hu/hu/p/renberget-forgoszek-bomstad-fekete-60493546/",
      },
    ],
    photos: [{ src: "/images/chair-1.jpg", alt: "IKEA Renberget Office Chair" }],
  },
  {
    slug: "computer-table",
    price: "100€",
    title: {
      en: "IKEA Alex Desk",
      ru: "Стол IKEA Alex",
    },
    description: {
      en: "IKEA Alex desk in turquoise 132x58 cm.",
      ru: "Письменный стол IKEA Alex 132x58 cm, бирюзового цвета. Не обращайте внимание на собранный пазл сверху стола, 1000 кусочков сикстинская капелла",
    },
    links: [
      {
        label: { en: "Product link", ru: "Ссылка на товар" },
        url: "https://www.ikea.com/hu/hu/p/alex-iroasztal-soetetszuerke-80588888/",
      },
    ],
    photos: [
      { src: "/images/table-1.jpg", alt: "IKEA Alex Desk" },
      { src: "/images/table-2.jpg", alt: "IKEA Alex Desk" },
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
      { src: "/images/vaacum-cleaner-1.jpg", alt: "Xiaomi Robot Vacuum S10" },
      { src: "/images/vaacum-cleaner-2.jpg", alt: "Xiaomi Robot Vacuum S10" },
    ],
  },
  {
    slug: "ping-pong-rackets",
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
    photos: [{ src: "/images/tennis-rackets-1.jpg", alt: "Table tennis racket set" }],
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
      { src: "/images/matress-1.jpg", alt: "Camping air mattress" },
      { src: "/images/matress-2.jpg", alt: "Camping air mattress" },
    ],
  },
  {
    slug: "electric-kettle",
    price: "30€",
    title: {
      en: "Tefal Sense Electric Kettle",
      ru: "Электрочайник Tefal Sense",
    },
    description: {
      en: "Tefal Sense KO693110 electric kettle, white, 1.5L.",
      ru: "Электрочайник Tefal Sense KO693110, белый, 1,5 л.",
    },
    links: [
      {
        label: { en: "Product link", ru: "Ссылка на товар" },
        url: "https://www.tefal.hu/vizforralo-tefal-sense-ko693110-feher-1-5-l",
      },
    ],
    photos: [{ src: "/images/kettle-1.jpg", alt: "Tefal Sense electric kettle" }],
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
    photos: [{ src: "/images/tea-kettle-1.jpg", alt: "IKEA Riklig glass teapot" }],
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
      { src: "/images/shoe-wardrobe-1.jpg", alt: "IKEA Bissa shoe cabinet" },
      { src: "/images/shoe-wardrobe-2.jpg", alt: "IKEA Bissa shoe cabinet" },
    ],
  },
  {
    slug: "cabinet",
    price: "25€",
    title: {
      en: "Сф",
      ru: "Тумбочка",
    },
    description: {
      en: "2 draweers cabinet, white. 80x50x180cm.",
      ru: "Тумбочка с 2 отделениями, белая. 80x50x180cm. Ни один мизинец при эксплуатации не пострадал, рекомендую",
    },
    links: [],
    photos: [
      { src: "/images/wardrobe-1.jpg", alt: "Wardrobe" },
      { src: "/images/wardrobe-2.jpg", alt: "Wardrobe" },
      { src: "/images/wardrobe-3.jpg", alt: "Wardrobe" },
      { src: "/images/wardrobe-4.jpg", alt: "Wardrobe" },
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
        icon: "/icons/google-maps.png",
      },
    ],
    photos: [{ src: "/images/water-purifier-1.jpg", alt: "LifeStraw Home 10-Cup water purifier" }],
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
      { src: "/images/scales-1.jpg", alt: "Xiaomi Body Composition Scale S400" },
      { src: "/images/scales-2.jpg", alt: "Xiaomi Body Composition Scale S400" },
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
      { src: "/images/vapor-iron-1.jpg", alt: "Tefal Access Steam Force iron" },
      { src: "/images/vapor-iron-2.jpg", alt: "Tefal Access Steam Force iron" },
    ],
  },
];

export function getItem(slug: string) {
  return items.find((item) => item.slug === slug);
}

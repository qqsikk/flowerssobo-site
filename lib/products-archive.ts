import type { RawProduct } from "./products";

/**
 * Витрина до 9 июля 2026 — карточки с фиксированной ценой, снятые при переходе
 * на позиции с выбором количества. Чтобы вернуть их на сайт, добавьте
 * `...archivedProducts` в массив `raw` в lib/products.ts (фото на месте,
 * в /public/images/products ничего не удалялось).
 */
export const archivedProducts: RawProduct[] = [
  {
    slug: "pionovidnaya-roza",
    name: "Пионовидная роза",
    description:
      "Объёмные пионовидные розы с плавным переходом от насыщенно-розового к тёплому персиковому центру. Плотные и роскошные.",
    flowers: ["Пионовидная роза"],
    price: 6000,
    formCategory: "Монобукет",
    image: "/images/products/pionovidnaya-roza.jpg",
  },
  {
    slug: "romashka",
    name: "Ромашка",
    description:
      "Пышный летний моно из ромашки — воздушный и ароматный, всегда получается объёмным.",
    flowers: ["Ромашка"],
    price: 5000,
    formCategory: "Монобукет",
    image: "/images/products/romashka.jpg",
  },
  {
    slug: "kustovaya-roza-persik",
    name: "Кустовая роза, персиковая",
    description:
      "Нежный моно из персиково-розовой кустовой розы — много мелких бутонов на каждом стебле дают мягкий объём.",
    flowers: ["Кустовая роза"],
    price: 4000,
    formCategory: "Монобукет",
    image: "/images/products/kustovaya-roza-persik.jpg",
  },
  {
    slug: "eustoma",
    name: "Эустома",
    description:
      "Пышный моно из белой эустомы в светлых оттенках — лёгкий, ажурный и очень деликатный.",
    flowers: ["Эустома"],
    price: 8000,
    formCategory: "Монобукет",
    image: "/images/products/eustoma.jpg",
  },
  {
    slug: "diantus",
    name: "Диантус",
    description:
      "Кружевной моно из диантуса в пудрово-персиковом. Нежный и при этом очень стойкий — стоит в вазе дольше многих.",
    flowers: ["Диантус"],
    price: 5400,
    formCategory: "Монобукет",
    image: "/images/products/diantus.jpg",
  },
  {
    slug: "kustovaya-roza-rozovaya",
    name: "Кустовая роза, розовая",
    description:
      "Плотная, многослойная, объёмная — ярко-розовая кустовая роза с пионовидными бутонами.",
    flowers: ["Кустовая роза"],
    price: 5000,
    formCategory: "Монобукет",
    image: "/images/products/kustovaya-roza-rozovaya.jpg",
  },
  {
    slug: "ranunkulyus",
    name: "Ранункулюс",
    description:
      "Моно из нежных воздушных ранункулюсов в розово-пудровых оттенках — мягкий и романтичный.",
    flowers: ["Ранункулюс"],
    price: 16000,
    formCategory: "Монобукет",
    image: "/images/products/ranunkulyus.jpg",
  },
  {
    slug: "krasnaya-roza-krupnyy-buton",
    name: "Красная роза, крупный бутон",
    description:
      "Свежий моно из красных роз с крупным раскрытым бутоном — насыщенный и яркий жест внимания.",
    flowers: ["Красная роза"],
    price: 7900,
    formCategory: "Монобукет",
    image: "/images/products/krasnaya-roza-krupnyy-buton.jpg",
  },
  {
    slug: "kustovaya-roza-belaya",
    name: "Белая кустовая роза",
    description:
      "Моно из белоснежной кустовой розы — чистый и торжественный, с множеством мелких бутонов.",
    flowers: ["Кустовая роза"],
    price: 6500,
    formCategory: "Монобукет",
    image: "/images/products/kustovaya-roza-belaya.jpg",
  },
  {
    slug: "diantus-pyshnyy",
    name: "Диантус, пышный",
    description:
      "Крупный и пышный моно из персикового диантуса — много кружевных бутонов, плотная сборка.",
    flowers: ["Диантус"],
    price: 6000,
    formCategory: "Монобукет",
    image: "/images/products/diantus-pyshnyy.jpg",
  },
  {
    slug: "kustovaya-roza-kremovaya",
    name: "Кустовая роза, кремовая",
    description:
      "Пышный, объёмный и воздушный моно из кремовой кустовой розы — тёплый и деликатный.",
    flowers: ["Кустовая роза"],
    price: 4800,
    formCategory: "Монобукет",
    image: "/images/products/kustovaya-roza-kremovaya.jpg",
  },
  {
    slug: "roza-51",
    name: "51 красная роза",
    description:
      "Классический моно из 51 красной розы на длинном стебле — крупный и статный жест.",
    flowers: ["Красная роза"],
    price: 16000,
    formCategory: "Монобукет",
    image: "/images/products/roza-51.jpg",
  },
  {
    slug: "kustovaya-roza-obyomnaya",
    name: "Кустовые розы, объёмные",
    description:
      "Нежные объёмные кустовые розы с множеством мелких бутонов. Собираем в разном количестве веток и подбираем оттенки под запрос.",
    flowers: ["Кустовая роза"],
    price: 15000,
    formCategory: "Монобукет",
    image: "/images/products/kustovaya-roza-obyomnaya.jpg",
  },
  {
    slug: "roza-101",
    name: "101 роза",
    description:
      "Букет-гигант из 101 красной розы — объём, который видно с порога. Забрать или заказать можно уже сегодня.",
    flowers: ["Красная роза"],
    price: 33630,
    formCategory: "Букет-гигант",
    image: "/images/products/roza-101.jpg",
  },
];

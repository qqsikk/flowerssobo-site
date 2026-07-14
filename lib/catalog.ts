export type Category = {
  slug: string;
  title: string;
  blurb: string;
  image: string;
  /** Pre-fills the order form when a card is clicked. */
  formValue: string;
  /** CSS object-position for the tile crop, when center isn't ideal. */
  objectPosition?: string;
  /** Full-width banner (spans all columns) — drives a wider `next/image` sizes. */
  wide?: boolean;
};

/**
 * Каталог-коллаж: фото — реальные работы из `public/images/catalog`, подпись
 * лежит поверх снимка. Раскладка плиток задаётся в `Categories.tsx` (бенто).
 * Клик по плитке префилит форму заявки.
 */
export const categories: Category[] = [
  {
    slug: "mono",
    title: "Моно",
    blurb: "Один сорт, чистая форма и акцент на сам цветок.",
    image: "/images/catalog/mono.jpg",
    formValue: "Монобукет",
    objectPosition: "50% 38%",
  },
  {
    slug: "giant",
    title: "Букет-гигант",
    blurb: "Максимальный объём для тех случаев, когда хочется впечатлить.",
    image: "/images/catalog/giant.jpg",
    formValue: "Букет-гигант",
    objectPosition: "50% 38%",
  },
  {
    slug: "trend",
    title: "Трендовый",
    blurb: "Собран в актуальной эстетике: модные цветы, оттенки и сочетания.",
    image: "/images/catalog/trend.jpg",
    formValue: "Трендовый букет",
    objectPosition: "50% 42%",
  },
  {
    slug: "custom",
    title: "Кастомный",
    blurb: "Соберём под вас: по оттенкам, настроению, формату и бюджету.",
    image: "/images/catalog/custom.jpg",
    formValue: "Кастомный букет",
    objectPosition: "50% 42%",
  },
  {
    slug: "jute",
    title: "Джутовые котомки",
    blurb: "Цветы в плетёном джутовом кашпо — готовый подарок, ваза не нужна.",
    image: "/images/catalog/jute.jpg",
    formValue: "Цветы в джутовой котомке",
    objectPosition: "50% 50%",
  },
  {
    slug: "interior",
    title: "Интерьерный",
    blurb: "Композиции для дома, ресторана, лобби отеля или офиса, собранные под стилистику пространства.",
    image: "/images/catalog/interior.jpg",
    formValue: "Интерьерная композиция",
    objectPosition: "50% 58%",
  },
  {
    slug: "wedding",
    title: "Свадебный",
    blurb: "Букет невесты и оформление — от каллы до выездной церемонии.",
    image: "/images/catalog/wedding.jpg",
    formValue: "Свадебная флористика",
    // Букет в кадре ниже центра — на широких мобильных плитках 34% показывал плечо.
    objectPosition: "48% 56%",
  },
  {
    slug: "business",
    title: "Цветы для бизнеса",
    blurb: "Поставки свежих цветов для компаний, мероприятий и оформления на специальных условиях.",
    image: "/images/catalog/business.jpg",
    formValue: "Цветы для бизнеса",
    objectPosition: "50% 50%",
    wide: true,
  },
];

/** Options for the order form's «что нужно» select. */
export const categoryOptions: string[] = [
  ...categories.map((c) => c.formValue),
  "Не определился — нужен совет флориста",
];


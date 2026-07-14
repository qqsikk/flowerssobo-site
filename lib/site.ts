/** Single source of truth for brand + contact details. */
export const site = {
  name: "Flowerssobo",
  domain: "flowerssobo.ru",
  city: "Липецк",
  deliveryTime: "60–90 минут",
  phoneDisplay: "+7 980 264-74-99",
  phoneHref: "tel:+79802647499",
  whatsapp: "https://wa.me/79802647499",
  /** Канал с работами (витрина-портфолио). */
  telegram: "https://t.me/flowerssobo",
  /** Личный диалог для заказов — сюда ведут все кнопки «написать нам». */
  telegramChat: "https://t.me/sooobooflwrs",
  instagram: "https://instagram.com/flowerssobo",
  /** Карточка организации в 2ГИС (короткая ссылка «Поделиться»). */
  twoGis: "https://go.2gis.com/Nenwg",
  legal: {
    entity: "ИП Соболев Григорий Олегович",
    inn: "482419305704",
    ogrnip: "325480000028496",
  },
  // Required RF disclaimer wherever Instagram (a Meta product) is shown.
  metaDisclaimer:
    "Instagram запрещён в РФ, принадлежит корпорации Meta, признанной экстремистской организацией",
} as const;

export const navLinks = [
  { href: "#catalog", label: "Каталог" },
  { href: "#bouquets", label: "Витрина" },
  { href: "#order", label: "Доставка" },
  { href: "#contacts", label: "Контакты" },
] as const;

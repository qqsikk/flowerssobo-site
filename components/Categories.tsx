import { categories } from "@/lib/catalog";
import { CategoryCard } from "@/components/CategoryCard";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Tile placement per slug. Mobile (2 cols) flows in DOM order with the two tall
 * photos (giant, jute) spanning two rows and the wedding + business banners
 * full-width. Desktop (lg, 3 cols) pins each tile to an explicit cell — a
 * composed 3×3 collage (mono · giant(tall) · trend / custom · — · jute(tall) /
 * interior · wedding · —), with the B2B banner spanning all three columns on a
 * fourth row below.
 */
const layout: Record<string, string> = {
  mono: "lg:col-start-1 lg:row-start-1",
  giant: "row-span-2 lg:col-start-2 lg:row-start-1",
  trend: "lg:col-start-3 lg:row-start-1",
  custom: "lg:col-start-1 lg:row-start-2",
  jute: "row-span-2 lg:col-start-3 lg:row-start-2",
  interior: "lg:col-start-1 lg:row-start-3",
  wedding: "col-span-2 lg:col-span-1 lg:col-start-2 lg:row-start-3",
  business: "col-span-2 lg:col-span-3 lg:col-start-1 lg:row-start-4",
};

export function Categories() {
  return (
    <section id="catalog" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Каталог</p>
              <h2 className="mt-4 max-w-xl text-balance text-4xl tracking-tight md:text-5xl">
                Букет под каждый повод и настроение
              </h2>
            </div>
            <p className="max-w-sm text-pretty leading-relaxed text-muted">
              Выберите направление — соберём букет с нуля из свежих цветов,
              учтём повод и ваши пожелания.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 grid auto-rows-[10.5rem] grid-cols-2 gap-3 sm:auto-rows-[12.5rem] lg:auto-rows-[15rem] lg:grid-cols-3 lg:gap-4">
            {categories.map((c) => (
              <CategoryCard
                key={c.slug}
                category={c}
                className={layout[c.slug]}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

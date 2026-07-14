"use client";

import { useCallback, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { products, type Product } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { ProductDetail } from "@/components/ProductDetail";
import { Reveal } from "@/components/ui/Reveal";

const EASE: [number, number, number, number] = [0.23, 1, 0.32, 1];

export function Showcase() {
  const reduce = useReducedMotion();
  const [selected, setSelected] = useState<Product | null>(null);

  const close = useCallback(() => setSelected(null), []);

  return (
    <section id="bouquets" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <div className="max-w-2xl">
            <p className="eyebrow">Витрина</p>
            <h2 className="mt-4 text-balance text-4xl tracking-tight md:text-5xl">
              Букеты, готовые к доставке
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted">
              У монобукетов количество выбираете сами — откройте карточку,
              и цена пересчитается под нужный размер.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-3 md:mt-12 md:gap-4 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard
              key={p.slug}
              product={p}
              onOpen={setSelected}
              reduce={reduce}
            />
          ))}
        </div>
      </div>

      {/* Backdrop — fades independently so the card can morph back on close */}
      <AnimatePresence>
        {selected ? (
          <motion.div
            key="bouquet-backdrop"
            onClick={close}
            className="fixed inset-0 z-[75] bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
          />
        ) : null}
      </AnimatePresence>

      {/* AnimatePresence держит карточку в DOM на выходе — иначе морф
          обратно в плитку (shared layoutId) не успевает отработать */}
      <AnimatePresence>
        {selected ? (
          <ProductDetail
            key={selected.slug}
            product={selected}
            onClose={close}
            reduce={reduce}
          />
        ) : null}
      </AnimatePresence>
    </section>
  );
}

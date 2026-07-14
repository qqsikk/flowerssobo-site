"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { type Product, formatPrice } from "@/lib/products";

const EASE: [number, number, number, number] = [0.23, 1, 0.32, 1];

/**
 * Showcase tile — clean card with the photo on top and the name/price on a
 * white footer below (readable at any size, esp. mobile). Shares `layoutId`
 * with ProductDetail so a tap morphs the tile into the open card. Поштучные
 * позиции показывают цену «от …» (минимальный вариант количества).
 */
export function ProductCard({
  product,
  onOpen,
  reduce,
}: {
  product: Product;
  onOpen: (p: Product) => void;
  reduce: boolean | null;
}) {
  return (
    <motion.button
      type="button"
      onClick={() => onOpen(product)}
      aria-label={`${product.name} — ${product.stems ? "от " : ""}${formatPrice(product.price)}`}
      layout={!reduce}
      layoutId={reduce ? undefined : `card-${product.slug}`}
      initial={reduce ? false : { opacity: 0, scale: 0.94 }}
      animate={reduce ? {} : { opacity: 1, scale: 1 }}
      exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.94 }}
      transition={{
        layout: { type: "spring", bounce: 0.2, duration: 0.5 },
        duration: 0.3,
        ease: EASE,
      }}
      whileTap={{ scale: 0.98 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-bg-elev text-left transition-shadow duration-300 hover:shadow-card"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
        />
        <span className="absolute left-3 top-3 rounded-full bg-bg/85 px-2.5 py-1 text-[11px] font-medium text-ink backdrop-blur-sm">
          {product.formCategory}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-3 md:p-4">
        <h3 className="font-display text-sm font-semibold leading-tight tracking-tight text-ink md:text-base">
          {product.name}
        </h3>
        <div className="mt-3 flex items-center justify-between gap-2">
          <span className="text-sm font-semibold tabular-nums text-ink md:text-base">
            {product.stems ? (
              <>
                <span className="font-normal text-muted">от </span>
                {formatPrice(product.price)}
              </>
            ) : (
              formatPrice(product.price)
            )}
          </span>
          <span className="flex size-8 items-center justify-center rounded-full border border-line text-ink transition-colors duration-300 group-hover:border-rose group-hover:bg-rose group-hover:text-white">
            <ArrowUpRight size={15} weight="bold" />
          </span>
        </div>
      </div>
    </motion.button>
  );
}

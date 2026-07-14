import Link from "next/link";

/** Кастомный 404 — фирменный цветок и дорога обратно на главную. */
export default function NotFound() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center px-6 text-center">
      <svg
        viewBox="0 0 48 48"
        className="size-16 text-rose"
        fill="currentColor"
        aria-hidden
      >
        {[0, 72, 144, 216, 288].map((a) => (
          <ellipse
            key={a}
            cx="24"
            cy="13"
            rx="5.5"
            ry="10"
            transform={`rotate(${a} 24 24)`}
          />
        ))}
        <circle cx="24" cy="24" r="5" className="text-sage" fill="currentColor" />
      </svg>
      <p className="eyebrow mt-8">Ошибка 404</p>
      <h1 className="mt-4 text-balance text-4xl tracking-tight md:text-5xl">
        Такой страницы нет
      </h1>
      <p className="mt-4 max-w-sm text-pretty leading-relaxed text-muted">
        Возможно, ссылка устарела. Зато цветы — свежие.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-rose px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-rose-deep active:scale-[0.98]"
      >
        На главную
      </Link>
    </div>
  );
}

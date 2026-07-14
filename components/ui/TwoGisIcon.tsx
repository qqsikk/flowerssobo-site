/**
 * Мини-бейдж 2ГИС — скруглённый квадрат с «2Г», в духе фирменного знака,
 * но нарисован сам (официальный логотип не встраиваем). Красится через
 * currentColor и принимает те же пропсы, что иконки Phosphor рядом
 * (weight игнорируем — толщина у бейджа фиксированная).
 */
export function TwoGisIcon({
  size = 24,
  className,
}: {
  size?: number;
  className?: string;
  weight?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden
    >
      <rect
        x="2.2"
        y="2.2"
        width="19.6"
        height="19.6"
        rx="6"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <text
        x="12"
        y="16.2"
        textAnchor="middle"
        fontSize="9.5"
        fontWeight="700"
        fill="currentColor"
        fontFamily="inherit"
      >
        2Г
      </text>
    </svg>
  );
}

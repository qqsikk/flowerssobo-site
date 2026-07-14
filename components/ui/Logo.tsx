import { cn } from "@/lib/utils";

/**
 * Brand wordmark — "FLOWERSSOBO" in DaysSans Black, all-caps.
 * Colour is inherited from the parent (`currentColor`), so it can render
 * brand-olive on white and white over the video hero. Size via className.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "font-logo uppercase leading-none tracking-[0.01em]",
        className,
      )}
    >
      Flowerssobo
    </span>
  );
}

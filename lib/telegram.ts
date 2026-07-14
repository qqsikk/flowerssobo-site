import type { OrderInput } from "./schema";

/** Escape characters that are special in Telegram HTML parse mode. */
function esc(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function row(label: string, value?: string): string {
  const v = (value ?? "").trim();
  if (!v) return "";
  return `<b>${label}:</b> ${esc(v)}\n`;
}

const METHOD_LABELS: Record<string, string> = {
  telegram: "Телеграм",
  whatsapp: "WhatsApp",
  phone: "Телефон",
};

/** Build the notification message sent to the shop's Telegram. */
export function formatOrderMessage(data: OrderInput): string {
  const stamp = new Intl.DateTimeFormat("ru-RU", {
    timeZone: "Europe/Moscow",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date());

  const methods = (data.contactMethods ?? [])
    .map((m) => METHOD_LABELS[m] ?? m)
    .join(", ");

  const lines = [
    "<b>НОВАЯ ЗАЯВКА С САЙТА</b>\n",
    row("ФИО", data.fullName),
    row("Телефон", data.phone),
    row("Telegram", data.telegramNick),
    row("Способ связи", methods),
    row("Что нужно", data.category),
    row("Комментарий", data.comment),
    `\n<i>${esc(stamp)} (МСК)</i>`,
  ];

  return lines.filter(Boolean).join("");
}

type SendResult = { ok: true } | { ok: false; error: string };

/** Send the order to Telegram via the Bot API. Token stays server-side. */
export async function sendOrderToTelegram(data: OrderInput): Promise<SendResult> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatIdsRaw = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatIdsRaw) {
    return {
      ok: false,
      error:
        "Telegram не настроен: задайте TELEGRAM_BOT_TOKEN и TELEGRAM_CHAT_ID в переменных окружения.",
    };
  }

  const chatIds = chatIdsRaw.split(",").map((s) => s.trim()).filter(Boolean);
  const text = formatOrderMessage(data);

  const sendOne = async (chatId: string): Promise<SendResult> => {
    try {
      const res = await fetch(
        `https://api.telegram.org/bot${token}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: chatId,
            text,
            parse_mode: "HTML",
            disable_web_page_preview: true,
          }),
          signal: AbortSignal.timeout(10_000),
        },
      );
      if (!res.ok) {
        const body = await res.text();
        return { ok: false, error: `Telegram API ${res.status}: ${body}` };
      }
      return { ok: true };
    } catch (err) {
      return {
        ok: false,
        error: err instanceof Error ? err.message : "Не удалось связаться с Telegram",
      };
    }
  };

  const results = await Promise.all(chatIds.map(sendOne));
  const failed = results.filter((r): r is { ok: false; error: string } => !r.ok);
  if (failed.length === results.length) {
    return { ok: false, error: failed.map((f) => f.error).join("; ") };
  }
  // Частичный сбой — заявка дошла не всем получателям; без лога владелец
  // «отвалившегося» чата никогда об этом не узнает.
  if (failed.length > 0) {
    console.error(
      `Telegram partial fail (${failed.length}/${results.length}):`,
      failed.map((f) => f.error).join("; "),
    );
  }
  return { ok: true };
}

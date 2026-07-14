import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Иконка для iOS-закладок — цветок на тёплом светлом поле. */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f3f4ef",
        }}
      >
        <svg width="124" height="124" viewBox="0 0 48 48" fill="#677535">
          {[0, 72, 144, 216, 288].map((a) => (
            <ellipse
              key={a}
              cx="24"
              cy="13"
              rx="6"
              ry="10.5"
              transform={`rotate(${a} 24 24)`}
            />
          ))}
          <circle cx="24" cy="24" r="5.5" fill="#9aa472" />
        </svg>
      </div>
    ),
    { ...size },
  );
}

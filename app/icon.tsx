import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/** Favicon — фирменный цветок (лепестки оливы, сердцевина шалфей). */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="32" height="32" viewBox="0 0 48 48" fill="#677535">
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

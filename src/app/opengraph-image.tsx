import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";
import { site } from "@/lib/site";

export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#111111",
          color: "#ededed",
        }}
      >
        <div style={{ fontSize: 26, color: "#8e8e8e" }}>{new URL(site.url).host}</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 600, letterSpacing: -2 }}>{profile.name}</div>
          <div style={{ fontSize: 34, color: "#a3a3a3", marginTop: 18 }}>
            {`Lead Frontend Engineer at ${profile.company}`}
          </div>
        </div>
      </div>
    ),
    size,
  );
}

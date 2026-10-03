import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return { name: "PX League", short_name: "PX League", description: "توقّع نتائج المباريات ونافس على الصدارة", start_url: "/", display: "standalone", background_color: "#063b30", theme_color: "#063b30", dir: "rtl", lang: "ar", icons: [{ src: "/brand/app-icon.png", sizes: "800x800", type: "image/png" }] };
}

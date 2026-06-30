import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Статический экспорт: next build -> папка out/ с готовыми HTML/CSS/JS
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;

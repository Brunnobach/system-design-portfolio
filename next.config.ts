import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const pagesBase = "/system-design-portfolio";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubPages ? pagesBase : "",
  },
  ...(isGithubPages
    ? {
        basePath: pagesBase,
        assetPrefix: pagesBase,
      }
    : {}),
};

export default nextConfig;

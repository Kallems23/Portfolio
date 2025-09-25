import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  ...(isGithubPages && {
    basePath: '/Portfolio',
    assetPrefix: '/Portfolio/',
  }),
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubPages ? '/Portfolio' : '',
  },
  turbopack: {
    root: __dirname, // explicitly set the project root
  },
};

export default nextConfig;

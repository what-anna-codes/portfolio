import type { NextConfig } from "next";

// const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  output: "export",
  // basePath: isProd ? '/portfolio' : '',
  // assetPrefix: isProd ? '/portfolio/' : '',
  // images: {
  //   unoptimized: true, // GitHub Pages does not support Next.js image optimization
  // }
}

module.exports = nextConfig

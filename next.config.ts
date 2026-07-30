import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
    output: "standalone",
    distDir: "build"
}

module.exports = nextConfig

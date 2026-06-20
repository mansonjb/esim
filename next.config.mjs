/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Pin the tracing root to this project (a stray lockfile lives one level up).
  outputFileTracingRoot: import.meta.dirname,
};

export default nextConfig;

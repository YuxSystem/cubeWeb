/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone", // Otimizado para implantação em contêineres
  poweredByHeader: false,
  images: {
    domains: ["via.placeholder.com"],
  },
  i18n: {
    defaultLocale: "pt",
    locales: ["pt", "en", "es"],
    localeDetection: true,
  },
}

module.exports = nextConfig


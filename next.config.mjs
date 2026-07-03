/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  basePath: "/developer-kabilan",
  output: "export",
  images: {
    unoptimized: true,
  },
}

export default nextConfig

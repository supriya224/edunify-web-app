/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
    images: {
        domains: [
       "uniformapp.in","images.unsplash.com"
        ],
      },
};

export default nextConfig;

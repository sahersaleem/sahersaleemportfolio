/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'img.freepik.com',
          port: '',
          pathname: '/premium-photo/support-office-woman-generate-ai_98402-7714.jpg',
        },
      ],
    },
  }
export default nextConfig;

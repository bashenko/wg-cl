/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'http',
          hostname: 'localhost',
          port: '8055', // Allow images from localhost:8055
          pathname: '/assets/**', // Allow all assets from the /assets path
        },
      ],
    },
  };
  
  export default nextConfig;
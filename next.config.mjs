/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['next-international', 'international-types'],
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images:{
    remotePatterns:[
        {
            protocol: 'https',
            hostname: 'images.ctfassets.net',
        }
    ]
}
};

export default nextConfig;

/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: false,
    basePath: '',
    trailingSlash: false,
    assetPrefix: '',
    env: {
        basePath: '',
    },
    images: {
        unoptimized: false
    },

    devIndicators: {
        buildActivity: false,
        buildActivityPosition: 'bottom-right',
        appIsrStatus: false,
    },

    // Configure headers for better security and caching
    // async headers() {
    //     return [
    //         {
    //             source: '/(.*)',
    //             headers: [
    //                 {
    //                     key: 'X-Content-Type-Options',
    //                     value: 'nosniff',
    //                 },
    //                 {
    //                     key: 'X-Frame-Options',
    //                     value: 'DENY',
    //                 },
    //                 {
    //                     key: 'X-XSS-Protection',
    //                     value: '1; mode=block',
    //                 },
    //                 {
    //                     key: 'Referrer-Policy',
    //                     value: 'strict-origin-when-cross-origin',
    //                 },
    //                 {
    //                     key: 'Cache-Control',
    //                     value: 'public, max-age=31536000, immutable',
    //                 },
    //             ],
    //         },
    //     ];
    // },


    // Disable x-powered-by header
    // poweredByHeader: false,

    // Enable production source maps for better debugging
    productionBrowserSourceMaps: false,

    webpack: (config, { dev, isServer }) => {
        if (!dev) {
            config.devtool = false;
        }
        config.resolve.fallback = {
            fs: false,
            path: false,
        };
        return config;
    },
};

export default nextConfig;
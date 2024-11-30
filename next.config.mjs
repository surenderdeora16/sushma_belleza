/** @type {import('next').NextConfig} */

const nextConfig = {
    basePath: '',
    assetPrefix: '',
    env: {
        basePath: '',
    },

    devIndicators: {
        buildActivity: false,
        buildActivityPosition: 'bottom-right',
        appIsrStatus: false,
    },

    // Enable React Strict Mode for improved development experience
    reactStrictMode: true,

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
    poweredByHeader: false,

    // Enable production source maps for better debugging
    productionBrowserSourceMaps: false,

    webpack: (config) => {
        config.resolve.fallback = {
            fs: false,
            path: false,
        };
        return config;
    },
};

export default nextConfig;
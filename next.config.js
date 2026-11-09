/** @type {import('next').NextConfig} */
const nextConfig = {
    // Vercel deployment: no static export needed
    images: {
        // AVIF first (smaller), WebP for browsers without AVIF support
        formats: ['image/avif', 'image/webp'],
    },
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    // the site must not be framed by another site (clickjacking)
                    { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
                    { key: 'X-Content-Type-Options', value: 'nosniff' },
                    { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
                    { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
                    { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=()' },
                    { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains' },
                ],
            },
        ]
    },
    async redirects() {
        return [
            // the "Nos collaborateurs" page was removed; keep old links and search results working
            { source: '/collaborateurs', destination: '/a-propos', permanent: true },
            // pages of the previous site that Google still shows in results
            { source: '/patisseries-glacees', destination: '/creations', permanent: true },
            { source: '/glaces-sorbets', destination: '/nos-glaces', permanent: true },
            { source: '/default.aspx', destination: '/', permanent: true },
        ]
    },
}

module.exports = nextConfig

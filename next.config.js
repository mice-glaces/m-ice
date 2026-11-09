/** @type {import('next').NextConfig} */
const nextConfig = {
    // Vercel deployment: no static export needed
    images: {
        // AVIF first (smaller), WebP for browsers without AVIF support
        formats: ['image/avif', 'image/webp'],
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

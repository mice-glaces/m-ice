import { SITE_URL, ROUTES } from '@/data/site'

// Plain route handler rather than app/sitemap.ts: Next's metadata loader breaks on
// paths containing an apostrophe (the project folder is "m'ice glace").
export function GET() {
    const urls = ROUTES.map((route) => {
        const priority = route === '/' ? '1.0' : route.startsWith('/mentions') || route.startsWith('/politique') ? '0.2' : '0.7'
        return `  <url><loc>${SITE_URL}${route === '/' ? '' : route}</loc><changefreq>monthly</changefreq><priority>${priority}</priority></url>`
    })
    const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`
    return new Response(xml, { headers: { 'Content-Type': 'application/xml' } })
}

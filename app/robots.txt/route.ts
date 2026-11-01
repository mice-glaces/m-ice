import { SITE_URL } from '@/data/site'

export function GET() {
    return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`, {
        headers: { 'Content-Type': 'text/plain' },
    })
}

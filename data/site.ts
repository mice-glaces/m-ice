// Public URL of the site, used for canonical links, the sitemap and social previews.
// Set NEXT_PUBLIC_SITE_URL in Vercel once the custom domain is live; until then the
// Vercel production URL is used automatically.
export const SITE_URL = (
    process.env.NEXT_PUBLIC_SITE_URL
    ?? (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000')
).replace(/\/$/, '')

export const SITE_NAME = "M'Ice"

export const INSTAGRAM_URL = 'https://instagram.com/mice_glacier'

export const ROUTES = [
    '/',
    '/nos-glaces',
    '/creations',
    '/a-propos',
    '/nous-trouver',
    '/contact',
    '/faq',
    '/mentions-legales',
    '/politique-confidentialite',
]

import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'
import Providers from '@/components/Providers'
import type { Metadata } from 'next'
import { LOCATIONS } from '@/data/locations'
import { SITE_URL, SITE_NAME, INSTAGRAM_URL } from '@/data/site'
import { SCOOP_TONE_TABLE, SCOOP_TONE_GREY_TABLE } from '@/data/scoopTone'

// next/font exposes the self-hosted families through these variables; globals.css
// maps them onto --font-display / --font-body.
const cormorant = Cormorant_Garamond({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600'],
    style: ['normal', 'italic'],
    display: 'swap',
    variable: '--font-cormorant',
})

const dmSans = DM_Sans({
    subsets: ['latin'],
    weight: ['300', '400', '500', '700'],
    display: 'swap',
    variable: '--font-dm-sans',
})

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: "M'Ice | Glacier Artisanal - La Garenne & Embrun",
        template: "%s | M'Ice, glacier artisanal",
    },
    description: "Découvrez M'Ice, glacier artisanal à La Garenne (Saint-Jean-Saint-Nicolas) et à Embrun. Glaces, sorbets, gaufres, crêpes et créations glacées sur mesure, élaborés avec passion et des ingrédients de qualité.",
    keywords: ['glacier', 'artisanal', 'glace', 'sorbet', 'La Garenne', 'Saint-Jean-Saint-Nicolas', 'Embrun', 'Champsaur', 'Hautes-Alpes', 'gâteau glacé', 'bûche glacée'],
    authors: [{ name: SITE_NAME }],
    alternates: { canonical: '/' },
    openGraph: {
        title: "M'Ice | Glacier Artisanal",
        description: "Glaces et sorbets artisanaux à La Garenne et à Embrun. Découvrez nos créations gourmandes.",
        type: 'website',
        locale: 'fr_FR',
        siteName: SITE_NAME,
        images: [{ url: '/images/hero_final_unzoomed.png', alt: "Glaces artisanales M'Ice" }],
    },
}

// Structured data so Google can show both shops (address, phone, map) in local results
const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': Object.values(LOCATIONS).map((loc) => ({
        '@type': 'IceCreamShop',
        '@id': `${SITE_URL}/#${loc.id}`,
        name: loc.name,
        url: SITE_URL,
        image: `${SITE_URL}/images/hero_final_unzoomed.png`,
        logo: `${SITE_URL}/images/branding/logo.jpg`,
        telephone: `+33${loc.phone.replace(/\s/g, '').slice(1)}`,
        email: loc.email.toLowerCase(),
        address: {
            '@type': 'PostalAddress',
            streetAddress: loc.address,
            addressLocality: loc.city,
            postalCode: loc.postalCode,
            addressRegion: 'Hautes-Alpes',
            addressCountry: 'FR',
        },
        geo: { '@type': 'GeoCoordinates', latitude: loc.coordinates.lat, longitude: loc.coordinates.lng },
        sameAs: [INSTAGRAM_URL],
        servesCuisine: ['Glaces', 'Sorbets', 'Crêpes', 'Gaufres'],
    })),
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="fr" className={`${cormorant.variable} ${dmSans.variable}`}>
            <body>
                {/* Tone curves for overexposed scoop photos (see data/scoopTone.ts) */}
                <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true" focusable="false">
                    {[['scoop-tone', SCOOP_TONE_TABLE], ['scoop-tone-grey', SCOOP_TONE_GREY_TABLE]].map(([id, table]) => (
                        <filter key={id} id={id} colorInterpolationFilters="sRGB">
                            <feComponentTransfer>
                                <feFuncR type="table" tableValues={table} />
                                <feFuncG type="table" tableValues={table} />
                                <feFuncB type="table" tableValues={table} />
                            </feComponentTransfer>
                        </filter>
                    ))}
                </svg>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <Providers>{children}</Providers>
            </body>
        </html>
    )
}

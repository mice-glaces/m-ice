import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'
import Providers from '@/components/Providers'
import type { Metadata } from 'next'
import { LOCATIONS } from '@/data/locations'
import { SITE_URL, SITE_NAME, INSTAGRAM_URL } from '@/data/site'

// next/font exposes the self-hosted families through these variables; globals.css
// maps them onto --font-display / --font-body.
const cormorant = Cormorant_Garamond({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600'],
    display: 'swap',
    variable: '--font-cormorant',
})

// The italic only dresses small captions: not preloaded, so it never competes
// with the hero image and the main fonts on first paint
const cormorantItalic = Cormorant_Garamond({
    subsets: ['latin'],
    weight: '400',
    style: 'italic',
    display: 'swap',
    preload: false,
    variable: '--font-cormorant-italic',
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
    description: "Glacier artisanal à La Garenne (Saint-Jean-Saint-Nicolas) et à Embrun : glaces, sorbets, crêpes, gaufres et créations glacées faits maison.",
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
        <html lang="fr" className={`${cormorant.variable} ${cormorantItalic.variable} ${dmSans.variable}`}>
            <body>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <Providers>{children}</Providers>
            </body>
        </html>
    )
}

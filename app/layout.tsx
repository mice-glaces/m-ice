import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'
import Providers from '@/components/Providers'
import type { Metadata } from 'next'

const playfair = Cormorant_Garamond({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    display: 'swap',
    variable: '--font-display',
})

const inter = DM_Sans({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
    display: 'swap',
    variable: '--font-body',
})

export const metadata: Metadata = {
    title: "M'Ice | Glacier Artisanal - La Garenne",
    description: "Découvrez M'Ice, glacier artisanal à La Garenne (Saint-Jean-Saint-Nicolas). Glaces, sorbets, gaufres, crêpes et créations glacées sur mesure, élaborés avec passion et des ingrédients de qualité.",
    keywords: ['glacier', 'artisanal', 'glace', 'sorbet', 'La Garenne', 'Saint-Jean-Saint-Nicolas', 'gâteau glacé', 'bûche glacée'],
    authors: [{ name: "M'Ice" }],
    openGraph: {
        title: "M'Ice | Glacier Artisanal Premium",
        description: "Glaces et sorbets artisanaux à La Garenne. Découvrez nos créations gourmandes.",
        type: 'website',
        locale: 'fr_FR',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="fr" className={`${playfair.variable} ${inter.variable}`}>
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    )
}

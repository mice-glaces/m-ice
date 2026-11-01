import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Créations glacées",
    description: "Nougats glacés, macarons glacés et bûchettes : les desserts glacés artisanaux M'Ice pour vos fêtes et repas de famille.",
    alternates: { canonical: '/creations' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return children
}

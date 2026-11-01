import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Nos collaborateurs",
    description: "Les engagements de M'Ice : artisanat, qualité et passion, de notre laboratoire du Champsaur jusqu'à votre cornet.",
    alternates: { canonical: '/collaborateurs' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return children
}

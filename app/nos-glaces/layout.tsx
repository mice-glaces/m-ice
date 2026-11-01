import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Nos glaces et sorbets",
    description: "Vanille, chocolat, pistache, génépi, myrtille, argousier… Découvrez tous les parfums de glaces et sorbets artisanaux M'Ice, fabriqués dans le Champsaur.",
    alternates: { canonical: '/nos-glaces' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return children
}

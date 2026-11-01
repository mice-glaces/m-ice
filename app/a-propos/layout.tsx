import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: "À propos",
    description: "L'histoire de M'Ice, glacier artisanal des Hautes-Alpes : notre équipe, nos produits locaux du Champsaur et nos valeurs.",
    alternates: { canonical: '/a-propos' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return children
}

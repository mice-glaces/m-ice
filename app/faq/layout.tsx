import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Questions fréquentes",
    description: "Horaires, allergènes, options véganes, gâteaux glacés sur mesure, bûches de Noël : toutes les réponses aux questions fréquentes sur M'Ice.",
    alternates: { canonical: '/faq' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return children
}

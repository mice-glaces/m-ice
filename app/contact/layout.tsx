import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Contact",
    description: "Une question, une commande de gâteau glacé ou une demande professionnelle ? Contactez les glaciers M'Ice de Saint-Jean-Saint-Nicolas et d'Embrun.",
    alternates: { canonical: '/contact' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return children
}

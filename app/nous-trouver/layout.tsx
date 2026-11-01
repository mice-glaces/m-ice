import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Nous trouver",
    description: "Adresses, téléphones et horaires des glaciers M'Ice à Saint-Jean-Saint-Nicolas (La Garenne) et à Embrun (Place du Général Dosse).",
    alternates: { canonical: '/nous-trouver' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return children
}

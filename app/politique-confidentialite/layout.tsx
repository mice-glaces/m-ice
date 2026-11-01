import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Politique de confidentialité",
    description: "Comment M'Ice collecte et protège vos données personnelles.",
    alternates: { canonical: '/politique-confidentialite' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return children
}

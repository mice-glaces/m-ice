import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Mentions légales",
    description: "Mentions légales du site M'Ice, glacier artisanal dans les Hautes-Alpes.",
    alternates: { canonical: '/mentions-legales' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return children
}

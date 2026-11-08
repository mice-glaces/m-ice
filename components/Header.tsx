'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import LocationSelector from './LocationSelector'
import LanguageSelector from './LanguageSelector'
import { useTranslation } from '@/context/LanguageContext'
import styles from './Header.module.css'

const navKeys = [
    { href: '/', key: 'nav.home' },
    { href: '/nos-glaces', key: 'nav.flavors' },
    { href: '/creations', key: 'nav.creations' },
    { href: '/a-propos', key: 'nav.about' },
    { href: '/contact', key: 'nav.contact' },
]

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const { t } = useTranslation()
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        handleScroll()
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Mobile menu: close on navigation, lock page scroll, close with Escape
    useEffect(() => {
        setIsMenuOpen(false)
    }, [pathname])

    useEffect(() => {
        if (!isMenuOpen) return
        const previousOverflow = document.body.style.overflow
        document.body.style.overflow = 'hidden'
        const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setIsMenuOpen(false) }
        window.addEventListener('keydown', onKey)
        return () => {
            document.body.style.overflow = previousOverflow
            window.removeEventListener('keydown', onKey)
        }
    }, [isMenuOpen])

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo} aria-label="M'Ice - Accueil">
                    <div className={styles.logoWrapper}>
                        <Image
                            src="/images/branding/logo-transparent.png"
                            alt="M'Ice"
                            width={480}
                            height={310}
                            priority
                            className={styles.logoImg}
                        />
                    </div>
                </Link>

                <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
                    <ul className={styles.navList}>
                        {navKeys.map((item) => {
                            const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href)
                            return (
                                <li key={item.href} className={styles.navItem}>
                                    <Link
                                        href={item.href}
                                        className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
                                        aria-current={isActive ? 'page' : undefined}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {t(item.key)}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>

                <div className={styles.rightActions}>
                    <LocationSelector />
                    <LanguageSelector />
                    <button
                        className={`${styles.menuToggle} ${isMenuOpen ? styles.menuOpen : ''}`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
                        aria-expanded={isMenuOpen}
                    >
                        <span className={styles.menuBar}></span>
                        <span className={styles.menuBar}></span>
                        <span className={styles.menuBar}></span>
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div
                    className={styles.overlay}
                    onClick={() => setIsMenuOpen(false)}
                    aria-hidden="true"
                />
            )}
        </header>
    )
}

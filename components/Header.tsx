'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import TransparentLogo from './TransparentLogo'
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

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo} aria-label="M'Ice - Accueil">
                    <div className={styles.logoWrapper}>
                        <TransparentLogo 
                            src="/images/branding/logo.jpg" 
                            alt="M'Ice" 
                            className={styles.logoImg}
                            height={120}
                        />
                    </div>
                </Link>

                <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
                    <ul className={styles.navList}>
                        {navKeys.map((item) => (
                            <li key={item.href} className={styles.navItem}>
                                <Link
                                    href={item.href}
                                    className={styles.navLink}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {t(item.key)}
                                </Link>
                            </li>
                        ))}
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

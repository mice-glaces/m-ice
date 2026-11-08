'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Phone, MapPin, Mail } from 'lucide-react'
import { useLocation } from '@/context/LocationContext'
import { useTranslation } from '@/context/LanguageContext'
import styles from './Footer.module.css'

export default function Footer() {
    const currentYear = new Date().getFullYear()
    const { currentLocation } = useLocation()
    const { t } = useTranslation()

    const quickLinks = [
        { href: '/', labelKey: 'nav.home' },
        { href: '/nos-glaces', labelKey: 'nav.flavors' },
        { href: '/creations', labelKey: 'nav.creations' },
        { href: '/collaborateurs', labelKey: 'collab.title' },
        { href: '/nous-trouver', labelKey: 'findus.title' },
        { href: '/faq', labelKey: 'nav.faq' },
    ]

    const legalLinks = [
        { href: '/mentions-legales', labelKey: 'footer.legalMentions' },
        { href: '/politique-confidentialite', labelKey: 'footer.privacy' },
    ]

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* Brand Column */}
                    <div className={styles.column}>
                        <Link href="/" className={styles.logo} aria-label="M'Ice - Accueil">
                            <Image
                                src="/images/branding/logo-transparent.png"
                                alt="M'Ice"
                                width={480}
                                height={310}
                                className={styles.logoImg}
                            />
                        </Link>
                        <p className={styles.description}>
                            {t('footer.description')}
                        </p>
                        <div className={styles.social}>
                            <a href="https://instagram.com/mice_glacier" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram M'Ice">
                                <Instagram size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className={styles.column}>
                        <h4 className={styles.columnTitle}>{t('footer.nav')}</h4>
                        <ul className={styles.linkList}>
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className={styles.link}>
                                        {t(link.labelKey).toUpperCase()}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact — dynamic based on location */}
                    <div className={styles.column}>
                        <h4 className={styles.columnTitle}>{currentLocation.shortName.toUpperCase()}</h4>
                        <div className={styles.contactList}>
                            <div className={styles.contactItem}>
                                <MapPin size={16} className={styles.contactIcon} />
                                <span>{currentLocation.address}, {currentLocation.city}</span>
                            </div>
                            <div className={styles.contactItem}>
                                <Phone size={16} className={styles.contactIcon} />
                                <a href={`tel:+33${currentLocation.phone.replace(/\s/g, '').slice(1)}`} className={styles.link}>{currentLocation.phone}</a>
                            </div>
                            <div className={styles.contactItem}>
                                <Mail size={16} className={styles.contactIcon} />
                                <a href={`mailto:${currentLocation.email}`} className={styles.link}>{currentLocation.email}</a>
                            </div>
                        </div>
                    </div>

                    {/* Legal */}
                    <div className={styles.column}>
                        <h4 className={styles.columnTitle}>{t('footer.legal')}</h4>
                        <ul className={styles.linkList}>
                            {legalLinks.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className={styles.link}>
                                        {t(link.labelKey).toUpperCase()}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p className={styles.copyright}>
                        © {currentYear} {t('footer.rights')}
                    </p>
                </div>
            </div>
        </footer>
    )
}

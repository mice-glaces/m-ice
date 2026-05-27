'use client'

import Link from 'next/link'
import { Instagram, Facebook, Phone, MapPin, Mail } from 'lucide-react'
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
    ]

    const legalLinks = [
        { href: '/mentions-legales', labelKey: 'footer.legalMentions' },
        { href: '/politique-confidentialite', labelKey: 'footer.privacy' },
    ]

    return (
        <footer className={styles.footer}>
            {/* Wave Divider */}
            <div className={styles.waveDivider}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles.waveFill}></path>
                </svg>
            </div>
            
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* Brand Column */}
                    <div className={styles.column}>
                        <p className={styles.description}>
                            {t('footer.description')}
                        </p>
                        <div className={styles.social}>
                            <a href="#" className={styles.socialIcon} aria-label="Facebook">
                                <Facebook size={18} />
                            </a>
                            <a href="https://instagram.com/mice_glacier" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram">
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

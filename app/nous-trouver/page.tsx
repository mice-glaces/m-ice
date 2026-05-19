"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin, Phone, Mail, Clock } from 'lucide-react'
import PageHero from '@/components/PageHero'
import styles from './page.module.css'
import { LOCATIONS } from '@/context/LocationContext'
import { useTranslation } from '@/context/LanguageContext'

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
}

const schedule = [
    { period: 'Haute Saison', days: 'Juillet - Août', hours: '10h00 - 19h00 non-stop' },
    { period: 'Mi-Saison', days: 'Mai - Juin, Septembre', hours: 'Mer à Dim : 14h - 18h' },
    { period: 'Hiver', days: 'Vacances Scolaires', hours: 'Consultez nos actus' },
]

export default function NousTrouverPage() {
    const { t } = useTranslation()

    return (
        <>
            <PageHero
                title={t('findus.title')}
                subtitle={t('findus.subtitle')}
                backgroundImage="/images/hero_final_unzoomed.png"
                compact
            />

            {/* Location Section */}
            <section className="section">
                <div className="container">
                    <div className={styles.locationGrid}>
                        {Object.values(LOCATIONS).map((loc) => (
                            <motion.div
                                key={loc.id}
                                className={styles.info}
                                {...fadeInUp}
                                style={{ marginBottom: '2rem', padding: '2rem', background: 'var(--color-surface)', borderRadius: '12px' }}
                            >
                                <div className={styles.infoBlock}>
                                    <h3 className={styles.infoSubtitle}>Glacier</h3>
                                    <h2 className={styles.infoTitle}>{loc.name}</h2>
                                    <address className={styles.address}>
                                        <p>{loc.address}</p>
                                        <p>{loc.postalCode} {loc.city}</p>
                                        <p>France</p>
                                    </address>
                                </div>

                                <div className={styles.infoBlock}>
                                    <h3 className={styles.infoSubtitle}>Contact Direct</h3>
                                    <p>
                                        <a href={`tel:${loc.phone.replace(/\s+/g, '')}`} className={styles.link}>
                                            {loc.phone}
                                        </a>
                                    </p>
                                    <p>
                                        <a href={`mailto:${loc.email.toLowerCase()}`} className={styles.link}>
                                            {loc.email.toLowerCase()}
                                        </a>
                                    </p>
                                </div>

                                <div className={styles.infoBlock}>
                                    <h3 className={styles.infoSubtitle}>Services</h3>
                                    <p className={styles.accessText}>
                                        Dégustation sur place & terrasse ensoleillée.<br />
                                        Accessibilité PMR complète.
                                    </p>
                                </div>

                                <Link href="/contact" className="btn btn--accent btn--lg">
                                    Nous écrire
                                    <ArrowRight size={18} className="ml-2" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Schedule Section */}
            <section className={`section ${styles.bgSection}`}>
                <div className="container">
                    <motion.div
                        className={styles.scheduleHeader}
                        {...fadeInUp}
                    >
                        <h2 className={styles.scheduleTitle}>{t('findus.hours')}</h2>
                        <p className={styles.scheduleNote}>
                            Notre disponibilité s&apos;accorde avec les cycles de la nature.
                        </p>
                    </motion.div>

                    <div className={styles.scheduleGrid}>
                        {schedule.map((item, index) => (
                            <motion.div
                                key={index}
                                className={styles.scheduleCard}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <h4 className={styles.schedulePeriod}>{item.period}</h4>
                                <p className={styles.scheduleDays}>{item.days}</p>
                                <p className={styles.scheduleHours}>{item.hours}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        className={styles.socialCta}
                        {...fadeInUp}
                    >
                        <p>Pour les annonces de dernière minute :</p>
                        <a
                            href="https://instagram.com/mice_glacier"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn--outline-light"
                        >
                            Suivre notre actualité
                        </a>
                    </motion.div>
                </div>
            </section>
        </>
    )
}

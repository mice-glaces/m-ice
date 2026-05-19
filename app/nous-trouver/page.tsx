"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin, Phone, Mail, Clock } from 'lucide-react'
import PageHero from '@/components/PageHero'
import styles from './page.module.css'

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
    return (
        <>
            <PageHero
                title="Nous Trouver"
                subtitle="Au Cœur des Massifs Alpins"
                backgroundImage="/images/hero_final_unzoomed.png"
                compact
            />

            {/* Location Section */}
            <section className="section">
                <div className="container">
                    <div className={styles.locationGrid}>
                        {/* Info Column */}
                        <motion.div
                            className={styles.info}
                            {...fadeInUp}
                        >
                            <div className={styles.infoBlock}>
                                <h3 className={styles.infoSubtitle}>La Boutique Signature</h3>
                                <h2 className={styles.infoTitle}>La Garenne</h2>
                                <address className={styles.address}>
                                    <p>Saint-Jean-Saint-Nicolas</p>
                                    <p>05260, Hautes-Alpes</p>
                                    <p>France</p>
                                </address>
                            </div>

                            <div className={styles.infoBlock}>
                                <h3 className={styles.infoSubtitle}>Contact Direct</h3>
                                <p>
                                    <a href="tel:+33400000000" className={styles.link}>
                                        +33 (0)4 00 00 00 00
                                    </a>
                                </p>
                                <p>
                                    <a href="mailto:contact@mice-glacier.fr" className={styles.link}>
                                        contact@mice-glacier.fr
                                    </a>
                                </p>
                            </div>

                            <div className={styles.infoBlock}>
                                <h3 className={styles.infoSubtitle}>Services</h3>
                                <p className={styles.accessText}>
                                    Dégustation sur place & terrasse ensoleillée.<br />
                                    Parking privatif à disposition.<br />
                                    Accessibilité PMR complète.
                                </p>
                            </div>

                            <Link href="/contact" className="btn btn--accent btn--lg">
                                Nous écrire
                                <ArrowRight size={18} className="ml-2" />
                            </Link>
                        </motion.div>

                        {/* Map Column */}
                        <motion.div
                            className={styles.mapWrapper}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2828.5!2d6.2!3d44.67!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDQwJzEyLjAiTiA2wrAxMicwMC4wIkU!5e0!3m2!1sfr!2sfr!4v1234567890"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Localisation M'Ice"
                                className={styles.map}
                            />
                        </motion.div>
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
                        <h2 className={styles.scheduleTitle}>Horaires d&apos;Ouverture</h2>
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

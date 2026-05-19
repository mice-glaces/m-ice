"use client"

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import PageHero from '@/components/PageHero'
import styles from './page.module.css'
import { useTranslation } from '@/context/LanguageContext'

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
}

const values = [
    {
        title: 'Artisanat',
        description: 'Chaque glace est élaborée à la main dans notre atelier, avec un savoir-faire transmis et perfectionné.',
    },
    {
        title: 'Qualité',
        description: 'Nous sélectionnons les meilleurs ingrédients : lait frais local, fruits de saison, chocolat grand cru.',
    },
    {
        title: 'Passion',
        description: 'La passion pour notre métier se retrouve dans chaque boule, chaque création, chaque sourire client.',
    },
]

export default function CollaborateursPage() {
    const { t } = useTranslation()

    return (
        <>
            <PageHero
                title={t('collab.title')}
                subtitle={t('collab.subtitle')}
                backgroundImage="/images/hero_final_unzoomed.png"
                compact
            />

            {/* Story Section */}
            <section className="section">
                <div className="container">
                    <div className={styles.storyGrid}>
                        <motion.div
                            className={styles.storyContent}
                            {...fadeInUp}
                        >
                            <span className={styles.label}>{t('collab.label1')}</span>
                            <h2 
                                className={styles.storyTitle} 
                                dangerouslySetInnerHTML={{ __html: t('collab.heading1') }}
                            />
                            <p className={styles.storyText}>
                                {t('collab.p1')}
                            </p>
                            <p className={styles.storyText}>
                                {t('collab.p2')}
                            </p>
                        </motion.div>
                        <motion.div
                            className={styles.storyImage}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <Image
                                src="/images/hero_final_unzoomed.png"
                                alt="Notre atelier artisanal"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className={styles.storyImg}
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className={`section ${styles.valuesSection}`}>
                <div className="container">
                    <div className={styles.valuesHeader}>
                        <span className={styles.label}>{t('collab.commitments')}</span>
                        <h2 className={styles.valuesTitle}>{t('collab.drives_us')}</h2>
                    </div>
                    <div className={styles.valuesGrid}>
                        {['artisanat', 'qualite', 'passion'].map((val, index) => (
                            <motion.div
                                key={index}
                                className={styles.valueCard}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <span className={styles.valueNumber}>0{index + 1}</span>
                                <h3 className={styles.valueTitle}>{t(`collab.${val}`)}</h3>
                                <p className={styles.valueDescription}>{t(`collab.${val}.desc`)}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="section">
                <div className="container container--narrow">
                    <motion.blockquote
                        className={styles.quote}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <p>{t('collab.quote')}</p>
                    </motion.blockquote>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section bg-section">
                <style jsx>{`
                    .bg-section { background: var(--color-bg-section); }
                `}</style>
                <div className="container container--narrow">
                    <motion.div
                        className={styles.ctaContent}
                        {...fadeInUp}
                    >
                        <h2 className={styles.ctaTitle}>{t('collab.meet_us')}</h2>
                        <p className={styles.ctaText}>
                            {t('collab.meet_us.desc')}
                        </p>
                        <div className={styles.ctaButtons}>
                            <Link href="/nous-trouver" className="btn btn--accent">
                                {t('collab.find_us_btn')}
                                <ArrowRight size={18} />
                            </Link>
                            <Link href="/nos-glaces" className="btn btn--outline-light">
                                {t('collab.discover_btn')}
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    )
}

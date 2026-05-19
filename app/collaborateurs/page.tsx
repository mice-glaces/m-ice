"use client"

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import PageHero from '@/components/PageHero'
import styles from './page.module.css'

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
    return (
        <>
            <PageHero
                title="Nos Collaborateurs"
                subtitle="L'art de la glace artisanale dans les Hautes-Alpes"
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
                            <span className={styles.label}>Héritage & Passion</span>
                            <h2 className={styles.storyTitle}>
                                Une Odyssée<br />
                                <span className={styles.accent}>Glacée Premium</span>
                            </h2>
                            <p className={styles.storyText}>
                                Au cœur des massifs alpins, M&apos;Ice redéfinit l&apos;art de la glace.
                                Notre quête : l&apos;équilibre parfait entre tradition artisanale et
                                audace créative.
                            </p>
                            <p className={styles.storyText}>
                                Chaque sorbet, chaque crème est une célébration du geste précis,
                                du goût à l&apos;état brut, sublimé par la noblesse des produits
                                que nous sélectionnons.
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
                        <span className={styles.label}>Nos Engagements</span>
                        <h2 className={styles.valuesTitle}>Ce Qui Nous Anime</h2>
                    </div>
                    <div className={styles.valuesGrid}>
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                className={styles.valueCard}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <span className={styles.valueNumber}>0{index + 1}</span>
                                <h3 className={styles.valueTitle}>{value.title}</h3>
                                <p className={styles.valueDescription}>{value.description}</p>
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
                        <p>
                            &ldquo;Créer des glaces qui racontent une histoire,
                            celle de notre terroir et de notre passion.&rdquo;
                        </p>
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
                        <h2 className={styles.ctaTitle}>Venez Nous Rencontrer</h2>
                        <p className={styles.ctaText}>
                            Découvrez notre univers et dégustez nos créations dans notre boutique
                            à La Garenne.
                        </p>
                        <div className={styles.ctaButtons}>
                            <Link href="/nous-trouver" className="btn btn--accent">
                                Nous trouver
                                <ArrowRight size={18} />
                            </Link>
                            <Link href="/nos-glaces" className="btn btn--outline-light">
                                Découvrir nos parfums
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    )
}

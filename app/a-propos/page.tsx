"use client"

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Heart, Mountain, Users, Leaf, Sparkles, MapPin, ArrowDown } from 'lucide-react'
import { useTranslation } from '@/context/LanguageContext'
import styles from './page.module.css'

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
} as const

const staggerContainer = {
    initial: {},
    whileInView: {
        transition: { staggerChildren: 0.12 }
    },
    viewport: { once: true }
} as const

const staggerItem = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } }
} as const

const timelineYears = ['2020', '2021', '2025']

const teamMembers = [
    { name: "Régis", nameKey: "regis", image: "/images/team-regis.png", emoji: "🍦" },
    { name: "Anaïs", nameKey: "anais", image: "/images/team-anais.png", emoji: "🎨" },
    { name: "Clara", nameKey: "clara", image: "/images/team-clara.png", emoji: "✨" },
    { name: "Victor", nameKey: "victor", image: "/images/team-victor.png", emoji: "🏔️" }
]

const valueEntries = [
    { icon: Heart, key: 'passion' },
    { icon: Mountain, key: 'terroir' },
    { icon: Leaf, key: 'quality' },
    { icon: Users, key: 'proximity' }
]

const originItems = [
    { emoji: '🥛', key: 'milk' },
    { emoji: '🥞', key: 'crepes' },
    { emoji: '🍦', key: 'chantilly' },
    { emoji: '🍫', key: 'choco' }
]

export default function AProposPage() {
    const { t } = useTranslation()

    return (
        <>
            {/* Hero Section - Custom */}
            <section className={styles.hero}>
                <div className={styles.heroBackground}>
                    <Image
                        src="/images/hero_final_unzoomed.png"
                        alt="M'Ice Glacier Artisanal"
                        fill
                        priority
                        className={styles.heroImg}
                    />
                    <div className={styles.heroOverlay} />
                </div>
                <div className={styles.heroContent}>
                    <motion.span
                        className={styles.heroBadge}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        <MapPin size={14} />
                        {t('about.heroBadge')}
                    </motion.span>
                    <motion.h1
                        className={styles.heroTitle}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {t('about.heroTitle')}
                    </motion.h1>
                    <motion.p
                        className={styles.heroSubtitle}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {t('about.heroSubtitle')}
                    </motion.p>
                    <motion.div
                        className={styles.heroScroll}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2, duration: 1 }}
                    >
                        <ArrowDown size={20} />
                    </motion.div>
                </div>
            </section>

            {/* Notre Histoire */}
            <section className={`section ${styles.storySection}`}>
                <div className="container">
                    <motion.div className={styles.storyHeader} {...fadeInUp}>
                        <span className={styles.label}>{t('about.story.label')}</span>
                        <h2 className={styles.sectionTitle}>{t('about.story.title')}</h2>
                    </motion.div>

                    <div className={styles.storyGrid}>
                        <motion.div className={styles.storyContent} {...fadeInUp}>
                            <p className={styles.storyText}>{t('about.story.p1')}</p>
                            <p className={styles.storyText}>{t('about.story.p2')}</p>
                            <p className={styles.storyText}>{t('about.story.p3')}</p>
                        </motion.div>
                        <motion.div
                            className={styles.storyImageWrapper}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className={styles.storyImage}>
                                <Image
                                    src="/images/hero_final_unzoomed.png"
                                    alt="Notre laboratoire artisanal M'Ice"
                                    fill
                                    className={styles.storyImg}
                                />
                            </div>
                            <div className={styles.storyImageAccent} />
                        </motion.div>
                    </div>

                    {/* Timeline */}
                    <motion.div className={styles.timeline} {...staggerContainer}>
                        {timelineYears.map((year) => (
                            <motion.div key={year} className={styles.timelineItem} variants={staggerItem}>
                                <div className={styles.timelineDot}>
                                    <span className={styles.timelineYear}>{year}</span>
                                </div>
                                <div className={styles.timelineContent}>
                                    <h3 className={styles.timelineTitle}>{t(`about.timeline.${year}.title`)}</h3>
                                    <p className={styles.timelineDesc}>{t(`about.timeline.${year}.desc`)}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Origine des produits */}
            <section className={`section ${styles.originSection}`}>
                <div className="container">
                    <motion.div className={styles.originHeader} {...fadeInUp}>
                        <span className={styles.label}>{t('about.origin.label')}</span>
                        <h2 className={styles.sectionTitle}>{t('about.origin.title')}</h2>
                        <p className={styles.originSubtitle}>{t('about.origin.subtitle')}</p>
                    </motion.div>

                    <motion.div className={styles.originGrid} {...staggerContainer}>
                        {originItems.map((item) => (
                            <motion.div key={item.key} className={styles.originCard} variants={staggerItem}>
                                <div className={styles.originIconWrapper}>
                                    <span className={styles.originIcon}>{item.emoji}</span>
                                </div>
                                <h3 className={styles.originCardTitle}>{t(`about.origin.${item.key}.title`)}</h3>
                                <p className={styles.originCardText}>{t(`about.origin.${item.key}.desc`)}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Notre Équipe */}
            <section className={`section ${styles.teamSection}`}>
                <div className="container">
                    <motion.div className={styles.teamHeader} {...fadeInUp}>
                        <span className={styles.label}>{t('about.team.label')}</span>
                        <h2 className={styles.sectionTitle}>{t('about.team.title')}</h2>
                        <p className={styles.teamIntro}>{t('about.team.intro')}</p>
                    </motion.div>

                    <div className={styles.teamGrid}>
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={member.name}
                                className={styles.teamCard}
                                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <div className={styles.teamPortraitWrapper}>
                                    <div className={styles.teamPortraitRing}>
                                        <div className={styles.teamPortrait}>
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                fill
                                                sizes="200px"
                                                className={styles.teamImg}
                                            />
                                </div>
                                    </div>
                                </div>
                                <div className={styles.teamInfo}>
                                    <h3 className={styles.teamName} style={{ textAlign: 'center', margin: 0 }}>{member.name}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Nos Valeurs */}
            <section className={`section ${styles.valuesSection}`}>
                <div className="container">
                    <motion.div className={styles.valuesHeader} {...fadeInUp}>
                        <span className={styles.label}>{t('about.values.label')}</span>
                        <h2 className={styles.sectionTitle}>{t('about.values.title')}</h2>
                        <p className={styles.valuesSubtitle}>{t('about.values.subtitle')}</p>
                    </motion.div>

                    <motion.div className={styles.valuesGrid} {...staggerContainer}>
                        {valueEntries.map((value) => {
                            const IconComponent = value.icon;
                            return (
                                <motion.div
                                    key={value.key}
                                    className={styles.valueCard}
                                    variants={staggerItem}
                                >
                                    <div className={styles.valueIconCircle}>
                                        <IconComponent size={28} className={styles.valueIcon} />
                                    </div>
                                    <h3 className={styles.valueTitle}>{t(`about.values.${value.key}`)}</h3>
                                    <div className={styles.valueDivider} />
                                    <p className={styles.valueDescription}>{t(`about.values.${value.key}.desc`)}</p>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.ctaSection}>
                <div className="container">
                    <motion.div
                        className={styles.ctaContent}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <Sparkles size={28} className={styles.ctaIcon} />
                        <h2 className={styles.ctaTitle}>{t('about.cta.title')}</h2>
                        <p className={styles.ctaText}>{t('about.cta.text')}</p>
                        <Link href="/nos-glaces" className={styles.ctaBtn}>
                            {t('about.cta.btn')}
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    )
}

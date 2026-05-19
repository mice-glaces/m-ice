"use client"

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ChevronLeft, ChevronRight, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './page.module.css'
import { useTranslation } from '@/context/LanguageContext'

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
}

const stagger = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
}

const featuredProducts = [
    {
        id: 1,
        name: 'Vanille',
        description: 'Onctueuse aux gousses de vanille bourbon',
        category: 'Crème Artisanale',
        image: '/images/vanille.png',
        isSeasonal: false,
    },
    {
        id: 2,
        name: 'Chocolat',
        description: 'Grand cru de cacao, saveur intense',
        category: 'Crème Artisanale',
        image: '/images/chocolat.png',
    },
    {
        id: 3,
        name: 'Pistache',
        description: 'Pistache torréfiée, goût authentique',
        category: 'Crème Artisanale',
        image: '/images/pistachio_scoop.png',
    },
    {
        id: 9,
        name: 'Caramel beurre salé',
        description: 'Caramel maison au sel de Guérande',
        category: 'Crème Artisanale',
        image: '/images/caramel_scoop.png',
    },
    {
        id: 13,
        name: 'Génépi',
        description: 'Saveur typique des sommets de nos Alpes',
        category: 'Crème Artisanale',
        image: '/images/genepi_scoop.png',
    },
    {
        id: 15,
        name: 'Menthe chocolat',
        description: 'Alliance fraîche de menthe et pépites de cacao',
        category: 'Crème Artisanale',
        image: '/images/mint_choc_scoop.png',
    },
    {
        id: 16,
        name: 'Framboise',
        description: 'Pureté du fruit, acidulé et éclatant',
        category: 'Sorbet Plein Fruit',
        image: '/images/framboise.png',
    },
    {
        id: 17,
        name: 'Fraise',
        description: 'Le goût authentique des fraises d\'été',
        category: 'Sorbet Plein Fruit',
        image: '/images/strawberry_scoop.png',
    },
    {
        id: 19,
        name: 'Myrtille',
        description: 'Éclat de fruits des bois au sommet des Alpes',
        category: 'Sorbet Plein Fruit',
        image: '/images/blueberry_scoop.png',
    },
    {
        id: 23,
        name: 'Argousier',
        description: 'Baies sauvages riches en vitamines, acidité unique',
        category: 'Sorbet Plein Fruit',
        image: '/images/sea_buckthorn_scoop.png',
    },
    {
        id: 25,
        name: 'Mangue',
        description: 'Onctuosité de la mangue Alphonso mûre',
        category: 'Sorbet Plein Fruit',
        image: '/images/mango_scoop.png',
    },
    {
        id: 28,
        name: 'Litchi',
        description: 'Fragrance florale et délicatesse exotique',
        category: 'Sorbet Plein Fruit',
        image: '/images/lychee_scoop.png',
    },
]

const featuredCreations = [
    {
        id: 'c1',
        name: 'Nougat Glacé',
        description: 'Miel de montagne, amandes et pistaches torréfiées.',
        category: 'Nougats glacés',
        image: '/images/original/nougat-glace.jpg',
        scale: 1.0,
        brightness: 0.95,
        contrast: 1.1
    },

    {
        id: 'c3',
        name: 'Macarons Glacés',
        description: "L'élégance du macaron alliée à la fraîcheur de nos sorbets.",
        category: 'Macarons glacés',
        image: '/images/macarons/mangue.jpg',
        scale: 0.83,
        yOffset: 16,
        xOffset: 0,
        brightness: 1.05,
        contrast: 1.50
    },
    {
        id: 'c4',
        name: 'Bûchette Vanille-Fraise',
        description: 'Un format individuel pour une explosion de gourmandise.',
        category: 'Bûchettes glacées',
        image: '/images/buchettes/vanille-framboise.jpg',
        scale: 1.0,
        yOffset: 0,
        xOffset: 0,
        brightness: 0.97,
        contrast: 1.25
    },
]

const values = [
    {
        number: '01',
        title: 'Ingrédients Frais',
        description: 'Nous sélectionnons les meilleurs produits locaux et de saison pour nos créations.',
    },
    {
        number: '02',
        title: 'Savoir-Faire Artisanal',
        description: 'Chaque glace est élaborée à la main dans notre atelier avec passion et précision.',
    },
    {
        number: '03',
        title: 'Créations Uniques',
        description: 'Des parfums classiques aux innovations saisonnières, laissez-vous surprendre.',
    },
]

export default function HomePage() {
    const { t } = useTranslation()
    const [currentIndex, setCurrentIndex] = useState(0)
    const [creationsIndex, setCreationsIndex] = useState(0)
    const [selectedFlavor, setSelectedFlavor] = useState<any | null>(null)
    const itemsPerPage = 3

    const nextSlide = () => {
        if (currentIndex < featuredProducts.length - itemsPerPage) {
            setCurrentIndex(prev => prev + 1)
        }
    }

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1)
        }
    }

    const nextCreationsSlide = () => {
        if (creationsIndex < featuredCreations.length - itemsPerPage) {
            setCreationsIndex(prev => prev + 1)
        }
    }

    const prevCreationsSlide = () => {
        if (creationsIndex > 0) {
            setCreationsIndex(prev => prev - 1)
        }
    }
    return (
        <>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroBackground}>
                    <Image
                        src="/images/hero_final_unzoomed.png"
                        alt="Glaces artisanales M'Ice"
                        fill
                        priority
                        className={styles.heroImage}
                    />
                    <div className={styles.heroOverlay} />
                </div>

                <div className={styles.heroContent}>
                    <motion.h1 
                        className={styles.heroTitle}
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        Le goût du vrai
                    </motion.h1>
                    
                    <motion.p 
                        className={styles.heroDescription}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        Des saveurs uniques,<br />
                        fabriquées avec passion.
                    </motion.p>
                    
                    <motion.div 
                        className={styles.heroCta}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <Link href="/nos-glaces" className={styles.goldBtn}>
                            Découvrir nos saveurs
                        </Link>
                    </motion.div>
                </div>

            </section>



            {/* Featured Products */}
            <section className={`section ${styles.sectionWhite}`}>
                <div className="container">
                    <div className={styles.featuredHeader}>
                        <div>
                            <span className={styles.sectionLabel}>Nos Parfums</span>
                            <h2 className={styles.sectionTitle}>Une Explosion de Saveurs</h2>
                        </div>
                        <div className={styles.featuredActions}>
                            <div className={styles.carouselNav}>
                                <button
                                    onClick={prevSlide}
                                    className={`${styles.navBtn} ${currentIndex === 0 ? styles.disabled : ''}`}
                                    aria-label="Précédent"
                                    disabled={currentIndex === 0}
                                >
                                    <ChevronLeft size={24} />
                                </button>
                                <button
                                    onClick={nextSlide}
                                    className={`${styles.navBtn} ${currentIndex >= featuredProducts.length - itemsPerPage ? styles.disabled : ''}`}
                                    aria-label="Suivant"
                                    disabled={currentIndex >= featuredProducts.length - itemsPerPage}
                                >
                                    <ChevronRight size={24} />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className={styles.sliderContainer}>
                        <motion.div
                            className={styles.sliderTrack}
                            animate={{ x: `-${currentIndex * (100 / itemsPerPage)}%` }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        >
                            {featuredProducts.map((product: any) => (
                                <div key={product.id} className={styles.sliderItem}>
                                    <article 
                                        className={styles.productCard}
                                        onClick={() => setSelectedFlavor(product)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <div className={styles.productImage}>
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                fill
                                                sizes="(max-width: 768px) 100vw, 33vw"
                                                className={styles.productImg}
                                            />
                                            {product.isSeasonal && (
                                                <span className={styles.productBadge}>Édition Limitée</span>
                                            )}
                                        </div>
                                        <div className={styles.productContent}>
                                            <h3 className={styles.productName}>{product.name}</h3>
                                        </div>
                                    </article>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    <div className={styles.featuredCta}>
                        <Link href="/nos-glaces" className="btn">
                            Voir tous nos parfums
                        </Link>
                    </div>
                </div>
            </section>

            {/* Featured Creations */}
            <section className={`section ${styles.sectionWhite}`}>
                <div className="container">
                    <div className={styles.featuredHeader}>
                        <div>
                            <span className={styles.sectionLabel}>L&apos;Art de Recevoir</span>
                            <h2 className={styles.sectionTitle}>Nos Créations Glacées</h2>
                        </div>
                        <div className={styles.featuredActions}>
                            <div className={styles.carouselNav}>
                                <button
                                    onClick={prevCreationsSlide}
                                    className={`${styles.navBtn} ${creationsIndex === 0 ? styles.disabled : ''}`}
                                    aria-label="Précédent"
                                    disabled={creationsIndex === 0}
                                >
                                    <ChevronLeft size={24} />
                                </button>
                                <button
                                    onClick={nextCreationsSlide}
                                    className={`${styles.navBtn} ${creationsIndex >= featuredCreations.length - itemsPerPage ? styles.disabled : ''}`}
                                    aria-label="Suivant"
                                    disabled={creationsIndex >= featuredCreations.length - itemsPerPage}
                                >
                                    <ChevronRight size={24} />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className={styles.sliderContainer}>
                        <motion.div
                            className={styles.sliderTrack}
                            animate={{ x: `-${creationsIndex * (100 / itemsPerPage)}%` }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        >
                            {featuredCreations.map((product: any) => (
                                <div key={product.id} className={styles.sliderItem}>
                                <article 
                                        className={styles.productCard}
                                        onClick={() => setSelectedFlavor(product)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <div className={styles.productImage}>
                                             <Image
                                                src={product.image}
                                                alt={product.name}
                                                fill
                                                sizes="(max-width: 768px) 100vw, 33vw"
                                                className={styles.productImg}
                                                style={{ 
                                                    transform: `scale(${product.scale || 1}) translate(${product.xOffset || 0}px, ${product.yOffset || 0}px)`,
                                                    filter: `brightness(${product.brightness || 1}) contrast(${product.contrast || 1})`
                                                }}
                                            />
                                        </div>
                                        <div className={styles.productContent}>
                                            <span style={{ fontSize: '0.7rem', color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }}>{product.category}</span>
                                            <h3 className={styles.productName} style={{ marginTop: '0.5rem' }}>{product.name}</h3>
                                        </div>
                                    </article>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    <div className={styles.featuredCta}>
                        <Link href="/creations" className="btn">
                            Découvrir toutes nos créations
                        </Link>
                    </div>
                </div>
            </section>

            {/* Summer Promo - Crêpes & Gaufres */}
            <section className={styles.promoSection}>
                <div className="container">
                    <div className={styles.promoGrid}>
                        <div className={styles.promoContent}>
                            <span className={styles.sectionLabel}>{t('promo.label')}</span>
                            <h2 className={styles.promoTitle}>{t('promo.title')}</h2>
                            <p className={styles.promoDesc}>{t('promo.desc')}</p>
                            <div className={styles.promoCta}>
                                <Link href="/contact" className={styles.goldBtn} style={{ padding: '14px 32px' }}>
                                    {t('promo.cta')}
                                </Link>
                            </div>
                        </div>
                        <div className={styles.promoImageWrapper}>
                            <div className={styles.promoImageContainer}>
                                <Image
                                    src="/images/original/crepes-gauffres.png"
                                    alt={t('promo.title')}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className={styles.promoImg}
                                />
                                <div className={styles.promoBadge}>
                                    {t('promo.badge')}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Modal */}
            <AnimatePresence>
                {selectedFlavor && (
                    <motion.div
                        className={styles.modalOverlay}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedFlavor(null)}
                    >
                        <motion.div
                            className={styles.modalContent}
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 20, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className={styles.modalClose} onClick={() => setSelectedFlavor(null)}>
                                <X size={20} />
                            </button>
                            
                            <div className={styles.modalImageCol}>
                                <motion.div 
                                    className={styles.modalImage}
                                    layoutId={`flavor-img-${selectedFlavor.id}`}
                                >
                                    <Image
                                        src={selectedFlavor.image}
                                        alt={selectedFlavor.name}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className={styles.modalImg}
                                    />
                                    
                                    {/* SVG Drawing Layer */}
                                    <svg width="100%" height="100%" viewBox="0 0 100 100" style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', overflow: 'visible', zIndex: 10 }}>
                                        <defs>
                                            <marker id="arrowhead" markerWidth="4" markerHeight="4" refX="3.5" refY="2" orient="auto">
                                                <path d="M 0 0 L 4 2 L 0 4" stroke="#000000" strokeWidth="0.6" fill="none" />
                                            </marker>
                                        </defs>

                                        {/* TL Arrow */}
                                        <motion.path 
                                            initial={{ pathLength: 0, opacity: 0 }}
                                            animate={{ pathLength: 1, opacity: 1 }}
                                            exit={{ opacity: 0, transition: { duration: 0.1 } }}
                                            transition={{ delay: 0.4, duration: 0.5 }}
                                            d="M -2 0 Q -2 21 13 34" 
                                            stroke="#000000" strokeWidth="0.6" fill="none" markerEnd="url(#arrowhead)" 
                                        />

                                        {/* TR Arrow */}
                                        <motion.path 
                                            initial={{ pathLength: 0, opacity: 0 }}
                                            animate={{ pathLength: 1, opacity: 1 }}
                                            exit={{ opacity: 0, transition: { duration: 0.1 } }}
                                            transition={{ delay: 0.6, duration: 0.5 }}
                                            d="M 98 0 Q 95 21 85 27" 
                                            stroke="#000000" strokeWidth="0.6" fill="none" markerEnd="url(#arrowhead)" 
                                        />

                                        {/* B Arrow */}
                                        <motion.path 
                                            initial={{ pathLength: 0, opacity: 0 }}
                                            animate={{ pathLength: 1, opacity: 1 }}
                                            exit={{ opacity: 0, transition: { duration: 0.1 } }}
                                            transition={{ delay: 0.8, duration: 0.5 }}
                                            d="M 50 101 L 50 89" 
                                            stroke="#000000" strokeWidth="0.6" fill="none" markerEnd="url(#arrowhead)" 
                                        />
                                    </svg>

                                    {/* Text Annotations */}
                                    <motion.span 
                                        className={styles.annoTextTL}
                                        style={{ top: '-15%', left: '-10%' }}
                                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: 0.1 } }} transition={{ delay: 0.4 }}
                                    >
                                        100% Naturel
                                    </motion.span>
                                    <motion.span 
                                        className={styles.annoTextTR}
                                        style={{ top: '-15%', right: '-10%' }}
                                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: 0.1 } }} transition={{ delay: 0.6 }}
                                    >
                                        {selectedFlavor.name} Authentique
                                    </motion.span>
                                    <motion.span 
                                        className={styles.annoTextB}
                                        style={{ bottom: '-20%', left: '50%' }}
                                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: 0.1 } }} transition={{ delay: 0.8 }}
                                    >
                                        Fait Maison<br/>dans les Alpes
                                    </motion.span>
                                </motion.div>
                            </div>
                            
                            <div className={styles.modalInfoCol}>
                                <span className={styles.modalCategory}>
                                    {selectedFlavor.category}
                                </span>
                                <h2 className={styles.modalTitle}>{selectedFlavor.name}</h2>
                                <p className={styles.modalDesc}>{selectedFlavor.description}</p>
                                
                                <div className={styles.modalDetails}>
                                    <div className={styles.detailItem}>
                                        <span className={styles.detailLabel}>Composition & Ingrédients</span>
                                        <span className={styles.detailText}>
                                            Sélection rigoureuse des meilleurs ingrédients locaux. Lait entier de notre ferme partenaire pour nos crèmes glacées, et fruits cueillis à pleine maturité pour nos sorbets. Sans aucun colorant ni arôme artificiel.
                                        </span>
                                    </div>
                                    <div className={styles.detailItem}>
                                        <span className={styles.detailLabel}>Méthode de Fabrication</span>
                                        <span className={styles.detailText}>
                                            Turbinée à l&apos;ancienne dans notre atelier au cœur des montagnes. Une méthode de fabrication lente qui garantit une texture onctueuse, crémeuse et incroyablement aérée, typique des vraies glaces artisanales.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

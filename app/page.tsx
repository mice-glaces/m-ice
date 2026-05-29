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
        description: 'Onctueuse aux gousses de vanille d\'Indonésie',
        category: 'Crème glacée',
        image: '/images/vanille.png',
        isSeasonal: false,
        scale: 0.7,
    },
    {
        id: 2,
        name: 'Chocolat',
        description: 'Grand cru de cacao, saveur intense',
        category: 'Crème glacée',
        image: '/images/chocolat.png',
        scale: 0.7,
    },
    {
        id: 3,
        name: 'Pistache',
        description: 'Pistache torréfiée, goût authentique',
        category: 'Crème glacée',
        image: '/images/pistachio_scoop.png',
        scale: 1.15,
    },
    {
        id: 9,
        name: 'Caramel beurre salé',
        description: 'Caramel maison au sel de Guérande',
        category: 'Crème glacée',
        image: '/images/caramel_scoop.png',
    },
    {
        id: 13,
        name: 'Génépi',
        description: 'Saveur typique des sommets de nos Alpes',
        category: 'Crème glacée',
        image: '/images/genepi_scoop.png',
    },
    {
        id: 15,
        name: 'Menthe chocolat',
        description: 'Alliance fraîche de menthe et pépites de cacao',
        category: 'Crème glacée',
        image: '/images/mint_choc_scoop.png',
        scale: 0.8,
    },
    {
        id: 16,
        name: 'Framboise',
        description: 'Pureté du fruit, acidulé et éclatant',
        category: 'Sorbet Plein Fruit',
        image: '/images/framboise.png',
        scale: 0.6,
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
        scale: 0.65,
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
        categoryKey: 'nougat',
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
        categoryKey: 'macaron',
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
        description: 'De retour en décembre 2026.',
        category: 'Bûchettes glacées',
        categoryKey: 'buchette',
        image: '/images/buchettes/vanille-framboise.jpg',
        scale: 1.0,
        yOffset: 0,
        xOffset: 0,
        brightness: 0.97,
        contrast: 1.25,
        isUnavailable: true
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

    const isCreation = selectedFlavor && typeof selectedFlavor.id === 'string' && selectedFlavor.id.startsWith('c');
    const nameKey = selectedFlavor ? (isCreation ? `creation.${selectedFlavor.id}.name` : `flavor.${selectedFlavor.id}.name`) : '';
    const descKey = selectedFlavor ? (isCreation ? `creation.${selectedFlavor.id}.desc` : `flavor.${selectedFlavor.id}.desc`) : '';
    const categoryKeyText = selectedFlavor ? (isCreation ? `creations.${selectedFlavor.categoryKey}` : (selectedFlavor.category === 'Crème glacée' ? 'category.cream' : 'category.sorbet')) : '';

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
                        {t('hero.title.line1')}<br/>{t('hero.title.line2')}
                    </motion.h1>
                    
                    <motion.p 
                        className={styles.heroDescription}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        dangerouslySetInnerHTML={{ __html: t('hero.description').replace(/\n/g, '<br />') }}
                    />
                    
                    <motion.div 
                        className={styles.heroCta}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <Link href="/nos-glaces" className={styles.goldBtn}>
                            {t('hero.cta')}
                        </Link>
                    </motion.div>
                </div>

            </section>



            {/* Featured Products */}
            <section className={`section ${styles.sectionWhite}`}>
                <div className="container">
                    <div className={styles.featuredHeader}>
                        <div>
                            <span className={styles.sectionLabel}>{t('section.flavors.label')}</span>
                            <h2 className={styles.sectionTitle}>{t('section.flavors.title')}</h2>
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
                                                alt={t('flavor.' + product.id + '.name')}
                                                fill
                                                sizes="(max-width: 768px) 100vw, 33vw"
                                                className={styles.productImg}
                                                style={product.scale ? { scale: product.scale } : undefined}
                                            />
                                            {product.isSeasonal && (
                                                <span className={styles.productBadge}>{t('product.seasonal')}</span>
                                            )}
                                        </div>
                                        <div className={styles.productContent}>
                                            <h3 className={styles.productName}>{t('flavor.' + product.id + '.name')}</h3>
                                        </div>
                                    </article>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    <div className={styles.featuredCta}>
                        <Link href="/nos-glaces" className="btn">
                            {t('section.flavors.cta')}
                        </Link>
                    </div>
                </div>
            </section>

            {/* Featured Creations */}
            <section className={`section ${styles.sectionWhite}`}>
                <div className="container">
                    <div className={styles.featuredHeader}>
                        <div>
                            <span className={styles.sectionLabel}>{t('section.creations.label')}</span>
                            <h2 className={styles.sectionTitle}>{t('section.creations.title')}</h2>
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
                                        onClick={product.isUnavailable ? undefined : () => setSelectedFlavor(product)}
                                        style={{ cursor: product.isUnavailable ? 'default' : 'pointer' }}
                                    >
                                        <div className={styles.productImage} style={product.isUnavailable ? { display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--color-warm-white, #faf7f2)', border: '1px dashed rgba(0,0,0,0.15)', borderRadius: '12px', width: '100%', aspectRatio: '1' } : undefined}>
                                            {product.isUnavailable ? (
                                                <div style={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    padding: '1.5rem',
                                                    color: 'var(--color-accent, #c89b3c)',
                                                    fontStyle: 'italic',
                                                    fontWeight: 500,
                                                    fontSize: '1.05rem',
                                                    textAlign: 'center'
                                                }}>
                                                    {t('creations.buchette.comingSoon')}
                                                </div>
                                            ) : (
                                                 <Image
                                                    src={product.image}
                                                    alt={t('creation.' + product.id + '.name')}
                                                    fill
                                                    sizes="(max-width: 768px) 100vw, 33vw"
                                                    className={styles.productImg}
                                                    style={{ 
                                                        transform: `scale(${product.scale || 1}) translate(${product.xOffset || 0}px, ${product.yOffset || 0}px)`,
                                                        filter: `brightness(${product.brightness || 1}) contrast(${product.contrast || 1})`
                                                    }}
                                                />
                                            )}
                                        </div>
                                        <div className={styles.productContent}>
                                            <span style={{ fontSize: '0.7rem', color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }}>{t('creations.' + product.categoryKey)}</span>
                                            <h3 className={styles.productName} style={{ marginTop: '0.5rem' }}>{t('creation.' + product.id + '.name')}</h3>
                                        </div>
                                    </article>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    <div className={styles.featuredCta}>
                        <Link href="/creations" className="btn">
                            {t('section.creations.cta')}
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
                                    src="/images/original/crepes-gauffres.jpg"
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
                                        style={selectedFlavor.scale ? { scale: selectedFlavor.scale } : undefined}
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
                                        {t('modal.100natural')}
                                    </motion.span>
                                    <motion.span 
                                        className={styles.annoTextTR}
                                        style={{ top: '-15%', right: '-10%' }}
                                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: 0.1 } }} transition={{ delay: 0.6 }}
                                    >
                                        {t('modal.authentic').replace('{flavor}', t(nameKey))}
                                    </motion.span>
                                    <motion.span 
                                        className={styles.annoTextB}
                                        style={{ bottom: '-20%', left: '50%' }}
                                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: 0.1 } }} transition={{ delay: 0.8 }}
                                        dangerouslySetInnerHTML={{ __html: t('modal.homemade') }}
                                    />
                                </motion.div>
                            </div>
                            
                            <div className={styles.modalInfoCol}>
                                <span className={styles.modalCategory}>
                                    {t(categoryKeyText)}
                                </span>
                                <h2 className={styles.modalTitle}>{t(nameKey)}</h2>
                                <p className={styles.modalDesc}>{t(descKey)}</p>
                                
                                <div className={styles.modalDetails}>
                                    <div className={styles.detailItem}>
                                        <span className={styles.detailLabel}>{t('modal.composition.title')}</span>
                                        <span className={styles.detailText}>
                                            {t('modal.composition.desc')}
                                        </span>
                                    </div>
                                    <div className={styles.detailItem}>
                                        <span className={styles.detailLabel}>{t('modal.method.title')}</span>
                                        <span className={styles.detailText}>
                                            {t('modal.method.desc')}
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

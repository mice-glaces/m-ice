"use client"

import { useState, useRef, useEffect, useCallback, RefObject } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ChevronLeft, ChevronRight, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './page.module.css'
import { useTranslation } from '@/context/LanguageContext'
import { LOCATIONS } from '@/data/locations'

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
        image: '/images/boules/vanille.png',
        isSeasonal: false,
    },
    {
        id: 2,
        name: 'Chocolat',
        description: 'Grand cru de cacao, saveur intense',
        category: 'Crème glacée',
        image: '/images/boules/chocolat.png',
    },
    {
        id: 3,
        name: 'Pistache',
        description: 'Pistache torréfiée, goût authentique',
        category: 'Crème glacée',
        image: '/images/boules/pistachio.png',
    },
    {
        id: 9,
        name: 'Caramel beurre salé',
        description: 'Caramel maison au sel de Guérande',
        category: 'Crème glacée',
        image: '/images/boules/caramel.png',
    },
    {
        id: 13,
        name: 'Génépi',
        description: 'Saveur typique des sommets de nos Alpes',
        category: 'Crème glacée',
        image: '/images/boules/genepi.png',
    },
    {
        id: 15,
        name: 'Menthe chocolat',
        description: 'Alliance fraîche de menthe et pépites de cacao',
        category: 'Crème glacée',
        image: '/images/boules/mint_choc.png',
    },
    {
        id: 16,
        name: 'Framboise',
        description: 'Pureté du fruit, acidulé et éclatant',
        category: 'Sorbet Plein Fruit',
        image: '/images/boules/framboise.png',
    },
    {
        id: 17,
        name: 'Fraise',
        description: 'Le goût authentique des fraises d\'été',
        category: 'Sorbet Plein Fruit',
        image: '/images/boules/strawberry.png',
    },
    {
        id: 19,
        name: 'Myrtille',
        description: 'Éclat de fruits des bois au sommet des Alpes',
        category: 'Sorbet Plein Fruit',
        image: '/images/boules/blueberry.png',
    },
    {
        id: 23,
        name: 'Argousier',
        description: 'Baies sauvages riches en vitamines, acidité unique',
        category: 'Sorbet Plein Fruit',
        image: '/images/boules/sea_buckthorn.png',
    },
    {
        id: 25,
        name: 'Mangue',
        description: 'Onctuosité de la mangue Alphonso mûre',
        category: 'Sorbet Plein Fruit',
        image: '/images/boules/mango.png',
    },
    {
        id: 28,
        name: 'Litchi',
        description: 'Fragrance florale et délicatesse exotique',
        category: 'Sorbet Plein Fruit',
        image: '/images/boules/lychee.png',
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

function useSlider() {
    const ref = useRef<HTMLDivElement>(null)
    const [canPrev, setCanPrev] = useState(false)
    const [canNext, setCanNext] = useState(false)

    const update = useCallback(() => {
        const el = ref.current
        if (!el) return
        setCanPrev(el.scrollLeft > 4)
        setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4)
    }, [])

    useEffect(() => {
        update()
        window.addEventListener('resize', update)
        return () => window.removeEventListener('resize', update)
    }, [update])

    const scroll = (direction: 1 | -1) => {
        const el = ref.current
        const item = el?.firstElementChild as HTMLElement | null
        if (!el || !item) return
        const gap = parseFloat(getComputedStyle(el).columnGap) || 0
        el.scrollBy({ left: direction * (item.offsetWidth + gap), behavior: 'smooth' })
    }

    return { ref: ref as RefObject<HTMLDivElement>, canPrev, canNext, update, scroll }
}

export default function HomePage() {
    const { t } = useTranslation()
    const [selectedFlavor, setSelectedFlavor] = useState<any | null>(null)
    const flavorsSlider = useSlider()
    const creationsSlider = useSlider()

    const isCreation = selectedFlavor && typeof selectedFlavor.id === 'string' && selectedFlavor.id.startsWith('c');
    const nameKey = selectedFlavor ? (isCreation ? `creation.${selectedFlavor.id}.name` : `flavor.${selectedFlavor.id}.name`) : '';
    const descKey = selectedFlavor ? (isCreation ? `creation.${selectedFlavor.id}.desc` : `flavor.${selectedFlavor.id}.desc`) : '';
    const categoryKeyText = selectedFlavor ? (isCreation ? `creations.${selectedFlavor.categoryKey}` : (selectedFlavor.category === 'Crème glacée' ? 'category.cream' : 'category.sorbet')) : '';

    useEffect(() => {
        if (!selectedFlavor) return
        const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setSelectedFlavor(null) }
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [selectedFlavor])

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
                        sizes="100vw"
                        className={styles.heroImage}
                    />
                    <div className={styles.heroOverlay} />
                </div>

                <div className={styles.heroContent}>
                    <motion.h1 
                        className={styles.heroTitle}
                        // no fade from invisible: the title is the page's largest
                        // element and must paint with the first frame
                        initial={{ y: 24 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {t('hero.title.line1')}{' '}<br/>{t('hero.title.line2')}
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
                        <Link href="/nos-glaces" className="btn btn--outline-light btn--lg">
                            {t('hero.cta')}
                        </Link>
                    </motion.div>
                </div>

                {/* Where to find us, straight from the first screen */}
                <motion.div
                    className={styles.heroShops}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                >
                    <div className={styles.heroShopsInner}>
                        {Object.values(LOCATIONS).map((loc) => (
                            <Link key={loc.id} href="/nous-trouver" className={styles.heroShop}>
                                <span className={styles.heroShopCity}>{loc.shortName}</span>
                                <span className={styles.heroShopAddress}>{loc.address}</span>
                            </Link>
                        ))}
                        <Link href="/nous-trouver" className={styles.heroShopsLink}>
                            {t('findus.title')}
                        </Link>
                    </div>
                </motion.div>

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
                                    onClick={() => flavorsSlider.scroll(-1)}
                                    className={`${styles.navBtn} ${!flavorsSlider.canPrev ? styles.disabled : ''}`}
                                    aria-label="Précédent"
                                    disabled={!flavorsSlider.canPrev}
                                >
                                    <ChevronLeft size={24} />
                                </button>
                                <button
                                    onClick={() => flavorsSlider.scroll(1)}
                                    className={`${styles.navBtn} ${!flavorsSlider.canNext ? styles.disabled : ''}`}
                                    aria-label="Suivant"
                                    disabled={!flavorsSlider.canNext}
                                >
                                    <ChevronRight size={24} />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className={styles.sliderContainer}>
                        <div className={styles.sliderTrack} ref={flavorsSlider.ref} onScroll={flavorsSlider.update}>
                            {featuredProducts.map((product: any) => (
                                <div key={product.id} className={styles.sliderItem}>
                                    <div
                                        className={styles.productCard}
                                        onClick={() => setSelectedFlavor(product)}
                                        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setSelectedFlavor(product) } }}
                                        role="button"
                                        tabIndex={0}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <div className={styles.productImage}>
                                            <Image
                                                src={product.image}
                                                alt={t('flavor.' + product.id + '.name')}
                                                fill
                                                sizes="(max-width: 768px) 100vw, 33vw"
                                                className={styles.productImg}
                                            />
                                            {product.isSeasonal && (
                                                <span className={styles.productBadge}>{t('product.seasonal')}</span>
                                            )}
                                        </div>
                                        <div className={styles.productContent}>
                                            <h3 className={styles.productName}>{t('flavor.' + product.id + '.name')}</h3>
                                            <span className={styles.productKind}>
                                                {t(product.category === 'Crème glacée' ? 'category.cream' : 'category.sorbet')}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.featuredCta}>
                        <Link href="/nos-glaces" className="btn btn--outline-dark">
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
                                    onClick={() => creationsSlider.scroll(-1)}
                                    className={`${styles.navBtn} ${!creationsSlider.canPrev ? styles.disabled : ''}`}
                                    aria-label="Précédent"
                                    disabled={!creationsSlider.canPrev}
                                >
                                    <ChevronLeft size={24} />
                                </button>
                                <button
                                    onClick={() => creationsSlider.scroll(1)}
                                    className={`${styles.navBtn} ${!creationsSlider.canNext ? styles.disabled : ''}`}
                                    aria-label="Suivant"
                                    disabled={!creationsSlider.canNext}
                                >
                                    <ChevronRight size={24} />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className={styles.sliderContainer}>
                        <div className={styles.sliderTrack} ref={creationsSlider.ref} onScroll={creationsSlider.update}>
                            {featuredCreations.map((product: any) => (
                                <div key={product.id} className={styles.sliderItem}>
                                    <div
                                        className={`${styles.productCard} ${product.isUnavailable ? styles.productCardUnavailable : ''}`}
                                        onClick={product.isUnavailable ? undefined : () => setSelectedFlavor(product)}
                                        onKeyDown={product.isUnavailable ? undefined : (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setSelectedFlavor(product) } }}
                                        role={product.isUnavailable ? undefined : 'button'}
                                        tabIndex={product.isUnavailable ? undefined : 0}
                                    >
                                        <div className={styles.productImage}>
                                            {product.isUnavailable ? (
                                                <div className={styles.comingSoon}>
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
                                            <h3 className={styles.productName}>{t('creation.' + product.id + '.name')}</h3>
                                            <span className={styles.productKind}>{t('creations.' + product.categoryKey)}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.featuredCta}>
                        <Link href="/creations" className="btn btn--outline-dark">
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
                                <Link href="/nous-trouver" className="btn btn--primary">
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
                            <button className={styles.modalClose} onClick={() => setSelectedFlavor(null)} aria-label="Fermer">
                                <X size={20} />
                            </button>
                            
                            <div className={styles.modalImageCol}>
                                <motion.div 
                                    className={styles.modalImage}
                                    layoutId={`flavor-img-${selectedFlavor.id}`}
                                >
                                    <Image
                                        src={selectedFlavor.image}
                                        alt={t(nameKey)}
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

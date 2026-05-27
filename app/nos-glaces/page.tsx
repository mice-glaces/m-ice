"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, X } from 'lucide-react'
import PageHero from '@/components/PageHero'
import styles from './page.module.css'
import { useTranslation } from '@/context/LanguageContext'

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
}

const stagerVariants = {
    animate: {
        transition: {
            staggerChildren: 0.05
        }
    }
}

const flavors = [
    // Crèmes glacées
    {
        id: 1,
        scale: 0.7,
        name: 'Vanille',
        description: 'Onctueuse aux gousses de vanille bourbon',
        category: 'glaces',
        image: '/images/vanille.png',
        price: '3,00€ la boule',
        isSeasonal: false,
    },
    {
        id: 2,
        scale: 0.7,
        name: 'Chocolat',
        description: 'Grand cru de cacao, saveur intense',
        category: 'glaces',
        image: '/images/chocolat.png',
        price: '3,00€ la boule',
    },
    {
        id: 3,
        scale: 1.15,
        name: 'Pistache',
        description: 'Pistache torréfiée, goût authentique',
        category: 'glaces',
        image: '/images/pistachio_scoop.png',
        price: '3,00€ la boule',
    },
    {
        id: 4,
        name: 'Noisette',
        description: 'Noisettes torréfiées',
        category: 'glaces',
        image: '/images/hazelnut_scoop.png',
        price: '3,00€ la boule',
    },
    {
        id: 5,
        name: 'Café',
        description: 'Un goût intense',
        category: 'glaces',
        image: '/images/coffee_scoop.png',
        price: '3,00€ la boule',
    },
    {
        id: 6,
        name: 'Café blanc',
        description: 'Douceur lactée aux notes de café délicates',
        category: 'glaces',
        image: '/images/white_coffee_scoop.png',
        price: '3,00€ la boule',
    },

    {
        id: 8,
        name: 'Yaourt',
        description: 'Un bon goût de montagne',
        category: 'glaces',
        image: '/images/yogurt_scoop.png',
        price: '3,00€ la boule',
    },
    {
        id: 9,
        name: 'Caramel beurre salé',
        description: 'Un caramel fait maison',
        category: 'glaces',
        image: '/images/caramel_scoop.png',
        price: '3,00€ la boule',
    },
    {
        id: 10,
        name: 'Fleur de lait',
        description: 'Le bon goût du lait',
        category: 'glaces',
        image: '/images/fleur_de_lait_scoop.png',
        price: '3,00€ la boule',
    },
    {
        id: 11,
        name: 'Marron',
        description: 'L\'onctuosité de la crème de marron',
        category: 'glaces',
        image: '/images/chestnut_scoop.png',
        price: '3,00€ la boule',
    },
    {
        id: 12,
        name: 'Rhum raisins',
        description: 'Raisins macérés au rhum vieux des Caraïbes',
        category: 'glaces',
        image: '/images/rum_raisin_scoop.png',
        price: '3,00€ la boule',
    },
    {
        id: 13,
        name: 'Génépi',
        description: 'Saveur typique du Champsaur distillé à Saint-Jean-Saint-Nicolas',
        category: 'glaces',
        image: '/images/genepi_scoop.png',
        price: '3,00€ la boule',
    },
    {
        id: 14,
        scale: 0.6,
        name: 'Miel',
        description: 'Douceur locale issue des ruches de la miellerie Chalet',
        category: 'glaces',
        image: '/images/honey_scoop.png',
        price: '3,00€ la boule',
    },
    {
        id: 15,
        scale: 0.8,
        name: 'Menthe chocolat',
        description: 'Alliance fraîche de feuilles de menthe et éclats de chocolat',
        category: 'glaces',
        image: '/images/mint_choc_scoop.png',
        price: '3,00€ la boule',
    },

    // Sorbets
    {
        id: 16,
        scale: 0.6,
        name: 'Framboise',
        description: 'Gourmand et acidulé',
        category: 'sorbets',
        image: '/images/framboise.png',
        price: '3,00€ la boule',
    },
    {
        id: 17,
        name: 'Fraise',
        description: "Le bon goût de l'été",
        category: 'sorbets',
        image: '/images/strawberry_scoop.png',
        price: '3,00€ la boule',
    },
    {
        id: 18,
        name: 'Cassis',
        description: 'Intensité des baies noires',
        category: 'sorbets',
        image: '/images/blackcurrant_scoop.png',
        price: '3,00€ la boule',
    },
    {
        id: 19,
        scale: 0.65,
        name: 'Myrtille',
        description: 'Un parfum fruité et rafraîchissant',
        category: 'sorbets',
        image: '/images/blueberry_scoop.png',
        price: '3,00€ la boule',
    },
    {
        id: 20,
        name: 'Abricot',
        description: "Douceur d'été",
        category: 'sorbets',
        image: '/images/apricot_scoop.png',
        price: '3,00€ la boule',
    },
    {
        id: 21,
        scale: 0.65,
        name: 'Poire',
        description: 'Finesse de la poire Williams, fraîche et douce',
        category: 'sorbets',
        image: '/images/pear_scoop.png',
        price: '3,00€ la boule',
    },
    {
        id: 22,
        scale: 0.65,
        name: 'Citron',
        description: "Fraîcheur acidulée",
        category: 'sorbets',
        image: '/images/lemon_scoop.png',
        price: '3,00€ la boule',
    },
    {
        id: 23,
        name: 'Argousier',
        description: 'Baie typique des montagnes',
        category: 'sorbets',
        image: '/images/sea_buckthorn_scoop.png',
        price: '3,00€ la boule',
    },
    {
        id: 24,
        name: 'Ananas',
        description: 'Exotisme tropical, sucré et désaltérant',
        category: 'sorbets',
        image: '/images/pineapple_scoop.png',
        price: '3,00€ la boule',
    },
    {
        id: 25,
        name: 'Mangue',
        description: "L'onctuosité de la mangue",
        category: 'sorbets',
        image: '/images/mango_scoop.png',
        price: '3,00€ la boule',
    },
    {
        id: 26,
        scale: 0.65,
        name: 'Passion',
        description: 'Explosion de saveurs',
        category: 'sorbets',
        image: '/images/passion_fruit_scoop.png',
        price: '3,00€ la boule',
    },
    {
        id: 27,
        name: 'Banane',
        description: 'Douceur veloutée et parfum gourmand',
        category: 'sorbets',
        image: '/images/banana_scoop.png',
        price: '3,00€ la boule',
    },
    {
        id: 28,
        name: 'Litchi',
        description: 'Fragrance florale et délicatesse exotique',
        category: 'sorbets',
        image: '/images/lychee_scoop.png',
        price: '3,00€ la boule',
    },
    {
        id: 29,
        name: 'Lavande',
        description: 'Parfum floral délicat typique de la Provence',
        category: 'glaces',
        image: '/images/lavender_scoop.png',
        price: '3,00€ la boule',
    },
    {
        id: 30,
        scale: 0.65,
        name: 'Thym',
        description: 'Une touche aromatique',
        category: 'glaces',
        image: '/images/thyme_scoop.png',
        price: '3,00€ la boule',
    },
    {
        id: 32,
        scale: 0.65,
        name: 'Citron Menthe',
        description: "Rafraîchissante",
        category: 'sorbets',
        image: '/images/lemon_mint_scoop.png',
        price: '3,00€ la boule',
    },
    {
        id: 33,
        scale: 0.65,
        name: 'Abricot Thym',
        description: "Oser l'originalité",
        category: 'sorbets',
        image: '/images/apricot_thyme_scoop.png',
        price: '3,00€ la boule',
    },
    {
        id: 34,
        name: 'Stracciatella',
        description: 'Crème onctueuse et éclats de chocolat croquants',
        category: 'glaces',
        image: '/images/stracciatella_scoop.png',
        price: '3,00€ la boule',
    },
]



export default function NosGlacesPage() {
    const [activeFilter, setActiveFilter] = useState('all')
    const [selectedFlavor, setSelectedFlavor] = useState<typeof flavors[0] | null>(null)
    const { t } = useTranslation()

    const filteredFlavors = flavors.filter(flavor => {
        if (activeFilter === 'all') return true
        return flavor.category === activeFilter
    })

    return (
        <>
            <PageHero
                title={t('nav.flavors')}
                subtitle={t('hero.description').split('\n')[0]}
                backgroundImage="/images/hero_final_unzoomed.png"
                compact
            />



            {/* Flavors Grid */}
            <section className={`section ${styles.whiteBg}`}>
                <div className="container">
                    <div className={styles.flavorsHeader}>
                        <h2 className={styles.flavorsTitle}>{t('section.creations.title')}</h2>
                        <p className={styles.flavorsSubtitle}>
                            {t('hero.description')}
                        </p>
                    </div>

                    {/* Filter Buttons */}
                    <div className={styles.filtersWrapper}>
                        <button
                            className={`${styles.filterBtn} ${activeFilter === 'all' ? styles.filterBtnActive : ''}`}
                            onClick={() => setActiveFilter('all')}
                        >
                            {t('category.all')}
                        </button>
                        <button
                            className={`${styles.filterBtn} ${activeFilter === 'glaces' ? styles.filterBtnActive : ''}`}
                            onClick={() => setActiveFilter('glaces')}
                        >
                            {t('category.icecream')}
                        </button>
                        <button
                            className={`${styles.filterBtn} ${activeFilter === 'sorbets' ? styles.filterBtnActive : ''}`}
                            onClick={() => setActiveFilter('sorbets')}
                        >
                            {t('category.sorbet')}
                        </button>
                    </div>

                    <motion.div
                        className={styles.flavorsGrid}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        variants={stagerVariants}
                        key={activeFilter}
                    >
                        {filteredFlavors.map((flavor) => (
                            <motion.article
                                key={flavor.id}
                                className={styles.flavorCard}
                                variants={fadeInUp}
                                onClick={() => setSelectedFlavor(flavor)}
                                style={{ cursor: 'pointer' }}
                            >
                                <motion.div className={styles.flavorImage} layoutId={`flavor-img-${flavor.id}`}>
                                    <Image
                                        src={flavor.image}
                                        alt={flavor.name}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                        className={styles.flavorImg}
                                        style={flavor.scale ? { scale: flavor.scale } : undefined}
                                    />
                                    {flavor.isSeasonal && (
                                        <span className={styles.flavorBadge}>Limitée</span>
                                    )}
                                </motion.div>
                                <div className={styles.flavorContent}>
                                    <h3 className={styles.flavorName}>{t(`flavor.${flavor.id}.name`)}</h3>
                                </div>
                            </motion.article>
                        ))}
                    </motion.div>
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
                        {/* Highlighting the modal image as well! */}
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
                                        alt={t(`flavor.${selectedFlavor.id}.name`)}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className={styles.modalImg}
                                        style={selectedFlavor.scale ? { scale: selectedFlavor.scale } : undefined}
                                    />
                                    
                                    {/* SVG Drawing Layer covering the entire image box! */}
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
                                        {selectedFlavor.category === 'glaces' ? t('modal.100natural') : '100% Gourmand'}
                                    </motion.span>
                                    <motion.span 
                                        className={styles.annoTextTR}
                                        style={{ top: '-15%', right: '-10%' }}
                                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: 0.1 } }} transition={{ delay: 0.6 }}
                                    >
                                        {t('modal.authentic').replace('{flavor}', t(`flavor.${selectedFlavor.id}.name`))}
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
                                    {selectedFlavor.category === 'glaces' ? t('category.icecream') : t('category.sorbet')}
                                </span>
                                <h3 className={styles.modalTitle}>{t(`flavor.${selectedFlavor.id}.name`)}</h3>
                                <p className={styles.modalDesc}>{t(`flavor.${selectedFlavor.id}.desc`)}</p>
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

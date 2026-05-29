"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Cake, X, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import styles from './page.module.css'
import { useTranslation } from '@/context/LanguageContext'

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
}

const staggerVariants = {
    animate: {
        transition: {
            staggerChildren: 0.05
        }
    }
}



interface CreationItem {
    id: string;
    name: string;
    description: string;
    image: string;
    scale: number;
    yOffset?: number;
    xOffset?: number;
    brightness?: number;
    contrast?: number;
}

interface CreationCategory {
    category: string;
    categoryKey: string;
    items: CreationItem[];
}

const CREATIONS_DATA: CreationCategory[] = [
    {
        category: "Nougats glacés",
        categoryKey: "nougat",
        items: [
            { id: 'n1', name: "Nougat glacé (4 pers.)", description: "Texture légère et fondante, miel et fruits confits", image: "/images/original/nougat-glace.jpg", scale: 1.0, brightness: 0.95, contrast: 1.15 },
            { id: 'n2', name: "Nougat glacé (6 pers.)", description: "Format familial, parfait pour les grandes tablées", image: "/images/original/nougat-glace.jpg", scale: 1.0, brightness: 0.95, contrast: 1.15 },
        ],
    },

    {
        category: "Macarons glacés",
        categoryKey: "macaron",
        items: [
            { id: 'm1', name: "Mangue", description: "Coque croquante, cœur glacé à la mangue fraîche", image: "/images/macarons/mangue.jpg", scale: 0.83, yOffset: 16, xOffset: 0, brightness: 0.92, contrast: 1.51 },
            { id: 'm2', name: "Framboise", description: "Intensité fruitée, équilibre sucré-acidulé", image: "/images/macarons/framboise.jpg", scale: 0.94, yOffset: 29, xOffset: 0, brightness: 1.30, contrast: 1.30 },
            // { id: 'm3', name: "Vanille", description: "Classique et élégant, vanille d'Indonésie", image: "/images/macarons/vanille.jpg", scale: 1.28, yOffset: -29, xOffset: 0, brightness: 1.10, contrast: 1.25 },
            { id: 'm4', name: "Chocolat", description: "Cacao intense, texture fondante", image: "/images/macarons/chocolat.jpg", scale: 1.02, yOffset: 0, xOffset: 0, brightness: 1.20, contrast: 1.30 },
            { id: 'm5', name: "Caramel B.S.", description: "Caramel au beurre salé, douceur bretonne", image: "/images/macarons/caramel.jpg", scale: 0.97, yOffset: 0, xOffset: 0, brightness: 0.94, contrast: 1.26 },
        ],
    },
    {
        category: "Bûchettes glacées",
        categoryKey: "buchette",
        items: [],
    },
]

export default function NosCreations() {
    const [selectedItem, setSelectedItem] = useState<any>(null);
    const { t } = useTranslation();

    return (
        <main className={styles.main}>
            <PageHero
                title={t('section.creations.title')}
                subtitle={t('creations.subtitle')}
                backgroundImage="/images/hero_final_unzoomed.png"
                compact
            />

            {/* Creations by Category */}
            <section className={`section ${styles.whiteBg}`}>
                <div className="container">
                    {CREATIONS_DATA.map((group) => (
                        <div key={group.categoryKey} className={styles.categorySection}>
                            <div className={styles.categoryHeader}>
                                <h2 className={styles.categoryTitle}>{t('creations.' + group.categoryKey)}</h2>
                                {group.categoryKey === "buchette" && (
                                    <p style={{ color: 'var(--color-accent)', fontStyle: 'italic', marginTop: '10px', fontSize: '1.1rem', fontWeight: 500 }}>
                                        {t('creations.buchette.comingSoon')}
                                    </p>
                                )}
                            </div>

                            <motion.div
                                className={styles.creationsGrid}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                                variants={staggerVariants}
                            >
                                {group.items.map((item) => (
                                    <motion.article
                                        key={item.id}
                                        className={styles.creationCard}
                                        variants={fadeInUp}
                                        onClick={() => setSelectedItem({ ...item, categoryName: t('creations.' + group.categoryKey) })}
                                    >
                                        <div className={styles.creationImage}>
                                            <Image
                                                src={item.image}
                                                alt={t('creation.' + item.id + '.name')}
                                                fill
                                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                                className={styles.creationImg}
                                                style={{ 
                                                    transform: `scale(${item.scale || 1}) translate(${item.xOffset || 0}px, ${item.yOffset || 0}px)`,
                                                    filter: `brightness(${item.brightness || 1}) contrast(${item.contrast || 1})`
                                                }}
                                            />
                                        </div>
                                        <div className={styles.creationContent}>
                                            <h3 className={styles.creationName}>{t('creation.' + item.id + '.name')}</h3>
                                        </div>
                                    </motion.article>
                                ))}
                            </motion.div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Modal */}
            <AnimatePresence>
                {selectedItem && (
                    <motion.div
                        className={styles.modalOverlay}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedItem(null)}
                    >
                        <motion.div
                            className={styles.modalContent}
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 20, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className={styles.modalClose} onClick={() => setSelectedItem(null)}>
                                <X size={20} />
                            </button>
                            
                            <div className={styles.modalImageCol}>
                                <motion.div 
                                    className={styles.modalImage}
                                    layoutId={`creation-img-${selectedItem.id}`}
                                >
                                     <Image
                                        src={selectedItem.image}
                                        alt={selectedItem.name}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className={styles.modalImg}
                                        style={{ 
                                            transform: `scale(${selectedItem.scale || 1}) translate(${selectedItem.xOffset || 0}px, ${selectedItem.yOffset || 0}px)`,
                                            filter: `brightness(${selectedItem.brightness || 1}) contrast(${selectedItem.contrast || 1})`
                                        }}
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
                                        {t('modal.authentic').replace('{flavor}', 'Artisanat')}
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
                                    {selectedItem.categoryName}
                                </span>
                                <h2 className={styles.modalTitle}>{t('creation.' + selectedItem.id + '.name')}</h2>
                                <p className={styles.modalDesc}>{t('creation.' + selectedItem.id + '.desc')}</p>
                                
                                <div className={styles.modalDetails}>
                                    <div className={styles.detailItem}>
                                        <span className={styles.detailLabel}>{t('creations.quality.title')}</span>
                                        <span className={styles.detailText}>
                                            {t('creations.quality.desc')}
                                        </span>
                                    </div>
                                    <div className={styles.detailItem}>
                                        <span className={styles.detailLabel}>{t('creations.order.title')}</span>
                                        <span className={styles.detailText}>
                                            {t('creations.order.desc')}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>



        </main>
    );
}

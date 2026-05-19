'use client'

import { MapPin } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocation, LOCATIONS } from '@/context/LocationContext'
import styles from './LocationModal.module.css'

export default function LocationModal() {
    const { isFirstVisit, setLocationById, dismissFirstVisit } = useLocation()

    const handleSelect = (id: string) => {
        setLocationById(id)
        dismissFirstVisit()
    }

    return (
        <AnimatePresence>
            {isFirstVisit && (
                <motion.div
                    className={styles.overlay}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <motion.div
                        className={styles.modal}
                        initial={{ y: 30, opacity: 0, scale: 0.97 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        exit={{ y: 10, opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className={styles.header}>
                            <div className={styles.iconWrapper}>
                                <MapPin size={24} />
                            </div>
                            <h2 className={styles.title}>Choisissez votre glacier</h2>
                            <p className={styles.subtitle}>
                                Sélectionnez le glacier M&apos;Ice le plus proche de vous
                            </p>
                        </div>

                        <div className={styles.options}>
                            {Object.values(LOCATIONS).map((loc) => (
                                <button
                                    key={loc.id}
                                    className={styles.locationCard}
                                    onClick={() => handleSelect(loc.id)}
                                >
                                    <div className={styles.cardPin}>
                                        <MapPin size={18} />
                                    </div>
                                    <div className={styles.cardInfo}>
                                        <span className={styles.cardCity}>{loc.shortName}</span>
                                        <span className={styles.cardAddress}>{loc.address}, {loc.postalCode} {loc.city}</span>
                                    </div>
                                    <span className={styles.cardArrow}>→</span>
                                </button>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

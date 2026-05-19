'use client'

import { useState, useRef, useEffect } from 'react'
import { MapPin, ChevronDown, Check } from 'lucide-react'
import { useLocation, LOCATIONS } from '@/context/LocationContext'
import styles from './LocationSelector.module.css'

export default function LocationSelector() {
    const { currentLocation, setLocationById } = useLocation()
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    return (
        <div className={styles.wrapper} ref={dropdownRef}>
            <button
                className={styles.trigger}
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-label="Choisir le glacier"
            >
                <MapPin size={14} className={styles.pinIcon} />
                <span className={styles.locationName}>{currentLocation.shortName}</span>
                <ChevronDown size={12} className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`} />
            </button>

            {isOpen && (
                <div className={styles.dropdown}>
                    <div className={styles.dropdownHeader}>
                        <span>Nos Glaciers</span>
                    </div>
                    {Object.values(LOCATIONS).map((loc) => (
                        <button
                            key={loc.id}
                            className={`${styles.option} ${loc.id === currentLocation.id ? styles.optionActive : ''}`}
                            onClick={() => {
                                setLocationById(loc.id)
                                setIsOpen(false)
                            }}
                        >
                            <div className={styles.optionInfo}>
                                <span className={styles.optionName}>{loc.shortName}</span>
                                <span className={styles.optionAddress}>{loc.address}, {loc.city}</span>
                            </div>
                            {loc.id === currentLocation.id && (
                                <Check size={14} className={styles.checkIcon} />
                            )}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}

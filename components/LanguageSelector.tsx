'use client'

import { useState, useRef, useEffect } from 'react'
import { Globe, Check } from 'lucide-react'
import { useTranslation } from '@/context/LanguageContext'
import { LOCALES } from '@/data/translations'
import styles from './LanguageSelector.module.css'

export default function LanguageSelector() {
    const { locale, setLocale } = useTranslation()
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    const currentLocale = LOCALES.find(l => l.code === locale)!

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
                aria-label="Choisir la langue"
            >
                <span className={styles.flag}>{currentLocale.flag}</span>
                <span className={styles.code}>{currentLocale.shortLabel}</span>
            </button>

            {isOpen && (
                <div className={styles.dropdown}>
                    {LOCALES.map((loc) => (
                        <button
                            key={loc.code}
                            className={`${styles.option} ${loc.code === locale ? styles.optionActive : ''}`}
                            onClick={() => {
                                setLocale(loc.code)
                                setIsOpen(false)
                            }}
                        >
                            <span className={styles.optionFlag}>{loc.flag}</span>
                            <span className={styles.optionLabel}>{loc.label}</span>
                            {loc.code === locale && (
                                <Check size={13} className={styles.checkIcon} />
                            )}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}

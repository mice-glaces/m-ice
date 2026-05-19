'use client'

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react'
import translations, { Locale, LOCALES } from '@/data/translations'

interface LanguageContextType {
    locale: Locale
    setLocale: (locale: Locale) => void
    t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [locale, setLocaleState] = useState<Locale>('fr')

    useEffect(() => {
        const saved = localStorage.getItem('mice-lang') as Locale | null
        if (saved && translations[saved]) {
            setLocaleState(saved)
        }
    }, [])

    const setLocale = useCallback((newLocale: Locale) => {
        setLocaleState(newLocale)
        localStorage.setItem('mice-lang', newLocale)
        document.documentElement.lang = newLocale
    }, [])

    const t = useCallback((key: string): string => {
        const dict = translations[locale] as Record<string, string>
        return dict[key] || key
    }, [locale])

    return (
        <LanguageContext.Provider value={{ locale, setLocale, t }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useTranslation() {
    const context = useContext(LanguageContext)
    if (!context) {
        throw new Error('useTranslation must be used within a LanguageProvider')
    }
    return context
}

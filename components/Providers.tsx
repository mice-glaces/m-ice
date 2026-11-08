'use client'

import { ReactNode } from 'react'
import { MotionConfig } from 'framer-motion'
import { LocationProvider } from '@/context/LocationContext'
import { LanguageProvider } from '@/context/LanguageContext'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LocationModal from '@/components/LocationModal'

export default function Providers({ children }: { children: ReactNode }) {
    return (
        <MotionConfig reducedMotion="user">
            <LanguageProvider>
                <LocationProvider>
                    <Header />
                    <main>{children}</main>
                    <Footer />
                    <LocationModal />
                </LocationProvider>
            </LanguageProvider>
        </MotionConfig>
    )
}

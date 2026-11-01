'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { LOCATIONS, type GlacierLocation } from '@/data/locations'

export { LOCATIONS }
export type { GlacierLocation }

interface LocationContextType {
    currentLocation: GlacierLocation
    setLocationById: (id: string) => void
    isFirstVisit: boolean
    dismissFirstVisit: () => void
}

const LocationContext = createContext<LocationContextType | undefined>(undefined)

export function LocationProvider({ children }: { children: ReactNode }) {
    const [locationId, setLocationId] = useState<string>('saint-jean')
    const [isFirstVisit, setIsFirstVisit] = useState(false)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        const saved = localStorage.getItem('mice-location')
        const visited = localStorage.getItem('mice-visited')

        if (saved && LOCATIONS[saved]) {
            setLocationId(saved)
        }
        if (!visited) {
            setIsFirstVisit(true)
        }
    }, [])

    const setLocationById = (id: string) => {
        if (LOCATIONS[id]) {
            setLocationId(id)
            localStorage.setItem('mice-location', id)
        }
    }

    const dismissFirstVisit = () => {
        setIsFirstVisit(false)
        localStorage.setItem('mice-visited', 'true')
    }

    const currentLocation = LOCATIONS[locationId]

    return (
        <LocationContext.Provider value={{ currentLocation, setLocationById, isFirstVisit, dismissFirstVisit }}>
            {children}
        </LocationContext.Provider>
    )
}

export function useLocation() {
    const context = useContext(LocationContext)
    if (!context) {
        throw new Error('useLocation must be used within a LocationProvider')
    }
    return context
}

'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export interface GlacierLocation {
    id: string
    name: string
    shortName: string
    address: string
    city: string
    postalCode: string
    phone: string
    email: string
    mapUrl: string
    coordinates: { lat: number; lng: number }
}

export const LOCATIONS: Record<string, GlacierLocation> = {
    'saint-jean': {
        id: 'saint-jean',
        name: 'M\'Ice Saint-Jean-Saint-Nicolas',
        shortName: 'Saint-Jean-Saint-Nicolas',
        address: 'La Garenne',
        city: 'Saint-Jean-Saint-Nicolas',
        postalCode: '05260',
        phone: '06 59 32 83 60',
        email: 'MICEGLACES@GMAIL.COM',
        mapUrl: 'https://maps.google.com/?q=La+Garenne+Saint-Jean-Saint-Nicolas',
        coordinates: { lat: 44.6717, lng: 6.2253 },
    },
    'embrun': {
        id: 'embrun',
        name: 'M\'Ice Embrun',
        shortName: 'Embrun',
        address: 'Place du Général Dosse',
        city: 'Embrun',
        postalCode: '05200',
        phone: '06 60 46 84 59',
        email: 'MICE.EMBRUN@GMAIL.COM',
        mapUrl: 'https://maps.google.com/?q=Place+du+Général+Dosse+Embrun',
        coordinates: { lat: 44.5636, lng: 6.4953 },
    },
}

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

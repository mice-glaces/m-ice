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
        phone: '06 60 46 84 59',
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

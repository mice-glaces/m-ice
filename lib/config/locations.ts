export type LocationId = "chabottes" | "embrun";

export interface ShopLocation {
    id: LocationId;
    name: string;
    address: string;
    city: string;
    coordinates: {
        lat: number;
        lng: number;
    };
    isOpen: boolean;
    openingDate?: string;
    image: string;
}

export const SHOPS: ShopLocation[] = [
    {
        id: "chabottes",
        name: "L'Atelier de Chabottes",
        address: "La Garenne",
        city: "Saint-Jean-Saint-Nicolas",
        coordinates: { lat: 44.6657, lng: 6.2096 }, // Approx coordinates
        isOpen: true,
        image: "/images/chabottes.jpg", // Need to ensure this image exists or use a placeholder
    },
    {
        id: "embrun",
        name: "La Boutique d'Embrun",
        address: "Centre Ville",
        city: "Embrun",
        coordinates: { lat: 44.5639, lng: 6.4953 },
        isOpen: false,
        openingDate: "Bientôt disponible",
        image: "/images/embrun-placeholder.jpg", // Placeholder
    },
];

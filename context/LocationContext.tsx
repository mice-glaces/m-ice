"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { LocationId, SHOPS } from "@/lib/config/locations";

interface LocationContextType {
    selectedLocation: LocationId | null;
    setSelectedLocation: (id: LocationId) => void;
    isModalOpen: boolean;
    setIsModalOpen: (isOpen: boolean) => void;
}

const LocationContext = createContext<LocationContextType | undefined>(undefined);

export function LocationProvider({ children }: { children: React.ReactNode }) {
    const [selectedLocation, setSelectedLocationState] = useState<LocationId | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        // Check localStorage on mount
        const saved = localStorage.getItem("mice-location") as LocationId | null;
        console.log("LocationProvider: saved location in localStorage:", saved);

        if (saved && SHOPS.find((s) => s.id === saved)) {
            setSelectedLocationState(saved);
        } else {
            // No saved location, open modal
            console.log("LocationProvider: opening modal because no saved location");
            setIsModalOpen(true);
        }
    }, []);

    const setSelectedLocation = (id: LocationId) => {
        setSelectedLocationState(id);
        localStorage.setItem("mice-location", id);
        setIsModalOpen(false);
    };

    return (
        <LocationContext.Provider
            value={{
                selectedLocation,
                setSelectedLocation,
                isModalOpen,
                setIsModalOpen,
            }}
        >
            {children}
        </LocationContext.Provider>
    );
}

export function useLocation() {
    const context = useContext(LocationContext);
    if (context === undefined) {
        throw new Error("useLocation must be used within a LocationProvider");
    }
    return context;
}

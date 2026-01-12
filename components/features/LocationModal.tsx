"use client";

import React, { useEffect, useState } from "react";
import { useLocation } from "@/context/LocationContext";
import { SHOPS, LocationId, ShopLocation } from "@/lib/config/locations";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Navigation } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function LocationModal() {
    const { isModalOpen, setSelectedLocation } = useLocation();
    const [closestShopId, setClosestShopId] = useState<LocationId | null>(null);
    const [isLoadingGeo, setIsLoadingGeo] = useState(false);

    // Helper to calculate distance (Haversine formula)
    const getDistanceFromLatLonInKm = (
        lat1: number,
        lon1: number,
        lat2: number,
        lon2: number
    ) => {
        const R = 6371; // Radius of the earth in km
        const dLat = deg2rad(lat2 - lat1);
        const dLon = deg2rad(lon2 - lon1);
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(deg2rad(lat1)) *
            Math.cos(deg2rad(lat2)) *
            Math.sin(dLon / 2) *
            Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const d = R * c; // Distance in km
        return d;
    };

    const deg2rad = (deg: number) => {
        return deg * (Math.PI / 180);
    };

    const handleGeolocation = () => {
        setIsLoadingGeo(true);
        if (!navigator.geolocation) {
            alert("La géolocalisation n'est pas supportée par votre navigateur.");
            setIsLoadingGeo(false);
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                let minDistance = Infinity;
                let closest: LocationId | null = null;

                SHOPS.forEach((shop) => {
                    const distance = getDistanceFromLatLonInKm(
                        latitude,
                        longitude,
                        shop.coordinates.lat,
                        shop.coordinates.lng
                    );
                    if (distance < minDistance) {
                        minDistance = distance;
                        closest = shop.id;
                    }
                });

                setClosestShopId(closest);
                setIsLoadingGeo(false);
            },
            (error) => {
                console.error("Error getting location", error);
                alert("Impossible de vous localiser. Veuillez choisir manuellement.");
                setIsLoadingGeo(false);
            }
        );
    };

    useEffect(() => {
        console.log("LocationModal: isModalOpen =", isModalOpen);
    }, [isModalOpen]);

    return (
        <AnimatePresence>
            {isModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="relative w-full max-w-2xl bg-surface border border-border rounded-3xl overflow-hidden shadow-2xl"
                    >
                        <div className="p-8 text-center space-y-4">
                            <h2 className="text-3xl font-serif font-bold text-primary">
                                Bienvenue chez M'ICE
                            </h2>
                            <p className="text-muted-foreground max-w-md mx-auto">
                                Pour une expérience optimale, veuillez sélectionner votre glacier
                                préféré.
                            </p>

                            <div className="flex justify-center mb-6">
                                <Button
                                    variant="outline"
                                    onClick={handleGeolocation}
                                    disabled={isLoadingGeo}
                                    className="gap-2 border-primary/50 text-primary hover:bg-primary/10"
                                >
                                    <Navigation className={cn("h-4 w-4", isLoadingGeo && "animate-spin")} />
                                    {isLoadingGeo ? "Recherche..." : "Trouver le plus proche"}
                                </Button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                                {SHOPS.map((shop) => (
                                    <button
                                        key={shop.id}
                                        onClick={() => setSelectedLocation(shop.id)}
                                        className={cn(
                                            "relative group flex flex-col items-center text-left p-4 rounded-2xl border border-border/50 bg-background/50 hover:bg-background transition-all hover:border-primary/50",
                                            closestShopId === shop.id && "ring-2 ring-primary border-primary bg-primary/5"
                                        )}
                                    >
                                        {closestShopId === shop.id && (
                                            <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-full">
                                                Recommandé
                                            </div>
                                        )}

                                        <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-4 border border-white/5">
                                            <div className="absolute inset-0 bg-neutral-800 flex items-center justify-center">
                                                <MapPin className="h-8 w-8 text-muted-foreground" />
                                            </div>
                                        </div>

                                        <h3 className="text-xl font-serif font-semibold text-foreground group-hover:text-primary transition-colors">
                                            {shop.city}
                                        </h3>
                                        <p className="text-sm text-muted-foreground">{shop.name}</p>

                                        {!shop.isOpen && (
                                            <p className="text-xs text-red-400 mt-2 font-medium">{shop.openingDate}</p>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}

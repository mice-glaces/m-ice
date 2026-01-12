"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export interface Parfum {
    id: string;
    name: string;
    type: "creme" | "sorbet";
    image: string;
    description?: string;
}

interface ParfumCardProps {
    parfum: Parfum;
    className?: string;
}

export function ParfumCard({ parfum, className }: ParfumCardProps) {
    const badgeText = parfum.type === "creme" ? "CRÈME GLACÉE" : "SORBET";

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={cn(
                "group relative flex flex-col items-center bg-gradient-to-b from-[#18181c] to-[#121214] rounded-[24px] p-6 border border-primary/20 shadow-soft transition-all duration-300 hover:border-primary/40 hover:shadow-glow",
                className
            )}
        >
            {/* Badge */}
            <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.14em] uppercase bg-primary/15 border border-primary/30 text-primary backdrop-blur-md">
                    {badgeText}
                </span>
            </div>

            {/* Circular Scoop Container */}
            <div className="relative w-32 h-32 md:w-40 md:h-40 mt-4 overflow-hidden rounded-full border-4 border-white/10 shadow-soft group-hover:scale-105 transition-transform duration-500">
                <Image
                    src={parfum.image}
                    alt={parfum.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 128px, 160px"
                    priority={false}
                />
                {/* Subtle radial overlay for dimension */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2)_0%,transparent_60%)] pointer-events-none" />
            </div>

            {/* Name */}
            <h3 className="mt-6 text-lg md:text-xl font-bold text-center text-foreground group-hover:text-primary transition-colors">
                {parfum.name}
            </h3>

            {parfum.description && (
                <p className="mt-2 text-sm text-muted-foreground text-center line-clamp-2">
                    {parfum.description}
                </p>
            )}
        </motion.div>
    )
}

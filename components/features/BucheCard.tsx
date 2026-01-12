"use client";

import { useState } from "react";
import { BucheModal } from "./BucheModal";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export interface BucheData {
    name: string;
    description: string;
    price4: string;
    price6: string;
    inside: string[];
    top: string[];
    images: string[];
    label: string;
    subtitle: string;
    mailSubject: string;
}

interface BucheCardProps {
    buche: BucheData;
}

export function BucheCard({ buche }: BucheCardProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <motion.article
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="
                    bg-surface/40 backdrop-blur-sm
                    rounded-2xl p-4 gold-glow
                    border border-primary/10 hover:border-primary/40
                    flex flex-col gap-4 relative overflow-hidden
                    text-foreground cursor-pointer
                    transition-all duration-500
                    group
                "
                onClick={() => setIsModalOpen(true)}
            >
                {/* Image Container with Overlay */}
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-[#0c0c0c] border border-white/5">
                    <motion.div
                        className="
                            absolute inset-0 bg-cover bg-center bg-no-repeat
                            transition-transform duration-1000 group-hover:scale-110
                        "
                        style={{ backgroundImage: `url('${buche.images[0]}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-[0.65rem] uppercase tracking-[0.2em] font-bold bg-primary/20 border border-primary/30 text-primary backdrop-blur-md z-10">
                        {buche.label}
                    </div>
                </div>

                <div className="flex flex-col flex-1">
                    <h3 className="font-serif text-xl text-[#fff3d6] mb-2 group-hover:text-primary transition-colors duration-300">
                        {buche.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-4">
                        {buche.subtitle}
                    </p>

                    <div className="mt-auto space-y-4">
                        <div className="flex items-baseline gap-4">
                            <div className="flex flex-col">
                                <span className="text-[10px] uppercase tracking-wider text-muted-foreground/60">4 pers.</span>
                                <span className="text-sm font-semibold text-primary/90">{buche.price4}</span>
                            </div>
                            <div className="w-[1px] h-6 bg-primary/10" />
                            <div className="flex flex-col">
                                <span className="text-[10px] uppercase tracking-wider text-muted-foreground/60">6 pers.</span>
                                <span className="text-sm font-semibold text-primary/90">{buche.price6}</span>
                            </div>
                        </div>

                        <div className="flex justify-between items-center pt-4 border-t border-primary/5">
                            <span className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground group-hover:text-primary/70 transition-colors">Commander</span>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Button
                                    size="sm"
                                    variant="ghost"
                                    className="h-9 px-4 text-xs border border-primary/20 bg-primary/5 text-primary hover:bg-primary hover:text-primary-foreground font-bold rounded-full transition-all duration-300"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        window.location.href = `mailto:miceglaces@gmail.com?subject=${encodeURIComponent(buche.mailSubject)}`;
                                    }}
                                >
                                    Précommander
                                </Button>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Hover Accent */}
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
            </motion.article>

            <AnimatePresence>
                {isModalOpen && (
                    <BucheModal buche={buche} onClose={() => setIsModalOpen(false)} />
                )}
            </AnimatePresence>
        </>
    );
}

"use client";

import { useState, useEffect } from "react";
import type { BucheData } from "./BucheCard";

interface BucheModalProps {
    buche: BucheData;
    onClose: () => void;
}

export function BucheModal({ buche, onClose }: BucheModalProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Lock body scroll when modal is open
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % buche.images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + buche.images.length) % buche.images.length);
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
            role="dialog"
            aria-modal="true"
            onClick={onClose}
        >
            <div
                className="
                    relative w-full max-w-4xl bg-[#18181c] border border-primary/20
                    rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row
                    max-h-[90vh] md:max-h-[600px]
                "
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
                    aria-label="Fermer"
                >
                    ✕
                </button>

                {/* Left: Carousel */}
                <div className="w-full md:w-3/5 bg-black relative flex items-center justify-center h-[300px] md:h-auto shrink-0">

                    <img
                        src={buche.images[currentImageIndex]}
                        alt={buche.name}
                        className="w-full h-full object-cover"
                    />

                    {buche.images.length > 1 && (
                        <>
                            <button
                                onClick={prevImage}
                                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/40 hover:bg-primary/80 text-white backdrop-blur-md transition-all text-xl"
                            >
                                ‹
                            </button>
                            <button
                                onClick={nextImage}
                                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/40 hover:bg-primary/80 text-white backdrop-blur-md transition-all text-xl"
                            >
                                ›
                            </button>

                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                {buche.images.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setCurrentImageIndex(idx)}
                                        className={`w-2 h-2 rounded-full transition-all ${idx === currentImageIndex ? "bg-primary w-4" : "bg-white/40 hover:bg-white/70"
                                            }`}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </div>

                {/* Right: Content */}
                <div className="flex-1 p-6 md:p-8 overflow-y-auto bg-[#18181c]">
                    <h2 className="font-serif text-3xl text-[#fff3d6] mb-2">{buche.name}</h2>
                    <p className="text-muted-foreground mb-6 text-sm md:text-base leading-relaxed">
                        {buche.description}
                    </p>

                    <div className="space-y-6">
                        <div>
                            <h4 className="font-serif text-primary text-lg mb-2 border-b border-primary/20 pb-1 inline-block">
                                À l’intérieur
                            </h4>
                            <ul className="text-sm text-[#d6d1ca] space-y-1 text-left list-disc pl-4 marker:text-primary">
                                {buche.inside.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-serif text-primary text-lg mb-2 border-b border-primary/20 pb-1 inline-block">
                                Sur le dessus
                            </h4>
                            <ul className="text-sm text-[#d6d1ca] space-y-1 text-left list-disc pl-4 marker:text-primary">
                                {buche.top.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="pt-4 border-t border-white/5 grid grid-cols-2 gap-4">
                            <div>
                                <span className="block text-xs uppercase tracking-wider text-muted-foreground">4 personnes</span>
                                <span className="font-bold text-xl text-[#fff7eb]">{buche.price4}</span>
                            </div>
                            <div>
                                <span className="block text-xs uppercase tracking-wider text-muted-foreground">6 personnes</span>
                                <span className="font-bold text-xl text-[#fff7eb]">{buche.price6}</span>
                            </div>
                        </div>

                        <a
                            href={`mailto:miceglaces@gmail.com?subject=${encodeURIComponent(buche.mailSubject)}`}
                            className="
                                block w-full text-center py-3 rounded-full
                                bg-gradient-to-r from-[#e3c58f] to-[#c89b3c]
                                text-[#18130d] font-black text-sm uppercase tracking-wider
                                shadow-lg hover:brightness-105 hover:scale-[1.01] transition-all
                            "
                        >
                            Précommander par mail
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

"use client";

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface PageHeroProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    subtitle?: string;
    label?: string;
    align?: "left" | "center";
}

export function PageHero({
    title,
    subtitle,
    label,
    align = "center",
    className,
    ...props
}: PageHeroProps) {
    return (
        <section
            className={cn(
                "relative min-h-[60vh] flex items-center justify-center py-20 overflow-hidden",
                align === "center" ? "text-center mx-auto" : "text-left",
                className
            )}
            {...props}
        >
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[#0a0a0c] -z-20" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(200,155,60,0.12)_0%,transparent_60%)] pointer-events-none -z-10" />

            <div className="container px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {label && (
                        <motion.span
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="inline-block mb-6 text-xs font-bold tracking-[0.3em] uppercase text-primary border border-primary/30 px-4 py-1.5 rounded-full bg-primary/5 backdrop-blur-sm"
                        >
                            {label}
                        </motion.span>
                    )}

                    <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl mb-8 leading-[1.1] tracking-tight">
                        <span className="text-gold-gradient block">{title}</span>
                    </h1>

                    {subtitle && (
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light"
                        >
                            {subtitle}
                        </motion.p>
                    )}
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] uppercase tracking-[0.2em] text-primary/60 font-medium">Découvrir</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-primary/60 to-transparent relative overflow-hidden">
                    <motion.div
                        animate={{ y: [0, 48] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                        className="absolute top-0 left-0 w-full h-1/2 bg-white"
                    />
                </div>
            </motion.div>
        </section>
    )
}

"use client";

import { motion } from "framer-motion";

export function SectionSeparator() {
    return (
        <div className="relative py-24 overflow-hidden">
            <div className="container px-4 flex justify-center">
                <div className="relative w-full max-w-lg h-[1px]">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                    <motion.div
                        initial={{ width: 0, opacity: 0 }}
                        whileInView={{ width: "100%", opacity: 1 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent"
                    />
                    <motion.div
                        initial={{ scale: 0, opacity: 0, rotate: 45 }}
                        whileInView={{ scale: 1, opacity: 1, rotate: 45 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 border border-primary bg-background shadow-[0_0_10px_rgba(200,155,60,0.4)]"
                    />
                </div>
            </div>

            {/* Background Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(200,155,60,0.03)_0%,transparent_70%)] pointer-events-none -z-10" />
        </div>
    );
}

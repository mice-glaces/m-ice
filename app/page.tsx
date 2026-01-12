"use client";

import { motion } from "framer-motion";
import { BucheCard } from "@/components/features/BucheCard";
import { PageHero } from "@/components/ui/PageHero";
import { BUCHES } from "@/lib/data/buches";
import { SectionSeparator } from "@/components/ui/SectionSeparator";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  const featuredBuche = BUCHES[0]; // Assuming first is signature

  return (
    <div className="min-h-screen pb-32 bg-[#08080a]">


      <PageHero
        title="Bûches d'Exception 2025"
        subtitle="Découvrez notre collection de bûches glacées artisanales, où l'élégance du design rencontre la finesse des terroirs alpins."
        label="Collection Fêtes"
      />

      {/* FEATURED SECTION */}
      <section className="container mx-auto px-4 -mt-20 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="glass rounded-[2.5rem] p-8 md:p-12 lg:p-16 border border-primary/20 shadow-2xl relative overflow-hidden"
        >
          {/* Accent decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full -mr-32 -mt-32" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">La création signature</span>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#fff7eb] mb-6">
                  {featuredBuche.name}
                </h2>
                <div className="w-20 h-1 bg-primary/40 rounded-full mb-8" />
                <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
                  {featuredBuche.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-6">
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-widest text-[#8a8a8e]">À partir de</span>
                  <p className="text-2xl font-serif text-primary">{featuredBuche.price4}</p>
                </div>
                <div className="w-[1px] h-10 bg-primary/20" />
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-widest text-[#8a8a8e]">Préparation</span>
                  <p className="text-sm font-medium text-[#fff7eb]">Artisanale & Limitée</p>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-primary/10 blur-[60px] rounded-full scale-75 group-hover:scale-100 transition-transform duration-1000" />
              <motion.div
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ duration: 0.5 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/5 aspect-[4/3]"
              >
                <img
                  src={featuredBuche.images[0]}
                  alt={featuredBuche.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      <SectionSeparator />

      {/* FULL COLLECTION GRID */}
      <section className="container mx-auto px-4 relative">
        <div className="text-center mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl text-[#fff3d6]"
          >
            Le Catalogue Complet
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Chaque création est une invitation au voyage, née de la rencontre entre passion pâtissière et fraîcheur galcière.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {BUCHES.map((buche, index) => (
            <BucheCard key={index} buche={buche} />
          ))}
        </motion.div>
      </section>

      {/* SAVOIR-FAIRE SECTION */}
      <SectionSeparator />

      <section className="container mx-auto px-4 py-20">
        <div className="glass rounded-[3rem] p-8 md:p-16 border border-primary/10 overflow-hidden relative">
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

          <div className="max-w-3xl mx-auto text-center space-y-8">
            <span className="text-primary text-xs font-bold tracking-[0.4em] uppercase">L'Excellence M'ice</span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#fff7eb] leading-tight">Un savoir-faire artisanal local au cœur des Alpes</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Situé à Saint-Jean-Saint-Nicolas, notre atelier travaille les produits de saison
              et de proximité pour vous offrir des desserts d'exception. De la sélection
              du lait aux finitions soignées, chaque étape est guidée par l'amour du goût.
            </p>
            <div className="flex justify-center gap-4 pt-6">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
              <div className="w-1.5 h-1.5 rounded-full bg-primary/20" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

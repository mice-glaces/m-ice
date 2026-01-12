"use client"

import { useState } from "react";
import Image from "next/image";
import { ParfumCard, type Parfum } from "@/components/features/ParfumCard";
import { cn } from "@/lib/utils";

// Parfums data with types and generic descriptions
const parfumsData: Parfum[] = [
    // Crèmes glacées
    { id: "vanille", name: "Vanille", type: "creme", image: "/images/parfums/vanille.jpg", description: "Onctueuse & gourmande" },
    { id: "chocolat", name: "Chocolat", type: "creme", image: "/images/parfums/chocolat.jpg", description: "Intense & fondant" },
    { id: "pistache", name: "Pistache", type: "creme", image: "/images/parfums/pistache.jpg", description: "Authentique & grillée" },
    { id: "noisette", name: "Noisette", type: "creme", image: "/images/parfums/noisette.jpg", description: "Douce & croquante" },
    { id: "cafe", name: "Café", type: "creme", image: "/images/parfums/cafe.jpg", description: "Corsé & aromatique" },
    { id: "cafe-blanc", name: "Café blanc", type: "creme", image: "/images/parfums/cafe-blanc.jpg", description: "Subtil & original" },
    { id: "noix-de-coco", name: "Noix de coco", type: "creme", image: "/images/parfums/noix-de-coco.jpg", description: "Exotique & crémeuse" },
    { id: "yaourt", name: "Yaourt", type: "creme", image: "/images/parfums/yaourt.jpg", description: "Frais & acidulé" },
    { id: "caramel-beurre-sale", name: "Caramel beurre salé", type: "creme", image: "/images/parfums/caramel-beurre-sale.jpg", description: "Gourmand & salé" },
    { id: "fleur-de-lait", name: "Fleur de lait", type: "creme", image: "/images/parfums/fleur-de-lait.jpg", description: "Pure & délicate" },
    { id: "marron", name: "Marron", type: "creme", image: "/images/parfums/marron.jpg", description: "Riche & boisé" },
    { id: "rhum-raisins", name: "Rhum raisins", type: "creme", image: "/images/parfums/rhum-raisins.jpg", description: "Traditionnel & parfumé" },
    { id: "genepi", name: "Génépi", type: "creme", image: "/images/parfums/genepi.jpg", description: "Alpin & herbacé" },
    { id: "miel", name: "Miel", type: "creme", image: "/images/parfums/miel.jpg", description: "Doux & floral" },
    { id: "menthe-chocolat", name: "Menthe chocolat", type: "creme", image: "/images/parfums/menthe-chocolat.jpg", description: "Fraîche & intense" },

    // Sorbets
    { id: "framboise", name: "Framboise", type: "sorbet", image: "/images/parfums/framboise.jpg", description: "Fruitée & intense" },
    { id: "fraise", name: "Fraise", type: "sorbet", image: "/images/parfums/fraise.jpg", description: "Sucrée & fraîche" },
    { id: "cassis", name: "Cassis", type: "sorbet", image: "/images/parfums/cassis.jpg", description: "Acidulé & puissant" },
    { id: "myrtille", name: "Myrtille", type: "sorbet", image: "/images/parfums/myrtille.jpg", description: "Sauvage & colorée" },
    { id: "abricot", name: "Abricot", type: "sorbet", image: "/images/parfums/abricot.jpg", description: "Velouté & solaire" },
    { id: "poire", name: "Poire", type: "sorbet", image: "/images/parfums/poire.jpg", description: "Douce & juteuse" },
    { id: "citron", name: "Citron", type: "sorbet", image: "/images/parfums/citron.jpg", description: "Vif & désaltérant" },
    { id: "argousier", name: "Argousier", type: "sorbet", image: "/images/parfums/argousier.jpg", description: "Vitaminé & atypique" },
    { id: "ananas", name: "Ananas", type: "sorbet", image: "/images/parfums/ananas.jpg", description: "Exotique & sucré" },
    { id: "mangue", name: "Mangue", type: "sorbet", image: "/images/parfums/mangue.jpg", description: "Onctueuse & tropicale" },
    { id: "passion", name: "Passion", type: "sorbet", image: "/images/parfums/passion.jpg", description: "Exotique & acidulé" },
    { id: "banane", name: "Banane", type: "sorbet", image: "/images/parfums/banane.jpg", description: "Douce & nourrissante" },
    { id: "litchi", name: "Litchi", type: "sorbet", image: "/images/parfums/litchi.jpg", description: "Délicat & parfumé" },
];

const miniPots = [
    { id: 1, image: "/images/parfums/vanille.jpg" },
    { id: 2, image: "/images/parfums/chocolat.jpg" },
    { id: 3, image: "/images/parfums/abricot.jpg" },
    { id: 4, image: "/images/parfums/framboise.jpg" },
    { id: 5, image: "/images/parfums/myrtille.jpg" },
];

export default function ParfumsPage() {
    const [filter, setFilter] = useState<"all" | "creme" | "sorbet">("all");

    const filteredParfums = parfumsData.filter(p =>
        filter === "all" ? true : p.type === filter
    );

    return (
        <div className="min-h-screen flex flex-col font-sans bg-background">


            <main className="flex-1 pb-20">
                {/* Hero Section */}
                <section className="container mx-auto px-4 pt-8 md:pt-12">
                    <div className="relative overflow-hidden rounded-[32px] border border-primary/20 bg-gradient-to-br from-[#2a241c] via-[#141216] to-[#0e0e10] p-6 md:p-12 shadow-soft">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                            {/* Left Content */}
                            <div className="animate-in fade-in slide-in-from-left-4 duration-700">
                                <span className="inline-block mb-4 text-xs font-bold tracking-[0.2em] uppercase text-primary">
                                    Carte des parfums
                                </span>
                                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
                                    Nos parfums de glaces & sorbets
                                </h1>
                                <p className="text-muted-foreground text-lg mb-8 max-w-xl">
                                    Crèmes glacées & sorbets artisanaux, disponibles sur place ou à emporter dans la limite des stocks disponibles.
                                </p>

                                {/* Pricing Grid */}
                                <div className="flex flex-wrap gap-3 mb-6">
                                    {["1 BOULE : 3€", "2 BOULES : 5,80€", "3 BOULES : 8,40€", "4 BOULES : 10,40€"].map((price) => (
                                        <span key={price} className="px-4 py-2 rounded-full text-xs font-bold tracking-wider bg-primary/10 border border-primary/30 text-primary uppercase">
                                            {price}
                                        </span>
                                    ))}
                                </div>
                                <div className="text-sm text-foreground/80">
                                    Topping : <span className="font-bold">0,50 €</span> • Chantilly : <span className="font-bold">1,00 €</span>
                                </div>
                            </div>

                            {/* Right Visuals */}
                            <div className="relative animate-in fade-in slide-in-from-right-4 duration-700">
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                                    <Image
                                        src="/images/hero-parfums.jpg"
                                        alt="Sélection maison"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    <span className="absolute bottom-4 left-4 px-4 py-2 rounded-full text-xs font-bold bg-primary/20 border border-primary/40 text-white backdrop-blur-md">
                                        Sélection maison – 2025
                                    </span>
                                </div>

                                {/* Mini Pots Strip */}
                                <div className="flex gap-4 mt-6 overflow-hidden">
                                    {miniPots.map((pot) => (
                                        <div key={pot.id} className="relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0 rounded-full border-2 border-white/20 shadow-lg overflow-hidden ring-2 ring-primary/20 transition-transform hover:scale-110">
                                            <Image
                                                src={pot.image}
                                                alt="Mini pot"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Background Decorative Glow */}
                        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_center,rgba(200,155,60,0.1)_0%,transparent_70%)] pointer-events-none" />
                    </div>
                </section>

                {/* Filters */}
                <section className="container mx-auto px-4 mt-12 mb-8">
                    <div className="flex flex-wrap gap-3">
                        <button
                            onClick={() => setFilter("all")}
                            className={cn(
                                "px-6 py-2 rounded-full text-sm font-bold transition-all border",
                                filter === "all"
                                    ? "bg-primary/20 border-primary text-primary"
                                    : "bg-surface border-border text-muted-foreground hover:border-primary/50"
                            )}>
                            Tous
                        </button>
                        <button
                            onClick={() => setFilter("creme")}
                            className={cn(
                                "px-6 py-2 rounded-full text-sm font-bold transition-all border",
                                filter === "creme"
                                    ? "bg-primary/20 border-primary text-primary"
                                    : "bg-surface border-border text-muted-foreground hover:border-primary/50"
                            )}>
                            Crèmes glacées
                        </button>
                        <button
                            onClick={() => setFilter("sorbet")}
                            className={cn(
                                "px-6 py-2 rounded-full text-sm font-bold transition-all border",
                                filter === "sorbet"
                                    ? "bg-primary/20 border-primary text-primary"
                                    : "bg-surface border-border text-muted-foreground hover:border-primary/50"
                            )}>
                            Sorbets
                        </button>
                    </div>
                </section>

                {/* Parfums Grid */}
                <section className="container mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                        {filteredParfums.map((parfum) => (
                            <ParfumCard key={parfum.id} parfum={parfum} />
                        ))}
                    </div>
                </section>
            </main>

        </div>
    );
}


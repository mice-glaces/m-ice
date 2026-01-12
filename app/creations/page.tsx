import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { PageHero } from "@/components/ui/PageHero";
import { ProductCard } from "@/components/features/ProductCard";

const products = {
    gateaux: [
        { name: "Vacherin Framboise", image: "/images/products/gateaux-1.jpg" },
        { name: "Vacherin Vanille", image: "/images/products/gateaux-2.jpg" },
        { name: "Nougat Glacé", image: "/images/products/nougat-glace.jpg" },
    ],
    pots: [
        { name: "Pot Abricot", image: "/images/products/pot-abricot.jpg" },
        { name: "Pot Chocolat", image: "/images/products/pot-chco.jpg" },
        { name: "Pot Framboise", image: "/images/products/pot-framboise.jpg" },
        { name: "Pot Myrtille", image: "/images/products/pot-myrtille.jpg" },
        { name: "Pot Vanille", image: "/images/products/pot-vanille.jpg" },
    ],
    buchettes: [
        { name: "Caramel Beurre Salé - Vanille", image: "/images/products/buchettes/buchette-cbs-vanille.jpg" },
        { name: "Fleur de Lait - Framboise", image: "/images/products/buchettes/buchette-fleur-de-lait-framboise.jpg" },
        { name: "Framboise - Fraise", image: "/images/products/buchettes/buchette-framboise-fraise.jpg" },
        { name: "Mangue - Coco", image: "/images/products/buchettes/buchette-mangue-coco.jpg" },
        { name: "Pistache - Fleur d'Oranger", image: "/images/products/buchettes/buchette-pistache-fleur-oranger.jpg" },
        { name: "Pistache - Framboise", image: "/images/products/buchettes/buchette-pistache-framboise.jpg" },
        { name: "Poire - Chocolat", image: "/images/products/buchettes/buchette-poire-chocolat.jpg" },
        { name: "Vanille - Framboise", image: "/images/products/buchettes/buchette-vanille-framboise.jpg" },
    ],
    macarons: [
        { name: "Caramel", image: "/images/products/macarons/macaron-caramel.jpg" },
        { name: "Chocolat", image: "/images/products/macarons/macaron-chocolat.jpg" },
        { name: "Framboise", image: "/images/products/macarons/macaron-framboise.jpg" },
        { name: "Mangue", image: "/images/products/macarons/macaron-mangue.jpg" },
        { name: "Vanille", image: "/images/products/macarons/macaron-vanille.jpg" },
    ]
};

const Section = ({ title, items, aspect = "square" }: { title: string, items: { name: string, image: string }[], aspect?: "square" | "video" }) => (
    <section className="py-12">
        <h2 className="text-3xl font-serif font-bold text-foreground mb-8 text-center">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item) => (
                <ProductCard
                    key={item.name}
                    product={{
                        id: item.name,
                        name: item.name,
                        description: "", // No description for now
                        image: item.image,
                    }}
                    aspectRatio={aspect === 'video' ? 'landscape' : 'square'}
                />
            ))}
        </div>
    </section>
);

export default function CreationsPage() {
    return (
        <div className="min-h-screen flex flex-col font-sans bg-background">


            <main className="flex-1 pb-20">
                <PageHero
                    title="Nos Créations Glacées"
                    subtitle="Au-delà des simples boules de glace, découvrez nos desserts glacés à partager ou à savourer en solo."
                    label="Gourmandises"
                />

                <div className="container mx-auto px-4 -mt-6 relative z-10">
                    <Section title="Gâteaux & Vacherins" items={products.gateaux} aspect="square" />
                    <Section title="Pots Gourmands (500ml)" items={products.pots} aspect="square" />
                    <Section title="Nos Bûchettes" items={products.buchettes} aspect="square" />
                    <Section title="Macarons Glacés" items={products.macarons} aspect="square" />
                </div>
            </main>

        </div>
    );
}

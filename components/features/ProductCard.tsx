"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export interface Product {
    id: string;
    name: string;
    description: string;
    price?: string;
    image: string;
    tags?: string[];
    isNew?: boolean;
    isSoldOut?: boolean;
}

interface ProductCardProps {
    product: Product;
    aspectRatio?: "square" | "portrait" | "landscape";
    className?: string;
    onAction?: () => void;
    actionLabel?: string;
}

export function ProductCard({
    product,
    aspectRatio = "square",
    className,
    onAction,
    actionLabel = "Voir détails"
}: ProductCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
        >
            <Card className={cn("group overflow-hidden border-border/50 bg-surface/50 hover:bg-surface hover:border-primary/30 transition-all duration-300 hover:shadow-glow h-full flex flex-col", className)}>
                <div className={cn(
                    "relative overflow-hidden bg-black/40",
                    aspectRatio === "square" && "aspect-square",
                    aspectRatio === "portrait" && "aspect-[3/4]",
                    aspectRatio === "landscape" && "aspect-video"
                )}>
                    {product.image ? (
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-secondary/30 text-muted-foreground">
                            No Image
                        </div>
                    )}

                    <div className="absolute top-3 left-3 flex flex-col gap-2">
                        {product.isNew && (
                            <Badge variant="default" className="bg-primary text-primary-foreground">Nouveau</Badge>
                        )}
                        {product.isSoldOut && (
                            <Badge variant="destructive">Épuisé</Badge>
                        )}
                    </div>
                </div>

                <CardContent className="p-6 flex-grow">
                    <div className="flex justify-between items-start gap-4 mb-2">
                        <h3 className="font-serif text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors">
                            {product.name}
                        </h3>
                        {product.price && (
                            <span className="font-bold text-lg text-primary">{product.price}</span>
                        )}
                    </div>
                    <p className="text-muted-foreground text-sm line-clamp-3">
                        {product.description}
                    </p>
                    {product.tags && (
                        <div className="flex flex-wrap gap-2 mt-4">
                            {product.tags.map(tag => (
                                <span key={tag} className="text-[10px] uppercase tracking-wider px-2 py-1 rounded bg-secondary/50 text-secondary-foreground border border-white/5">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </CardContent>

                <CardFooter className="p-6 pt-0 mt-auto">
                    <Button
                        onClick={onAction}
                        className="w-full"
                        variant="outline"
                        disabled={product.isSoldOut}
                    >
                        {product.isSoldOut ? "Indisponible" : actionLabel}
                    </Button>
                </CardFooter>
            </Card>
        </motion.div>
    )
}

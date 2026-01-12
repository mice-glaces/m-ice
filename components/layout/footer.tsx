"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Mail, MapPin, Phone, Clock, ChevronRight } from "lucide-react"
import { useLocation } from "@/context/LocationContext"
import { SHOPS } from "@/lib/config/locations"

const navigation = [
    { name: "Accueil", href: "/" },
    { name: "Nos Bûches", href: "/" },
    { name: "Nos Créations", href: "/creations" },
    { name: "Nos Parfums", href: "/parfums" },
    { name: "Professionnels", href: "/pro" },
]

export function Footer() {
    const { selectedLocation } = useLocation()
    const currentShop = SHOPS.find(s => s.id === selectedLocation) || SHOPS[0]

    return (
        <footer className="bg-surface border-t border-border/40 pt-20 pb-10">
            <div className="container mx-auto px-4 sm:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="flex flex-col gap-6">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="relative h-12 w-12 overflow-hidden rounded-full border border-primary/20">
                                <Image
                                    src="/images/branding/logo.jpg"
                                    alt="M'ICE Logo"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <span className="text-2xl font-bold font-serif tracking-tight text-foreground">
                                M'ICE
                            </span>
                        </Link>
                        <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                            Artisan glacier passionné, nous créons des glaces et desserts glacés d'exception au cœur des Alpes.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="https://instagram.com/miceglaces" target="_blank" rel="noopener noreferrer" className="h-10 w-10 flex items-center justify-center rounded-full bg-surface-hover border border-border/40 text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300">
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a href="https://facebook.com/miceglaces" target="_blank" rel="noopener noreferrer" className="h-10 w-10 flex items-center justify-center rounded-full bg-surface-hover border border-border/40 text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300">
                                <Facebook className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="font-serif text-xl mb-6 text-foreground">Navigation</h3>
                        <ul className="flex flex-col gap-4">
                            {navigation.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-sm text-muted-foreground hover:text-primary flex items-center gap-2 transition-colors group"
                                    >
                                        <ChevronRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-serif text-xl mb-6 text-foreground">Contact</h3>
                        <ul className="flex flex-col gap-5">
                            <li className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                <div className="text-sm">
                                    <p className="text-foreground font-semibold">{currentShop.name}</p>
                                    <p className="text-muted-foreground">{currentShop.address}, {currentShop.city}</p>
                                </div>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-primary shrink-0" />
                                <a href="mailto:miceglaces@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    miceglaces@gmail.com
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-primary shrink-0" />
                                <span className="text-sm text-muted-foreground">Nous contacter</span>
                            </li>
                        </ul>
                    </div>

                    {/* Opening Hours placeholder - ideally would be in config */}
                    <div>
                        <h3 className="font-serif text-xl mb-6 text-foreground">Horaires</h3>
                        <div className="bg-surface-hover rounded-2xl p-6 border border-border/40">
                            <ul className="flex flex-col gap-3">
                                <li className="flex justify-between text-sm">
                                    <span className="text-muted-foreground">Lundi - Vendredi</span>
                                    <span className="text-foreground font-semibold">Fermé</span>
                                </li>
                                <li className="flex justify-between text-sm">
                                    <span className="text-muted-foreground">Samedi</span>
                                    <span className="text-foreground font-semibold">14h - 18h</span>
                                </li>
                                <li className="flex justify-between text-sm">
                                    <span className="text-muted-foreground">Dimanche</span>
                                    <span className="text-foreground font-semibold">10h - 13h</span>
                                </li>
                            </ul>
                            <div className="mt-4 pt-4 border-t border-border/40 flex items-center gap-2 text-[0.7rem] text-primary font-bold uppercase tracking-widest">
                                <Clock className="h-3 w-3" />
                                <span>Selon saison</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-muted-foreground">
                        &copy; {new Date().getFullYear()} M'ICE Glacier Artisan. Tous droits réservés.
                    </p>
                    <div className="flex gap-8">
                        <Link href="/mentions-legales" className="text-xs text-muted-foreground hover:text-primary transition-colors">Mentions légales</Link>
                        <Link href="/cgv" className="text-xs text-muted-foreground hover:text-primary transition-colors">CGV</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, MapPin } from "lucide-react"
import { useLocation } from "@/context/LocationContext"
import { SHOPS } from "@/lib/config/locations"

const navigation = [
    { name: "Accueil", href: "/" },
    { name: "Nos Bûches", href: "/" }, // Home is now Buches
    { name: "Nos Créations", href: "/creations" },
    { name: "Nos Parfums", href: "/parfums" },
    { name: "Professionnels", href: "/pro" },
]

export function Header() {
    const [isOpen, setIsOpen] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)
    const pathname = usePathname()
    const { selectedLocation, setIsModalOpen } = useLocation()

    const currentShop = SHOPS.find(s => s.id === selectedLocation)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={cn(
                "sticky top-0 z-50 w-full transition-all duration-300",
                isScrolled
                    ? "bg-background/80 backdrop-blur-md border-b border-border/40 py-2"
                    : "bg-transparent py-4"
            )}
        >
            <div className="container mx-auto flex items-center justify-between px-4 sm:px-8">
                {/* Logo & Location */}
                <div className="flex items-center gap-4 sm:gap-8">
                    <Link href="/" className="group flex items-center gap-3">
                        <div className="relative h-10 w-10 sm:h-12 sm:w-12 overflow-hidden rounded-full border border-primary/20 transition-transform duration-300 group-hover:scale-110">
                            <Image
                                src="/images/branding/logo.jpg"
                                alt="M'ICE Logo"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <span className="text-xl font-bold font-serif tracking-tight text-foreground transition-colors group-hover:text-primary hidden sm:inline">
                            M'ICE
                        </span>
                    </Link>

                    {/* Location Badge */}
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface-hover/50 border border-primary/20 hover:border-primary/50 hover:bg-surface-hover transition-all duration-300 group"
                    >
                        <MapPin className="h-3.5 w-3.5 text-primary transition-transform duration-300 group-hover:rotate-12" />
                        <div className="flex flex-col items-start leading-none">
                            <span className="text-[0.6rem] uppercase tracking-widest text-muted-foreground font-bold">Mon glacier</span>
                            <span className="text-xs font-bold text-primary">
                                {currentShop ? currentShop.city : "Choisir"}
                            </span>
                        </div>
                    </button>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-10">
                    {navigation.map((item) => {
                        const isActive = pathname === item.href
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "relative text-sm font-semibold tracking-wide transition-all duration-300 hover:text-primary py-2 group",
                                    isActive ? "text-primary" : "text-muted-foreground"
                                )}
                            >
                                {item.name}
                                <span className={cn(
                                    "absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300",
                                    isActive ? "w-full" : "w-0 group-hover:w-full"
                                )} />
                            </Link>
                        )
                    })}
                </nav>

                {/* CTA & Mobile Menu Toggle */}
                <div className="flex items-center gap-4">
                    <Button
                        variant="outline"
                        size="sm"
                        className="hidden sm:flex items-center gap-2 rounded-full px-6 border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transform active:scale-95 transition-all"
                    >
                        <Phone className="h-4 w-4" />
                        <span className="font-bold uppercase tracking-tight text-[0.7rem]">Contact</span>
                    </Button>

                    <button
                        className="flex lg:hidden h-10 w-10 items-center justify-center rounded-full bg-surface-hover/50 border border-primary/10 text-foreground transition-all active:scale-90"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="h-6 w-6 text-primary" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <div
                className={cn(
                    "lg:hidden fixed inset-0 top-[calc(var(--header-height,80px))] z-50 bg-background/95 backdrop-blur-xl transition-all duration-500 transform",
                    isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
                )}
            >
                <nav className="flex flex-col p-8 gap-6">
                    {navigation.map((item, index) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={cn(
                                "text-2xl font-serif tracking-tight transition-all duration-300 flex items-center justify-between group",
                                pathname === item.href ? "text-primary" : "text-muted-foreground",
                                // Simple entrance animation delay
                            )}
                            style={{ transitionDelay: `${index * 50}ms` }}
                        >
                            {item.name}
                            <div className="h-1 w-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                    ))}
                    <div className="mt-8 pt-8 border-t border-border/40">
                        <Button variant="default" className="w-full h-14 rounded-2xl text-lg font-bold">
                            Nous contacter
                        </Button>
                    </div>
                </nav>
            </div>
        </header>
    )
}

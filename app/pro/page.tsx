import { Header } from "@/components/layout/header";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ProfessionnelsPage() {
    return (
        <div className="min-h-screen flex flex-col font-sans bg-background">
            <Header />

            <main className="flex-1 pb-20">
                <PageHero
                    title="Espace Professionnels"
                    subtitle="Restaurateurs, hôteliers, traiteurs : proposez des glaces d'exception à vos clients."
                    label="B2B"
                />

                <section className="container mx-auto px-4 -mt-10 relative z-10 grid lg:grid-cols-2 gap-16">
                    <div className="space-y-8 animate-in fade-in slide-in-from-left-4 duration-700 delay-200">
                        <div>
                            <h2 className="text-2xl font-serif font-semibold mb-4 text-foreground">Pourquoi choisir M'ICE ?</h2>
                            <ul className="space-y-4 text-muted-foreground">
                                <li className="flex gap-2">
                                    <span className="text-primary font-bold">•</span>
                                    <span>Savoir-faire artisanal et local (Hautes-Alpes).</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-primary font-bold">•</span>
                                    <span>Ingrédients naturels, sans colorants ni arômes artificiels.</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-primary font-bold">•</span>
                                    <span>Flexibilité et créations sur-mesure possibles.</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-primary font-bold">•</span>
                                    <span>Livraison adaptée à vos besoins.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="p-6 bg-surface hover:bg-surface-hover transition-colors rounded-xl border border-primary/20 shadow-soft">
                            <h3 className="text-xl font-semibold mb-2 text-foreground">Contact Direct</h3>
                            <p className="text-muted-foreground mb-4">
                                Vous préférez nous appeler directement ?
                            </p>
                            <p className="text-lg font-medium text-primary">06 XX XX XX XX</p>
                            <p className="text-sm text-muted-foreground">Du Lundi au Samedi, 9h - 18h</p>
                        </div>
                    </div>

                    <div className="bg-surface p-8 rounded-2xl shadow-soft border border-primary/10 animate-in fade-in slide-in-from-right-4 duration-700 delay-300">
                        <h2 className="text-2xl font-serif font-semibold mb-6 text-foreground">Demander un devis / catalogue</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-foreground">Nom de l'établissement</label>
                                    <Input id="name" placeholder="Restaurant Le Gourmet" className="bg-background border-primary/20 focus:border-primary" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="contact" className="text-sm font-medium text-foreground">Nom du contact</label>
                                    <Input id="contact" placeholder="Jean Dupont" className="bg-background border-primary/20 focus:border-primary" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-foreground">Email professionnel</label>
                                <Input id="email" type="email" placeholder="contact@restaurant.com" className="bg-background border-primary/20 focus:border-primary" />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-foreground">Votre demande</label>
                                <Textarea id="message" placeholder="Bonjour, je souhaiterais recevoir votre catalogue pour la saison d'été..." className="h-32 bg-background border-primary/20 focus:border-primary" />
                            </div>

                            <Button className="w-full text-lg h-12 shadow-lg shadow-black/20">Envoyer ma demande</Button>
                        </form>
                    </div>
                </section>
            </main>

            <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border opacity-60">
                © {new Date().getFullYear()} M'ICE Noir. Tous droits réservés.
            </footer>
        </div>
    );
}

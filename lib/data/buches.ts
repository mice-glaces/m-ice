export interface BucheData {
    name: string;
    description: string;
    price4: string;
    price6: string;
    inside: string[];
    top: string[];
    images: string[];
    label: string;
    subtitle: string;
    mailSubject: string;
}

export const BUCHES: BucheData[] = [
    {
        name: "La Fruitée – Framboise & cassis",
        subtitle: "Sorbets framboise & cassis, biscuit cacao et finitions fruitées.",
        description: "Bûche glacée Framboise / Cassis, entièrement réalisée à la main dans notre laboratoire à Saint-Jean-Saint-Nicolas.",
        label: "La Fruitée 🫐✨",
        price4: "19,60 €",
        price6: "29,40 €",
        inside: ["Sorbet framboise", "Sorbet cassis", "Biscuit cacao"],
        top: ["Mousse cassis", "Mousse framboise", "Pistole de chocolat au lait", "Fruits"],
        images: ["/images/buches/fruitee-1.jpg", "/images/buches/fruitee-2.jpg", "/images/buches/fruitee-3.jpg", "/images/buches/fruitee-4.jpg"],
        mailSubject: "Précommande M'Ice - La Fruitee (Framboise Cassis)"
    },
    {
        name: "La gourmande – Vanille & caramel",
        subtitle: "Biscuit vanille, praliné/noisette, glace vanille & caramel.",
        description: "Bûche glacée Vanille / Caramel, entièrement réalisée à la main dans notre laboratoire à Saint-Jean-Saint-Nicolas.",
        label: "La gourmande 🍯✨",
        price4: "19,60 €",
        price6: "29,40 €",
        inside: ["Biscuit moelleux vanille", "Croustillant praliné / noisette", "Glace vanille", "Glace caramel"],
        top: ["Ganache vanille", "Coulis caramel", "Chocolat noir", "Noix de pécan"],
        images: ["/images/buches/gourmande-1.jpg", "/images/buches/gourmande-2.jpg", "/images/buches/gourmande-3.jpg", "/images/buches/gourmande-4.jpg"],
        mailSubject: "Précommande M'Ice - La Gourmande (Vanille Caramel)"
    },
    {
        name: "La Chocolatée – Chocolat & poire",
        subtitle: "Chocolat, poire fondante, croustillant & biscuit cacao.",
        description: "Bûche glacée Chocolat / Poire, entièrement réalisée à la main dans notre laboratoire à Saint-Jean-Saint-Nicolas.",
        label: "La chocolatée 🍐✨",
        price4: "19,60 €",
        price6: "29,40 €",
        inside: ["Glace chocolat", "Marmelade de poire", "Sorbet poire", "Croustillant chocolat au lait", "Biscuit au cacao"],
        top: ["Mousse de poire", "Copeaux de chocolat", "Embout chocolat au lait"],
        images: ["/images/buches/chocolatee-1.jpg", "/images/buches/chocolatee-2.jpg", "/images/buches/chocolatee-3.jpg", "/images/buches/chocolatee-4.jpg"],
        mailSubject: "Précommande M'Ice - La Chocolatee (Chocolat Poire)"
    },
    {
        name: "L’Exotique – Noix de coco & mangue",
        subtitle: "Coco, mangue, textures gourmandes.",
        description: "Bûche glacée Noix de coco / Mangue, entièrement réalisée à la main dans notre laboratoire à Saint-Jean-Saint-Nicolas.",
        label: "L'Exotique 🥭🥥",
        price4: "19,60 €",
        price6: "29,40 €",
        inside: ["Glace Noix de Coco", "Sorbet Mangue", "Croustillant Noix de Coco", "Dacquoise Noix de Coco"],
        top: ["Crémeux Mangue Passion", "Bavaroise Noix de Coco", "Pistole de chocolat au lait", "Embout chocolat noir"],
        images: ["/images/buches/exotique-1.jpg", "/images/buches/exotique-2.jpg", "/images/buches/exotique-3.jpg", "/images/buches/exotique-4.jpg"],
        mailSubject: "Précommande M'Ice - L'Exotique (Coco Mangue)"
    },
    {
        name: "La Coquette – Fleur de lait & myrtille",
        subtitle: "Fleur de lait délicate, myrtille fruitée, touche florale.",
        description: "Bûche glacée Fleur de lait / Myrtille, entièrement réalisée à la main dans notre laboratoire à Saint-Jean-Saint-Nicolas.",
        label: "La Coquette 🌸✨",
        price4: "19,60 €",
        price6: "29,40 €",
        inside: ["Glace fleur de lait", "Sorbet myrtille", "Confit de fruits rouges (note de violette)", "Financier aux amandes"],
        top: ["Mousse myrtille", "Pistole de chocolat blanc", "Fruits rouges"],
        images: ["/images/buches/coquette-1.jpg", "/images/buches/coquette-2.jpg", "/images/buches/coquette-3.jpg", "/images/buches/coquette-4.jpg"],
        mailSubject: "Précommande M'Ice - La Coquette (Fleur de lait Myrtille)"
    }
];

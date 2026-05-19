'use client'

import { useState } from 'react'
import PageHero from '@/components/PageHero'
import styles from './page.module.css'

const faqItems = [
    {
        question: 'Quels sont vos horaires d\'ouverture ?',
        answer: 'Nos horaires varient selon la saison. En haute saison (juillet-août), nous sommes ouverts tous les jours de 10h à 19h. En mi-saison, nous ouvrons du mercredi au dimanche. Consultez notre page "Nous trouver" ou nos réseaux sociaux pour les horaires à jour.',
    },
    {
        question: 'Proposez-vous des options sans lactose ou véganes ?',
        answer: 'Oui ! Tous nos sorbets sont naturellement sans lactose et véganes. Ils sont préparés avec un minimum de 45% de fruits frais. N\'hésitez pas à nous demander conseil en boutique.',
    },
    {
        question: 'Puis-je commander un gâteau glacé personnalisé ?',
        answer: 'Absolument ! Nous réalisons des gâteaux glacés sur mesure pour toutes les occasions : anniversaires, mariages, événements. Contactez-nous au moins 48h à l\'avance pour discuter de votre projet.',
    },
    {
        question: 'Quels sont les allergènes présents dans vos produits ?',
        answer: 'Nos crèmes glacées contiennent du lait et peuvent contenir des traces de fruits à coque, œufs et gluten selon les parfums. La liste complète des allergènes est disponible en boutique. N\'hésitez pas à nous interroger pour tout régime alimentaire particulier.',
    },
    {
        question: 'Livrez-vous à domicile ?',
        answer: 'Nous proposons la livraison pour les professionnels et pour les grosses commandes (gâteaux, événements). Pour les particuliers, nous vous accueillons avec plaisir en boutique.',
    },
    {
        question: 'Peut-on acheter des pots à emporter ?',
        answer: 'Oui, nous proposons des pots de 500ml et 1L à emporter. Nous vous fournissons un sac isotherme pour conserver la chaîne du froid pendant votre trajet.',
    },
    {
        question: 'Les parfums sont-ils disponibles toute l\'année ?',
        answer: 'Notre carte évolue avec les saisons. Certains parfums classiques (vanille, chocolat, etc.) sont disponibles toute l\'année. Les parfums de saison changent régulièrement selon les fruits disponibles.',
    },
    {
        question: 'Proposez-vous des bûches glacées pour Noël ?',
        answer: 'Oui ! Chaque année, nous créons une collection de bûches glacées artisanales. Les commandes ouvrent généralement début novembre. Suivez-nous sur Instagram pour être informé.',
    },
]

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggleItem = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <>
            <PageHero
                title="Questions Fréquentes"
                subtitle="Retrouvez les réponses à vos questions les plus courantes"
                backgroundImage="/images/hero_final_unzoomed.png"
                compact
            />

            <section className={`section ${styles.faq}`}>
                <div className="container container--narrow">
                    <div className={styles.faqList}>
                        {faqItems.map((item, index) => (
                            <div
                                key={index}
                                className={`${styles.faqItem} ${openIndex === index ? styles.open : ''}`}
                            >
                                <button
                                    className={styles.faqQuestion}
                                    onClick={() => toggleItem(index)}
                                    aria-expanded={openIndex === index}
                                >
                                    <span>{item.question}</span>
                                    <span className={styles.faqIcon}>
                                        {openIndex === index ? '−' : '+'}
                                    </span>
                                </button>
                                <div className={styles.faqAnswer}>
                                    <p>{item.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={styles.moreQuestions}>
                        <h3>Vous avez d&apos;autres questions ?</h3>
                        <p>Notre équipe est à votre disposition pour vous répondre.</p>
                        <a href="/contact" className="btn btn--primary">
                            Nous contacter
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

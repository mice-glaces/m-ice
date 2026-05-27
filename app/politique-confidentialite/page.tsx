import PageHero from '@/components/PageHero'
import styles from './page.module.css'

export default function PolitiqueConfidentialitePage() {
    return (
        <>
            <PageHero
                title="Politique de Confidentialité"
                compact
            />

            <section className={`section ${styles.legal}`}>
                <div className="container container--narrow">
                    <article className={styles.content}>
                        <h2>Introduction</h2>
                        <p>
                            Chez <strong>M&apos;Ice</strong>, le respect de votre vie privée est une priorité absolue. Cette politique de confidentialité vous informe sur la manière dont nous collectons, utilisons et protégeons vos données personnelles lors de votre visite sur notre site internet.
                        </p>

                        <h2>Responsable du traitement des données</h2>
                        <p>
                            Les données personnelles collectées sur ce site sont traitées sous la responsabilité de l&apos;entreprise individuelle M&apos;Ice, dont l&apos;atelier principal est situé à La Garenne, 05260 Saint-Jean-Saint-Nicolas, France.
                        </p>

                        <h2>Données collectées et finalités</h2>
                        <p>
                            Nous limitons la collecte des données personnelles au strict nécessaire :
                        </p>
                        <ul>
                            <li>
                                <strong>Formulaire de contact :</strong> Lorsque vous remplissez notre formulaire, nous recueillons votre prénom, nom, adresse e-mail, établissement (pour les professionnels) et le contenu de votre message. Ces informations sont uniquement utilisées pour répondre à votre demande et assurer le suivi commercial.
                            </li>
                            <li>
                                <strong>Données de navigation (Cookies) :</strong> Ce site n&apos;utilise aucun cookie de traçage publicitaire, de ciblage ou de réseaux sociaux. Nous utilisons uniquement des cookies techniques et locaux pour mémoriser vos préférences de navigation (comme le glacier sélectionné et votre langue de préférence) afin d&apos;optimiser votre expérience utilisateur.
                            </li>
                        </ul>

                        <h2>Partage et transfert des données</h2>
                        <p>
                            M&apos;Ice s&apos;engage à ne jamais vendre, louer, céder ou partager vos données personnelles avec des tiers à des fins commerciales. Vos données restent exclusivement destinées à un usage interne pour le traitement de vos demandes.
                        </p>

                        <h2>Durée de conservation des données</h2>
                        <p>
                            Les données personnelles collectées via le formulaire de contact sont conservées pour une durée maximale de 3 ans à compter de notre dernier échange, ou supprimées immédiatement sur simple demande de votre part.
                        </p>

                        <h2>Sécurité de vos données</h2>
                        <p>
                            Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, modification, divulgation ou destruction. Notre site utilise notamment le protocole de chiffrement SSL (HTTPS) pour sécuriser tous les flux de données.
                        </p>

                        <h2>Vos droits (RGPD)</h2>
                        <p>
                            Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez des droits suivants sur vos données personnelles :
                        </p>
                        <ul>
                            <li>Droit d&apos;accès à vos données</li>
                            <li>Droit de rectification de vos données si elles sont inexactes</li>
                            <li>Droit d&apos;effacement de vos données (« droit à l&apos;oubli »)</li>
                            <li>Droit à la limitation ou à l&apos;opposition au traitement de vos données</li>
                        </ul>
                        <p>
                            Pour exercer l&apos;un de ces droits, vous pouvez nous contacter à tout moment :
                        </p>
                        <p>
                            - Par e-mail : <strong>miceglaces@gmail.com</strong><br />
                            - Par courrier : <strong>M&apos;Ice — La Garenne, 05260 Saint-Jean-Saint-Nicolas, France</strong>
                        </p>
                    </article>
                </div>
            </section>
        </>
    )
}

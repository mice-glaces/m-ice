import PageHero from '@/components/PageHero'
import styles from './page.module.css'

export default function MentionsLegalesPage() {
    return (
        <>
            <PageHero
                title="Mentions Légales"
                compact
            />

            <section className={`section ${styles.legal}`}>
                <div className="container container--narrow">
                    <article className={styles.content}>
                        <h2>Éditeur du site</h2>
                        <p>
                            <strong>M&apos;Ice - Glacier Artisanal</strong><br />
                            La Garenne<br />
                            Saint-Jean-Saint-Nicolas<br />
                            05260, Hautes-Alpes, France
                        </p>
                        <p>
                            Téléphone : 04 00 00 00 00<br />
                            Email : contact@mice-glacier.fr
                        </p>
                        <p>
                            SIRET : XXX XXX XXX XXXXX<br />
                            RCS : Gap
                        </p>

                        <h2>Directeur de la publication</h2>
                        <p>[Nom du directeur de publication]</p>

                        <h2>Hébergement</h2>
                        <p>
                            Ce site est hébergé par :<br />
                            <strong>GitHub, Inc.</strong><br />
                            88 Colin P Kelly Jr St<br />
                            San Francisco, CA 94107<br />
                            United States
                        </p>

                        <h2>Propriété intellectuelle</h2>
                        <p>
                            L&apos;ensemble de ce site relève de la législation française et internationale
                            sur le droit d&apos;auteur et la propriété intellectuelle. Tous les droits de
                            reproduction sont réservés, y compris pour les documents téléchargeables
                            et les représentations iconographiques et photographiques.
                        </p>
                        <p>
                            La reproduction de tout ou partie de ce site sur un support électronique
                            quel qu&apos;il soit est formellement interdite sauf autorisation expresse
                            du directeur de la publication.
                        </p>

                        <h2>Protection des données personnelles</h2>
                        <p>
                            Conformément au Règlement Général sur la Protection des Données (RGPD)
                            et à la loi Informatique et Libertés, vous disposez d&apos;un droit d&apos;accès,
                            de rectification, de suppression et d&apos;opposition aux données vous concernant.
                        </p>
                        <p>
                            Les informations collectées via le formulaire de contact sont destinées
                            exclusivement à M&apos;Ice et ne seront en aucun cas cédées à des tiers.
                            Elles sont conservées pour la durée nécessaire au traitement de votre
                            demande et dans le respect de la réglementation en vigueur.
                        </p>
                        <p>
                            Pour exercer vos droits, vous pouvez nous contacter par email à
                            contact@mice-glacier.fr ou par courrier postal à l&apos;adresse indiquée ci-dessus.
                        </p>

                        <h2>Cookies</h2>
                        <p>
                            Ce site n&apos;utilise pas de cookies de traçage publicitaire.
                            Seuls des cookies techniques essentiels au fonctionnement du site
                            peuvent être utilisés.
                        </p>

                        <h2>Crédits</h2>
                        <p>
                            Conception et développement : [Votre nom/agence]<br />
                            Photographies : [Crédit photos]
                        </p>

                        <h2>Limitation de responsabilité</h2>
                        <p>
                            Les informations contenues sur ce site sont aussi précises que possible
                            et le site est périodiquement remis à jour, mais peut toutefois contenir
                            des inexactitudes, des omissions ou des lacunes.
                        </p>
                        <p>
                            M&apos;Ice ne pourra être tenu responsable des dommages directs et indirects
                            causés au matériel de l&apos;utilisateur, lors de l&apos;accès au site, résultant
                            de l&apos;utilisation d&apos;un matériel non conforme ou de l&apos;apparition d&apos;un bug
                            ou d&apos;une incompatibilité.
                        </p>
                    </article>
                </div>
            </section>
        </>
    )
}

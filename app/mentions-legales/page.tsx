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
                            Le site internet <strong>M&apos;Ice Glacier Artisanal</strong> est édité par l&apos;entreprise individuelle M&apos;Ice :
                        </p>
                        <p>
                            <strong>M&apos;Ice — Atelier & Laboratoire</strong><br />
                            La Garenne<br />
                            Saint-Jean-Saint-Nicolas (05260), Hautes-Alpes, France<br />
                            Téléphone : 06 59 32 83 60<br />
                            E-mail : miceglaces@gmail.com
                        </p>
                        <p>
                            <strong>M&apos;Ice — Boutique Embrun</strong><br />
                            Place du Général Dosse<br />
                            Embrun (05200), Hautes-Alpes, France<br />
                            Téléphone : 06 60 46 84 59<br />
                            E-mail : mice.embrun@gmail.com
                        </p>
                        <p>
                            <strong>Immatriculation :</strong><br />
                            RCS / Répertoire des Métiers : Gap (Hautes-Alpes)<br />
                            SIRET : [SIRET à renseigner]
                        </p>

                        <h2>Directeur de la publication</h2>
                        <p>
                            <strong>Régis</strong> — Co-fondateur et Maître Glacier chez M&apos;Ice.
                        </p>

                        <h2>Hébergement</h2>
                        <p>
                            Le site est hébergé par la société <strong>Vercel Inc.</strong> :<br />
                            Vercel Inc.<br />
                            340 S Lemon Ave #4133<br />
                            Walnut, CA 91789, États-Unis<br />
                            Site internet : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>https://vercel.com</a>
                        </p>

                        <h2>Propriété intellectuelle</h2>
                        <p>
                            L&apos;ensemble du contenu de ce site (textes, photographies, logos, animations, structure générale) est la propriété exclusive de M&apos;Ice ou fait l&apos;objet d&apos;une autorisation d&apos;utilisation.
                        </p>
                        <p>
                            Toute reproduction, représentation, modification ou adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans l&apos;accord écrit préalable de M&apos;Ice. Toute exploitation non autorisée sera considérée comme constitutive d&apos;une contrefaçon et poursuivie conformément aux dispositions du Code de la Propriété Intellectuelle.
                        </p>

                        <h2>Limitation de responsabilité</h2>
                        <p>
                            M&apos;Ice s&apos;efforce de fournir sur ce site des informations aussi précises que possible. Toutefois, les informations sont données à titre indicatif et ne sauraient dispenser l&apos;utilisateur d&apos;une vérification complémentaire.
                        </p>
                        <p>
                            M&apos;Ice ne pourra être tenu responsable des dommages directs ou indirects causés au matériel de l&apos;utilisateur lors de l&apos;accès au site, ou résultant d&apos;une omission, d&apos;une inexactitude ou d&apos;une mise à jour tardive des informations.
                        </p>
                    </article>
                </div>
            </section>
        </>
    )
}

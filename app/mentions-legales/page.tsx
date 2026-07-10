'use client'

import PageHero from '@/components/PageHero'
import styles from './page.module.css'
import { useTranslation } from '@/context/LanguageContext'

const CONTENT = {
    fr: {
        title: "Mentions Légales",
        sections: [
            {
                title: "Éditeur du site",
                content: (
                    <>
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
                            SIREN : 901 918 763<br />
                            SIRET (siège social) : 901 918 763 00011
                        </p>
                    </>
                )
            },
            {
                title: "Directeur de la publication",
                content: (
                    <p>
                        <strong>Régis</strong> — Co-fondateur et Maître Glacier chez M&apos;Ice.
                    </p>
                )
            },
            {
                title: "Hébergement",
                content: (
                    <p>
                        Le site est hébergé par la société <strong>Vercel Inc.</strong> :<br />
                        Vercel Inc.<br />
                        340 S Lemon Ave #4133<br />
                        Walnut, CA 91789, États-Unis<br />
                        Site internet : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>https://vercel.com</a>
                    </p>
                )
            },
            {
                title: "Propriété intellectuelle",
                content: (
                    <>
                        <p>
                            L&apos;ensemble du contenu de ce site (textes, photographies, logos, animations, structure générale) est la propriété exclusive de M&apos;Ice ou fait l&apos;objet d&apos;une autorisation d&apos;utilisation.
                        </p>
                        <p>
                            Toute reproduction, représentation, modification ou adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans l&apos;accord écrit préalable de M&apos;Ice. Toute exploitation non autorisée sera considérée comme constitutive d&apos;une contrefaçon et poursuivie conformément aux dispositions du Code de la Propriété Intellectuelle.
                        </p>
                    </>
                )
            },
            {
                title: "Limitation de responsabilité",
                content: (
                    <>
                        <p>
                            M&apos;Ice s&apos;efforce de fournir sur ce site des informations aussi précises que possible. Toutefois, les informations sont données à titre indicatif et ne sauraient dispenser l&apos;utilisateur d&apos;une vérification complémentaire.
                        </p>
                        <p>
                            M&apos;Ice ne pourra être tenu responsable des dommages directs ou indirects causés au matériel de l&apos;utilisateur lors de l&apos;accès au site, ou résultant d&apos;une omission, d&apos;une inexactitude ou d&apos;une mise à jour tardive des informations.
                        </p>
                    </>
                )
            }
        ]
    },
    en: {
        title: "Legal Notice",
        sections: [
            {
                title: "Site Publisher",
                content: (
                    <>
                        <p>
                            The website <strong>M&apos;Ice Glacier Artisanal</strong> is published by the sole proprietorship M&apos;Ice:
                        </p>
                        <p>
                            <strong>M&apos;Ice — Workshop & Laboratory</strong><br />
                            La Garenne<br />
                            Saint-Jean-Saint-Nicolas (05260), Hautes-Alpes, France<br />
                            Phone: 06 59 32 83 60<br />
                            E-mail: miceglaces@gmail.com
                        </p>
                        <p>
                            <strong>M&apos;Ice — Embrun Shop</strong><br />
                            Place du Général Dosse<br />
                            Embrun (05200), Hautes-Alpes, France<br />
                            Phone: 06 60 46 84 59<br />
                            E-mail: mice.embrun@gmail.com
                        </p>
                        <p>
                            <strong>Registration:</strong><br />
                            RCS / Directory of Trades: Gap (Hautes-Alpes)<br />
                            SIREN: 901 918 763<br />
                            SIRET (head office): 901 918 763 00011
                        </p>
                    </>
                )
            },
            {
                title: "Publication Director",
                content: (
                    <p>
                        <strong>Régis</strong> — Co-founder and Master Ice Cream Maker at M&apos;Ice.
                    </p>
                )
            },
            {
                title: "Hosting",
                content: (
                    <p>
                        The site is hosted by <strong>Vercel Inc.</strong>:<br />
                        Vercel Inc.<br />
                        340 S Lemon Ave #4133<br />
                        Walnut, CA 91789, USA<br />
                        Website: <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>https://vercel.com</a>
                    </p>
                )
            },
            {
                title: "Intellectual Property",
                content: (
                    <>
                        <p>
                            The entire content of this site (text, photographs, logos, animations, general structure) is the exclusive property of M&apos;Ice or is subject to an authorization of use.
                        </p>
                        <p>
                            Any reproduction, representation, modification or adaptation of all or part of the elements of the site, by any means or process whatsoever, is prohibited without the prior written consent of M&apos;Ice. Any unauthorized use will be considered as constituting an infringement and prosecuted in accordance with the provisions of the Intellectual Property Code.
                        </p>
                    </>
                )
            },
            {
                title: "Limitation of Liability",
                content: (
                    <>
                        <p>
                            M&apos;Ice strives to provide information on this site that is as accurate as possible. However, the information is provided for information purposes only and does not exempt the user from additional verification.
                        </p>
                        <p>
                            M&apos;Ice cannot be held responsible for direct or indirect damage caused to the user&apos;s equipment when accessing the site, or resulting from an omission, inaccuracy or delayed update of the information.
                        </p>
                    </>
                )
            }
        ]
    },
    es: {
        title: "Aviso Legal",
        sections: [
            {
                title: "Editor del sitio",
                content: (
                    <>
                        <p>
                            El sitio web <strong>M&apos;Ice Glacier Artisanal</strong> es editado por la empresa individual M&apos;Ice:
                        </p>
                        <p>
                            <strong>M&apos;Ice — Taller y Laboratorio</strong><br />
                            La Garenne<br />
                            Saint-Jean-Saint-Nicolas (05260), Hautes-Alpes, Francia<br />
                            Teléfono: 06 59 32 83 60<br />
                            E-mail: miceglaces@gmail.com
                        </p>
                        <p>
                            <strong>M&apos;Ice — Tienda Embrun</strong><br />
                            Place du Général Dosse<br />
                            Embrun (05200), Hautes-Alpes, Francia<br />
                            Teléfono: 06 60 46 84 59<br />
                            E-mail: mice.embrun@gmail.com
                        </p>
                        <p>
                            <strong>Registro:</strong><br />
                            RCS / Directorio de Oficios: Gap (Hautes-Alpes)<br />
                            SIREN: 901 918 763<br />
                            SIRET (sede social): 901 918 763 00011
                        </p>
                    </>
                )
            },
            {
                title: "Director de la publicación",
                content: (
                    <p>
                        <strong>Régis</strong> — Cofundador y Maestro Heladero en M&apos;Ice.
                    </p>
                )
            },
            {
                title: "Alojamiento",
                content: (
                    <p>
                        El sitio está alojado por la empresa <strong>Vercel Inc.</strong>:<br />
                        Vercel Inc.<br />
                        340 S Lemon Ave #4133<br />
                        Walnut, CA 91789, Estados Unidos<br />
                        Sitio web: <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>https://vercel.com</a>
                    </p>
                )
            },
            {
                title: "Propiedad Intelectual",
                content: (
                    <>
                        <p>
                            Todo el contenido de este sitio (textos, fotografías, logotipos, animaciones, estructura general) es propiedad exclusiva de M&apos;Ice o está sujeto a una autorización de uso.
                        </p>
                        <p>
                            Cualquier reproducción, representación, modificación o adaptación de la totalidad o parte de los elementos del sitio, independientemente del medio o proceso utilizado, está prohibida sin el consentimiento previo por escrito de M&apos;Ice. Cualquier uso no autorizado se considerará constitutivo de infracción y será perseguido de conformidad con las disposiciones del Código de Propiedad Intelectual.
                        </p>
                    </>
                )
            },
            {
                title: "Limitación de Responsabilidad",
                content: (
                    <>
                        <p>
                            M&apos;Ice se esfuerza por proporcionar información en este sitio que sea lo más precisa posible. Sin embargo, la información se proporciona únicamente a título informativo y no exime al usuario de una verificación adicional.
                        </p>
                        <p>
                            M&apos;Ice no se hace responsable de los daños directos o indirectos causados al equipo del usuario al acceder al sitio, o que resulten de una omisión, inexactitud o actualización tardía de la información.
                        </p>
                    </>
                )
            }
        ]
    },
    it: {
        title: "Note Legali",
        sections: [
            {
                title: "Editore del sito",
                content: (
                    <>
                        <p>
                            Il sito web <strong>M&apos;Ice Glacier Artisanal</strong> è pubblicato dall&apos;impresa individuale M&apos;Ice:
                        </p>
                        <p>
                            <strong>M&apos;Ice — Atelier e Laboratorio</strong><br />
                            La Garenne<br />
                            Saint-Jean-Saint-Nicolas (05260), Hautes-Alpes, Francia<br />
                            Telefono: 06 59 32 83 60<br />
                            E-mail: miceglaces@gmail.com
                        </p>
                        <p>
                            <strong>M&apos;Ice — Boutique Embrun</strong><br />
                            Place du Général Dosse<br />
                            Embrun (05200), Hautes-Alpes, Francia<br />
                            Telefono: 06 60 46 84 59<br />
                            E-mail: mice.embrun@gmail.com
                        </p>
                        <p>
                            <strong>Registrazione:</strong><br />
                            RCS / Registro delle Imprese Artigiane: Gap (Hautes-Alpes)<br />
                            SIREN: 901 918 763<br />
                            SIRET (sede legale): 901 918 763 00011
                        </p>
                    </>
                )
            },
            {
                title: "Direttore della pubblicazione",
                content: (
                    <p>
                        <strong>Régis</strong> — Cofondatore e Maestro Gelataio presso M&apos;Ice.
                    </p>
                )
            },
            {
                title: "Hosting",
                content: (
                    <p>
                        Il sito è ospitato dalla società <strong>Vercel Inc.</strong>:<br />
                        Vercel Inc.<br />
                        340 S Lemon Ave #4133<br />
                        Walnut, CA 91789, Stati Uniti<br />
                        Sito internet: <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>https://vercel.com</a>
                    </p>
                )
            },
            {
                title: "Proprietà Intellettuale",
                content: (
                    <>
                        <p>
                            L&apos;intero contenuto di questo site (testi, fotografie, loghi, animazioni, struttura generale) è di proprietà esclusiva di M&apos;Ice o è oggetto di un&apos;autorizzazione all&apos;uso.
                        </p>
                        <p>
                            Qualsiasi riproduzione, rappresentazione, modifica o adattamento di tutti o parte degli elementi del sito, con qualsiasi mezzo o processo utilizzato, è vietata senza il previo consenso scritto di M&apos;Ice. Qualsiasi utilizzo non autorizzato sarà considerato come costitutivo di una violazione e perseguito in conformità con le disposizioni del Codice della Proprietà Intellettuale.
                        </p>
                    </>
                )
            },
            {
                title: "Limitazione di Responsabilità",
                content: (
                    <>
                        <p>
                            M&apos;Ice si impegna a fornire su questo sito informazioni il più possibile accurate. Tuttavia, le informazioni sono fornite solo a scopo informativo e non esonerano l&apos;utente da verifiche aggiuntive.
                        </p>
                        <p>
                            M&apos;Ice non può essere ritenuta responsabile per danni diretti o indiretti causati alle apparecchiature dell&apos;utente durante l&apos;accesso al sito, o derivanti da omissioni, inesattezze o aggiornamenti tardivi delle informazioni.
                        </p>
                    </>
                )
            }
        ]
    }
}

export default function MentionsLegalesPage() {
    const { locale } = useTranslation()
    const content = CONTENT[locale] || CONTENT.fr

    return (
        <>
            <PageHero
                title={content.title}
                compact
            />

            <section className={`section ${styles.legal}`}>
                <div className="container container--narrow">
                    <article className={styles.content}>
                        {content.sections.map((section, index) => (
                            <div key={index}>
                                <h2>{section.title}</h2>
                                {section.content}
                            </div>
                        ))}
                    </article>
                </div>
            </section>
        </>
    )
}


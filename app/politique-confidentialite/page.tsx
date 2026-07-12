'use client'

import PageHero from '@/components/PageHero'
import styles from './page.module.css'
import { useTranslation } from '@/context/LanguageContext'

const CONTENT = {
    fr: {
        title: "Politique de Confidentialité",
        sections: [
            {
                title: "Introduction",
                content: (
                    <p>
                        Chez <strong>M&apos;Ice</strong>, le respect de votre vie privée est une priorité absolue. Cette politique de confidentialité vous informe sur la manière dont nous collectons, utilisons et protégeons vos données personnelles lors de votre visite sur notre site internet.
                    </p>
                )
            },
            {
                title: "Responsable du traitement des données",
                content: (
                    <p>
                        Les données personnelles collectées sur ce site sont traitées sous la responsabilité de l&apos;entreprise individuelle M&apos;Ice, dont l&apos;atelier principal est situé à La Garenne, 05260 Saint-Jean-Saint-Nicolas, France.
                    </p>
                )
            },
            {
                title: "Données collectées et finalités",
                content: (
                    <>
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
                        <p>
                            La base légale de ce traitement est votre consentement (lorsque vous soumettez le formulaire) ainsi que notre intérêt légitime à vous répondre.
                        </p>
                    </>
                )
            },
            {
                title: "Partage et transfert des données",
                content: (
                    <p>
                        M&apos;Ice s&apos;engage à ne jamais vendre, louer, céder ou partager vos données personnelles avec des tiers à des fins commerciales. Vos données restent exclusivement destinées à un usage interne pour le traitement de vos demandes.
                    </p>
                )
            },
            {
                title: "Durée de conservation des données",
                content: (
                    <p>
                        Les données personnelles collectées via le formulaire de contact sont conservées pour une durée maximale de 3 ans à compter de notre dernier échange, ou supprimées immédiatement sur simple demande de votre part.
                    </p>
                )
            },
            {
                title: "Sécurité de vos données",
                content: (
                    <p>
                        Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, modification, divulgation ou destruction. Notre site utilise notamment le protocole de chiffrement SSL (HTTPS) pour sécuriser tous les flux de données.
                    </p>
                )
            },
            {
                title: "Vos droits (RGPD)",
                content: (
                    <>
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
                        <p>
                            Si vous estimez, après nous avoir contactés, que vos droits « Informatique et Libertés » ne sont pas respectés, vous pouvez adresser une réclamation à la CNIL (<a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">www.cnil.fr</a>).
                        </p>
                    </>
                )
            }
        ]
    },
    en: {
        title: "Privacy Policy",
        sections: [
            {
                title: "Introduction",
                content: (
                    <p>
                        At <strong>M&apos;Ice</strong>, respecting your privacy is an absolute priority. This privacy policy informs you about how we collect, use, and protect your personal data when you visit our website.
                    </p>
                )
            },
            {
                title: "Data Controller",
                content: (
                    <p>
                        The personal data collected on this site are processed under the responsibility of the sole proprietorship M&apos;Ice, whose main workshop is located at La Garenne, 05260 Saint-Jean-Saint-Nicolas, France.
                    </p>
                )
            },
            {
                title: "Data Collected and Purposes",
                content: (
                    <>
                        <p>
                            We limit the collection of personal data to what is strictly necessary:
                        </p>
                        <ul>
                            <li>
                                <strong>Contact Form:</strong> When you fill out our form, we collect your first name, last name, e-mail address, establishment (for professionals), and the content of your message. This information is only used to respond to your request and ensure commercial follow-up.
                            </li>
                            <li>
                                <strong>Navigation Data (Cookies):</strong> This site does not use any advertising tracking, targeting, or social media cookies. We only use technical and local cookies to remember your browsing preferences (such as the selected ice cream parlor and your preferred language) in order to optimize your user experience.
                            </li>
                        </ul>
                        <p>
                            The legal basis for this processing is your consent (when you submit the form) as well as our legitimate interest in responding to you.
                        </p>
                    </>
                )
            },
            {
                title: "Data Sharing and Transfer",
                content: (
                    <p>
                        M&apos;Ice is committed to never selling, renting, transferring or sharing your personal data with third parties for commercial purposes. Your data remains exclusively intended for internal use for processing your requests.
                    </p>
                )
            },
            {
                title: "Data Retention Period",
                content: (
                    <p>
                        The personal data collected via the contact form are kept for a maximum of 3 years from our last exchange, or deleted immediately upon simple request from you.
                    </p>
                )
            },
            {
                title: "Security of Your Data",
                content: (
                    <p>
                        We implement appropriate technical and organizational security measures to protect your data against unauthorized access, modification, disclosure or destruction. Our site notably uses the SSL (HTTPS) encryption protocol to secure all data flows.
                    </p>
                )
            },
            {
                title: "Your Rights (GDPR)",
                content: (
                    <>
                        <p>
                            In accordance with the General Data Protection Regulation (GDPR) and the French Data Protection Act (Loi Informatique et Libertés), you have the following rights over your personal data:
                        </p>
                        <ul>
                            <li>Right of access to your data</li>
                            <li>Right to rectify your data if they are inaccurate</li>
                            <li>Right to erase your data (&quot;right to be forgotten&quot;)</li>
                            <li>Right to restrict or oppose the processing of your data</li>
                        </ul>
                        <p>
                            To exercise any of these rights, you can contact us at any time:
                        </p>
                        <p>
                            - By e-mail: <strong>miceglaces@gmail.com</strong><br />
                            - By mail: <strong>M&apos;Ice — La Garenne, 05260 Saint-Jean-Saint-Nicolas, France</strong>
                        </p>
                        <p>
                            If you believe, after contacting us, that your data protection rights have not been respected, you can file a complaint with the CNIL (<a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">www.cnil.fr</a>), the French data protection authority.
                        </p>
                    </>
                )
            }
        ]
    },
    es: {
        title: "Política de Privacidad",
        sections: [
            {
                title: "Introducción",
                content: (
                    <p>
                        En <strong>M&apos;Ice</strong>, el respeto a su privacidad es una prioridad absoluta. Esta política de privacidad le informa sobre cómo recopilamos, utilizamos y protegemos sus datos personales cuando visita nuestro sitio web.
                    </p>
                )
            },
            {
                title: "Responsable del Tratamiento de Datos",
                content: (
                    <p>
                        Los datos personales recopilados en este sitio se procesan bajo la responsabilidad de la empresa individual M&apos;Ice, cuyo taller principal se encuentra en La Garenne, 05260 Saint-Jean-Saint-Nicolas, Francia.
                    </p>
                )
            },
            {
                title: "Datos Recopilados y Finalidades",
                content: (
                    <>
                        <p>
                            Limitamos la recopilación de datos personales a lo estrictamente necesario:
                        </p>
                        <ul>
                            <li>
                                <strong>Formulario de Contacto:</strong> Cuando completa nuestro formulario, recopilamos su nombre, apellido, dirección de correo electrónico, establecimiento (para profesionales) y el contenido de su mensaje. Esta información se utiliza únicamente para responder a su solicitud y asegurar el seguimiento comercial.
                            </li>
                            <li>
                                <strong>Datos de Navegación (Cookies):</strong> Este sitio no utiliza cookies de seguimiento publicitario, de orientación o de redes sociales. Solo utilizamos cookies técnicas y locales para recordar sus preferencias de navegación (como la heladería seleccionada y su idioma de preferencia) a fin de optimizar su experiencia de usuario.
                            </li>
                        </ul>
                        <p>
                            La base jurídica de este tratamiento es su consentimiento (cuando envía el formulario) así como nuestro interés legítimo en responderle.
                        </p>
                    </>
                )
            },
            {
                title: "Intercambio y Transferencia de Datos",
                content: (
                    <p>
                        M&apos;Ice se compromete a no vender, alquilar, ceder ni compartir nunca sus datos personales con terceros con fines comerciales. Sus datos quedan destinados exclusivamente al uso interno para el procesamiento de sus solicitudes.
                    </p>
                )
            },
            {
                title: "Período de Conservación de los Datos",
                content: (
                    <p>
                        Los datos personales recopilados a través del formulario de contacto se conservan durante un período máximo de 3 años a partir de nuestro último contacto, o se eliminan de inmediato previa solicitud de su parte.
                    </p>
                )
            },
            {
                title: "Seguridad de sus Datos",
                content: (
                    <p>
                        Implementamos las medidas de seguridad técnicas y organizativas adecuadas para proteger sus datos contra el acceso no autorizado, la modificación, la divulgación o la destrucción. Nuestro sitio utiliza en particular el protocolo de cifrado SSL (HTTPS) para proteger todos los flujos de datos.
                    </p>
                )
            },
            {
                title: "Sus Derechos (RGPD)",
                content: (
                    <>
                        <p>
                            De conformidad con el Reglamento General de Protección de Datos (RGPD) y la legislación aplicable, usted dispone de los siguientes derechos sobre sus datos personales:
                        </p>
                        <ul>
                            <li>Derecho de acceso a sus datos</li>
                            <li>Derecho de rectificación de sus datos si son inexactos</li>
                            <li>Derecho de supresión de sus datos (&quot;derecho al olvido&quot;)</li>
                            <li>Derecho a la limitación u oposición al tratamiento de sus datos</li>
                        </ul>
                        <p>
                            Para ejercer cualquiera de estos derechos, puede ponerse en contacto con nosotros en cualquier momento:
                        </p>
                        <p>
                            - Por correo electrónico: <strong>miceglaces@gmail.com</strong><br />
                            - Por correo postal: <strong>M&apos;Ice — La Garenne, 05260 Saint-Jean-Saint-Nicolas, Francia</strong>
                        </p>
                        <p>
                            Si considera, tras habernos contactado, que sus derechos de protección de datos no han sido respetados, puede presentar una reclamación ante la CNIL (<a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">www.cnil.fr</a>), la autoridad francesa de protección de datos.
                        </p>
                    </>
                )
            }
        ]
    },
    it: {
        title: "Politica sulla Privacy",
        sections: [
            {
                title: "Introduzione",
                content: (
                    <p>
                        Presso <strong>M&apos;Ice</strong>, il rispetto della vostra privacy è una priorità assoluta. Questa politica sulla privacy vi informa su come raccogliamo, utilizziamo e proteggiamo i vostri dati personali quando visitate il nostro sito web.
                    </p>
                )
            },
            {
                title: "Titolare del Trattamento dei Dati",
                content: (
                    <p>
                        I dati personali raccolti su questo sito sono trattati sotto la responsabilità dell&apos;impresa individuale M&apos;Ice, il cui laboratorio principale si trova a La Garenne, 05260 Saint-Jean-Saint-Nicolas, Francia.
                    </p>
                )
            },
            {
                title: "Dati Raccolti e Finalità",
                content: (
                    <>
                        <p>
                            Limitiamo la raccolta dei dati personali allo stretto necessario:
                        </p>
                        <ul>
                            <li>
                                <strong>Modulo di Contatto:</strong> Quando compili il nostro modulo, raccogliamo il tuo nome, cognome, indirizzo e-mail, istituto (per i professionisti) e il contenuto del tuo messaggio. Queste informazioni vengono utilizzate esclusivamente per rispondere alla tua richiesta e garantire il seguito commerciale.
                            </li>
                            <li>
                                <strong>Dati di Navigazione (Cookie):</strong> Questo sito non utilizza alcun cookie di tracciamento pubblicitario, di targeting o di social network. Utilizziamo solo cookie tecnici e locali per memorizzare le tue preferenze di navigazione (come la gelateria selezionata e la lingua preferita) per ottimizzare la tua esperienza utente.
                            </li>
                        </ul>
                        <p>
                            La base giuridica di questo trattamento è il tuo consenso (quando invii il modulo) nonché il nostro legittimo interesse a risponderti.
                        </p>
                    </>
                )
            },
            {
                title: "Condivisione e Trasferimento dei Dati",
                content: (
                    <p>
                        M&apos;Ice si impegna a non vendere, noleggiare, cedere o condividere mai i tuoi dati personali con terzi a fini commerciali. I tuoi dati rimangono esclusivamente destinati ad un uso interno per l&apos;elaborazione delle tue richieste.
                    </p>
                )
            },
            {
                title: "Periodo di Conservazione dei Dati",
                content: (
                    <p>
                        I dati personali raccolti tramite il modulo di contatto vengono conservati per un periodo massimo di 3 anni a partire dall&apos;ultimo scambio, o cancellati immediatamente su tua semplice richiesta.
                    </p>
                )
            },
            {
                title: "Sicurezza dei tuoi Dati",
                content: (
                    <p>
                        Implementiamo misure di sicurezza tecniche e organizzative adeguate per proteggere i tuoi dati da accessi non autorizzati, modifiche, divulgazione o distruzione. Il nostro sito utilizza in particolare il protocollo di crittografia SSL (HTTPS) per proteggere tutti i flussi di dati.
                    </p>
                )
            },
            {
                title: "I tuoi Diritti (RGPD)",
                content: (
                    <>
                        <p>
                            In conformità con il Regolamento Generale sulla Protezione dei Dati (RGPD), disponi dei seguenti diritti sui tuoi dati personali:
                        </p>
                        <ul>
                            <li>Diritto di accesso ai tuoi dati</li>
                            <li>Diritto di rettifica dei tuoi dati se inesatti</li>
                            <li>Diritto alla cancellazione dei tuoi dati (&quot;diritto all&apos;oblio&quot;)</li>
                            <li>Diritto di limitazione o opposizione al trattamento dei tuoi dati</li>
                        </ul>
                        <p>
                            Per esercitare uno di questi diritti, puoi contattarci in qualsiasi momento:
                        </p>
                        <p>
                            - Via e-mail: <strong>miceglaces@gmail.com</strong><br />
                            - Per posta: <strong>M&apos;Ice — La Garenne, 05260 Saint-Jean-Saint-Nicolas, Francia</strong>
                        </p>
                        <p>
                            Se ritieni, dopo averci contattato, che i tuoi diritti in materia di protezione dei dati non siano stati rispettati, puoi presentare un reclamo alla CNIL (<a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">www.cnil.fr</a>), l&apos;autorità francese per la protezione dei dati.
                        </p>
                    </>
                )
            }
        ]
    }
}

export default function PolitiqueConfidentialitePage() {
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


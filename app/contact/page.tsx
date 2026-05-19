'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Send, Check } from 'lucide-react'
import PageHero from '@/components/PageHero'
import styles from './page.module.css'

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
}

type FormType = 'particulier' | 'professionnel'

export default function ContactPage() {
    const [formType, setFormType] = useState<FormType>('particulier')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500))

        setIsSubmitting(false)
        setIsSubmitted(true)
    }

    return (
        <>
            <PageHero
                title="Contact"
                subtitle="Une Question ? Un Projet ?"
                backgroundImage="/images/hero_final_unzoomed.png"
                compact
            />

            <section className={`section ${styles.whiteBg}`}>
                <div className="container">
                    <div className={styles.contactGrid}>
                        {/* Form */}
                        <motion.div
                            className={styles.formWrapper}
                            {...fadeInUp}
                        >
                            {/* Form Type Selector */}
                            <div className={styles.formTypeSelector}>
                                <button
                                    type="button"
                                    className={`${styles.formTypeBtn} ${formType === 'particulier' ? styles.active : ''}`}
                                    onClick={() => setFormType('particulier')}
                                >
                                    Particulier
                                </button>
                                <button
                                    type="button"
                                    className={`${styles.formTypeBtn} ${formType === 'professionnel' ? styles.active : ''}`}
                                    onClick={() => setFormType('professionnel')}
                                >
                                    Professionnel
                                </button>
                            </div>

                            {isSubmitted ? (
                                <div className={styles.successMessage}>
                                    <div className={styles.successIcon}>
                                        <Check size={40} />
                                    </div>
                                    <h3>Message Envoyé</h3>
                                    <p>Votre demande a été transmise avec succès. Nos équipes reviendront vers vous sous 24h.</p>
                                    <button
                                        className="btn btn--outline-light"
                                        onClick={() => setIsSubmitted(false)}
                                    >
                                        Envoyer un autre message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className={styles.form}>
                                    <div className={styles.formRow}>
                                        <div className={styles.formGroup}>
                                            <label htmlFor="firstName" className={styles.label}>Prénom *</label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                name="firstName"
                                                required
                                                className={styles.input}
                                                placeholder="Jean"
                                            />
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label htmlFor="lastName" className={styles.label}>Nom *</label>
                                            <input
                                                type="text"
                                                id="lastName"
                                                name="lastName"
                                                required
                                                className={styles.input}
                                                placeholder="Dupont"
                                            />
                                        </div>
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label htmlFor="email" className={styles.label}>Email professionnel *</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            className={styles.input}
                                            placeholder="jean@exemple.fr"
                                        />
                                    </div>

                                    {formType === 'professionnel' && (
                                        <motion.div
                                            className={styles.formRow}
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                        >
                                            <div className={styles.formGroup}>
                                                <label htmlFor="company" className={styles.label}>Établissement *</label>
                                                <input
                                                    type="text"
                                                    id="company"
                                                    name="company"
                                                    required
                                                    className={styles.input}
                                                />
                                            </div>
                                            <div className={styles.formGroup}>
                                                <label htmlFor="activity" className={styles.label}>Secteur</label>
                                                <select id="activity" name="activity" className={styles.select}>
                                                    <option value="">Sélectionner...</option>
                                                    <option value="restaurant">Restaurant</option>
                                                    <option value="hotel">Hôtel</option>
                                                    <option value="traiteur">Traiteur</option>
                                                    <option value="epicerie">Épicerie fine</option>
                                                    <option value="autre">Autre</option>
                                                </select>
                                            </div>
                                        </motion.div>
                                    )}

                                    <div className={styles.formGroup}>
                                        <label htmlFor="subject" className={styles.label}>Objet de votre demande *</label>
                                        <select id="subject" name="subject" required className={styles.select}>
                                            <option value="">Modifier l&apos;objet...</option>
                                            {formType === 'particulier' ? (
                                                <>
                                                    <option value="info">Renseignement général</option>
                                                    <option value="gateau">Commande spéciale / Gâteau</option>
                                                    <option value="allergen">Informations allergènes</option>
                                                    <option value="autre">Autre demande</option>
                                                </>
                                            ) : (
                                                <>
                                                    <option value="devis">Demande de cotation</option>
                                                    <option value="partenariat">Distribution / Partenariat</option>
                                                    <option value="info">Renseignement pro</option>
                                                </>
                                            )}
                                        </select>
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label htmlFor="message" className={styles.label}>Votre Message *</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={6}
                                            required
                                            className={styles.textarea}
                                            placeholder={formType === 'particulier'
                                                ? "Comment pouvons-nous vous aider ?"
                                                : "Décrivez vos besoins et votre volume annuel prévisionnel..."}
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className={`btn btn--accent btn--lg ${styles.submitBtn}`}
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? 'Transmission...' : 'Envoyer la demande'}
                                        {!isSubmitting && <Send size={18} className="ml-2" />}
                                    </button>
                                </form>
                            )}
                        </motion.div>

                        {/* Sidebar */}
                        <motion.aside
                            className={styles.sidebar}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className={styles.sidebarCard}>
                                <h3 className={styles.sidebarTitle}>Contacts</h3>
                                <div className={styles.sidebarItem}>
                                    <span className={styles.sidebarLabel}>La Garenne</span>
                                    <a href="tel:+33659328360" className={styles.sidebarLink}>
                                        06 59 32 83 60
                                    </a>
                                </div>
                                <div className={styles.sidebarItem}>
                                    <span className={styles.sidebarLabel}>Embrun</span>
                                    <a href="tel:+33660468459" className={styles.sidebarLink}>
                                        06 60 46 84 59
                                    </a>
                                </div>
                                <div className={styles.sidebarItem}>
                                    <span className={styles.sidebarLabel}>Email La Garenne</span>
                                    <a href="mailto:MICEGLACES@GMAIL.COM" className={styles.sidebarLink}>
                                        MICEGLACES@GMAIL.COM
                                    </a>
                                </div>
                                <div className={styles.sidebarItem}>
                                    <span className={styles.sidebarLabel}>Email Embrun</span>
                                    <a href="mailto:MICE.EMBRUN@GMAIL.COM" className={styles.sidebarLink}>
                                        MICE.EMBRUN@GMAIL.COM
                                    </a>
                                </div>
                            </div>

                            <div className={styles.sidebarCard}>
                                <h3 className={styles.sidebarTitle}>Nos Boutiques</h3>
                                <address className={styles.sidebarAddress}>
                                    <p><strong>La Garenne</strong></p>
                                    <p>05260 SAINT-JEAN-SAINT-NICOLAS</p>
                                </address>
                                <address className={styles.sidebarAddress} style={{ marginTop: '1rem' }}>
                                    <p><strong>Embrun</strong></p>
                                    <p>Place du Général Dosse</p>
                                    <p>05200 Embrun</p>
                                </address>
                            </div>

                            <div className={styles.sidebarCard}>
                                <h3 className={styles.sidebarTitle}>Inspiration</h3>
                                <a
                                    href="https://instagram.com/mice_glacier"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.socialLink}
                                >
                                    Suivez-nous sur Instagram
                                </a>
                            </div>
                        </motion.aside>
                    </div>
                </div>
            </section>
        </>
    )
}

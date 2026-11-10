'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Send, Check } from 'lucide-react'
import PageHero from '@/components/PageHero'
import styles from './page.module.css'
import { LOCATIONS, useLocation } from '@/context/LocationContext'
import { useTranslation } from '@/context/LanguageContext'

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
}

type FormType = 'particulier' | 'professionnel'
type Status = 'idle' | 'sending' | 'delivered' | 'mailto' | 'error'

// Web3Forms access keys, one per shop so each message lands in that shop's inbox.
// A key is tied to one receiving address and is safe to expose in the browser.
// Without a key for the chosen shop, the form falls back to opening the visitor's email app.
const WEB3FORMS_KEYS: Record<string, string | undefined> = {
    'saint-jean': process.env.NEXT_PUBLIC_WEB3FORMS_KEY_SAINT_JEAN,
    'embrun': process.env.NEXT_PUBLIC_WEB3FORMS_KEY_EMBRUN,
}

export default function ContactPage() {
    const [formType, setFormType] = useState<FormType>('particulier')
    const [status, setStatus] = useState<Status>('idle')
    const [fallback, setFallback] = useState({ href: '', address: '' })
    const { t } = useTranslation()
    const { currentLocation } = useLocation()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (status === 'sending') return
        const form = e.currentTarget
        const data = new FormData(form)
        const get = (key: string) => String(data.get(key) ?? '').trim()
        const shop = LOCATIONS[get('shop')] ?? currentLocation
        const subjectSelect = form.elements.namedItem('subject') as HTMLSelectElement
        const subjectLabel = subjectSelect.selectedOptions[0]?.text ?? get('subject')
        const activitySelect = form.elements.namedItem('activity') as HTMLSelectElement | null
        const activityLabel = activitySelect?.value ? activitySelect.selectedOptions[0]?.text : ''
        const name = `${get('firstName')} ${get('lastName')}`
        const subject = `[Site M'Ice] ${subjectLabel} — ${shop.shortName}`

        const lines = [get('message'), '', '—', name, get('email')]
        if (formType === 'professionnel') {
            lines.push(`${get('company')}${activityLabel ? ` (${activityLabel})` : ''}`)
        }
        const mailto = `mailto:${shop.email.toLowerCase()}`
            + `?subject=${encodeURIComponent(subject)}`
            + `&body=${encodeURIComponent(lines.join('\n'))}`

        const accessKey = WEB3FORMS_KEYS[shop.id]
        if (!accessKey) {
            window.location.href = mailto
            setStatus('mailto')
            return
        }

        // Honeypot: real visitors never fill this hidden field
        if (get('botcheck')) {
            setStatus('delivered')
            return
        }

        setStatus('sending')
        try {
            const res = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify({
                    access_key: accessKey,
                    subject,
                    from_name: `Site M'Ice — ${name}`,
                    replyto: get('email'),
                    'Nom': name,
                    'Email': get('email'),
                    'Type': formType === 'professionnel' ? 'Professionnel' : 'Particulier',
                    ...(formType === 'professionnel' && {
                        'Entreprise': get('company'),
                        'Secteur': activityLabel || '—',
                    }),
                    'Glacier': shop.name,
                    'Objet': subjectLabel,
                    'Message': get('message'),
                }),
            })
            const json = await res.json().catch(() => null)
            if (!res.ok || !json?.success) throw new Error(json?.message ?? `HTTP ${res.status}`)
            form.reset()
            setStatus('delivered')
        } catch {
            setFallback({ href: mailto, address: shop.email.toLowerCase() })
            setStatus('error')
        }
    }

    const isDone = status === 'delivered' || status === 'mailto'

    return (
        <>
            <PageHero
                title={t('contact.title')}
                subtitle={t('contact.subtitle')}
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
                                    aria-pressed={formType === 'particulier'}
                                    onClick={() => setFormType('particulier')}
                                >
                                    {t('contact.individual')}
                                </button>
                                <button
                                    type="button"
                                    className={`${styles.formTypeBtn} ${formType === 'professionnel' ? styles.active : ''}`}
                                    aria-pressed={formType === 'professionnel'}
                                    onClick={() => setFormType('professionnel')}
                                >
                                    {t('contact.professional')}
                                </button>
                            </div>

                            {isDone ? (
                                <div className={styles.successMessage} role="status">
                                    <div className={styles.successIcon}>
                                        <Check size={40} />
                                    </div>
                                    <h3>{t(status === 'delivered' ? 'contact.delivered' : 'contact.sent')}</h3>
                                    <p>{t(status === 'delivered' ? 'contact.deliveredMessage' : 'contact.sentMessage')}</p>
                                    <button
                                        className="btn btn--outline-dark"
                                        onClick={() => setStatus('idle')}
                                    >
                                        {t('contact.sendAnother')}
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className={styles.form}>
                                    <div className={styles.formRow}>
                                        <div className={styles.formGroup}>
                                            <label htmlFor="firstName" className={styles.label}>{t('contact.firstName')} *</label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                name="firstName"
                                                required
                                                className={styles.input}
                                            />
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label htmlFor="lastName" className={styles.label}>{t('contact.lastName')} *</label>
                                            <input
                                                type="text"
                                                id="lastName"
                                                name="lastName"
                                                required
                                                className={styles.input}
                                            />
                                        </div>
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label htmlFor="email" className={styles.label}>{t('contact.email')} *</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            className={styles.input}
                                        />
                                    </div>

                                    {formType === 'professionnel' && (
                                        <motion.div
                                            className={styles.formRow}
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                        >
                                            <div className={styles.formGroup}>
                                                <label htmlFor="company" className={styles.label}>{t('contact.company')} *</label>
                                                <input
                                                    type="text"
                                                    id="company"
                                                    name="company"
                                                    required
                                                    className={styles.input}
                                                />
                                            </div>
                                            <div className={styles.formGroup}>
                                                <label htmlFor="activity" className={styles.label}>{t('contact.sector')}</label>
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
                                        <label htmlFor="shop" className={styles.label}>{t('contact.shop')} *</label>
                                        <select id="shop" name="shop" required defaultValue={currentLocation.id} key={currentLocation.id} className={styles.select}>
                                            {Object.values(LOCATIONS).map((loc) => (
                                                <option key={loc.id} value={loc.id}>{loc.name}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label htmlFor="subject" className={styles.label}>{t('contact.subject')} *</label>
                                        <select id="subject" name="subject" required className={styles.select}>
                                            <option value="">...</option>
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
                                        <label htmlFor="message" className={styles.label}>{t('contact.message')} *</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={6}
                                            required
                                            className={styles.textarea}
                                        />
                                    </div>

                                    <input
                                        type="checkbox"
                                        name="botcheck"
                                        tabIndex={-1}
                                        autoComplete="off"
                                        aria-hidden="true"
                                        className={styles.honeypot}
                                    />

                                    {status === 'error' && (
                                        <p className={styles.formError} role="alert">
                                            {t('contact.error')}{' '}
                                            <a href={fallback.href}>{fallback.address}</a>
                                        </p>
                                    )}

                                    <button
                                        type="submit"
                                        className={`btn btn--accent btn--lg ${styles.submitBtn}`}
                                        disabled={status === 'sending'}
                                        aria-busy={status === 'sending'}
                                    >
                                        {t(status === 'sending' ? 'contact.sending' : 'contact.send')}
                                        <Send size={18} className="ml-2" />
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
                                {Object.values(LOCATIONS).map((loc) => (
                                    <div key={loc.id}>
                                        <div className={styles.sidebarItem}>
                                            <span className={styles.sidebarLabel}>{loc.shortName}</span>
                                            <a href={`tel:+33${loc.phone.replace(/\s+/g, '').slice(1)}`} className={styles.sidebarLink}>
                                                {loc.phone}
                                            </a>
                                        </div>
                                        <div className={styles.sidebarItem}>
                                            <span className={styles.sidebarLabel}>Email {loc.shortName}</span>
                                            <a href={`mailto:${loc.email.toLowerCase()}`} className={styles.sidebarLink}>
                                                {loc.email.toLowerCase()}
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className={styles.sidebarCard}>
                                <h3 className={styles.sidebarTitle}>Nos Boutiques</h3>
                                {Object.values(LOCATIONS).map((loc) => (
                                    <address key={loc.id} className={styles.sidebarAddress} style={{ marginTop: '1rem' }}>
                                        <p><strong>{loc.name}</strong></p>
                                        <p>{loc.address}</p>
                                        <p>{loc.postalCode} {loc.city}</p>
                                    </address>
                                ))}
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

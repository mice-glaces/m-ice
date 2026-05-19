import styles from './PageHero.module.css'

interface PageHeroProps {
    title: string
    subtitle?: string
    backgroundImage?: string
    overlay?: boolean
    centered?: boolean
    compact?: boolean
}

export default function PageHero({
    title,
    subtitle,
    backgroundImage,
    overlay = true,
    centered = true,
    compact = false,
}: PageHeroProps) {
    return (
        <section
            className={`${styles.hero} ${compact ? styles.compact : ''}`}
            style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
        >
            {overlay && <div className={styles.overlay} />}
            <div className={`${styles.content} ${centered ? styles.centered : ''}`}>
                <h1 className={styles.title}>{title}</h1>
                {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
                <div className={styles.divider} />
            </div>
        </section>
    )
}

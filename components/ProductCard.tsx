import Image from 'next/image'
import styles from './ProductCard.module.css'

interface ProductCardProps {
    name: string
    description?: string
    price?: string
    image: string
    category?: string
    isSeasonal?: boolean
    isNew?: boolean
}

export default function ProductCard({
    name,
    description,
    price,
    image,
    category,
    isSeasonal = false,
    isNew = false,
}: ProductCardProps) {
    return (
        <article className={styles.card}>
            <div className={styles.imageWrapper}>
                <Image
                    src={image}
                    alt={name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={styles.image}
                />
                {(isSeasonal || isNew) && (
                    <div className={styles.badges}>
                        {isSeasonal && <span className={styles.badgeSeason}>Saison</span>}
                        {isNew && <span className={styles.badgeNew}>Nouveau</span>}
                    </div>
                )}
            </div>
            <div className={styles.content}>
                {category && <span className={styles.category}>{category}</span>}
                <h3 className={styles.name}>{name}</h3>
                {description && <p className={styles.description}>{description}</p>}
            </div>
        </article>
    )
}

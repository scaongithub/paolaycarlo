import { useTranslations } from 'next-intl';
import styles from './Gallery.module.css';

export default function Gallery() {
    const t = useTranslations('gallery');

    // Placeholder items - replace with actual photos
    const placeholders = Array(6).fill(null);

    return (
        <section id="gallery" className={styles.gallery}>
            <div className="container">
                <div className={styles.galleryHeader}>
                    <h2 className={styles.galleryTitle}>{t('title')}</h2>
                </div>

                <div className={styles.galleryGrid}>
                    {placeholders.map((_, index) => (
                        <div key={index} className={styles.galleryItem}>
                            <div className={styles.galleryPlaceholder}>
                                <span className={styles.galleryIcon}>📷</span>
                                <span className={styles.galleryLabel}>Photo {index + 1}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

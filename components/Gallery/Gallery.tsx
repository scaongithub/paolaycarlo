'use client';

import { useTranslations } from 'next-intl';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './Gallery.module.css';

export default function Gallery() {
    const t = useTranslations('gallery');
    const { ref, isVisible } = useScrollReveal();

    // Vibrant gradients to replace placeholders
    const gradients = [
        'linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)',
        'linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)',
        'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)',
        'linear-gradient(to right, #8e9eab, #eef2f3)',
        'linear-gradient(to top, #d299c2 0%, #fef9d7 100%)',
        'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)',
    ];

    return (
        <section ref={ref} id="gallery" className={`${styles.gallery} ${isVisible ? 'reveal visible' : 'reveal'}`}>
            <div className="container">
                <div className={styles.galleryHeader}>
                    <h2 className={styles.galleryTitle}>{t('title')}</h2>
                </div>

                <div className={styles.galleryGrid}>
                    {gradients.map((gradient, index) => (
                        <div
                            key={index}
                            className={styles.galleryItem}
                            style={{ background: gradient }}
                        >
                            <div className={styles.galleryPlaceholder}>
                                <span className={styles.galleryIcon}>❤️</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

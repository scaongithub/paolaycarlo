'use client';

import { useRef, useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { COUPLE_IMAGES } from '@/utils/images';
import styles from './Gallery.module.css';

export default function Gallery() {
    const t = useTranslations('gallery');
    const { ref, isVisible } = useScrollReveal();
    const [images, setImages] = useState<string[]>([]);

    useEffect(() => {
        // Shuffle and pick 6 images
        const shuffled = [...COUPLE_IMAGES].sort(() => 0.5 - Math.random());
        setImages(shuffled.slice(0, 6));
    }, []);

    return (
        <section ref={ref} id="gallery" className={`${styles.gallery} ${isVisible ? 'reveal visible' : 'reveal'}`}>
            <div className="container">
                <div className={styles.galleryHeader}>
                    <h2 className={styles.galleryTitle}>{t('title')}</h2>
                </div>

                <div className={styles.galleryGrid}>
                    {images.map((imgSrc, index) => (
                        <div
                            key={index}
                            className={styles.galleryItem}
                            style={{ backgroundImage: `url("${imgSrc}")`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                        >
                            {/* <div className={styles.galleryPlaceholder}>
                                <span className={styles.galleryIcon}>❤️</span>
                            </div> */}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

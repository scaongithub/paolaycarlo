'use client';

import { useTranslations } from 'next-intl';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './Location.module.css';

export default function Location() {
    const t = useTranslations('location');
    const { ref, isVisible } = useScrollReveal();

    return (
        <section ref={ref} id="location" className={`${styles.location} ${isVisible ? 'reveal visible' : 'reveal'}`}>
            <div className="container">
                <div className={styles.locationHeader}>
                    <h2 className={styles.locationTitle}>{t('title')}</h2>
                </div>

                <div className={styles.locationContent}>
                    <div className={styles.locationInfo}>
                        <h3 className={styles.venueName}>{t('venue')}</h3>
                        <p className={styles.venueAddress}>{t('address')}</p>

                        <div className={styles.venueDetails}>
                            <div className={styles.venueItem}>
                                <span className={styles.venueIcon}>⛪</span>
                                <span className={styles.venueText}>{t('ceremony')}</span>
                            </div>
                            <div className={styles.venueItem}>
                                <span className={styles.venueIcon}>🥂</span>
                                <span className={styles.venueText}>{t('reception')}</span>
                            </div>
                        </div>

                        <a href="https://maps.google.com/?q=Hotel+Paradisus+Playa+del+Carmen" target="_blank" className={styles.mapBtn}>
                            Google Maps
                        </a>
                    </div>

                    <div className={styles.mapContainer}>
                        <iframe
                            src="https://maps.google.com/maps?q=Barcelo+Maya+Palace+All+Inclusive&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>

                <div className={styles.videoSection}>
                    <h3 className={styles.videoTitle}>{t('videoTitle')}</h3>
                    <div className={styles.videoContainer}>
                        <iframe
                            src="https://www.youtube.com/embed/_z4YHHH2NbM?si=TQYEclU33Rwc0iC1"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}

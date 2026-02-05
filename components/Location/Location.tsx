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
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.267866380183!2d-87.0699042250278!3d20.66914568089063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4e42fc6c29b6f5%3A0x8e8e3d64c010c9c7!2sParadisus%20Playa%20del%20Carmen!5e0!3m2!1sen!2smx!4v1709669530000!5m2!1sen!2smx"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}

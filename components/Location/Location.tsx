import { useTranslations } from 'next-intl';
import styles from './Location.module.css';

export default function Location() {
    const t = useTranslations('location');

    return (
        <section id="location" className={styles.location}>
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
                                <span>{t('ceremony')}</span>
                            </div>
                            <div className={styles.venueItem}>
                                <span className={styles.venueIcon}>🥂</span>
                                <span>{t('reception')}</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.mapContainer}>
                        <div className={styles.mapPlaceholder}>
                            <span className={styles.mapIcon}>📍</span>
                            <span className={styles.mapText}>Playa del Carmen, México</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

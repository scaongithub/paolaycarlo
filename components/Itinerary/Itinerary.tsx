'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import styles from './Itinerary.module.css';

export default function Itinerary() {
    const t = useTranslations('itinerary');
    const [showFlights, setShowFlights] = useState(false);

    const airports = [
        { icon: '✈️', name: t('cancun'), desc: t('cancunDesc') },
        { icon: '🛬', name: t('tulum'), desc: t('tulumDesc') },
    ];

    const italianCities = [
        { city: t('fromVerona'), route: 'VRN → CUN', icon: '🛫' },
        { city: t('fromMilan'), route: 'MXP → CUN', icon: '🛫' },
        { city: t('fromVenice'), route: 'VCE → CUN', icon: '🛫' },
    ];

    return (
        <section id="itinerary" className={styles.itinerary}>
            <div className="container">
                <div className={styles.itineraryHeader}>
                    <h2 className={styles.itineraryTitle}>{t('title')}</h2>
                    <p className={styles.itinerarySubtitle}>{t('subtitle')}</p>
                </div>

                <div className={styles.airportsGrid}>
                    {airports.map((airport, index) => (
                        <div key={index} className={styles.airportCard}>
                            <div className={styles.airportIcon}>{airport.icon}</div>
                            <h3 className={styles.airportName}>{airport.name}</h3>
                            <p className={styles.airportDesc}>{airport.desc}</p>
                        </div>
                    ))}
                </div>

                <div className={styles.italySection}>
                    <div className={styles.italyHeader}>
                        <div>
                            <h3 className={styles.italyTitle}>
                                <span className={styles.italyFlag}>🇮🇹</span>
                                {t('italian')}
                            </h3>
                            <p className={styles.italySubtitle}>{t('italianSubtitle')}</p>
                        </div>
                        <button
                            className={styles.toggleBtn}
                            onClick={() => setShowFlights(!showFlights)}
                        >
                            {showFlights ? t('hideFlights') : t('showFlights')}
                        </button>
                    </div>

                    <div className={`${styles.flightOptions} ${showFlights ? styles.open : ''}`}>
                        {italianCities.map((flight, index) => (
                            <div key={index} className={styles.flightCard}>
                                <p className={styles.flightCity}>{flight.city}</p>
                                <p className={styles.flightRoute}>{flight.route}</p>
                                <span className={styles.flightIcon}>{flight.icon}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

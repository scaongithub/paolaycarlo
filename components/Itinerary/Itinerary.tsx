'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './Itinerary.module.css';

export default function Itinerary() {
    const t = useTranslations('itinerary');
    const { ref, isVisible } = useScrollReveal();
    const [showFlights, setShowFlights] = useState(false);

    const airports = [
        { icon: '✈️', name: t('cancun'), desc: t('cancunDesc') },
        { icon: '🛬', name: t('tulum'), desc: t('tulumDesc') },
    ];

    const italianCities = [
        { city: t('fromVerona'), route: 'VRN → FRA/MUC → CUN', airline: 'Lufthansa / Air France' },
        { city: t('fromMilan'), route: 'MXP → CUN', airline: 'Neos (Tue)' },
        { city: t('fromBologna'), route: 'BLQ → MAD → CUN', airline: 'Iberia' },
        { city: t('fromVenice'), route: 'VCE → MAD → CUN', airline: 'Iberia' },
    ];

    return (
        <section ref={ref} id="itinerary" className={`${styles.itinerary} ${isVisible ? 'reveal visible' : 'reveal'}`}>
            <div className="container">
                <div className={styles.itineraryHeader}>
                    <h2 className={styles.itineraryTitle}>{t('title')}</h2>
                    <p className={styles.itinerarySubtitle}>{t('subtitle')}</p>
                </div>

                <div className={styles.airportsGrid}>
                    {airports.map((airport, index) => (
                        <div key={index} className={styles.airportCard} style={{ transitionDelay: `${index * 0.1}s` }}>
                            <div className={styles.airportIcon}>{airport.icon}</div>
                            <h3 className={styles.airportName}>{airport.name}</h3>
                            <p className={styles.airportDesc}>{airport.desc}</p>
                        </div>
                    ))}
                </div>

                <div className={styles.italySection}>
                    <div
                        className={`${styles.italyHeader} ${showFlights ? styles.expanded : ''}`}
                        onClick={() => setShowFlights(!showFlights)}
                    >
                        <div>
                            <h3 className={styles.italyTitle}>
                                <span className={styles.italyFlag}>🇮🇹</span>
                                {t('italian')}
                            </h3>
                            <p className={styles.italySubtitle}>{t('italianSubtitle')}</p>
                        </div>
                        <button className={styles.toggleBtn}>
                            {showFlights ? t('hideFlights') : t('showFlights')}
                        </button>
                    </div>

                    <div className={`${styles.flightOptions} ${showFlights ? styles.open : ''}`}>
                        {italianCities.map((flight, index) => (
                            <div key={index} className={styles.flightCard}>
                                <span className={styles.flightIcon}>🛫</span>
                                <div className={styles.flightInfo}>
                                    <p className={styles.flightCity}>{flight.city}</p>
                                    <p className={styles.flightRoute}>{flight.route}</p>
                                    <span className={styles.flightTag}>{flight.airline}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

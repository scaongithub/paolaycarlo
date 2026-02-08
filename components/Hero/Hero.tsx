'use client';

import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';
import { COUPLE_IMAGES } from '@/utils/images';
import CalendarButton from '../CalendarButton/CalendarButton';
import styles from './Hero.module.css';

export default function Hero() {
    const t = useTranslations('hero');
    const [bgImage, setBgImage] = useState('');

    useEffect(() => {
        // Select a random image
        const randomIndex = Math.floor(Math.random() * COUPLE_IMAGES.length);
        setBgImage(COUPLE_IMAGES[randomIndex]);
    }, []);

    const calendarUrl = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Paola+%26+Carlo+Wedding&dates=20260822T170000/20260823T020000&details=Celebra+il+nostro+matrimonio+con+noi!&location=Barcelo+Grand+Maya+Resort,+Mexico";

    return (
        <section className={styles.hero}>
            <div
                className={styles.heroBackground}
                style={{ backgroundImage: bgImage ? `url("${bgImage}")` : undefined }}
            ></div>
            <div className={styles.heroOverlay}></div>
            <div className={styles.heroPattern}></div>

            <div className={styles.heroContent}>
                <p className={styles.heroEyebrow}>{t('subtitle')}</p>

                <h1 className={styles.heroNames}>
                    Paola
                    <span className={styles.heroAmpersand}>&</span>
                    Carlo
                </h1>

                <div className={styles.heroDivider}>
                    <span className={styles.heroOrnament}>✦</span>
                </div>

                <p className={styles.heroDate}>{t('date')}</p>
                <p className={styles.heroLocation}>{t('location')}</p>


            </div>

            <div className={styles.scrollIndicator}>
                <span>Scroll</span>
                <div className={styles.scrollArrow}></div>
            </div>
        </section>
    );
}

'use client';

import { useState, useEffect, useRef } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import CalendarButton from '../CalendarButton/CalendarButton';
import styles from './Countdown.module.css';

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const WEDDING_DATE = new Date('2026-08-22T17:00:00');

export default function Countdown() {
    const t = useTranslations('countdown');
    const locale = useLocale();
    const sectionRef = useRef<HTMLElement>(null);
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [isVisible, setIsVisible] = useState(true); // Start visible to avoid blank state

    useEffect(() => {
        const calculateTimeLeft = (): TimeLeft => {
            const difference = WEDDING_DATE.getTime() - new Date().getTime();

            if (difference <= 0) {
                return { days: 0, hours: 0, minutes: 0, seconds: 0 };
            }

            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / (1000 * 60)) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        };

        setTimeLeft(calculateTimeLeft());

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const timeUnits = [
        { value: timeLeft.days, label: t('days') },
        { value: timeLeft.hours, label: t('hours') },
        { value: timeLeft.minutes, label: t('minutes') },
        { value: timeLeft.seconds, label: t('seconds') },
    ];

    // Use locale-specific Save the Date images
    const getSaveTheDateImage = () => {
        if (locale === 'it') return '/images/save_the_date_ita.jpeg';
        if (locale === 'es') return '/images/save_the_date_esp.png';
        return '/images/save_the_date_esp.png'; // Default to Spanish
    };
    const getSaveTheDateFilename = () => {
        if (locale === 'it') return 'Paola_Carlo_Save_the_Date_IT.jpeg';
        if (locale === 'es') return 'Paola_Carlo_Save_the_Date_ES.png';
        return 'Paola_Carlo_Save_the_Date.png';
    };

    const saveTheDateImage = getSaveTheDateImage();
    const saveTheDateFilename = getSaveTheDateFilename();

    return (
        <section ref={sectionRef} className={`${styles.countdown} ${isVisible ? 'reveal visible' : 'reveal'}`}>
            <div className="container">
                <p className={styles.countdownTitle}>{t('title')}</p>

                <div className={styles.countdownGrid}>
                    {timeUnits.map((unit, index) => (
                        <div key={index} className={styles.countdownItem} style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className={styles.countdownNumber}>
                                {String(unit.value).padStart(2, '0')}
                            </div>
                            <div className={styles.countdownLabel}>{unit.label}</div>
                        </div>
                    ))}
                </div>

                <div className={styles.countdownDivider}>
                    <span className={styles.countdownOrnament}>❦</span>
                </div>

                <div className={styles.actionButtons}>
                    <CalendarButton />
                    <a href={saveTheDateImage} download={saveTheDateFilename} className={styles.downloadBtn}>
                        {t('downloadSaveTheDate')}
                    </a>
                </div>
            </div>
        </section>
    );
}


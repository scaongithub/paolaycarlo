'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import styles from './Countdown.module.css';

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const WEDDING_DATE = new Date('2026-08-16T17:00:00');

export default function Countdown() {
    const t = useTranslations('countdown');
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

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

    if (!mounted) {
        return null;
    }

    const timeUnits = [
        { value: timeLeft.days, label: t('days') },
        { value: timeLeft.hours, label: t('hours') },
        { value: timeLeft.minutes, label: t('minutes') },
        { value: timeLeft.seconds, label: t('seconds') },
    ];

    return (
        <section className={styles.countdown}>
            <div className="container">
                <p className={styles.countdownTitle}>{t('title')}</p>

                <div className={styles.countdownGrid}>
                    {timeUnits.map((unit, index) => (
                        <div key={index} className={styles.countdownItem}>
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
            </div>
        </section>
    );
}

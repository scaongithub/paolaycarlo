'use client';

import { useTranslations } from 'next-intl';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './DayPlan.module.css';

export default function DayPlan() {
    const t = useTranslations('schedule');
    const { ref, isVisible } = useScrollReveal();

    const events = [
        {
            time: t('ceremonyTime'),
            event: t('ceremony'),
            location: t('ceremonyLocation'),
            icon: '💍'
        },
        {
            time: t('cocktailTime'),
            event: t('cocktail'),
            location: undefined,
            icon: '🥂'
        },
        {
            time: t('dinnerTime'),
            event: t('dinner'),
            location: undefined,
            icon: '🍽️'
        },
        {
            time: t('partyTime'),
            event: t('party'),
            location: undefined,
            icon: '💃'
        },
    ];

    return (
        <section ref={ref} id="schedule" className={`${styles.schedule} ${isVisible ? 'reveal visible' : 'reveal'}`}>
            <div className="container">
                <div className={styles.scheduleHeader}>
                    <h2 className={styles.scheduleTitle}>{t('title')}</h2>
                </div>

                <div className={styles.timeline}>
                    {events.map((item, index) => (
                        <div key={index} className={styles.timelineItem}>
                            <div className={styles.timelineDot}>
                                <span className={styles.timelineIcon}>{item.icon}</span>
                            </div>
                            <div className={styles.timelineContent}>
                                <p className={styles.timelineTime}>{item.time}</p>
                                <h3 className={styles.timelineEvent}>{item.event}</h3>
                                {item.location && (
                                    <p className={styles.timelineLocation}>{item.location}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

import { useTranslations } from 'next-intl';
import styles from './DayPlan.module.css';

export default function DayPlan() {
    const t = useTranslations('schedule');

    const events = [
        {
            time: t('ceremonyTime'),
            event: t('ceremony'),
            location: t('ceremonyLocation')
        },
        {
            time: t('cocktailTime'),
            event: t('cocktail'),
            location: undefined
        },
        {
            time: t('dinnerTime'),
            event: t('dinner'),
            location: undefined
        },
        {
            time: t('partyTime'),
            event: t('party'),
            location: undefined
        },
    ];

    return (
        <section id="schedule" className={styles.schedule}>
            <div className="container">
                <div className={styles.scheduleHeader}>
                    <h2 className={styles.scheduleTitle}>{t('title')}</h2>
                </div>

                <div className={styles.timeline}>
                    {events.map((item, index) => (
                        <div key={index} className={styles.timelineItem}>
                            <div className={styles.timelineDot}></div>
                            <p className={styles.timelineTime}>{item.time}</p>
                            <p className={styles.timelineEvent}>{item.event}</p>
                            {item.location && (
                                <p className={styles.timelineLocation}>{item.location}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

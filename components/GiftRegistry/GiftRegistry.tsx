import { useTranslations } from 'next-intl';
import styles from './GiftRegistry.module.css';

export default function GiftRegistry() {
    const t = useTranslations('gifts');

    return (
        <section className={styles.gifts}>
            <div className="container">
                <div className={styles.giftsContent}>
                    <div className={styles.giftsIcon}>🎁</div>
                    <h2 className={styles.giftsTitle}>{t('title')}</h2>
                    <p className={styles.giftsSubtitle}>{t('subtitle')}</p>
                    <div className={styles.giftsDivider}>
                        <span>💝</span>
                    </div>
                    <p className={styles.giftsMessage}>{t('message')}</p>
                </div>
            </div>
        </section>
    );
}

'use client';

import { useTranslations } from 'next-intl';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './GiftRegistry.module.css';

export default function GiftRegistry() {
    const t = useTranslations('gifts');
    const { ref, isVisible } = useScrollReveal();

    return (
        <section ref={ref} className={`${styles.gifts} ${isVisible ? 'reveal visible' : 'reveal'}`}>
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

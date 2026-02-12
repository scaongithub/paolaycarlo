'use client';

import { useTranslations } from 'next-intl';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './Parents.module.css';

export default function Parents() {
    const t = useTranslations('parents');
    const { ref, isVisible } = useScrollReveal();

    return (
        <section ref={ref} className={`${styles.parents} ${isVisible ? 'reveal visible' : 'reveal'}`}>
            <div className="container">
                <h2 className={styles.parentsTitle}>{t('title')}</h2>

                <div className={styles.parentsGrid}>
                    <div className={styles.parentsCard}>
                        <p className={styles.parentsNames} style={{ whiteSpace: 'pre-line' }}>{t('brideParents')}</p>
                    </div>

                    <div className={styles.parentsDivider}>
                        <span>&</span>
                    </div>

                    <div className={styles.parentsCard}>
                        <p className={styles.parentsNames} style={{ whiteSpace: 'pre-line' }}>{t('groomParents')}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

import { useTranslations } from 'next-intl';
import styles from './Parents.module.css';

export default function Parents() {
    const t = useTranslations('parents');

    return (
        <section className={styles.parents}>
            <div className="container">
                <h2 className={styles.parentsTitle}>{t('title')}</h2>

                <div className={styles.parentsGrid}>
                    <div className={styles.parentsCard}>
                        <p className={styles.parentsLabel}>{t('bride')}</p>
                        <p className={styles.parentsNames}>{t('brideParents')}</p>
                    </div>

                    <div className={styles.parentsDivider}>
                        <span>&</span>
                    </div>

                    <div className={styles.parentsCard}>
                        <p className={styles.parentsLabel}>{t('groom')}</p>
                        <p className={styles.parentsNames}>{t('groomParents')}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

import { useTranslations } from 'next-intl';
import styles from './Hero.module.css';

export default function Hero() {
    const t = useTranslations('hero');

    return (
        <section className={styles.hero}>
            <div className={styles.heroBackground}></div>
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

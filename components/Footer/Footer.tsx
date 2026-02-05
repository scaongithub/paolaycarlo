'use client';

import { useTranslations } from 'next-intl';
import styles from './Footer.module.css';

export default function Footer() {
    const t = useTranslations('footer');

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.activeContent}>
                    <p className={styles.footerMessage}>{t('message')}</p>
                    <span className={styles.footerHashtag}>{t('hashtag')}</span>

                    <div className={styles.footerDivider}>
                        <span className={styles.footerOrnament}>❦</span>
                    </div>

                    <p className={styles.footerNames}>PAOLA & CARLO</p>
                </div>
            </div>
        </footer>
    );
}

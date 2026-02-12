'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './GiftRegistry.module.css';

export default function GiftRegistry() {
    const t = useTranslations('gifts');
    const { ref, isVisible } = useScrollReveal();
    const [showBanking, setShowBanking] = useState(false);

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

                    <button
                        className={styles.bankingToggle}
                        onClick={() => setShowBanking(!showBanking)}
                        aria-expanded={showBanking}
                    >
                        <span className={styles.envelopeIcon}>✉️</span>
                        <span>{showBanking ? t('hideBanking') : t('showBanking')}</span>
                    </button>

                    <div className={`${styles.bankingDetails} ${showBanking ? styles.bankingVisible : ''}`}>
                        <div className={styles.bankingInner}>
                            {/* Mexican Bank Account */}
                            <div className={styles.bankCard}>
                                <div className={styles.bankFlag}>🇲🇽</div>
                                <h3 className={styles.bankCountry}>{t('mexicanBank')}</h3>
                                <div className={styles.bankInfo}>
                                    <div className={styles.bankRow}>
                                        <span className={styles.bankLabel}>{t('accountNumber')}</span>
                                        <span className={styles.bankValue}>60587537647</span>
                                    </div>
                                    <div className={styles.bankRow}>
                                        <span className={styles.bankLabel}>{t('clabeNumber')}</span>
                                        <span className={styles.bankValue}>014077605875376477</span>
                                    </div>
                                </div>
                            </div>

                            {/* Italian Bank Account */}
                            <div className={styles.bankCard}>
                                <div className={styles.bankFlag}>🇮🇹</div>
                                <h3 className={styles.bankCountry}>{t('italianBank')}</h3>
                                <div className={styles.bankInfo}>
                                    <div className={styles.bankRow}>
                                        <span className={styles.bankLabel}>{t('accountHolder')}</span>
                                        <span className={styles.bankValue}>Paola Michelle Cruz Munoz</span>
                                    </div>
                                    <div className={styles.bankRow}>
                                        <span className={styles.bankLabel}>IBAN</span>
                                        <span className={styles.bankValue}>IT18V0357601601010002181431</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

'use client';

import { useTranslations } from 'next-intl';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './DressCode.module.css';

export default function DressCode() {
    const t = useTranslations('dressCode');
    const { ref, isVisible } = useScrollReveal();

    const colorSwatches = [
        { color: '#E8D5C4', name: 'Champagne' },
        { color: '#1B365D', name: 'Navy' },
        { color: '#A5C4B8', name: 'Sage' },
        { color: '#D4AF37', name: 'Gold' },
        { color: '#F5E6E0', name: 'Blush' },
    ];

    return (
        <section ref={ref} className={`${styles.dressCode} ${isVisible ? 'reveal visible' : 'reveal'}`}>
            <div className="container">
                <div className={styles.dressCodeCard}>
                    <div className={styles.dressCodeIcon}>👔</div>
                    <h2 className={styles.dressCodeTitle}>{t('title')}</h2>
                    <p className={styles.dressCodeType}>{t('formal')}</p>
                    <div className={styles.divider}></div>
                    <p className={styles.dressCodeDesc}>{t('description')}</p>
                    <p className={styles.dressCodeColors}>{t('colors')}</p>

                    <div className={styles.colorSwatches}>
                        {colorSwatches.map((swatch, index) => (
                            <div
                                key={index}
                                className={styles.swatchWrapper}
                                title={swatch.name}
                            >
                                <div
                                    className={styles.swatch}
                                    style={{ backgroundColor: swatch.color }}
                                ></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

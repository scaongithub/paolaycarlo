'use client';

import { useTranslations } from 'next-intl';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './DressCode.module.css';

export default function DressCode() {
    const t = useTranslations('dressCode');
    const { ref, isVisible } = useScrollReveal();

    const colorSwatches = [
        { color: '#1B365D', name: 'navy' },
        { color: '#A5C4B8', name: 'sage' },
        { color: '#D4AF37', name: 'gold' },
        { color: '#E2725B', name: 'terracotta' },
        { color: '#7895A2', name: 'dustyBlue' },
    ];

    return (
        <section ref={ref} className={`${styles.dressCode} ${isVisible ? 'reveal visible' : 'reveal'}`}>
            <div className="container">
                <div className={styles.dressCodeCard}>
                    <div className={styles.dressCodeIcon}>👔</div>
                    <h2 className={styles.dressCodeTitle}>{t('title')}</h2>
                    <p className={styles.dressCodeType}>{t('formal')}</p>
                    <p className={styles.dressCodeDesc}>{t('description')}</p>

                    <div className={styles.genderSection}>
                        <div className={styles.genderBlock}>
                            <h3 className={styles.genderTitle}>{t('women')} 👗</h3>
                            <p className={styles.genderDesc}>{t('womenDesc')}</p>
                        </div>
                        <div className={styles.divider}></div>
                        <div className={styles.genderBlock}>
                            <h3 className={styles.genderTitle}>{t('men')} 🤵</h3>
                            <p className={styles.genderDesc}>{t('menDesc')}</p>
                        </div>
                    </div>

                    <div className={styles.warningBox}>
                        <p>{t('avoidWhite')}</p>
                    </div>

                    <h3 className={styles.paletteTitle}>{t('paletteTitle')}</h3>
                    <div className={styles.colorSwatches}>
                        {colorSwatches.map((swatch, index) => (
                            <div key={index} className={styles.swatchWrapper}>
                                <div
                                    className={styles.swatch}
                                    style={{ backgroundColor: swatch.color }}
                                ></div>
                                <span className={styles.swatchName}>{t(`colors.${swatch.name}` as any)}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

import { useTranslations } from 'next-intl';
import styles from './DressCode.module.css';

export default function DressCode() {
    const t = useTranslations('dressCode');

    const colorSwatches = [
        '#E8D5C4', // Champagne
        '#1B365D', // Navy
        '#A5C4B8', // Sage
        '#D4AF37', // Gold
        '#F5E6E0', // Blush
    ];

    return (
        <section className={styles.dressCode}>
            <div className="container">
                <div className={styles.dressCodeCard}>
                    <div className={styles.dressCodeIcon}>👔</div>
                    <h2 className={styles.dressCodeTitle}>{t('title')}</h2>
                    <p className={styles.dressCodeType}>{t('formal')}</p>
                    <p className={styles.dressCodeDesc}>{t('description')}</p>
                    <p className={styles.dressCodeColors}>{t('colors')}</p>

                    <div className={styles.colorSwatches}>
                        {colorSwatches.map((color, index) => (
                            <div
                                key={index}
                                className={styles.swatch}
                                style={{ backgroundColor: color }}
                                title={color}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

'use client';

import { useState, FormEvent } from 'react';
import { useTranslations } from 'next-intl';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './RSVP.module.css';

export default function RSVP() {
    const t = useTranslations('rsvp');
    const { ref, isVisible } = useScrollReveal();
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Simulate API call
        setTimeout(() => {
            setSubmitted(true);
        }, 1000);
    };

    if (submitted) {
        return (
            <section id="rsvp" className={styles.rsvp}>
                <div className="container">
                    <div className={`${styles.rsvpForm} ${styles.submitted}`}>
                        <span className={styles.successIcon}>✨</span>
                        <p className={styles.successMessage}>{t('success')}</p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section ref={ref} id="rsvp" className={`${styles.rsvp} ${isVisible ? 'reveal visible' : 'reveal'}`}>
            <div className="container">
                <div className={styles.rsvpHeader}>
                    <h2 className={styles.rsvpTitle}>{t('title')}</h2>
                    <p className={styles.rsvpSubtitle}>{t('subtitle')}</p>
                </div>

                <form className={styles.rsvpForm} onSubmit={handleSubmit}>
                    <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                            <label className={styles.formLabel}>{t('name')}</label>
                            <input
                                type="text"
                                className={styles.formInput}
                                required
                                placeholder="Paolo Rossi"
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.formLabel}>{t('email')}</label>
                            <input
                                type="email"
                                className={styles.formInput}
                                required
                                placeholder="paolo@example.com"
                            />
                        </div>
                    </div>

                    <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                            <label className={styles.formLabel}>{t('guests')}</label>
                            <select className={styles.formSelect} defaultValue="1">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.formLabel}>{t('attending')}</label>
                            <div className={styles.radioGroup}>
                                <label className={`${styles.radioLabel} ${styles.yes}`}>
                                    <input
                                        type="radio"
                                        name="attending"
                                        value="yes"
                                        className={styles.radioInput}
                                        defaultChecked
                                    />
                                    <span>{t('yes')}</span>
                                </label>
                                <label className={`${styles.radioLabel} ${styles.no}`}>
                                    <input
                                        type="radio"
                                        name="attending"
                                        value="no"
                                        className={styles.radioInput}
                                    />
                                    <span>{t('no')}</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.formLabel}>{t('dietary')}</label>
                        <input type="text" className={styles.formInput} placeholder="Gluten free, Vegan..." />
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.formLabel}>{t('message')}</label>
                        <textarea className={styles.formTextarea} placeholder="..."></textarea>
                    </div>

                    <button type="submit" className={styles.submitBtn}>
                        {t('submit')}
                    </button>
                </form>
            </div>
        </section>
    );
}

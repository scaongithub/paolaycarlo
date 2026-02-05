'use client';

import { useState, FormEvent } from 'react';
import { useTranslations } from 'next-intl';
import styles from './RSVP.module.css';

export default function RSVP() {
    const t = useTranslations('rsvp');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // TODO: Implement actual form submission (email, Google Sheets, etc.)
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <section id="rsvp" className={styles.rsvp}>
                <div className="container">
                    <div className={styles.rsvpForm}>
                        <p className={styles.successMessage}>✨ {t('success')} ✨</p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="rsvp" className={styles.rsvp}>
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
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.formLabel}>{t('email')}</label>
                            <input
                                type="email"
                                className={styles.formInput}
                                required
                            />
                        </div>
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.formLabel}>{t('guests')}</label>
                        <select className={styles.formSelect} defaultValue="1">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.formLabel}>{t('attending')}</label>
                        <div className={styles.radioGroup}>
                            <label className={styles.radioLabel}>
                                <input
                                    type="radio"
                                    name="attending"
                                    value="yes"
                                    className={styles.radioInput}
                                    defaultChecked
                                />
                                {t('yes')}
                            </label>
                            <label className={styles.radioLabel}>
                                <input
                                    type="radio"
                                    name="attending"
                                    value="no"
                                    className={styles.radioInput}
                                />
                                {t('no')}
                            </label>
                        </div>
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.formLabel}>{t('dietary')}</label>
                        <input type="text" className={styles.formInput} />
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.formLabel}>{t('message')}</label>
                        <textarea className={styles.formTextarea}></textarea>
                    </div>

                    <button type="submit" className={styles.submitBtn}>
                        {t('submit')}
                    </button>
                </form>
            </div>
        </section>
    );
}

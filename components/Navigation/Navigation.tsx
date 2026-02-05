'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import styles from './Navigation.module.css';

interface NavigationProps {
    locale: string;
}

export default function Navigation({ locale }: NavigationProps) {
    const t = useTranslations('nav');
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { href: '#location', label: t('location') },
        { href: '#schedule', label: t('schedule') },
        { href: '#itinerary', label: t('itinerary') },
        { href: '#rsvp', label: t('rsvp') },
        { href: '#gallery', label: t('gallery') },
    ];

    const otherLocale = locale === 'es' ? 'it' : 'es';

    return (
        <>
            <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}>
                <div className={`container ${styles.navContainer}`}>
                    <Link href={`/${locale}`} className={styles.logo}>
                        P & C
                    </Link>

                    <ul className={styles.navLinks}>
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <a href={item.href} className={styles.navLink}>
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className={styles.navActions}>
                        <div className={styles.langSwitcher}>
                            <Link
                                href={`/es`}
                                className={`${styles.langBtn} ${locale === 'es' ? styles.active : ''}`}
                            >
                                ES
                            </Link>
                            <Link
                                href={`/it`}
                                className={`${styles.langBtn} ${locale === 'it' ? styles.active : ''}`}
                            >
                                IT
                            </Link>
                            <Link
                                href={`/en`}
                                className={`${styles.langBtn} ${locale === 'en' ? styles.active : ''}`}
                            >
                                EN
                            </Link>
                        </div>

                        <button
                            className={styles.menuToggle}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </nav>

            <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
                <ul className={styles.mobileNavLinks}>
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <a
                                href={item.href}
                                className={styles.mobileNavLink}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className={styles.langSwitcher}>
                    <Link href={`/es`} className={`${styles.langBtn} ${locale === 'es' ? styles.active : ''}`}>
                        Español
                    </Link>
                    <Link href={`/it`} className={`${styles.langBtn} ${locale === 'it' ? styles.active : ''}`}>
                        Italiano
                    </Link>
                    <Link href={`/en`} className={`${styles.langBtn} ${locale === 'en' ? styles.active : ''}`}>
                        English
                    </Link>
                </div>
            </div>
        </>
    );
}

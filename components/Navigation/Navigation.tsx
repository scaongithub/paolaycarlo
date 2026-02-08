'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import styles from './Navigation.module.css';

interface NavigationProps {
    locale: string;
}

const languages = [
    { code: 'es', label: 'ES', fullLabel: 'Español', flag: '🇲🇽' },
    { code: 'it', label: 'IT', fullLabel: 'Italiano', flag: '🇮🇹' },
    { code: 'en', label: 'EN', fullLabel: 'English', flag: '🇬🇧' },
];

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
        { href: '#gallery', label: t('gallery') },
    ];

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
                            {languages.map((lang) => (
                                <Link
                                    key={lang.code}
                                    href={`/${lang.code}`}
                                    className={`${styles.langBtn} ${locale === lang.code ? styles.active : ''}`}
                                >
                                    <span className={styles.langFlag}>{lang.flag}</span>
                                    {lang.label}
                                </Link>
                            ))}
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
                    {languages.map((lang) => (
                        <Link
                            key={lang.code}
                            href={`/${lang.code}`}
                            className={`${styles.langBtn} ${locale === lang.code ? styles.active : ''}`}
                        >
                            <span className={styles.langFlag}>{lang.flag}</span>
                            {lang.fullLabel}
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}

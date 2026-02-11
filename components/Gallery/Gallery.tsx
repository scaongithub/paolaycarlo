'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { COUPLE_IMAGES } from '@/utils/images';
import styles from './Gallery.module.css';

export default function Gallery() {
    const t = useTranslations('gallery');
    const { ref, isVisible } = useScrollReveal();
    const [images, setImages] = useState<string[]>([]);
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
    const [isMobile, setIsMobile] = useState(false);
    const [activeSlide, setActiveSlide] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);

    // Touch/swipe state
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    useEffect(() => {
        const shuffled = [...COUPLE_IMAGES].sort(() => 0.5 - Math.random());
        setImages(shuffled);
    }, []);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Keyboard navigation for lightbox
    useEffect(() => {
        if (lightboxIndex === null) return;
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setLightboxIndex(null);
            if (e.key === 'ArrowRight') setLightboxIndex(i => i !== null ? (i + 1) % images.length : null);
            if (e.key === 'ArrowLeft') setLightboxIndex(i => i !== null ? (i - 1 + images.length) % images.length : null);
        };
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', handleKey);
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKey);
        };
    }, [lightboxIndex, images.length]);

    // Carousel scroll tracking
    const handleScroll = useCallback(() => {
        if (!carouselRef.current) return;
        const el = carouselRef.current;
        const slideWidth = el.offsetWidth * 0.82;
        const index = Math.round(el.scrollLeft / slideWidth);
        setActiveSlide(index);
    }, []);

    const scrollToSlide = (index: number) => {
        if (!carouselRef.current) return;
        const slideWidth = carouselRef.current.offsetWidth * 0.82;
        carouselRef.current.scrollTo({ left: slideWidth * index, behavior: 'smooth' });
        setActiveSlide(index);
    };

    // Touch handlers for lightbox swipe
    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const minSwipe = 50;
        if (Math.abs(distance) < minSwipe) return;
        if (distance > 0) {
            setLightboxIndex(i => i !== null ? (i + 1) % images.length : null);
        } else {
            setLightboxIndex(i => i !== null ? (i - 1 + images.length) % images.length : null);
        }
    };

    // Maximum dots to show for mobile carousel
    const maxDots = Math.min(images.length, 10);
    const dotGroupSize = Math.ceil(images.length / maxDots);

    return (
        <>
            <section ref={ref} id="gallery" className={`${styles.gallery} ${isVisible ? 'reveal visible' : 'reveal'}`}>
                <div className="container">
                    <div className={styles.galleryHeader}>
                        <span className={styles.gallerySubtitle}>❤</span>
                        <h2 className={styles.galleryTitle}>{t('title')}</h2>
                        <div className={styles.galleryDivider}>
                            <span></span>
                            <span className={styles.galleryDividerIcon}>✦</span>
                            <span></span>
                        </div>
                    </div>

                    {/* Desktop: Masonry Grid */}
                    {!isMobile && (
                        <div className={styles.masonryGrid}>
                            {images.map((imgSrc, index) => (
                                <div
                                    key={index}
                                    className={styles.masonryItem}
                                    style={{ animationDelay: `${index * 0.05}s` }}
                                    onClick={() => setLightboxIndex(index)}
                                >
                                    <img
                                        src={imgSrc}
                                        alt={`Gallery photo ${index + 1}`}
                                        className={styles.masonryImage}
                                        loading="lazy"
                                    />
                                    <div className={styles.masonryOverlay}>
                                        <div className={styles.overlayContent}>
                                            <svg className={styles.overlayIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                                <path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M10.5 8.25v3m0 0v3m0-3h3m-3 0h-3" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Mobile: Carousel */}
                    {isMobile && (
                        <div className={styles.carouselWrapper}>
                            <div
                                ref={carouselRef}
                                className={styles.carousel}
                                onScroll={handleScroll}
                            >
                                {images.map((imgSrc, index) => (
                                    <div
                                        key={index}
                                        className={styles.carouselSlide}
                                        onClick={() => setLightboxIndex(index)}
                                    >
                                        <img
                                            src={imgSrc}
                                            alt={`Gallery photo ${index + 1}`}
                                            className={styles.carouselImage}
                                            loading="lazy"
                                        />
                                        <div className={styles.carouselGradient}></div>
                                    </div>
                                ))}
                            </div>

                            {/* Dot indicators */}
                            <div className={styles.carouselDots}>
                                {Array.from({ length: maxDots }).map((_, i) => (
                                    <button
                                        key={i}
                                        className={`${styles.carouselDot} ${Math.floor(activeSlide / dotGroupSize) === i ? styles.carouselDotActive : ''}`}
                                        onClick={() => scrollToSlide(i * dotGroupSize)}
                                        aria-label={`Go to photo ${i + 1}`}
                                    />
                                ))}
                            </div>

                            {/* Counter */}
                            <div className={styles.carouselCounter}>
                                {activeSlide + 1} / {images.length}
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Lightbox Modal */}
            {lightboxIndex !== null && (
                <div
                    className={styles.lightbox}
                    onClick={() => setLightboxIndex(null)}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    <div className={styles.lightboxBackdrop}></div>

                    <button className={styles.lightboxClose} onClick={() => setLightboxIndex(null)} aria-label="Close">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    <button
                        className={`${styles.lightboxNav} ${styles.lightboxPrev}`}
                        onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex - 1 + images.length) % images.length); }}
                        aria-label="Previous photo"
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
                        <img
                            src={images[lightboxIndex]}
                            alt={`Gallery photo ${lightboxIndex + 1}`}
                            className={styles.lightboxImage}
                        />
                    </div>

                    <button
                        className={`${styles.lightboxNav} ${styles.lightboxNext}`}
                        onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex + 1) % images.length); }}
                        aria-label="Next photo"
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    <div className={styles.lightboxCounter}>
                        {lightboxIndex + 1} / {images.length}
                    </div>
                </div>
            )}
        </>
    );
}

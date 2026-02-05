'use client';

import { useState, useRef, useEffect } from 'react';
import styles from './CalendarButton.module.css';

interface CalendarEvent {
    title: string;
    description: string;
    location: string;
    startTime: string; // ISO 8601 format (e.g., 2026-08-16T17:00:00)
    endTime: string;   // ISO 8601 format
}

export default function CalendarButton() {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const event: CalendarEvent = {
        title: "Paola & Carlo Wedding",
        description: "Celebra il nostro matrimonio con noi!",
        location: "Barcelo Grand Maya Resort, Mexico",
        startTime: "2026-08-16T17:00:00",
        endTime: "2026-08-17T02:00:00"
    };

    const toggleDropdown = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const generateGoogleUrl = () => {
        const start = event.startTime.replace(/[-:]/g, '');
        const end = event.endTime.replace(/[-:]/g, '');
        return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${start}/${end}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}`;
    };

    const generateIcsFile = () => {
        const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
URL:${document.location.href}
DTSTART:${event.startTime.replace(/[-:]/g, '')}
DTEND:${event.endTime.replace(/[-:]/g, '')}
SUMMARY:${event.title}
DESCRIPTION:${event.description}
LOCATION:${event.location}
END:VEVENT
END:VCALENDAR`;

        const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.setAttribute('download', 'wedding.ics');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className={styles.container} ref={dropdownRef}>
            <button onClick={toggleDropdown} className={styles.calendarBtn}>
                Add to Calendar
            </button>

            {isOpen && (
                <div className={styles.dropdown}>
                    <a href={generateGoogleUrl()} target="_blank" rel="noopener noreferrer" className={styles.option}>
                        Google Calendar
                    </a>
                    <button onClick={generateIcsFile} className={styles.option}>
                        Apple Calendar
                    </button>
                    <button onClick={generateIcsFile} className={styles.option}>
                        Outlook
                    </button>
                    <a href={`https://calendar.yahoo.com/?v=60&view=d&type=20&title=${encodeURIComponent(event.title)}&st=${event.startTime}&dur=0900&desc=${encodeURIComponent(event.description)}&in_loc=${encodeURIComponent(event.location)}`} target="_blank" rel="noopener noreferrer" className={styles.option}>
                        Yahoo
                    </a>
                </div>
            )}
        </div>
    );
}

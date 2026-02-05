import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Playfair_Display, Outfit, Great_Vibes } from 'next/font/google';
import { routing } from '@/i18n/routing';
import Navigation from '@/components/Navigation/Navigation';
import '../globals.css';

const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair',
    display: 'swap',
});

const outfit = Outfit({
    subsets: ['latin'],
    variable: '--font-outfit',
    display: 'swap',
});

const greatVibes = Great_Vibes({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-script',
    display: 'swap',
});

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    if (!routing.locales.includes(locale as typeof routing.locales[number])) {
        notFound();
    }

    const messages = await getMessages();

    return (
        <html lang={locale} className={`${playfair.variable} ${outfit.variable} ${greatVibes.variable}`}>
            <body>
                <NextIntlClientProvider messages={messages}>
                    <Navigation locale={locale} />
                    <main>{children}</main>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}

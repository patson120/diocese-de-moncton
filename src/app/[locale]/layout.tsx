
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import type { Metadata } from "next";
import { inter } from '@/app/fonts/fonts';
import "./globals.css";
import { Language } from '@/types';
import Header from '@/components/ui/shared/header';
import Newsletter from '@/components/ui/shared/newsletter';
import Footer from '@/components/ui/shared/footer';


export const metadata: Metadata = {
  title: 'Archidiocèse de Moncton',
  description: "Site officiel de l'Archidiocèse de Moncton",
  keywords: ['église', 'catholique', 'moncton', 'archidiocèse', 'paroisse', 'spiritualité'],
};

export default async function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as Language)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${inter.className} antialiased select-none`}>
        <NextIntlClientProvider messages={messages}>
          <main className='overflow-x-hiddens'>
            {/* Header */}
            <Header />

            {children}

            {/* Newsletter */}
            <Newsletter />

            {/* Footer */}
            <Footer />
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}


import { inter } from '@/app/fonts/fonts';
import Footer from '@/components/ui/shared/footer';
import Header from '@/components/ui/shared/header';
import Newsletter from '@/components/ui/shared/newsletter';
import { routing } from '@/i18n/routing';
import { Language } from '@/types';
import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import "../globals.css";
import { Toaster } from '@/components/ui/toaster';
import { Toaster as SonnerToaster } from '@/components/ui/sonner';


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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body
        className={`${inter.className} antialiased select-none`}>
        <NextIntlClientProvider messages={messages}>
          <main className='overflow-x-hidden'>
            {/* Header */}
            <div className='mb-[130px]'>
              <Header />
            </div>
            {children}

            {/* Newsletter */}
            <Newsletter />

            {/* Footer */}
            <Footer />
          </main>
        <Toaster />
        <SonnerToaster />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
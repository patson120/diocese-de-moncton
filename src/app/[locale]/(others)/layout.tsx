import type { Metadata } from "next";
import "../globals.css";
import { Toaster } from '@/components/ui/toaster';
import { Toaster as SonnerToaster } from '@/components/ui/sonner';
import { Language } from "@/types";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

export const metadata: Metadata = {
  title: 'Archidiocèse de Moncton',
  description: "Site officiel de l'Archidiocèse de Moncton",
  keywords: ['église', 'catholique', 'moncton', 'diocèse', 'archidiocèse', 'paroisse', 'spiritualité'],
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
    <html lang="en">
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
          <Toaster />
          <SonnerToaster />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

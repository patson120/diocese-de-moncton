import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: 'Archidiocèse de Moncton',
  description: "Site officiel de l'Archidiocèse de Moncton",
  keywords: ['église', 'catholique', 'moncton', 'diocèse', 'archidiocèse', 'paroisse', 'spiritualité'],
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

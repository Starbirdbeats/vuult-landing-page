import './globals.css';
import type { Metadata } from 'next';
import { Antic_Slab, Alex_Brush, Cormorant } from 'next/font/google';
import { Provider } from '@/components/ui/provider';


const anticSlab = Antic_Slab({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-antic-slab',
});

const alexBrush = Alex_Brush({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-alex-brush',
});

const cormorant = Cormorant({
  subsets: ['latin'],
  variable: '--font-cormorant',
});

export const metadata: Metadata = {
  title: 'VUULT - Wearable Masterpieces',
  description:
    'Custom jewelry that transforms your vision into radiant reality. Beyond convention, beyond mass production.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${anticSlab.variable} ${alexBrush.variable} ${cormorant.variable}`}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}

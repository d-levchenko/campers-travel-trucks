import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import Header from '@/components/Header/Header';
import TanStackProvider from '@/components/TanStackProvider/TanStackProvider';
import { Toaster } from 'react-hot-toast';

import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  preload: true,
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://camper-trucks.netlify.app/'),

  title: 'Campers Travel Trucks',
  description:
    'Campers of your dreams. You can find everything you want in our catalog.',

  applicationName: 'Campers Travel Trucks',

  openGraph: {
    title: 'Campers Travel Trucks',
    description:
      'Campers of your dreams. You can find everything you want in our catalog.',
    siteName: 'Campers Travel Trucks',
    locale: 'en_US',
    type: 'website',
    url: 'https://camper-trucks.netlify.app/',
    images: [
      {
        url: '/images/hero.jpg',
        width: 800,
        height: 600,
        alt: 'Campers Travel Trucks',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Campers Travel Trucks',
    description:
      'Campers of your dreams. You can find everything you want in our catalog.',
    images: [
      {
        url: '/images/hero.jpg',
        width: 800,
        height: 600,
        alt: 'Campers Travel Trucks',
      },
    ],
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body>
        <TanStackProvider>
          <div className="w-360 mx-auto my-0">
            <Header />
            {children}
          </div>
          <Toaster />
        </TanStackProvider>
      </body>
    </html>
  );
};

export default RootLayout;

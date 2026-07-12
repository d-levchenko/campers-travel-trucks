import { Metadata } from 'next';

import css from './page.module.css';
import Image from 'next/image';

export const metadata: Metadata = {
  title: '404 - Page not found',
  description: 'Sorry, the page you are looking for does not exist.',

  openGraph: {
    title: '404 - Page not found',
    description: 'Sorry, the page you are looking for does not exist.',
    url: 'https://campers-travel-trucks-flax.vercel.app/404',
    images: [
      {
        url: '/images/hero/hero.jpg',
        width: 1440,
        height: 761,
        alt: '404 - Page not found',
      },
    ],
    type: 'website',
    locale: 'en_US',
    siteName: 'Campers Travel Trucks',
  },

  twitter: {
    card: 'summary_large_image',
    title: '404 - Page not found',
    description: 'Sorry, the page you are looking for does not exist.',
    images: [
      {
        url: '/images/hero/hero.jpg',
        width: 1440,
        height: 761,
        alt: '404 - Page not found',
      },
    ],
  },
};

const NotFound = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center p-6 bg-(--white)">
      <Image
        src="/images/not-found.png"
        alt="Image not found"
        width={488}
        height={463}
        className={css.image}
        loading="eager"
      />

      <h1 className={css.errorTitle}>404 - Page not found</h1>
      <p className={css.errorDescription}>
        Sorry, the page you are looking for does not exist.
      </p>
    </div>
  );
};

export default NotFound;

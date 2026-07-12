import { Metadata } from 'next';
import Link from 'next/link';

import css from './page.module.css';

export const metadata: Metadata = {
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
    url: 'https://campers-travel-trucks-flax.vercel.app/',
    images: [
      {
        url: '/images/hero/hero.jpg',
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
        url: '/images/hero/hero.jpg',
        width: 800,
        height: 600,
        alt: 'Campers Travel Trucks',
      },
    ],
  },
};

const Home = () => {
  return (
    <main className={css.main}>
      <section className={css.section}>
        <h1 className={css.title}>Campers of your dreams</h1>
        <p className={css.description}>
          You can find everything you want in our catalog
        </p>

        <Link href="/catalog" aria-label="View catalog" className={css.link}>
          View Now
        </Link>
      </section>
    </main>
  );
};

export default Home;

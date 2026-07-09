import Header from '@/components/Header/Header';
import { Metadata } from 'next';

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

const Home = () => {
  return <Header />;
};

export default Home;

import CamperList from '@/components/CamperList/CamperList';
import FilterProvider from '@/providers/FilterProvider/FilterContext';
import FilterList from '@/components/FilterList/FilterList';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Campers Travel Trucks - Catalog',
  description:
    'Campers of your dreams. Check out our catalog and find the camper you need.',

  applicationName: 'Campers Travel Trucks',

  openGraph: {
    title: 'Campers Travel Trucks - Catalog',
    description:
      'Campers of your dreams. Check out our catalog and find the camper you need.',
    url: 'https://camper-trucks.netlify.app/campers',
    images: [
      {
        url: '/images/hero.jpg',
        width: 800,
        height: 600,
        alt: 'Campers Travel Trucks - Catalog',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Campers Travel Trucks - Catalog',
    description:
      'Campers of your dreams. Check out our catalog and find the camper you need.',
    images: [
      {
        url: '/images/hero.jpg',
        width: 800,
        height: 600,
        alt: 'Campers Travel Trucks - Catalog',
      },
    ],
  },
};

const Page = () => {
  return (
    <main>
      <section className="px-16 pt-12 pb-13 flex gap-16.25">
        <FilterProvider>
          <FilterList />

          <Suspense fallback={<p>Loading...</p>}>
            <CamperList />
          </Suspense>
        </FilterProvider>
      </section>
    </main>
  );
};

export default Page;

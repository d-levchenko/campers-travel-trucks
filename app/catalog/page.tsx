import CamperList from '@/components/CamperList/CamperList';
import FilterProvider from '@/providers/FilterProvider/FilterContext';
import FilterList from '@/components/FilterList/FilterList';
import { Metadata } from 'next';
import { Suspense } from 'react';
import CampersNotFound from '@/components/CampersNotFound/CampersNotFound';

export const metadata: Metadata = {
  title: 'Campers Travel Trucks - Catalog',
  description:
    'Campers of your dreams. Check out our catalog and find the camper you need.',

  applicationName: 'Campers Travel Trucks',

  openGraph: {
    title: 'Campers Travel Trucks - Catalog',
    description:
      'Campers of your dreams. Check out our catalog and find the camper you need.',
    url: 'https://campers-travel-trucks-flax.vercel.app/catalog',
    images: [
      {
        url: '/images/hero/hero.jpg',
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
        url: '/images/hero/hero.jpg',
        width: 800,
        height: 600,
        alt: 'Campers Travel Trucks - Catalog',
      },
    ],
  },
};

interface PageProps {
  searchParams: Promise<{
    location?: string;
    engine?: string;
    form?: string;
    transmission?: string;
  }>;
}

const Page = async ({ searchParams }: PageProps) => {
  const params = await searchParams;

  return (
    <main>
      <section className="px-16 pt-12 pb-13 flex gap-16.25">
        <FilterProvider
          key={JSON.stringify(params)}
          initialFilters={{
            location: params.location ?? '',
            engine: params.engine ?? '',
            form: params.form ?? '',
            transmission: params.transmission ?? '',
          }}>
          <FilterList />

          <Suspense fallback={<CampersNotFound />}>
            <CamperList />
          </Suspense>
        </FilterProvider>
      </section>
    </main>
  );
};

export default Page;

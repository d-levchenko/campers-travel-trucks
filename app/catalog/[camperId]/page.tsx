import { getCamperById, getReviewsByCamperId } from '@/lib/api/campersApi';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import CamperDetailsClient from './CamperDetails.client';
import { Metadata } from 'next';

interface CamperDetailsPageParams {
  params: Promise<{ camperId: string }>;
}

export const generateMetadata = async ({
  params,
}: CamperDetailsPageParams): Promise<Metadata> => {
  const { camperId } = await params;

  const { name, description } = await getCamperById(camperId);

  return {
    title: `Camper ${name}`,
    description: `Camper ${description}`,

    applicationName: 'Campers Travel Trucks',

    openGraph: {
      title: `Camper ${name}`,
      description: `Camper ${description}`,

      images: [
        {
          url: '/images/hero/hero.jpg',
          width: 800,
          height: 600,
          alt: `Camper ${name}`,
        },
      ],
    },

    twitter: {
      card: 'summary_large_image',
      title: `Camper ${name}`,
      description: `Camper ${description}`,

      images: [
        {
          url: '/images/hero/hero.jpg',
          width: 800,
          height: 600,
          alt: `Camper ${name}`,
        },
      ],
    },
  };
};

const CamperDetailsPage = async ({ params }: CamperDetailsPageParams) => {
  const queryClient = new QueryClient();

  const { camperId } = await params;

  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: ['camper', camperId],
      queryFn: () => getCamperById(camperId),
    }),

    queryClient.prefetchQuery({
      queryKey: ['reviews', camperId],
      queryFn: () => getReviewsByCamperId(camperId),
    }),
  ]);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CamperDetailsClient id={camperId} />
    </HydrationBoundary>
  );
};

export default CamperDetailsPage;

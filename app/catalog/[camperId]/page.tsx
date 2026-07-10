import { getCamperById } from '@/lib/api/campersApi';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import CamperDetailsClient from './CamperDetails.client';

interface CamperDetailsPageParams {
  params: Promise<{ camperId: string }>;
}

const CamperDetailsPage = async ({ params }: CamperDetailsPageParams) => {
  const queryClient = new QueryClient();

  const { camperId } = await params;

  await queryClient.prefetchQuery({
    queryKey: ['camper', camperId],
    queryFn: () => getCamperById(camperId),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CamperDetailsClient id={camperId} />
    </HydrationBoundary>
  );
};

export default CamperDetailsPage;

'use client';

import { getCamperById, getReviewsByCamperId } from '@/lib/api/campersApi';
import { useQuery } from '@tanstack/react-query';
import DetailsUpperPart from '@/components/DetailsUpperPart/DetailsUpperPart';
import DetailsBottomPart from '@/components/DetailsBottomPart/DetailsBottomPart';
import ErrorPage from '../error';

import css from './CamperDetails.module.css';
import Loader from '@/components/Loader/Loader';

interface CamperDetailsClientProps {
  id: string;
}

const CamperDetailsClient = ({ id }: CamperDetailsClientProps) => {
  const { data: camper, isLoading: isCamperLoading } = useQuery({
    queryKey: ['camper', id],
    queryFn: () => getCamperById(id),
  });

  const { data: reviews } = useQuery({
    queryKey: ['reviews', id],
    queryFn: () => getReviewsByCamperId(id),
  });

  if (camper?.statusCode === 404) return <ErrorPage />;

  if (isCamperLoading) return <Loader />;

  return (
    <main className={css.main}>
      <div className={css.container}>
        {camper && <DetailsUpperPart details={camper} />}
      </div>

      <div className="flex flex-col gap-12">
        <h2 className={css.title}>Reviews</h2>
        {reviews && camper && (
          <DetailsBottomPart camperId={camper} details={reviews} />
        )}
      </div>
    </main>
  );
};

export default CamperDetailsClient;

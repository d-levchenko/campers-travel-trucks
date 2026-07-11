'use client';

import { getCamperById } from '@/lib/api/campersApi';
import { useQuery } from '@tanstack/react-query';
import DetailsLeftSide from '@/components/DetailsLeftSide/DetailsLeftSide';
import DetailsRightSide from '@/components/DetailsRightSide/DetailsRightSide';

import css from './CamperDetails.module.css';

interface CamperDetailsClientProps {
  id: string;
}

const CamperDetailsClient = ({ id }: CamperDetailsClientProps) => {
  const { data: details } = useQuery({
    queryKey: ['camper', id],
    queryFn: () => getCamperById(id),
    refetchOnMount: false,
  });

  return (
    <main>
      <div className={css.container}>
        <div className="h-169 w-159.5">
          <DetailsLeftSide details={details} />
        </div>

        <div className="flex flex-col gap-4 w-162.5">
          <DetailsRightSide details={details} />
        </div>
      </div>
    </main>
  );
};

export default CamperDetailsClient;

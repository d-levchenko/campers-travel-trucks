import { CamperDetails, ReviewsResponse } from '@/types/campers';
import DetailsLeftBottomSide from './DetailsLeftBottomSide/DetailsLeftBottomSide';
import DetailsRightBottomSide from './DetailsRightBottomSide/DetailsRightBottomSide';

interface DetailsBottomPartProps {
  details: ReviewsResponse;
  camperId: CamperDetails;
}

const DetailsBottomPart = ({ details, camperId }: DetailsBottomPartProps) => {
  return (
    <div className="flex gap-12">
      <DetailsLeftBottomSide details={details} />

      <DetailsRightBottomSide camperId={camperId} />
    </div>
  );
};

export default DetailsBottomPart;

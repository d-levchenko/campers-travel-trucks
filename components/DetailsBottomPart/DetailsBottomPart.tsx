import { ReviewsResponse } from '@/types/campers';
import DetailsLeftBottomSide from './DetailsLeftBottomSide/DetailsLeftBottomSide';
import DetailsRightBottomSide from './DetailsRightBottomSide/DetailsRightBottomSide';

interface DetailsBottomPartProps {
  details: ReviewsResponse;
}

const DetailsBottomPart = ({ details }: DetailsBottomPartProps) => {
  return (
    <div className="flex gap-12">
      <DetailsLeftBottomSide details={details} />

      <DetailsRightBottomSide />
    </div>
  );
};

export default DetailsBottomPart;

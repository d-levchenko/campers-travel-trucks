import { ReviewsResponse } from '@/types/campers';
import DetailsLeftBottomSide from './DetailsLeftBottomSide/DetailsLeftBottomSide';

interface DetailsBottomPartProps {
  details: ReviewsResponse;
}

const DetailsBottomPart = ({ details }: DetailsBottomPartProps) => {
  return <DetailsLeftBottomSide details={details} />;
};

export default DetailsBottomPart;

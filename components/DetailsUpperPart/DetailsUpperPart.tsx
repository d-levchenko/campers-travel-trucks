import { CamperDetails } from '@/types/campers';
import DetailsLeftUpperSide from './DetailsLeftUpperSide/DetailsLeftUpperSide';
import DetailsRightUpperSide from './DetailsRightUpperSide/DetailsRightUpperSide';

interface DetailsUpperPartProps {
  details: CamperDetails;
}

const DetailsUpperPart = ({ details }: DetailsUpperPartProps) => {
  return (
    <>
      <div className="h-169 w-159.5">
        {details && <DetailsLeftUpperSide details={details} />}
      </div>

      <div className="flex flex-col gap-4 w-162.5">
        {details && <DetailsRightUpperSide details={details} />}
      </div>
    </>
  );
};

export default DetailsUpperPart;

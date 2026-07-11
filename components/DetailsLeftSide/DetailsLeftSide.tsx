import Image from 'next/image';
import { CamperDetails, Gallery } from '@/types/campers';

import css from './DetailsLeftSide.module.css';

interface DetailsLeftSideProps {
  details: CamperDetails;
}

const DetailsLeftSide = ({ details }: DetailsLeftSideProps) => {
  return (
    <>
      <Image
        src={details?.gallery[0].original}
        alt={details?.name}
        width={638}
        height={505}
        loading="eager"
        className={css.mainImage}
      />

      <ul className={css.list}>
        {details?.gallery.map((item: Gallery) => (
          <li key={item.id} className={css.item}>
            <Image
              src={item.original}
              alt={item.thumb}
              width={135}
              height={144}
              loading="eager"
              className={css.images}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default DetailsLeftSide;

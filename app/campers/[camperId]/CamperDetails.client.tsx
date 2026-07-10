'use client';

import { getCamperById } from '@/lib/api/campersApi';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import type { Amenities, Gallery } from '@/types/campers';

import css from './CamperDetails.module.css';
import SvgIcon from '@/components/SvgIcon/SvgIcon';

interface CamperDetailsClientProps {
  id: string;
}

const CamperDetailsClient = ({ id }: CamperDetailsClientProps) => {
  const { data: details } = useQuery({
    queryKey: ['camper', id],
    queryFn: () => getCamperById(id),
    refetchOnMount: false,
  });

  console.log(details);

  return (
    <main>
      <div className={css.container}>
        <div>
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
        </div>

        <div className="flex flex-col gap-4">
          <div className={css.detailsWrapper}>
            <h2 className={css.titleName}>{details?.name}</h2>

            <div className="flex gap-4 mb-4">
              <div className="flex items-center gap-1">
                <SvgIcon
                  name="rating"
                  className="fill-(--rating)"
                  width={16}
                  height={16}
                />
                <p className={css.rating}>{details?.rating}</p>

                <p
                  className={
                    css.reviews
                  }>{`(${details?.totalReviews} Reviews)`}</p>
              </div>

              <div className="flex items-center gap-1">
                <SvgIcon
                  name="location"
                  width={16}
                  height={16}
                  className="fill-(--location)"
                />
                <p className={css.location}>{details?.location}</p>
              </div>
            </div>

            <p className={css.price}>€{details?.price}</p>

            <p className={css.description}>{details?.description}</p>
          </div>

          <div className={css.detailsWrapper}>
            <h2 className={css.titleName}>Vehicle details</h2>

            <ul className={css.amenitiesList}>
              {details?.amenities.map((amenity: Amenities) => (
                <li key={amenity} className={css.amenityItem}>
                  <p className={css.amenity}>{amenity}</p>
                </li>
              ))}
            </ul>

            <div className={css.featuresWrapper}>
              <ul>
                <li>
                  <p className={css.featureText}>
                    Form
                    <span>{details?.form}</span>
                  </p>
                </li>
                <li>
                  <p className={css.featureText}>
                    Length
                    <span>{details?.length}</span>
                  </p>
                </li>
                <li>
                  <p className={css.featureText}>
                    Width
                    <span>{details?.width}</span>
                  </p>
                </li>
                <li>
                  <p className={css.featureText}>
                    Height
                    <span>{details?.height}</span>
                  </p>
                </li>
                <li>
                  <p className={css.featureText}>
                    Tank
                    <span>{details?.tank}</span>
                  </p>
                </li>
                <li>
                  <p className={css.featureText}>
                    Consumption
                    <span>{details?.consumption}</span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CamperDetailsClient;

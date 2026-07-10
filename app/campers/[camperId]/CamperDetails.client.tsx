'use client';

import { getCamperById } from '@/lib/api/campersApi';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import type { Amenities, Gallery } from '@/types/campers';
import SvgIcon from '@/components/SvgIcon/SvgIcon';
import fuelFormatter from '@/utils/fuelFormatter';

import css from './CamperDetails.module.css';
import floatFormatter from '@/utils/floatFormatter';
import formatStringInTitleCase from '@/utils/formatStringInTitleCase';

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
        <div className="h-169 w-159.5">
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
                  width={136}
                  height={144}
                  loading="eager"
                  className={css.images}
                />
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4 w-162.5">
          <div className={css.detailsWrapperUpper}>
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

          <div className={css.detailsWrapperBottom}>
            <h2 className={css.titleName}>Vehicle details</h2>

            <ul className={css.amenitiesList}>
              {[...details?.amenities]
                .sort((a, b) => a.localeCompare(b))
                .map((amenity: Amenities) => {
                  const formattedAmenity =
                    amenity === 'ac'
                      ? amenity.toUpperCase()
                      : amenity.charAt(0).toUpperCase() + amenity.slice(1);

                  return (
                    <li key={amenity} className={css.amenityItem}>
                      <p className={css.amenity}>{formattedAmenity}</p>
                    </li>
                  );
                })}
            </ul>

            <div className={css.featuresWrapper}>
              <ul className="flex flex-col gap-2">
                <li>
                  <p className={css.featureText}>
                    Form
                    <span>{formatStringInTitleCase(details?.form)}</span>
                  </p>
                </li>
                <li>
                  <p className={css.featureText}>
                    Length
                    <span>{floatFormatter(details?.length, 1) + ' m'}</span>
                  </p>
                </li>
                <li>
                  <p className={css.featureText}>
                    Width
                    <span>{floatFormatter(details?.width) + ' m'}</span>
                  </p>
                </li>
                <li>
                  <p className={css.featureText}>
                    Height
                    <span>{floatFormatter(details?.height) + ' m'}</span>
                  </p>
                </li>
                <li>
                  <p className={css.featureText}>
                    Tank
                    <span>{parseInt(details?.tank) + ' l'}</span>
                  </p>
                </li>
                <li>
                  <p className={css.featureText}>
                    Consumption
                    <span>{fuelFormatter(details?.consumption)}</span>
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

import { Amenities, CamperDetails } from '@/types/campers';
import SvgIcon from '../../SvgIcon/SvgIcon';
import formatStringInTitleCase from '@/utils/formatStringInTitleCase';
import floatFormatter from '@/utils/floatFormatter';
import fuelFormatter from '@/utils/fuelFormatter';

import css from './DetailsRightUpperSide.module.css';

interface DetailsRightUpperSideProps {
  details: CamperDetails;
}

const DetailsRightUpperSide = ({ details }: DetailsRightUpperSideProps) => {
  return (
    <>
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
              className={css.reviews}>{`(${details?.totalReviews} Reviews)`}</p>
          </div>

          <div className="flex items-center gap-1">
            <SvgIcon
              name="locationCamper"
              width={16}
              height={16}
              className="fill-(--location)"
            />
            <p className={css.location}>
              {details?.location.split(', ').reverse().join(', ')}
            </p>
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
                amenity === 'ac' || amenity === 'tv'
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
    </>
  );
};

export default DetailsRightUpperSide;

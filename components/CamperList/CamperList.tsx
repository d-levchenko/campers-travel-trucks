import { getAllCampers } from '@/lib/api/campersApi';
import type { Camper } from '@/types/campers';
import Image from 'next/image';

import css from './CamperList.module.css';
import SvgIcon from '../SvgIcon/SvgIcon';

const CamperList = async () => {
  const allCampers = await getAllCampers();
  const data = allCampers.campers;

  return (
    <ul className={css.list}>
      {data.map((camper: Camper) => (
        <li key={camper.id} className={css.item}>
          <Image
            src={camper.coverImage}
            alt={camper.name}
            width={219}
            height={240}
            className={css.image}
          />

          <div className="flex grow flex-col gap-6">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <p className={css.name}>{camper.name}</p>
                <p className={css.price}>€{camper.price}</p>
              </div>

              <div className="flex gap-3">
                <div className="flex items-center gap-1">
                  <SvgIcon
                    name="rating"
                    className={css.ratingIcon}
                    width={16}
                    height={16}
                  />
                  <p className={css.rating}>{camper.rating}</p>

                  <p>{`(${camper.totalReviews} Reviews)`}</p>
                </div>

                <div className="flex items-center gap-1">
                  <SvgIcon
                    name="location"
                    width={16}
                    height={16}
                    className={css.locationIcon}
                  />
                  <p className={css.location}>{camper.location}</p>
                </div>
              </div>
            </div>

            <p className={css.description}>
              The pictures shown here are example vehicles of the respective...
            </p>

            <div className="flex gap-2">
              <div className={`${css.characteristics}  w-auto h-12`}>
                <SvgIcon name="engine" width={20} height={20} />

                <p className={css.textCharacteristic}>
                  {camper.engine.charAt(0).toUpperCase() +
                    camper.engine.slice(1)}
                </p>
              </div>

              <div className={`${css.characteristics} h-12  w-auto`}>
                <SvgIcon name="transmission" width={20} height={20} />
                <p className={css.textCharacteristic}>
                  {camper.transmission.charAt(0).toUpperCase() +
                    camper.transmission.slice(1)}
                </p>
              </div>

              <div className={`${css.characteristics} h-12 w-auto`}>
                <SvgIcon name="form" width={20} height={20} />
                <p className={css.textCharacteristic}>
                  {camper.form
                    .split('_')
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(' ')}
                </p>
              </div>
            </div>

            <button className={css.button}>Show more</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CamperList;

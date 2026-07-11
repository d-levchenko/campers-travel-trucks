'use client';

import { getAllCampers } from '@/lib/api/campersApi';
import type { Camper } from '@/types/campers';
import Image from 'next/image';
import SvgIcon from '../SvgIcon/SvgIcon';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import CampersNotFound from '../CampersNotFound/CampersNotFound';
import Link from 'next/link';

import css from './CamperList.module.css';

const CamperList = () => {
  const searchParams = useSearchParams();

  const location = searchParams.get('location') || '';
  const form = searchParams.get('form') || '';
  const transmission = searchParams.get('transmission') || '';
  const engine = searchParams.get('engine') || '';

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ['campers', { location, form, transmission, engine }],

      queryFn: ({ pageParam = 1 }) =>
        getAllCampers({
          page: pageParam,
          perPage: 4,
          location,
          form,
          transmission,
          engine,
        }),

      initialPageParam: 1,
      getNextPageParam: lastPage => {
        return lastPage.page < lastPage.totalPages
          ? lastPage.page + 1
          : undefined;
      },
    });

  const campers = data?.pages.flatMap(page => page.campers) ?? [];

  return (
    <div className="flex flex-col flex-1">
      <ul className={css.list}>
        {campers.length > 0 ? (
          campers.map((camper: Camper) => (
            <li key={camper.id} className={css.item}>
              <Image
                src={camper.coverImage}
                alt={camper.name}
                width={219}
                height={240}
                className={css.image}
                loading="eager"
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
                      <p className={css.location}>
                        {camper.location.split(', ').reverse().join(', ')}
                      </p>
                    </div>
                  </div>
                </div>

                <p className={css.description}>
                  {camper.description.split('\n').join(' ')}
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
                        .map(
                          word => word.charAt(0).toUpperCase() + word.slice(1),
                        )
                        .join(' ')}
                    </p>
                  </div>
                </div>

                <Link
                  href={`/catalog/${camper.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={css.link}>
                  Show more
                </Link>
              </div>
            </li>
          ))
        ) : (
          <CampersNotFound />
        )}
      </ul>

      {hasNextPage && (
        <button
          className={css.loadBtn}
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}>
          {isFetchingNextPage ? 'Loading...' : 'Load more'}
        </button>
      )}
    </div>
  );
};

export default CamperList;
